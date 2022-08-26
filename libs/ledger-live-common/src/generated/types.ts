import { AlgorandAccount } from "../families/algorand/types";
import { AlgorandAccountRaw } from "../families/algorand/types";
import { Transaction as algorandTransaction } from "../families/algorand/types";
import { TransactionRaw as algorandTransactionRaw } from "../families/algorand/types";
import { TransactionStatus as algorandTransactionStatus } from "../families/algorand/types";
import { TransactionStatusRaw as algorandTransactionStatusRaw } from "../families/algorand/types";
import { BitcoinAccount } from "../families/bitcoin/types";
import { BitcoinAccountRaw } from "../families/bitcoin/types";
import { Transaction as bitcoinTransaction } from "../families/bitcoin/types";
import { TransactionRaw as bitcoinTransactionRaw } from "../families/bitcoin/types";
import { TransactionStatus as bitcoinTransactionStatus } from "../families/bitcoin/types";
import { TransactionStatusRaw as bitcoinTransactionStatusRaw } from "../families/bitcoin/types";
import { CardanoAccount } from "../families/cardano/types";
import { CardanoAccountRaw } from "../families/cardano/types";
import { Transaction as cardanoTransaction } from "../families/cardano/types";
import { TransactionRaw as cardanoTransactionRaw } from "../families/cardano/types";
import { TransactionStatus as cardanoTransactionStatus } from "../families/cardano/types";
import { TransactionStatusRaw as cardanoTransactionStatusRaw } from "../families/cardano/types";
import { CeloAccount } from "../families/celo/types";
import { CeloAccountRaw } from "../families/celo/types";
import { Transaction as celoTransaction } from "../families/celo/types";
import { TransactionRaw as celoTransactionRaw } from "../families/celo/types";
import { TransactionStatus as celoTransactionStatus } from "../families/celo/types";
import { TransactionStatusRaw as celoTransactionStatusRaw } from "../families/celo/types";
import { CosmosAccount } from "../families/cosmos/types";
import { CosmosAccountRaw } from "../families/cosmos/types";
import { Transaction as cosmosTransaction } from "../families/cosmos/types";
import { TransactionRaw as cosmosTransactionRaw } from "../families/cosmos/types";
import { TransactionStatus as cosmosTransactionStatus } from "../families/cosmos/types";
import { TransactionStatusRaw as cosmosTransactionStatusRaw } from "../families/cosmos/types";
import { CryptoOrgAccount } from "../families/crypto_org/types";
import { CryptoOrgAccountRaw } from "../families/crypto_org/types";
import { Transaction as crypto_orgTransaction } from "../families/crypto_org/types";
import { TransactionRaw as crypto_orgTransactionRaw } from "../families/crypto_org/types";
import { TransactionStatus as crypto_orgTransactionStatus } from "../families/crypto_org/types";
import { TransactionStatusRaw as crypto_orgTransactionStatusRaw } from "../families/crypto_org/types";
import { ElrondAccount } from "../families/elrond/types";
import { ElrondAccountRaw } from "../families/elrond/types";
import { Transaction as elrondTransaction } from "../families/elrond/types";
import { TransactionRaw as elrondTransactionRaw } from "../families/elrond/types";
import { TransactionStatus as elrondTransactionStatus } from "../families/elrond/types";
import { TransactionStatusRaw as elrondTransactionStatusRaw } from "../families/elrond/types";
import { EthereumAccount } from "../families/ethereum/types";
import { EthereumAccountRaw } from "../families/ethereum/types";
import { Transaction as ethereumTransaction } from "../families/ethereum/types";
import { TransactionRaw as ethereumTransactionRaw } from "../families/ethereum/types";
import { TransactionStatus as ethereumTransactionStatus } from "../families/ethereum/types";
import { TransactionStatusRaw as ethereumTransactionStatusRaw } from "../families/ethereum/types";
import { FilecoinAccount } from "../families/filecoin/types";
import { FilecoinAccountRaw } from "../families/filecoin/types";
import { Transaction as filecoinTransaction } from "../families/filecoin/types";
import { TransactionRaw as filecoinTransactionRaw } from "../families/filecoin/types";
import { TransactionStatus as filecoinTransactionStatus } from "../families/filecoin/types";
import { TransactionStatusRaw as filecoinTransactionStatusRaw } from "../families/filecoin/types";
import { HederaAccount } from "../families/hedera/types";
import { HederaAccountRaw } from "../families/hedera/types";
import { Transaction as hederaTransaction } from "../families/hedera/types";
import { TransactionRaw as hederaTransactionRaw } from "../families/hedera/types";
import { TransactionStatus as hederaTransactionStatus } from "../families/hedera/types";
import { TransactionStatusRaw as hederaTransactionStatusRaw } from "../families/hedera/types";
import { NeoAccount } from "../families/neo/types";
import { NeoAccountRaw } from "../families/neo/types";
import { Transaction as neoTransaction } from "../families/neo/types";
import { TransactionRaw as neoTransactionRaw } from "../families/neo/types";
import { TransactionStatus as neoTransactionStatus } from "../families/neo/types";
import { TransactionStatusRaw as neoTransactionStatusRaw } from "../families/neo/types";
import { OsmosisAccount } from "../families/osmosis/types";
import { OsmosisAccountRaw } from "../families/osmosis/types";
import { Transaction as osmosisTransaction } from "../families/osmosis/types";
import { TransactionRaw as osmosisTransactionRaw } from "../families/osmosis/types";
import { TransactionStatus as osmosisTransactionStatus } from "../families/osmosis/types";
import { TransactionStatusRaw as osmosisTransactionStatusRaw } from "../families/osmosis/types";
import { PolkadotAccount } from "../families/polkadot/types";
import { PolkadotAccountRaw } from "../families/polkadot/types";
import { Transaction as polkadotTransaction } from "../families/polkadot/types";
import { TransactionRaw as polkadotTransactionRaw } from "../families/polkadot/types";
import { TransactionStatus as polkadotTransactionStatus } from "../families/polkadot/types";
import { TransactionStatusRaw as polkadotTransactionStatusRaw } from "../families/polkadot/types";
import { RippleAccount } from "../families/ripple/types";
import { RippleAccountRaw } from "../families/ripple/types";
import { Transaction as rippleTransaction } from "../families/ripple/types";
import { TransactionRaw as rippleTransactionRaw } from "../families/ripple/types";
import { TransactionStatus as rippleTransactionStatus } from "../families/ripple/types";
import { TransactionStatusRaw as rippleTransactionStatusRaw } from "../families/ripple/types";
import { SolanaAccount } from "../families/solana/types";
import { SolanaAccountRaw } from "../families/solana/types";
import { Transaction as solanaTransaction } from "../families/solana/types";
import { TransactionRaw as solanaTransactionRaw } from "../families/solana/types";
import { TransactionStatus as solanaTransactionStatus } from "../families/solana/types";
import { TransactionStatusRaw as solanaTransactionStatusRaw } from "../families/solana/types";
import { StellarAccount } from "../families/stellar/types";
import { StellarAccountRaw } from "../families/stellar/types";
import { Transaction as stellarTransaction } from "../families/stellar/types";
import { TransactionRaw as stellarTransactionRaw } from "../families/stellar/types";
import { TransactionStatus as stellarTransactionStatus } from "../families/stellar/types";
import { TransactionStatusRaw as stellarTransactionStatusRaw } from "../families/stellar/types";
import { TezosAccount } from "../families/tezos/types";
import { TezosAccountRaw } from "../families/tezos/types";
import { Transaction as tezosTransaction } from "../families/tezos/types";
import { TransactionRaw as tezosTransactionRaw } from "../families/tezos/types";
import { TransactionStatus as tezosTransactionStatus } from "../families/tezos/types";
import { TransactionStatusRaw as tezosTransactionStatusRaw } from "../families/tezos/types";
import { TronAccount } from "../families/tron/types";
import { TronAccountRaw } from "../families/tron/types";
import { Transaction as tronTransaction } from "../families/tron/types";
import { TransactionRaw as tronTransactionRaw } from "../families/tron/types";
import { TransactionStatus as tronTransactionStatus } from "../families/tron/types";
import { TransactionStatusRaw as tronTransactionStatusRaw } from "../families/tron/types";

