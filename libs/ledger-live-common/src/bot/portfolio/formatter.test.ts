import "../../__tests__/test-helpers/environment";

import { finalMarkdownReport, formatDetails, urlToEndpoint } from "./formatter";
import { getSpecsPerBots } from "./logic";

test("finalMarkdownReport sample", () => {
  const reports = [
    {
      refillAddress: "SU26L3FCVKVC6BDCOGDDV6QYDS72MB7DCYSF6RVUV6CW45FQI7PC7HKXCQ",
      accountBalances: ["0"],
      accountOperationsLength: [0],
      auditResult: {
        cpuUserTime: 44.401,
        cpuSystemTime: 6.651,
        totalTime: 4680.03934,
        memoryEnd: {
          rss: 292892672,
          heapTotal: 225394688,
          heapUsed: 190287768,
          external: 23104751,
          arrayBuffers: 1401454,
        },
        memoryStart: {
          rss: 290099200,
          heapTotal: 225132544,
          heapUsed: 188992776,
          external: 23091522,
          arrayBuffers: 1388265,
        },
      },
    },
    {
      refillAddress: "bc1q4wwuhvp882637t80khxxph6mx5wyfzy7t0j82m",
      accountBalances: ["0", "0", "0", "0"],
      accountOperationsLength: [0, 0, 0, 0],
      auditResult: {
        cpuUserTime: 1144.091,
        cpuSystemTime: 133.14,
        totalTime: 30985.410585,
        memoryEnd: {
          rss: 236879872,
          heapTotal: 169857024,
          heapUsed: 158728224,
          external: 23746269,
          arrayBuffers: 2026392,
        },
        memoryStart: {
          rss: 281337856,
          heapTotal: 218398720,
          heapUsed: 181667408,
          external: 23223193,
          arrayBuffers: 1520402,
        },
      },
    },
    { error: "Error: scan accounts timeout for currency Bitcoin Testnet" },
    {
      refillAddress: "bitcoincash:qqmek2tjel8ec2s0fkun32ct7kpn7ehr5sxengcnu2",
      accountBalances: ["0", "0", "92000", "313350", "41919", "147057", "0"],
      accountOperationsLength: [22, 37, 30, 29, 29, 25, 0],
      auditResult: {
        cpuUserTime: 2674.879,
        cpuSystemTime: 414.701,
        totalTime: 550078.787431,
        memoryEnd: {
          rss: 233967616,
          heapTotal: 188268544,
          heapUsed: 161635008,
          external: 23241930,
          arrayBuffers: 1551369,
        },
        memoryStart: {
          rss: 291733504,
          heapTotal: 225656832,
          heapUsed: 189717752,
          external: 23143007,
          arrayBuffers: 1439750,
        },
      },
    },
    {
      refillAddress: "AQXzh2M3TsveC7MSoH94TTHM3q2HM6UAvt",
      accountBalances: ["0", "0"],
      accountOperationsLength: [0, 0],
      auditResult: {
        cpuUserTime: 1144.431,
        cpuSystemTime: 109.419,
        totalTime: 25126.455051,
        memoryEnd: {
          rss: 234827776,
          heapTotal: 170442752,
          heapUsed: 156067472,
          external: 22966341,
          arrayBuffers: 1281559,
        },
        memoryStart: {
          rss: 271126528,
          heapTotal: 212279296,
          heapUsed: 175008792,
          external: 22986740,
          arrayBuffers: 1284574,
        },
      },
    },
    {
      refillAddress: "Xkt8DxeCUnB911XsAch34Bwe6qqSBbjE3r",
      accountBalances: ["0"],
      accountOperationsLength: [0],
      auditResult: {
        cpuUserTime: 160.361,
        cpuSystemTime: 24.828,
        totalTime: 16668.099935,
        memoryEnd: {
          rss: 292671488,
          heapTotal: 226443264,
          heapUsed: 195423536,
          external: 23433925,
          arrayBuffers: 1606788,
        },
        memoryStart: {
          rss: 288182272,
          heapTotal: 225132544,
          heapUsed: 189677440,
          external: 23258655,
          arrayBuffers: 1431558,
        },
      },
    },
    {
      refillAddress: "dgb1qht909kw83mz0gaerewqnv88206wf94legzy7r4",
      accountBalances: ["0", "0", "0"],
      accountOperationsLength: [0, 0, 0],
      auditResult: {
        cpuUserTime: 509.808,
        cpuSystemTime: 72.169,
        totalTime: 21846.420587,
        memoryEnd: {
          rss: 241471488,
          heapTotal: 177520640,
          heapUsed: 164848120,
          external: 22963731,
          arrayBuffers: 1278949,
        },
        memoryStart: {
          rss: 278802432,
          heapTotal: 217874432,
          heapUsed: 182212688,
          external: 23847262,
          arrayBuffers: 2144471,
        },
      },
    },
    {
      refillAddress: "DRsm244B2Cm48SfPVbY91jGM6ybub2hTnQ",
      accountBalances: ["56025135", "0", "83359701", "368846021", "239665767", "0", "0"],
      accountOperationsLength: [54, 73, 40, 67, 49, 29, 0],
      auditResult: {
        cpuUserTime: 3342.896,
        cpuSystemTime: 1865.327,
        totalTime: 119877.097082,
        memoryEnd: {
          rss: 252313600,
          heapTotal: 185004032,
          heapUsed: 169942344,
          external: 23497246,
          arrayBuffers: 1631067,
        },
        memoryStart: {
          rss: 285900800,
          heapTotal: 224047104,
          heapUsed: 187634504,
          external: 24438434,
          arrayBuffers: 1730235,
        },
        totalNetworkTime: 422064.78241190314,
        totalNetworkCount: 1206,
        totalNetworkResponseSize: 10000000,
        accountsJSONSize: 846364,
        preloadJSONSize: 15,
      },
    },
    {
      refillAddress: "RWksZkxzcEYoBqC1DM6PrXyKurXRew9EP2",
      accountBalances: ["0"],
      accountOperationsLength: [0],
      auditResult: {
        cpuUserTime: 149.149,
        cpuSystemTime: 21.473,
        totalTime: 7005.876708,
        memoryEnd: {
          rss: 284192768,
          heapTotal: 220495872,
          heapUsed: 189445648,
          external: 23339713,
          arrayBuffers: 1636882,
        },
        memoryStart: {
          rss: 279822336,
          heapTotal: 219447296,
          heapUsed: 183359504,
          external: 23164290,
          arrayBuffers: 1461499,
        },
      },
    },
    {
      refillAddress: "ltc1qv29jhv9fgevexgezrds4jrll87sqdnmz2q7ah5",
      accountBalances: ["0", "0", "0"],
      accountOperationsLength: [0, 0, 0],
      auditResult: {
        cpuUserTime: 1159.434,
        cpuSystemTime: 170.463,
        totalTime: 123839.089279,
        memoryEnd: {
          rss: 190619648,
          heapTotal: 169918464,
          heapUsed: 160076520,
          external: 22994438,
          arrayBuffers: 1294206,
        },
        memoryStart: {
          rss: 279306240,
          heapTotal: 217702400,
          heapUsed: 181889336,
          external: 23186041,
          arrayBuffers: 1483106,
        },
      },
    },
    {
      refillAddress: "P9xs8oGpD87RUWTvGuHqrzCZu1J6vP6tr2",
      accountBalances: ["0"],
      accountOperationsLength: [0],
      auditResult: {
        cpuUserTime: 149.313,
        cpuSystemTime: 21.275,
        totalTime: 8387.327086,
        memoryEnd: {
          rss: 285937664,
          heapTotal: 220733440,
          heapUsed: 189691824,
          external: 23430270,
          arrayBuffers: 1709871,
        },
        memoryStart: {
          rss: 281387008,
          heapTotal: 219422720,
          heapUsed: 183860840,
          external: 23255097,
          arrayBuffers: 1534738,
        },
      },
    },
    {
      refillAddress: "D7jqj2UpQqWe4EZhwcWDBDcatGjeVFzakr",
      accountBalances: ["0"],
      accountOperationsLength: [0],
      auditResult: {
        cpuUserTime: 140.204,
        cpuSystemTime: 19.829,
        totalTime: 3476.732729,
        memoryEnd: {
          rss: 292941824,
          heapTotal: 226181120,
          heapUsed: 195146584,
          external: 23745053,
          arrayBuffers: 1983292,
        },
        memoryStart: {
          rss: 288325632,
          heapTotal: 225132544,
          heapUsed: 189377232,
          external: 23569784,
          arrayBuffers: 1808063,
        },
      },
    },
    {
      refillAddress: "MFd4ugE9STPXmTGQqqxsfSdhNP5rx1y7we",
      accountBalances: ["0", "0"],
      accountOperationsLength: [0, 0],
      auditResult: {
        cpuUserTime: 761.25,
        cpuSystemTime: 87.59,
        totalTime: 23124.285996,
        memoryEnd: {
          rss: 235008000,
          heapTotal: 169918464,
          heapUsed: 162792864,
          external: 22954661,
          arrayBuffers: 1269879,
        },
        memoryStart: {
          rss: 278241280,
          heapTotal: 217440256,
          heapUsed: 181555096,
          external: 23229618,
          arrayBuffers: 1526683,
        },
      },
    },
    {
      refillAddress: "3CGsK5NhQWmdsCu5Ryq3thu1ufNYwPoYA3",
      accountBalances: ["0", "0"],
      accountOperationsLength: [0, 0],
      auditResult: {
        cpuUserTime: 1061.281,
        cpuSystemTime: 110.623,
        totalTime: 30201.062023,
        memoryEnd: {
          rss: 234881024,
          heapTotal: 170442752,
          heapUsed: 157018744,
          external: 22966108,
          arrayBuffers: 1281326,
        },
        memoryStart: {
          rss: 272650240,
          heapTotal: 212721664,
          heapUsed: 175618536,
          external: 23438484,
          arrayBuffers: 1735549,
        },
      },
    },
    {
      refillAddress: "EZjc4W42JjgYyGt5YUGV4W2eGYD63vbYtw",
      accountBalances: ["0", "0"],
      accountOperationsLength: [0, 0],
      auditResult: {
        cpuUserTime: 199.138,
        cpuSystemTime: 28.11,
        totalTime: 13311.374191,
        memoryEnd: {
          rss: 281591808,
          heapTotal: 218226688,
          heapUsed: 189497584,
          external: 23375257,
          arrayBuffers: 1687114,
        },
        memoryStart: {
          rss: 277049344,
          heapTotal: 216653824,
          heapUsed: 180235544,
          external: 23182201,
          arrayBuffers: 1494098,
        },
      },
    },
    {
      refillAddress: "t1LkBfbXEmTwYtg6EYcLajMKND4H5ayZueq",
      accountBalances: ["0", "136254", "404457", "115768", "0"],
      accountOperationsLength: [40, 79, 88, 53, 0],
      auditResult: {
        cpuUserTime: 1842.757,
        cpuSystemTime: 233.954,
        totalTime: 317007.349902,
        memoryEnd: {
          rss: 242348032,
          heapTotal: 175423488,
          heapUsed: 169720912,
          external: 23601342,
          arrayBuffers: 1895674,
        },
        memoryStart: {
          rss: 280178688,
          heapTotal: 217350144,
          heapUsed: 181182624,
          external: 23159391,
          arrayBuffers: 1401736,
        },
      },
    },
    {
      refillAddress: "zneoegLhr8hh1JS6XaXrD7qGnnxqfcm4bRV",
      accountBalances: ["0"],
      accountOperationsLength: [0],
      auditResult: {
        cpuUserTime: 994.441,
        cpuSystemTime: 89.804,
        totalTime: 30957.134463,
        memoryEnd: {
          rss: 234844160,
          heapTotal: 169656320,
          heapUsed: 155575200,
          external: 22957195,
          arrayBuffers: 1272413,
        },
        memoryStart: {
          rss: 269496320,
          heapTotal: 210182144,
          heapUsed: 172645288,
          external: 22982708,
          arrayBuffers: 1262974,
        },
      },
    },
    {
      refillAddress: "DsZZvqfbnb2FtHmCzxXTMGXWqDNcrvGn4Ni",
      accountBalances: ["0"],
      accountOperationsLength: [0],
      auditResult: {
        cpuUserTime: 982.549,
        cpuSystemTime: 98.849,
        totalTime: 91407.75024,
        memoryEnd: {
          rss: 232747008,
          heapTotal: 168869888,
          heapUsed: 156879352,
          external: 22947623,
          arrayBuffers: 1262841,
        },
        memoryStart: {
          rss: 276471808,
          heapTotal: 216653824,
          heapUsed: 180091432,
          external: 23171504,
          arrayBuffers: 1468569,
        },
      },
    },
    {
      error:
        "DeviceVersionUnsupported: Device app version 6.0.1 unsupported, recommended version is 5.0.",
    },
    {
      refillAddress: "0x9De2c901184f274d9Ae65B6d4192Ced7Ff5e051C",
      accountBalances: ["0"],
      accountOperationsLength: [0],
      auditResult: {
        cpuUserTime: 110.192,
        cpuSystemTime: 16.053,
        totalTime: 8278.918004,
        memoryEnd: {
          rss: 291438592,
          heapTotal: 226111488,
          heapUsed: 195261088,
          external: 23674322,
          arrayBuffers: 1953457,
        },
        memoryStart: {
          rss: 287838208,
          heapTotal: 225062912,
          heapUsed: 189293304,
          external: 23530466,
          arrayBuffers: 1809641,
        },
      },
    },
    {
      refillAddress: "cosmos13lshcl9qcv63ryc03zpw8lngnvyah2l6ktv3m3",
      accountBalances: [
        "10930",
        "73371",
        "8392",
        "6557",
        "33399",
        "117588",
        "42543",
        "3064",
        "46660",
        "15643",
        "8554",
        "8921",
        "14045",
        "12359",
        "64123",
        "181881",
        "106054",
        "8204",
        "61390",
        "22241",
        "12986",
        "35637",
        "9731",
        "16206",
        "40410",
        "135528",
        "0",
      ],
      accountOperationsLength: [
        0, 12, 19, 16, 24, 23, 20, 18, 25, 13, 3, 15, 11, 2, 18, 21, 22, 12, 17, 7, 2, 9, 6, 4, 5,
        2, 0,
      ],
      auditResult: {
        cpuUserTime: 2047.971,
        cpuSystemTime: 326.026,
        totalTime: 170547.043891,
        memoryEnd: {
          rss: 234692608,
          heapTotal: 171110400,
          heapUsed: 161308944,
          external: 35013927,
          arrayBuffers: 4143113,
        },
        memoryStart: {
          rss: 269549568,
          heapTotal: 212221952,
          heapUsed: 174690792,
          external: 23437999,
          arrayBuffers: 1717496,
        },
      },
    },
    {
      refillAddress: "osmo13lshcl9qcv63ryc03zpw8lngnvyah2l67slpdr",
      accountBalances: ["0"],
      accountOperationsLength: [0],
      auditResult: {
        cpuUserTime: 75.928,
        cpuSystemTime: 14.706,
        totalTime: 7353.52219,
        memoryEnd: {
          rss: 277557248,
          heapTotal: 214249472,
          heapUsed: 179453464,
          external: 24231481,
          arrayBuffers: 2528506,
        },
        memoryStart: {
          rss: 274354176,
          heapTotal: 213245952,
          heapUsed: 176770272,
          external: 23300778,
          arrayBuffers: 1597843,
        },
      },
    },
    {
      refillAddress: "cro1nqy7500hrvxeu4wmffq4zr8gwgnff2evevhg40",
      accountBalances: ["0"],
      accountOperationsLength: [0],
      auditResult: {
        cpuUserTime: 86.298,
        cpuSystemTime: 13.767,
        totalTime: 10771.348785,
        memoryEnd: {
          rss: 274825216,
          heapTotal: 214228992,
          heapUsed: 179271400,
          external: 24329857,
          arrayBuffers: 1905586,
        },
        memoryStart: {
          rss: 271675392,
          heapTotal: 213704704,
          heapUsed: 176179528,
          external: 24149895,
          arrayBuffers: 1725664,
        },
      },
    },
    {
      refillAddress: "erd15ts9dn2j7j3zkdpp0hjpx2nmmkush7y0lr6lnjdkmueurxdua8zsph6d3v",
      accountBalances: [
        "31635339032611",
        "40129839335192",
        "81300263056539",
        "90395311167",
        "46844163264491",
        "0",
      ],
      accountOperationsLength: [7, 15, 8, 2, 1, 0],
      auditResult: {
        cpuUserTime: 938.762,
        cpuSystemTime: 111.883,
        totalTime: 24096.99766,
        memoryEnd: {
          rss: 233455616,
          heapTotal: 169656320,
          heapUsed: 156797808,
          external: 22957367,
          arrayBuffers: 1272585,
        },
        memoryStart: {
          rss: 279138304,
          heapTotal: 218136576,
          heapUsed: 181721456,
          external: 23206809,
          arrayBuffers: 1504018,
        },
      },
    },
    {
      refillAddress: "0x932E8214E25AceC996aD7d195339AF5139625065",
      accountBalances: ["0"],
      accountOperationsLength: [0],
      auditResult: {
        cpuUserTime: 909.091,
        cpuSystemTime: 103.819,
        totalTime: 38050.673514,
        memoryEnd: {
          rss: 233041920,
          heapTotal: 168607744,
          heapUsed: 157959856,
          external: 23081708,
          arrayBuffers: 1310389,
        },
        memoryStart: {
          rss: 280031232,
          heapTotal: 218923008,
          heapUsed: 184305976,
          external: 23187770,
          arrayBuffers: 1484979,
        },
      },
    },
    {
      refillAddress: "0x932E8214E25AceC996aD7d195339AF5139625065",
      accountBalances: ["0"],
      accountOperationsLength: [0],
      auditResult: {
        cpuUserTime: 169.849,
        cpuSystemTime: 31.158,
        totalTime: 11201.196977,
        memoryEnd: {
          rss: 274984960,
          heapTotal: 214024192,
          heapUsed: 180385392,
          external: 23162828,
          arrayBuffers: 1443198,
        },
        memoryStart: {
          rss: 271351808,
          heapTotal: 213237760,
          heapUsed: 175361032,
          external: 22984335,
          arrayBuffers: 1264745,
        },
      },
    },
    {
      refillAddress: "0x932E8214E25AceC996aD7d195339AF5139625065",
      accountBalances: [
        "4560986845156121",
        "10552057161947421",
        "6046123191397369",
        "5281854070860089",
        "0",
      ],
      accountOperationsLength: [13, 14, 16, 7, 0],
      auditResult: {
        cpuUserTime: 1680.559,
        cpuSystemTime: 227.887,
        totalTime: 102454.120288,
        memoryEnd: {
          rss: 242888704,
          heapTotal: 177258496,
          heapUsed: 167402752,
          external: 26860865,
          arrayBuffers: 5171815,
        },
        memoryStart: {
          rss: 271220736,
          heapTotal: 210182144,
          heapUsed: 172605968,
          external: 22965140,
          arrayBuffers: 1262974,
        },
      },
    },
    {
      refillAddress: "0x6999fB16d0bEccB7908A0C133441eC6A50c1deD2",
      accountBalances: ["0"],
      accountOperationsLength: [0],
      auditResult: {
        cpuUserTime: 996.965,
        cpuSystemTime: 112.129,
        totalTime: 31222.910938,
        memoryEnd: {
          rss: 233197568,
          heapTotal: 169918464,
          heapUsed: 156091376,
          external: 23017987,
          arrayBuffers: 1304300,
        },
        memoryStart: {
          rss: 270471168,
          heapTotal: 212279296,
          heapUsed: 175208064,
          external: 23762943,
          arrayBuffers: 1282169,
        },
      },
    },
    {
      refillAddress: "0x932E8214E25AceC996aD7d195339AF5139625065",
      accountBalances: ["0"],
      accountOperationsLength: [0],
      auditResult: {
        cpuUserTime: 171.783,
        cpuSystemTime: 32.007,
        totalTime: 15919.939315,
        memoryEnd: {
          rss: 272515072,
          heapTotal: 211230720,
          heapUsed: 177524728,
          external: 23120296,
          arrayBuffers: 1418090,
        },
        memoryStart: {
          rss: 268845056,
          heapTotal: 210182144,
          heapUsed: 172554544,
          external: 22965140,
          arrayBuffers: 1262974,
        },
      },
    },
    {
      refillAddress: "0x932E8214E25AceC996aD7d195339AF5139625065",
      accountBalances: ["0"],
      accountOperationsLength: [0],
      auditResult: {
        cpuUserTime: 89.187,
        cpuSystemTime: 14.605,
        totalTime: 1783.171137,
        memoryEnd: {
          rss: 290852864,
          heapTotal: 225849344,
          heapUsed: 191633072,
          external: 23568943,
          arrayBuffers: 1865646,
        },
        memoryStart: {
          rss: 287481856,
          heapTotal: 225325056,
          heapUsed: 189457208,
          external: 23512941,
          arrayBuffers: 1809684,
        },
      },
    },
    {
      refillAddress: "0x932E8214E25AceC996aD7d195339AF5139625065",
      accountBalances: ["0"],
      accountOperationsLength: [0],
      auditResult: {
        cpuUserTime: 73.671,
        cpuSystemTime: 13.147,
        totalTime: 1088.637242,
        memoryEnd: {
          rss: 283996160,
          heapTotal: 220233728,
          heapUsed: 186021168,
          external: 23226119,
          arrayBuffers: 1505720,
        },
        memoryStart: {
          rss: 280629248,
          heapTotal: 219185152,
          heapUsed: 183452904,
          external: 23181038,
          arrayBuffers: 1460679,
        },
      },
    },
    {
      refillAddress: "0x932E8214E25AceC996aD7d195339AF5139625065",
      accountBalances: ["0"],
      accountOperationsLength: [0],
      auditResult: {
        cpuUserTime: 84.879,
        cpuSystemTime: 13.855,
        totalTime: 1195.591688,
        memoryEnd: {
          rss: 275247104,
          heapTotal: 214990848,
          heapUsed: 179682376,
          external: 23237307,
          arrayBuffers: 1534476,
        },
        memoryStart: {
          rss: 272220160,
          heapTotal: 213942272,
          heapUsed: 176949520,
          external: 23181303,
          arrayBuffers: 1478512,
        },
      },
    },
    {
      refillAddress: "0x932E8214E25AceC996aD7d195339AF5139625065",
      accountBalances: ["0"],
      accountOperationsLength: [0],
      auditResult: {
        cpuUserTime: 74.221,
        cpuSystemTime: 12.634,
        totalTime: 932.025082,
        memoryEnd: {
          rss: 285016064,
          heapTotal: 219447296,
          heapUsed: 184541928,
          external: 23290036,
          arrayBuffers: 1587205,
        },
        memoryStart: {
          rss: 281591808,
          heapTotal: 218660864,
          heapUsed: 182227936,
          external: 23212403,
          arrayBuffers: 1509612,
        },
      },
    },
    {
      refillAddress: "0x932E8214E25AceC996aD7d195339AF5139625065",
      accountBalances: ["0"],
      accountOperationsLength: [0],
      auditResult: {
        cpuUserTime: 76.35,
        cpuSystemTime: 12.765,
        totalTime: 977.713499,
        memoryEnd: {
          rss: 289275904,
          heapTotal: 225918976,
          heapUsed: 191703304,
          external: 23207281,
          arrayBuffers: 1507008,
        },
        memoryStart: {
          rss: 286408704,
          heapTotal: 225132544,
          heapUsed: 189254848,
          external: 23149473,
          arrayBuffers: 1449240,
        },
      },
    },
    { error: "LedgerAPI5xx: API HTTP 503" },
    {
      accountBalances: [],
      accountOperationsLength: [],
      auditResult: {
        cpuUserTime: 35.394,
        cpuSystemTime: 5.472,
        totalTime: 693.302938,
        memoryEnd: {
          rss: 290377728,
          heapTotal: 225325056,
          heapUsed: 190250536,
          external: 23545306,
          arrayBuffers: 1824441,
        },
        memoryStart: {
          rss: 287875072,
          heapTotal: 225062912,
          heapUsed: 189441456,
          external: 23537080,
          arrayBuffers: 1816255,
        },
      },
    },
    {
      refillAddress: "4fa92eaaac5210f1fec2228388f803dbf39428725dadfa025c0df125fcc6788f",
      accountBalances: ["0", "0"],
      accountOperationsLength: [0, 0],
      auditResult: {
        cpuUserTime: 443.315,
        cpuSystemTime: 105.853,
        totalTime: 14537.649463,
        memoryEnd: {
          rss: 269500416,
          heapTotal: 205619200,
          heapUsed: 175318472,
          external: 24465895,
          arrayBuffers: 2433479,
        },
        memoryStart: {
          rss: 272396288,
          heapTotal: 213237760,
          heapUsed: 175255000,
          external: 22984292,
          arrayBuffers: 1264702,
        },
      },
    },
    {
      error: "Error: no app found for Polkadot. Are you sure your COINAPPS is up to date?",
    },
    {
      refillAddress: "rnmiQggEzwTHNqwJFpqYGgqt1rM7K5qPhw",
      accountBalances: ["0"],
      accountOperationsLength: [0],
      auditResult: {
        cpuUserTime: 37.411,
        cpuSystemTime: 5.95,
        totalTime: 533.120443,
        memoryEnd: {
          rss: 282501120,
          heapTotal: 218136576,
          heapUsed: 183043248,
          external: 23846773,
          arrayBuffers: 2143942,
        },
        memoryStart: {
          rss: 280043520,
          heapTotal: 217874432,
          heapUsed: 182044624,
          external: 23837466,
          arrayBuffers: 2134675,
        },
      },
    },
    {
      refillAddress: "8J1jPhJ1beLUJ9BLLZbRLFQtX1UWKrxiVbrvRtiPeEc9",
      accountBalances: ["0"],
      accountOperationsLength: [0],
      auditResult: {
        cpuUserTime: 367.977,
        cpuSystemTime: 48.786,
        totalTime: 21953.10031,
        memoryEnd: {
          rss: 301744128,
          heapTotal: 232878080,
          heapUsed: 203825240,
          external: 33846887,
          arrayBuffers: 12143590,
        },
        memoryStart: {
          rss: 286920704,
          heapTotal: 224870400,
          heapUsed: 189166208,
          external: 23155714,
          arrayBuffers: 1452457,
        },
      },
    },
    {
      error: "TypeError: Cannot read properties of undefined (reading 'length')",
    },
    {
      refillAddress: "tz1TGUYUhWujaab8LfmrA55rfDzn5zvyBJUe",
      accountBalances: ["20250", "0", "0", "186216", "0"],
      accountOperationsLength: [7, 6, 6, 29, 0],
      auditResult: {
        cpuUserTime: 149.227,
        cpuSystemTime: 26.986,
        totalTime: 14006.863089,
        memoryEnd: {
          rss: 277901312,
          heapTotal: 215683072,
          heapUsed: 184066360,
          external: 23641740,
          arrayBuffers: 1938765,
        },
        memoryStart: {
          rss: 274087936,
          heapTotal: 214458368,
          heapUsed: 178429320,
          external: 23180789,
          arrayBuffers: 1477854,
        },
      },
    },
    {
      refillAddress: "THG6XGRn2B4vjPUA46KGv5f4dvv6LTXfr9",
      accountBalances: ["0", "3174275", "1823349", "99", "1000099", "7519642", "2888220", "0"],
      accountOperationsLength: [18, 33, 17, 60, 18, 41, 18, 0],
      auditResult: {
        cpuUserTime: 4199.108,
        cpuSystemTime: 938.739,
        totalTime: 174645.430518,
        memoryEnd: {
          rss: 250261504,
          heapTotal: 182136832,
          heapUsed: 164476592,
          external: 29333202,
          arrayBuffers: 3950902,
        },
        memoryStart: {
          rss: 287854592,
          heapTotal: 224608256,
          heapUsed: 189145032,
          external: 23147522,
          arrayBuffers: 1444265,
        },
      },
    },
  ];
  expect(
    finalMarkdownReport(
      Array(2).fill(reports).flat(),
      getSpecsPerBots({
        SEED1: "",
        SEED2: "",
      }),
    ),
  ).toBeTruthy();
});

