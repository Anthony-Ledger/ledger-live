import invariant from "invariant";
import expect from "expect";
import type {
  AppSpec,
  TransactionArg,
  TransactionRes,
  TransactionTestInput,
} from "../../bot/types";
import type { Transaction } from "./types";
import { pickSiblings, botTest, SpeculosButton } from "../../bot/specs";
import { DeviceModelId } from "@ledgerhq/devices";
import { getCryptoCurrencyById } from "@ledgerhq/cryptoassets/currencies";
import deviceAction from "../vechain/speculos-deviceActions";
import BigNumber from "bignumber.js";

const prepareVeChainApp = async transport => {
  // enter app vechain
  await transport.button(SpeculosButton.BOTH);
  // enable contract data
  await transport.button(SpeculosButton.RIGHT);
  await transport.button(SpeculosButton.BOTH);
  await transport.button(SpeculosButton.BOTH);
  await transport.button(SpeculosButton.RIGHT);
  await transport.button(SpeculosButton.BOTH);
  // enable multi-clause
  await transport.button(SpeculosButton.RIGHT);
  await transport.button(SpeculosButton.BOTH);
  await transport.button(SpeculosButton.RIGHT);
  await transport.button(SpeculosButton.BOTH);
  await transport.button(SpeculosButton.RIGHT);
  await transport.button(SpeculosButton.BOTH);
};

const vechainTest = {
  currency: getCryptoCurrencyById("vechain"),
  appQuery: {
    model: DeviceModelId.nanoSP,
    appName: "VeChain",
  },
  allowEmptyAccounts: true,
  testTimeout: 60 * 1000, // 1 minute
  genericDeviceAction: deviceAction.acceptTransaction,
  onSpeculosDeviceCreated: async ({ transport }) => await prepareVeChainApp(transport),
};

const vet: AppSpec<Transaction> = {
  name: "VeChain VET",
  ...vechainTest,
  mutations: [
    {
      name: "move ~50% VET",
      maxRun: 1,
      transaction: ({
        account,
        siblings,
        bridge,
        maxSpendable,
      }: TransactionArg<Transaction>): TransactionRes<Transaction> => {
        if (!account.subAccounts?.[0]) throw new Error("no VTHO account");
        invariant(account.balance.gt(0), "Vechain: VET balance is empty");
        // 0.21 VTHO is the usual fee for a VET transaction
        invariant(account.subAccounts[0].balance.gt(0.21), "Vechain: VTHO balance is not enough");
        const sibling = pickSiblings(siblings, 2);
        const recipient = sibling.freshAddress;
        const transaction = bridge.createTransaction(account);
        const amount = maxSpendable.div(2).integerValue();
        const updates = [{ amount }, { recipient }];
        return {
          transaction,
          updates,
        };
      },
      test: ({
        account,
        accountBeforeTransaction,
        operation,
      }: TransactionTestInput<Transaction>): void | undefined => {
        botTest("account balance decreased with operation value", () =>
          expect(account.balance.toString()).toBe(
            accountBeforeTransaction.balance.minus(operation.value).toString(),
          ),
        );
      },
    },
    {
      name: "move all VET",
      maxRun: 1,
      transaction: ({
        account,
        siblings,
        bridge,
        maxSpendable,
      }: TransactionArg<Transaction>): TransactionRes<Transaction> => {
        if (!account.subAccounts?.[0]) throw new Error("no VTHO account");
        invariant(account.balance.gt(0), "Vechain: VET balance is empty");
        // 0.21 VTHO is the usual fee for a VET transaction
        invariant(account.subAccounts?.[0].balance.gt(0.21), "Vechain: VTHO balance is not enough");
        const sibling = pickSiblings(siblings, 4);
        const recipient = sibling.freshAddress;
        const transaction = bridge.createTransaction(account);
        transaction.useAllAmount = true;
        const amount = maxSpendable.integerValue();
        const updates = [{ amount }, { recipient }];
        return {
          transaction,
          updates,
        };
      },
      test: ({ account }: TransactionTestInput<Transaction>): void | undefined => {
        botTest("account balance decreased with operation value", () =>
          expect(account.balance.toString()).toBe(new BigNumber(0).toString()),
        );
      },
    },
  ],
};

const vtho: AppSpec<Transaction> = {
  name: "VeChain VTHO",
  ...vechainTest,
  skipOperationHistory: true,
  mutations: [
    {
      name: "move ~50% VTHO",
      maxRun: 1,
      transaction: ({
        account,
        siblings,
        bridge,
      }: TransactionArg<Transaction>): TransactionRes<Transaction> => {
        if (!account.subAccounts?.[0]) throw new Error("no VTHO account");
        // 0.51 VTHO is the usual fee for a VTHO transaction
        invariant(account.subAccounts?.[0].balance.gt(0.51), "Vechain: VTHO balance is not enough");
        const sibling = pickSiblings(siblings, 2);
        const recipient = sibling.freshAddress;
        const tokenAccount = account.subAccounts[0];
        const transaction = bridge.createTransaction(tokenAccount);
        transaction.subAccountId = account.subAccounts[0].id;
        const amount = tokenAccount.balance.div(2).integerValue();
        const updates = [{ amount }, { recipient }, { subAccountId: account.subAccounts[0].id }];
        return {
          transaction,
          updates,
        };
      },
      test: ({
        account,
        accountBeforeTransaction,
      }: TransactionTestInput<Transaction>): void | undefined => {
        botTest("account balance decreased with operation value", () =>
          expect(account?.subAccounts?.[0].balance.toString()).toBe(
            new BigNumber(accountBeforeTransaction?.subAccounts?.[0].balance || 0)
              .div(2)
              .toString(),
          ),
        );
      },
    },
    {
      name: "move all VTHO",
      maxRun: 1,
      transaction: ({
        account,
        siblings,
        bridge,
      }: TransactionArg<Transaction>): TransactionRes<Transaction> => {
        if (!account.subAccounts?.[0]) throw new Error("no VTHO account");
        // 0.51 VTHO is the usual fee for a VTHO transaction
        invariant(account.subAccounts?.[0].balance.gt(0.51), "Vechain: VTHO balance is not enough");
        const sibling = pickSiblings(siblings, 4);
        const recipient = sibling.freshAddress;
        if (
          !account.subAccounts ||
          !account.subAccounts[0] ||
          !(account.subAccounts[0].type == "TokenAccount")
        )
          throw new Error("no VTHO account");
        const transaction = bridge.createTransaction(account);
        transaction.useAllAmount = true;
        transaction.subAccountId = account.subAccounts[0].id;
        const amount = account.subAccounts[0].spendableBalance.integerValue();
        const updates = [{ amount }, { recipient }, { subAccountId: account.subAccounts[0].id }];
        return {
          transaction,
          updates,
        };
      },
      test: ({ account }: TransactionTestInput<Transaction>): void | undefined => {
        botTest("account balance decreased with operation value", () =>
          expect(account?.subAccounts?.[0].balance.toString()).toBe(new BigNumber(0).toString()),
        );
      },
    },
  ],
};

export default { vet, vtho };