export type CoinAccount =
  | AlgorandAccount
  | BitcoinAccount
  | CardanoAccount
  | CeloAccount
  | CosmosAccount
  | CryptoOrgAccount
  | ElrondAccount
  | EthereumAccount
  | FilecoinAccount
  | HederaAccount
  | NeoAccount
  | OsmosisAccount
  | PolkadotAccount
  | RippleAccount
  | SolanaAccount
  | StellarAccount
  | TezosAccount
  | TronAccount;

export type CoinAccountRaw =
  | AlgorandAccountRaw
  | BitcoinAccountRaw
  | CardanoAccountRaw
  | CeloAccountRaw
  | CosmosAccountRaw
  | CryptoOrgAccountRaw
  | ElrondAccountRaw
  | EthereumAccountRaw
  | FilecoinAccountRaw
  | HederaAccountRaw
  | NeoAccountRaw
  | OsmosisAccountRaw
  | PolkadotAccountRaw
  | RippleAccountRaw
  | SolanaAccountRaw
  | StellarAccountRaw
  | TezosAccountRaw
  | TronAccountRaw;

export type Transaction =
  | algorandTransaction
  | bitcoinTransaction
  | cardanoTransaction
  | celoTransaction
  | cosmosTransaction
  | crypto_orgTransaction
  | elrondTransaction
  | ethereumTransaction
  | evmTransaction
  | filecoinTransaction
  | hederaTransaction
  | neoTransaction
  | osmosisTransaction
  | polkadotTransaction
  | rippleTransaction
  | solanaTransaction
  | stellarTransaction
  | tezosTransaction
  | tronTransaction;