describe("urlToEndpoint", () => {
  it("should transform simple urls to endpoint correctly", () => {
    const url = "http://www.google.fr/";
    expect(urlToEndpoint(url)).toEqual("/");
  });

  it("should manage endpoint without parameters correctly", () => {
    const url = "http://mydomain.com/endpoint/sub";
    expect(urlToEndpoint(url)).toEqual("/endpoint/sub");
  });

  it("should manage endpoint with parameters correctly", () => {
    const url = "http://mydomain.com/endpoint?animal=cat&weight=slim";
    expect(urlToEndpoint(url)).toEqual("/endpoint?animal=cat&weight=slim");
  });
});

describe("formatDetails", () => {
  it("should only show duplicated calls", () => {
    expect(
      formatDetails({
        endpoint: {
          urls: [
            { url: "endpoint/toto", calls: 2 },
            { url: "endpoint/test", calls: 1 },
          ],
          size: 10,
          duration: 10,
          calls: 3,
        },
      })?.includes("toto"),
    ).toEqual(true);
  });

  it("should not return not duplicated urls", () => {
    expect(
      formatDetails({
        endpoint: {
          urls: [
            { url: "endpoint/toto", calls: 1 },
            { url: "endpoint/test", calls: 2 },
          ],
          size: 10,
          duration: 10,
          calls: 3,
        },
      })?.includes("toto"),
    ).toEqual(false);
  });

  it("should not return endpoints if there are no duplicated calls", () => {
    expect(
      formatDetails({
        endpoint: {
          urls: [{ url: "endpoint/toto", calls: 1 }],
          size: 10,
          duration: 10,
          calls: 1,
        },
      })?.includes("toto"),
    ).toEqual(false);
  });
});