export type TransactionRaw =
  | algorandTransactionRaw
  | bitcoinTransactionRaw
  | cardanoTransactionRaw
  | celoTransactionRaw
  | cosmosTransactionRaw
  | crypto_orgTransactionRaw
  | elrondTransactionRaw
  | ethereumTransactionRaw
  | evmTransactionRaw
  | filecoinTransactionRaw
  | hederaTransactionRaw
  | neoTransactionRaw
  | osmosisTransactionRaw
  | polkadotTransactionRaw
  | rippleTransactionRaw
  | solanaTransactionRaw
  | stellarTransactionRaw
  | tezosTransactionRaw
  | tronTransactionRaw;

export type TransactionStatus =
  | algorandTransactionStatus
  | bitcoinTransactionStatus
  | cardanoTransactionStatus
  | celoTransactionStatus
  | cosmosTransactionStatus
  | crypto_orgTransactionStatus
  | elrondTransactionStatus
  | ethereumTransactionStatus
  | evmTransactionStatus
  | filecoinTransactionStatus
  | hederaTransactionStatus
  | neoTransactionStatus
  | osmosisTransactionStatus
  | polkadotTransactionStatus
  | rippleTransactionStatus
  | solanaTransactionStatus
  | stellarTransactionStatus
  | tezosTransactionStatus
  | tronTransactionStatus;

export type TransactionStatusRaw =
  | algorandTransactionStatusRaw
  | bitcoinTransactionStatusRaw
  | cardanoTransactionStatusRaw
  | celoTransactionStatusRaw
  | cosmosTransactionStatusRaw
  | crypto_orgTransactionStatusRaw
  | elrondTransactionStatusRaw
  | ethereumTransactionStatusRaw
  | evmTransactionStatusRaw
  | filecoinTransactionStatusRaw
  | hederaTransactionStatusRaw
  | neoTransactionStatusRaw
  | osmosisTransactionStatusRaw
  | polkadotTransactionStatusRaw
  | rippleTransactionStatusRaw
  | solanaTransactionStatusRaw
  | stellarTransactionStatusRaw
  | tezosTransactionStatusRaw
  | tronTransactionStatusRaw;
