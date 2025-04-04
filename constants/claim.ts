import {
  S,
  stS,
  VAULT_SWAPX_ICHI_USDC_SCUSD_SCUSD,
  VAULT_SWAPX_ICHI_WS_STS_STS,
  wOS,
} from "@/constants";
import { ClaimData } from "@/types";

export const preview = {
  prices: {
    "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794": 0.558064,
    "0xe5da20f15420ad15de0fa650600afc998bbe3955": 0.57392338,
    "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38": 0.56552329,
    "0xf462864b174d7a084881a6f1e61553318e3d6471": 0.00058068,
    "0xf58653cce3e68f769a75924dd83dd3bd24c04104": 0.00058008,
    "0xfe4812f9e6c7a098cba5c43b8f2c4d9f87a4d6a7": 0.00058505,
    "0x9f0df7799f6fdad409300080cff680f5a23df4b1": 0.57584458,
    "0xd50190c922f252da3a8106f527f41dffe1b16067": 0.00057813,
    "0x02d742f182d2a588c54e7dc998ad19f9d795bc51": 0.57515225,
    "0x6047828dc181963ba44974801ff68e538da5eaf9": 0.9998,
    "0x6de36c1af417a438a69d4aaa3655022e52bbc606": 1017984113.8825183,
    "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae": 0.99998773,
    "0xe10a0f4f7831fc7049f271686005f9a8d274fcee": 1011692100.3639505,
    "0x29219dd400f2bf60e5a23d13be72b486d4038894": 0.99998773,
    "0xc36f478888dddfa1a50f27442c610ac5dba8c22a": 1021550008.5191482,
    "0x037bb13fb35da590d1144b082f4b08ff7c8c531c": 1.01366705,
    "0xb8330f4027b6cb4402c5d02d535c87579cab2477": 1005202443.9542027,
  },
  preview: {
    "0xe7661cd7988c3a3f7b417ae10cbb7aff525ad921": {
      positions: [
        {
          address: "0xfe4812f9e6c7a098cba5c43b8f2c4d9f87a4d6a7",
          collateral: "29463550202488028",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "9197084382816",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "72379389834",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "9084525495675",
        },
      ],
    },
    "0x6808610782f2783815a8bba72c5a7f77ee7ed821": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "686",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "135814619963252",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "40979733479130",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "322503086992",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "40478201362673",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "157",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "14",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "258",
        },
      ],
    },
    "0x615b12d8de9d8c649de8b5813e23ba11b3f15aff": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "6851158844299001462784",
          debt: "63485456149618676989952",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "77559461435789221837144064",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "6941017941954132967424",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "54624555191136313344",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "6856070014692203954176",
        },
      ],
    },
    "0xd064eea34f0697aac62735d0dbf91548a26320f2": {
      positions: [
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "25",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "0",
        },
      ],
    },
    "0xa2d30b5c2c84f8c0e47a0dfebb3eda04a6a2ca28": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "1756181325069441826816",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "2368464393381222023168",
          debt: "1",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "468812760973390053376",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "177020249379430563840",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1393117329913295360",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "174853779937350582272",
        },
      ],
    },
    "0x5db60d88755ebb70d05073d6b41f0f8d0122823a": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "4907303509366581231616",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "0",
          debt: "1875303371781477761024",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "6216798676760479745966080",
          debt: "0",
        },
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "1661455460334875453685760",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "370048479370178330624",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2912214570513200128",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "365519626171439054848",
        },
      ],
    },
    "0x9527af7611080d4c2e8e7a1ec011ebbc3311cf06": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "25",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "5",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "9",
        },
      ],
    },
    "0x003f35595dce3187b4fff2b5a2c4303f7158208a": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "15479721806345074114560",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "4740118295017642000384",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "37303873233586462720",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "4682106166608601808896",
        },
      ],
    },
    "0x8eb0c55e0c1536182db91f699fc85c923283fd0e": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "340",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "10000000000000000000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "3017328582903575085056",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "23745829946696110080",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "2980400885679719448576",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "78",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "7",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "128",
        },
      ],
    },
    "0x664fe2accb8096bd612639eb1e05a81121a9ea9a": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "72177105244300574720",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "0",
          debt: "984922478",
        },
        {
          address: "0x6de36c1af417a438a69d4aaa3655022e52bbc606",
          collateral: "1435451578897",
          debt: "0",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "93307845070196605714432",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "0",
          debt: "123407948",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "6806914999888335872",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "53569189303679104",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "6723608296876723200",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "81134776",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "7528798",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "133133101",
        },
      ],
    },
    "0x621bfb2f8642bbb09d2208c71feecb8d45c1cccc": {
      positions: [
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "1978",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "0",
        },
      ],
    },
    "0xd7e55bdaf3e52c747f6ef0104cf9742a52074518": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "825",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "74",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "206",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "19",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "339",
        },
      ],
    },
    "0xc53539fd4d109840dbfe8c759ba7fc2e7200709b": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "860898745220525195264",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "263619846882833268736",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2074640491633149184",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "260393524783527624704",
        },
      ],
    },
    "0x47c21a209ce31e847c088f8c95035f11d63273c9": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "25998028",
          debt: "2250102546",
        },
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "2615800749527",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "103006099",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "9558320",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "169021497",
        },
      ],
    },
    "0xc55c268c64a17e067752460d2657812f0a3fdfa4": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "0",
          debt: "173504830386698059776",
        },
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "202379370775700215693312",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "10073654570326427648",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "79277838590101536",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "9950367743688292352",
        },
      ],
    },
    "0x84d0f74d21a89f86b67e9a38d8559d0b4e10f12d": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "114397857100386",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "35030304945795",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "275682161013",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "34601585149739",
        },
      ],
    },
    "0x6545100189c47bf5baa3be08b69cb94ac7c6f158": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "500000135859424985088",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "150866470138431340544",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1187291819944285440",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "149020084775540981760",
        },
      ],
    },
    "0xb7e29a95195ba0687c7cace649fbf67780903026": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "325763585",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "74884333",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "6948796",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "122876823",
        },
      ],
    },
    "0x99b6a44fa3d3e0d3f33464ffac5710f31c3db580": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "111",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "234914203385260",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "20",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "70881334040436",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "557823272564",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "70013849982817",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "30",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "2",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "49",
        },
      ],
    },
    "0x92b356d71ff33bb6384f65666c3f363cd66cbec8": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "383617398731",
          debt: "227197769141",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "287794973787",
          debt: "287796159451",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "35956416058",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "3336529928",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "59000460486",
        },
      ],
    },
    "0x1aecfa80d1057d09f78d0d5d9c77e10183719ccd": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "2160823516009519",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "2520358743578660352",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "119180786766703",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "937931225492",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "117722187914209",
        },
      ],
    },
    "0xe5497610d65b3111ea9452355c8c614ea3eac92a": {
      positions: [
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "6069809303725250969600",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1872288047026019584",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "14734568130173184",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1849373974455942400",
        },
      ],
    },
    "0x8205602937272c25d60bc14da75315f2d1810f82": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "2967808021328",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "20227158058455",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "7011984644790",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "55183050300",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "6926168188681",
        },
      ],
    },
    "0x345183a7f823bfe41ba7a52bc04265e264a6ddd9": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "8025535049331694895104",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "7782009965",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "2457536769107132153856",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "19340369669257146368",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "2427460106512185163776",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "1788875919",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "165996467",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "2935345469",
        },
      ],
    },
    "0x7f1569669247110a6bfaf0bfc55d4969da2f5407": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "439958526",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "3725109731440473407488",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1123988006712759812096",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "8845582221556828160",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1110232034283932614656",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "101134696",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "9384665",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "165950734",
        },
      ],
    },
    "0x46fbaf5ab4572ca79ada3aeceb70e8b0a5d454bc": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "10225400462177",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "3168030143",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "24931823",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "3129258079",
        },
      ],
    },
    "0xfa4e2b20c0e9cf36349adbb37819dac52f33aa1c": {
      positions: [
        {
          address: "0xe10a0f4f7831fc7049f271686005f9a8d274fcee",
          collateral: "6369282343",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "0",
          debt: "5476090",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "26",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "222463",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "20643",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "365038",
        },
      ],
    },
    "0x76e7db1a3dc0f5f4fc4d5c055c361db861e500f4": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "0",
          debt: "1081781418",
        },
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "1259262082976",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "47039780",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "4364996",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "77187023",
        },
      ],
    },
    "0xcd44aa80d4ed8ff6f98ce0256ea056965752d61f": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "291490403643643",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "87952232655606",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "692168155601",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "86875825718665",
        },
      ],
    },
    "0xb114907e24336c5492e036a9655448a252611e9a": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "670070550899886653440",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "338719017060568662016",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2665657371360061440",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "334573590746428866560",
        },
      ],
    },
    "0xc2d5904602e2d76d3d04ec28a5a1c52e136c4475": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "38466233940690289557504",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "47915739816",
          debt: "0",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "50750884090327733421211648",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "0",
          debt: "90692680000",
        },
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "118619630057118",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "3944695795452669329408",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "31044042097704693760",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "3896418477297774886912",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "18022161790",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "1672343597",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "29572353453",
        },
      ],
    },
    "0xf8057d4dcf947fe27027602aa6efa3de24029517": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "1",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "4627906132125802",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1433816326643",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "11283875034",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1416268507859",
        },
      ],
    },
    "0x254bb212e0d498f5da2890ac99d7347f497c4141": {
      positions: [
        {
          address: "0x6de36c1af417a438a69d4aaa3655022e52bbc606",
          collateral: "9",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "0",
        },
      ],
    },
    "0x41a6ac7f4e4dbffeb934f95f1db58b68c76dc4df": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "1590328875222744",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "486982071825620",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "3832460783416",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "481022122152351",
        },
      ],
    },
    "0x4f8382f3d38108128e98b621f7370179dd99e1b6": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "44",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "10",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "16",
        },
      ],
    },
    "0xf8f981c2a021d7e62625da627251e7079f0920cd": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "0",
          debt: "1932740584919543578624",
        },
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "2391437193815511214850048",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "154489275506591858688",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1215802642626889728",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "152598552294488014848",
        },
      ],
    },
    "0x4eb62e5e90a2a7e3dd081ffc31ef6f4c4e5964b1": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "38535269619701397848064",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "11627357047342080458752",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "91505195933951426560",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "11485055170446482210816",
        },
      ],
    },
    "0xe76bb79907d6c4dfae4e8aca95d082415ef2b112": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "10300000000000001048576",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "3107848440390681624576",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "24458204845096992768",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "3069812912250110345216",
        },
      ],
    },
    "0x20a1e9b0f535ddbfe442d415119bdb3d58dae037": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "793794462",
          debt: "268573",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "4",
          debt: "634766754",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "3209386059327057",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "968377229037979",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "7620953559807",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "956525705370650",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "36494479",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "3386458",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "59883361",
        },
      ],
    },
    "0xe97178f627268f4cead069237db9f50f66d17d97": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "247214753165052304081027072",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "76591991962556063285248",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "602765117039854485504",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "75654617788264596111360",
        },
      ],
    },
    "0xd47b727c775e7cb52944f8c896c694b6ef10b575": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "24",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "578365902852442",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "174511997005350",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1373377837610",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "172376224910836",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "5",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "9",
        },
      ],
    },
    "0x7e1e1c5ac70038a9718431c92a618f01f8dada18": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "400000000000000000000",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "120000000000000000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "158693821082773061632",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1248891655477805824",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "156751640370521276416",
        },
      ],
    },
    "0xdb2b56dbd6392ffb3b0a7c121f00d2d1ce6a2d67": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "35407869303312",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "73018578321783",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "32874514252427",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "258716478358",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "32472178187480",
        },
      ],
    },
    "0xd835c990a15a2c258bf10f61145fffa0d21b9083": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "500000000000000000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "150866429145178734592",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1187291497334805504",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "149020044283985952768",
        },
      ],
    },
    "0xe3743e1fed8bc243961cbd29a6cf1aa48361b0a9": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "101170536392738045952",
          debt: "87643423403591630848",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "104225869258612098990080",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "36433424659777617920",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "286724459261350272",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "35987532726665797632",
        },
      ],
    },
    "0xcdc1a0cd70fe094c492485657acd2aac05c024ef": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "2343924831183592226816",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "707239138930768871424",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "5565844044912396288",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "698583564282626441216",
        },
      ],
    },
    "0x525f4e3fa19b2d7e257a19f8f96157a1e2e7a77c": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "1380000000000000000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "416391344440693358592",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "3276924532644063232",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "411295322223801270272",
        },
      ],
    },
    "0xba4f674e9817f6d9d67e98f5cc809a9242b9770a": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "57684",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "13260",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "1230",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "21758",
        },
      ],
    },
    "0xe4115971fdb6b93c1ac5243b3fa02bde1c09325e": {
      positions: [
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "317121369182058219307008",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "97818979026522750976",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "769817664103396864",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "96621817517264109568",
        },
      ],
    },
    "0xf41e4dfdfe5c64e9834d826696d00a4d15aeeee3": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "770078784302353",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "232358072696312",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1828615985760",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "229514349077789",
        },
      ],
    },
    "0xeb7ee2ed9861dbda9e5b2174c5610b6d1f8b3a0a": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "15141276",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "3479920",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "322914",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "5710161",
        },
      ],
    },
    "0x9a1abc22708c1e1b662043ee396c027aea6a7144": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "500000000000000000000",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "48",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "150866429145178734592",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1187291497334805504",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "149020044283985952768",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "11",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "1",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "18",
        },
      ],
    },
    "0xe19763baa197e17a5663f8941177bfbbd31a7ab0": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "4385402807042",
          debt: "2616336178018734047232",
        },
        {
          address: "0xfe4812f9e6c7a098cba5c43b8f2c4d9f87a4d6a7",
          collateral: "1744334135225266552700928",
          debt: "0",
        },
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "6035722753682",
          debt: "1390762607886152237056",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "3068656523084315186167808",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "3860879476999",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "266768108205883195392",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2099416738551860224",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "263503255983747039232",
        },
      ],
    },
    "0x1f375d2169c0ca936764805907cc0b7c46674a3e": {
      positions: [
        {
          address: "0x6de36c1af417a438a69d4aaa3655022e52bbc606",
          collateral: "25884044295",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "0",
          debt: "19320000",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "1615978",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "149952",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "2651640",
        },
      ],
    },
    "0xeed2a75957c32e3392736d001438c2ec339513bb": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "265650952599327296",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "12008473435347",
          debt: "0",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "578244820199412989952",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "97809014240296080",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "769739243038971",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "96611974685474464",
        },
      ],
    },
    "0x64739640e38f55e6bf1e72a3b10405395f71fb45": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "70000000000000000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "21121300080325025792",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "166220809626872768",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "20862806199758036992",
        },
      ],
    },
    "0xd3149ad82ae27e5f8e4b746ac456d5465d4eaa30": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "766658948898",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "4",
          debt: "0",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "116130081556062519296",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "491773265",
          debt: "350000000",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "35979617704703572",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "283153080643564",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "35539279706264300",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "32589882",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "3024136",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "53476354",
        },
      ],
    },
    "0x4abe666901147c4a98c3c36162c2d26940200c85": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "204952",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "42303",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "1528346954648598272",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "461152495085484864",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "3629186688463648",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "455508661726058304",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "56837",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "5274",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "93263",
        },
      ],
    },
    "0xa8cc3f0f9630864b4482ff3e1dbda71a0aaec577": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "496264212885618",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "149739219421191",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1178420560781",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "147906629961544",
        },
      ],
    },
    "0xbd17a4ea3182a3f46a5a9c0005bd1b9e9464da57": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "1111654028",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "255539523",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "23712465",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "419311801",
        },
      ],
    },
    "0xaa0e96e52a32fc7f2d1c2289356b5ab51badce62": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "0",
          debt: "1170186142",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "60000000000000000000",
          debt: "0",
        },
        {
          address: "0xb8330f4027b6cb4402c5d02d535c87579cab2477",
          collateral: "1369621797542",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "18103971497421447168",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "142474979680176640",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "17882405314078314496",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "47486739",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "4406471",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "77920433",
        },
      ],
    },
    "0x708442168862a6f9fadb3ff1ecafa2ed37dc883f": {
      positions: [
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "3123235051565037056",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "1000000000000000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1261314797138022144",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "9926319212231492",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1245878145261062656",
        },
      ],
    },
    "0x764e4b82d1b0732410f390e5fece4944572b7cec": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "18541143703771",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "5594472285711",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "44027484540",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "5526004111623",
        },
      ],
    },
    "0x36c388bceba5f14d4e91fa3da2ac6f20bc96c455": {
      positions: [
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "1169870682534052102144",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "1227081186",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "359430769446745407488",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2828655114743698432",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "355031861517966114816",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "282073139",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "26174618",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "462850499",
        },
      ],
    },
    "0x8aa912cd934b13cb61fb4d6764841d37d04655da": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "143949551630",
          debt: "112823050454",
        },
        {
          address: "0x6de36c1af417a438a69d4aaa3655022e52bbc606",
          collateral: "4656847804",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "100583553368",
          debt: "40459457864",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "100000000000000",
          debt: "1000000000",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "30172984096177",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "237455924883",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "29803710816708",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "19663757382",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "1824673374",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "32266028365",
        },
      ],
    },
    "0x11dc37934f42771760afeaefc04e0d5540c527cd": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "95000021264242606080",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "28664627953704660992",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "225585434987321920",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "28313814751554080768",
        },
      ],
    },
    "0x9021374a2f3c8173d3515fd968ef4456c7b9e026": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "8215000000000000262144",
          debt: "0",
        },
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "986808643035970273280",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "101943269146380889751552",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "33578374539459235414016",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "264255731450097172480",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "33167424252079811592192",
        },
      ],
    },
    "0x532666776beb6a63626cfe6407e8961812fd7634": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "82005836434700943360",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "24743855423933853696",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "194729664661498464",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "24441026754088886272",
        },
      ],
    },
    "0x5e8bb171efb4ef1da79479c794d5b8ec550233f1": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "0",
          debt: "1056000000000000000000",
        },
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "1301458772940427874009088",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "82816931742338564096",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "651754266672638464",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "81803373392174776320",
        },
      ],
    },
    "0xec631226c9f8f6fbf024d6fdc13c2b93d3cdd3fa": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "63785816",
          debt: "51028615",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "2932539",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "272121",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "4811969",
        },
      ],
    },
    "0x64758ef549b0e7714c2c69ae6097810d3c970d69": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "310104316248942444544",
          debt: "160464173284371169280",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "45151348051677814784",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "355332938803600384",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "44598761462484803584",
        },
      ],
    },
    "0x38d4e297ccf13cec8befffda3bdb3ecb65bf92a2": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "1",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "7137070287588451",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "2211204724250",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "17401781051",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "2184142806294",
        },
      ],
    },
    "0xacadd458df075ef4b6f423a83d5153a98de4ef4a": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "10880563579964476096512",
          debt: "0",
        },
        {
          address: "0x037bb13fb35da590d1144b082f4b08ff7c8c531c",
          collateral: "4437930114644563968",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "10000000000000000000",
          debt: "0",
        },
        {
          address: "0xb8330f4027b6cb4402c5d02d535c87579cab2477",
          collateral: "14977808298",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "15000000",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "9807013806423961600",
          debt: "0",
        },
        {
          address: "0xf58653cce3e68f769a75924dd83dd3bd24c04104",
          collateral: "20639621066671215607808",
          debt: "0",
        },
        {
          address: "0xe10a0f4f7831fc7049f271686005f9a8d274fcee",
          collateral: "23976569793",
          debt: "0",
        },
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "14739784624",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "15000000",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "15656741",
          debt: "0",
        },
        {
          address: "0x02d742f182d2a588c54e7dc998ad19f9d795bc51",
          collateral: "4953278982612035584",
          debt: "0",
        },
        {
          address: "0xfe4812f9e6c7a098cba5c43b8f2c4d9f87a4d6a7",
          collateral: "29194254427375592800256",
          debt: "0",
        },
        {
          address: "0x6de36c1af417a438a69d4aaa3655022e52bbc606",
          collateral: "14777334357",
          debt: "0",
        },
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "45380983890740240384",
          debt: "0",
        },
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "20740176346982874349568",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "46752722366320836608",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "367935464883119296",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "46180537293168115712",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "27485155",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "2550450",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "45100069",
        },
      ],
    },
    "0xd29c86394159ed163c3531e580b4625221651d69": {
      positions: [
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "236000000000000000000",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "239006314235368472576",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "144624638014804541440",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1138169730622201344",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "142854643565416087552",
        },
      ],
    },
    "0x38ae3287806b402316683545bd6b4e6e76e7256f": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "1399406237",
          debt: "1000000000",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "930000000000000000000",
          debt: "500000000000000000000",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "129745129064853716992",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1021070687707932672",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "128157238084227923968",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "91812809",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "8519652",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "150654560",
        },
      ],
    },
    "0xb5085a8c27b365facd1abe57c4208d6a1a128c7b": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "1064855482480115843072",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "501823523",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "321301888394883039232",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2528587720477986816",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "317369622310464192512",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "115334147",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "10702285",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "189250447",
        },
      ],
    },
    "0x74a5b346f2cccf06e2127eb6680389e7d8953c80": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "1500000017",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "64",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "344809893",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "31996195",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "565794500",
        },
      ],
    },
    "0x39bbe14f5fbb3276d06760c95a071ebab6529192": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "138040000000000000000",
          debt: "0",
        },
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "4",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "42269876528144703488",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "332656279330132864",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "41752554944090038272",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "0",
        },
      ],
    },
    "0x4936f33b7b060c7336fd0e4c61316ea248da6827": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "111252562",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "25569186",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "2372660",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "41956178",
        },
      ],
    },
    "0x951eec364bb7c74edcdb8f5c5adcc24f3aa24378": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "111038886985403744",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "34001738935784052",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "267587532639260",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "33585607286211784",
        },
      ],
    },
    "0x29f3192aa5874dfc8a47d06ec5f5054b0b19c3f8": {
      positions: [
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "10",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "0",
        },
      ],
    },
    "0x685dcbc1aff2c2fb41d0747aa125b28e93150d54": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "4967171085221",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "4",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "1445814534039739039744",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "436249753434572587008",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "3433206617947089920",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "430910693280470597632",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1",
        },
      ],
    },
    "0x2497c9397e85b1129a57eff9d910913d99fa730b": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "18299638246406",
          debt: "0",
        },
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "433404362543799140352",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "133693050635671680",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1052140116074042",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "132056842858109440",
        },
      ],
    },
    "0xdc43d0c0497fbf3bb3cf43dcaface9c116d5dd21": {
      positions: [
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "982476449274771668992",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "2000000110",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "2674842021982125",
          debt: "0",
        },
      ],
      claim: [],
    },
    "0x7824f6bf5638f5fd2f110e7c84eaca04f2cdeb32": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "3893603852655393",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "899278629218679",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1463620628241196",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "11518429494757",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1445708048313202",
        },
      ],
    },
    "0xc86b634dfdaafb241998476754c9cefab16fd25f": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "596740230871196631040",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "502522816",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "193480572",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "1308892558503299776512",
          debt: "600283499028119945216",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "396541264847519744000",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "3120707998217342976",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "391688178628132012032",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "159992560",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "14846306",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "262529912",
        },
      ],
    },
    "0x38b5bce574236dd97354924bea4340c8f4279d73": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "3473818",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "0",
          debt: "2778805",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "159764",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "14825",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "262156",
        },
      ],
    },
    "0x94bb26991e1d2c25feb6553ce968525ca4d405de": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "48216312673986",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "14548445839343",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "114493636141",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "14370394099775",
        },
      ],
    },
    "0x70fe796b4a10dc23665e2748eccbc936addb0e8f": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "730",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "167",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "15",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "275",
        },
      ],
    },
    "0xf17ac82cb2c92853100f150591973857b1b48d7f": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "171827972335853",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "2399638131257095",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "776665922385799",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "6112220267578",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "767160665255881",
        },
      ],
    },
    "0x1ad1aa2c5ca943cddb16ff07212474b120da2a8f": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "98571560031828393984",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "51648262",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "30184060212489068544",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "237543091915059936",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "29814651377525252096",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "11872553",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "1101698",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "19481534",
        },
      ],
    },
    "0xedfcfda55e53ed0f6eceb2a7e57f042d87dca0cf": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "4339315565038886",
        },
        {
          address: "0xfe4812f9e6c7a098cba5c43b8f2c4d9f87a4d6a7",
          collateral: "392715114065801756278784",
          debt: "0",
        },
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "0",
          debt: "400005017652866842624",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "172141922320506748928",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "51628624638010540032",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "406307933442322624",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "50996765638788816896",
        },
      ],
    },
    "0x2fef6742d30c81c518d7742d5c7ae6723f64a79c": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "6427654864",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1968242375",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "15489711",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1944153961",
        },
      ],
    },
    "0xa01827ed961bf2d9e065a06690a929db62f8cf6b": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "516600462708452163584",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "613235659551855769288704",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "31801813255370489856",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "250274515622001984",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "31412605484722642944",
        },
      ],
    },
    "0x39b946e35b3dc215455cc95b446edd8368928d10": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "371824749",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "105917432",
          debt: "279118632",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "45665715",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "4237491",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "74932335",
        },
      ],
    },
    "0xe5f4e281edbd60d331cc3d1569d1742ed8211d20": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "1000000000000000000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "301732858290357469184",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2374582994669611008",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "298040088567971905536",
        },
      ],
    },
    "0xfc47da77d3dae0c9395516805e81cc7c689b21bd": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "1810135683088142041088",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "2",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "554290146503366017024",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "4362163151396768256",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "547506444250910031872",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "0",
        },
      ],
    },
    "0x401de670e7a0226108f41168075131f5cea703db": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "4218563167045500272640",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1291786034462419845120",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "10166122336051132416",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1275976459121861591040",
        },
      ],
    },
    "0x90563ee0904868142dfe8ed0f61c7b9664b52550": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "2000000000000000000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "612429390439650951168",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "4819708480587262976",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "604934148711823310848",
        },
      ],
    },
    "0xc3782928fac37b518c1bb63914d3069c9c107813": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "135058321270357688320",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "40751533312802406400",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "320707192977216384",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "40252794033259012096",
        },
      ],
    },
    "0xe863d5789202914cd57316980972eb7889fad206": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "300000000",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "851929462577824923648",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "257055111805375250432",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2022977214495323648",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "253909132480359661568",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "68961974",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "6399238",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "113158894",
        },
      ],
    },
    "0xed4363757b2c00479f378de27848725dbfd17d18": {
      positions: [
        {
          address: "0xe10a0f4f7831fc7049f271686005f9a8d274fcee",
          collateral: "7461325",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "2",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "1735",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "161",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "2848",
        },
      ],
    },
    "0x455743dee598d3cf6f75a1cf96de53a837c946c5": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "11067476363875",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "0",
          debt: "2040941885654795026432",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "2441627898192651331043328",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "140645111643301756928",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1106851578193749888",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "138923820787474153472",
        },
      ],
    },
    "0x28e8469dfd89e9f09abf3bcdcfb9f802c3f022f4": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "2",
          debt: "406917",
        },
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "469079766",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "16615",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "1541",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "27263",
        },
      ],
    },
    "0x2993cde4b5bf342c13a5ed8fa4b21f7dfbec7e68": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "626351305332625",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "18467654353526912",
          debt: "0",
        },
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "9853277327655355958689792",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "3039338651362446016512",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "23919045202635038720",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "3002141583030474506240",
        },
      ],
    },
    "0x29217632b0d8582c2aa3e960a061c59b325cead5": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "10000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "2298732",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "213307",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "3771963",
        },
      ],
    },
    "0x411302f9007efb73027ba5e560dcfa2bfbec94bd": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "99596789497093652480",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "30498000540725653504",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "240013745489203392",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "30124749534427508736",
        },
      ],
    },
    "0x54585b45313ab38e2cdeb2a131c5e4bb0836a6c9": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "0",
          debt: "285681520697577865216",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "332027459195139843424256",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "16669134315910156288",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "131183070702674112",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "16465128445124493312",
        },
      ],
    },
    "0x6396600894f8756555f22b9f4cdf9ad89cfbb03a": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "40000000000000000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "12069314331614300160",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "94983319786784448",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "11921603542718877696",
        },
      ],
    },
    "0x77379352cdacce06b22f6760be771b9e6ff1f93b": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "679128635183948928",
          debt: "509113047438024576",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "51299289244492848",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "403716123490231",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "50671460829731112",
        },
      ],
    },
    "0x4facccdaeeae6932cfb2c955b91e1d5d405136d9": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "123108656283710",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "37145926740769",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "292331721707",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "36691314822280",
        },
      ],
    },
    "0x3d6991085ab1ae3926cb96f25684c40a364b6856": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "1000000000000000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "301732858290357504",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2374582994669611",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "298040088567971904",
        },
      ],
    },
    "0x5146b43ae9fd7c28ae40c79f321465a069ea4263": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "601628160493083295744",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "7",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "2",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "4347344290879",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "184227385112790368256",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1449836183967444224",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "181972710850154659840",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "2",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "3",
        },
      ],
    },
    "0xefe150ec0d2d4a42afb5e48566bf253343fb70d9": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "1859001295800841535488",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "2171376141134046951374848",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "103481513023331450880",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "814380781994326784",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "102215050363996274688",
        },
      ],
    },
    "0xd5fdc7790ca6a881e5067bc0d73406de1e2dc59e": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "49115385800682291200",
          debt: "171501148553731997696",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "106168297840146808832",
          debt: "0",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "92443883820236727648256",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "23199078025705160704",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "182572546072664128",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "22915155176181940224",
        },
      ],
    },
    "0xe005fb7e43d08f407c2289397216f5aaa091cf48": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "60",
          debt: "0",
        },
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "5428613",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "1288",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "119",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "2114",
        },
      ],
    },
    "0x38e3e3b0754b397e4761252f19b062016de45886": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "10000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "2298732",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "213307",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "3771963",
        },
      ],
    },
    "0x8b1624c8b184edb4e7430194865490ba5e860f0c": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "29994624414321463296",
          debt: "8639991400705286144",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "6443394456940041216",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "50708348411543248",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "6364536714714703872",
        },
      ],
    },
    "0x041988e6fc485e1baa3cc04816796a9ef8c2ac47": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "10000000000000000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "3017328582903575040",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "23745829946696112",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "2980400885679719424",
        },
      ],
    },
    "0x5f5f90e8359131dacaec572f5128220362be1e71": {
      positions: [
        {
          address: "0x6de36c1af417a438a69d4aaa3655022e52bbc606",
          collateral: "6278879779002",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "0",
          debt: "5380000000",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "232603752",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "21584169",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "381676763",
        },
      ],
    },
    "0x2adba52075a0518b1d685266aabb8370c2c50f63": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "30",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "6",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "11",
        },
      ],
    },
    "0xc50965e638cf07fb735d48d40c53c8e64c2add7c": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "177352012159",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "40768483363",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "3783059598",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "66896525166",
        },
      ],
    },
    "0x3d5fbab3ec6a8b1929e534d62a90c4c7d7d5bbcc": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "42129534237784612864",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "12900682486376415232",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "101526036724520960",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "12742796964879923200",
        },
      ],
    },
    "0x0fc587968c33acda9a16c5fa6e66258ff8aa2f61": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "1450832591",
          debt: "1050557142",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "450000015",
          debt: "300000000",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "451315466469765939200",
          debt: "180660071551036981248",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "81665625920533577728",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "642693698189601536",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "80666157872977395712",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "126493609",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "11737813",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "207561876",
        },
      ],
    },
    "0x075267ffca613e8a86cb8eca03655281a0e2137b": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "500000000000000000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "150866429145178734592",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1187291497334805504",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "149020044283985952768",
        },
      ],
    },
    "0x4ad8c6d982ea20c6b105c480c866fef79dde36db": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "674350426396345",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "504350608134856",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "358675160863326",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2822708611923",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "354285500480587",
        },
      ],
    },
    "0xce090f2e691cb9fa2bc95ab2065acb755cafa798": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "2515959285836436",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "185",
          debt: "0",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "7610896954596168564736",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "16971",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "99593323123619",
          debt: "1654557686360653",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "2358306783267340288",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "18559447636862088",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "2329444550845288960",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "3943",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "365",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "6471",
        },
      ],
    },
    "0x4098d59472f5d42fc4a7217540a3c97ef101c049": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "82",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "18",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "1",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "30",
        },
      ],
    },
    "0xaa65c6b430fd87b19b99f6b61178d96a1b3de313": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "12231587929370551910400",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "3745491969846700146688",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "29476344037118025728",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "3699652615723794563072",
        },
      ],
    },
    "0xa31525843f7b1087c1d3c155d9daf3664fb91ad6": {
      positions: [
        {
          address: "0x6de36c1af417a438a69d4aaa3655022e52bbc606",
          collateral: "11566",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "2",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "4",
        },
      ],
    },
    "0x70cd98a000a1e5ad585b5535178894f729505d1a": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "200000000000000000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "60346571658071490560",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "474916598933922176",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "59608017713594376192",
        },
      ],
    },
    "0x3e64485e40962d2298d64c18a33cc8825b6cce2f": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "7430085386109",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "2241900900892",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "17643354406",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "2214463306543",
        },
      ],
    },
    "0x2a988889e5533e1b6715843d5863f0e90cae021e": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "450898415365718605824",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "136050867666891128832",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1070695709450910336",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "134385803650756984832",
        },
      ],
    },
    "0x993ead125edc8ccb472a9ff6832ffedc75d34bdf": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "2593105057",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "596085486",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "55312995",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "978109667",
        },
      ],
    },
    "0x34c92c648e1755e09448481c95e62bd1cd32f7d3": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "147302106192585",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "22",
          debt: "0",
        },
      ],
      claim: [],
    },
    "0x31e40209cfcdda86baabfe93a428cc9143a9ed30": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "495965412633112346624",
          debt: "200000000000000000000",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "90628958625058373632",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "713233504614160000",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "89519792469677654016",
        },
      ],
    },
    "0x524fb57fdebe36acd8927144fcde603dd30e7a3a": {
      positions: [
        {
          address: "0x6de36c1af417a438a69d4aaa3655022e52bbc606",
          collateral: "33017090106555",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "0",
          debt: "40378513893",
        },
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "49535060340668",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "0",
          debt: "27150133107",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "3836790915",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "356030136",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "6295745116",
        },
      ],
    },
    "0xe5eb3c754b60f62612b661f05225ecc72aca8a3e": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "50000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "11493662",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "1066539",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "18859815",
        },
      ],
    },
    "0xd210ae3ea4bb169163f4e9876109a2c204ad3a87": {
      positions: [
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "2439843672242603815862272",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "752592036350845779968",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "5922763140773927936",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "743381408443458519040",
        },
      ],
    },
    "0x05a9b863da79557856529fb2ffeaddb01b66bf17": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "0",
          debt: "262800161520202",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "213875422193697670823936",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "66262732320459751424",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "521475712787944896",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "65451773205758148608",
        },
      ],
    },
    "0x99e3327611c4d5abfeaa9c64c151817a9554fb5d": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "307620202",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "494363607",
          debt: "1334917433",
        },
        {
          address: "0xb8330f4027b6cb4402c5d02d535c87579cab2477",
          collateral: "1579418261448",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "242452132",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "22498037",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "397836855",
        },
      ],
    },
    "0xb12728628ca10cf6a582c7162877a4233288dee9": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "2486740280910205681664",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "4599389873",
          debt: "2173315640",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "2716646435",
          debt: "1935413490",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "2178859852590700036096",
          debt: "1696783008324601511936",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "906934841345787166720",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "7137413086978702336",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "895835282811544141824",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "737274123",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "68414415",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1209784443",
        },
      ],
    },
    "0x2a156b05ae6ab6ea14b4b5f14dc6fba08c320de2": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "107971752872341700608",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "32578625608791769088",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "256387888275332256",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "32179910788911890432",
        },
      ],
    },
    "0x529407c4e9584701253d93dda4686a630ada00e5": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "155374305808183",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "9",
          debt: "0",
        },
      ],
      claim: [],
    },
    "0x62697908463961138442151ccfa55ed8b5ebcbbd": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "999000000000000000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "301431125432067096576",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2372208411674940928",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "297742048479403900928",
        },
      ],
    },
    "0xe9805ecab212eabf696cf458d2c4840a619ee6de": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "38422711211531",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "11593394477120",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "91237916652",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "11451508252506",
        },
      ],
    },
    "0x1297ad486549a430d59d9d5f99ed7c216b6e77dd": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "20930007686294213230592",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "20000000000000000000000",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "970",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "12443733090414335361024",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "97929927665586618368",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "12291439962479591948288",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "222",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "20",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "365",
        },
      ],
    },
    "0xd0f54ca35479bd757a2ad4a34da98e2187f5224e": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "11638120477",
          debt: "1",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "2628960",
          debt: "0",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "13805164433667",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "7841668175",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "61712509",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "7745697604",
        },
      ],
    },
    "0x1226ff858c262d499af401145beabebf3312e856": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "501883536",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "500008025",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "230286491",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "21369142",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "377874396",
        },
      ],
    },
    "0x3d219b0fac375f0fbe8d65611deacb0353f58838": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "11",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "0",
          debt: "53",
        },
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "61184",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "4",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "7",
        },
      ],
    },
    "0x0af5324fa188fe4928c5740e96ddde6f4b507f31": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "10269153707963944271872",
          debt: "4400995985808110911488",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "4815158134926709205499904",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "3262446681791848251392",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "25674865029596254208",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "3222519096855689166848",
        },
      ],
    },
    "0xad2580cefe08749a7d2aee23857734649bbd8713": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "4703560614",
          debt: "2700000871",
        },
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "19656",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "460564793",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "42737524",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "755735356",
        },
      ],
    },
    "0x3fddef9d31200d814b0cb5a410ed0328e74652a7": {
      positions: [
        {
          address: "0xe10a0f4f7831fc7049f271686005f9a8d274fcee",
          collateral: "303479239",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "88",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "70598",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "6551",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "115844",
        },
      ],
    },
    "0x2fed1fdddec37917482cd66a846227ff7d53ccf3": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "21384848",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "4915804",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "456155",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "8066285",
        },
      ],
    },
    "0x3efdd95a23b40ac867dd5a81612c6ccdbf93a8cb": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "6468322676629703753728",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1951705489563816558592",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "15359569031960719360",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1927819463428938661888",
        },
      ],
    },
    "0x7dd25a7d5beac9e3477ca3b58399fa7c185eab6a": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "0",
          debt: "5004435780",
        },
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "5886592409814",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "231962000",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "21524619",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "380623719",
        },
      ],
    },
    "0xf28418c62cf2196cc9ebabfe1a665f3735d4d0e4": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "18",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "4",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "6",
        },
      ],
    },
    "0x58dfdbee1d0d157aded161c16bd40a61bd15deab": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "7881786222247030",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "2413518765833193",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "18993955948769",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "2383980819341792",
        },
      ],
    },
    "0xb5cda7504c4e5881ef6404fd6f45da7b1e79e821": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "1000000000000000000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "301732858290357469184",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2374582994669611008",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "298040088567971905536",
        },
      ],
    },
    "0xf46b5e722000087b0f72521c465f712cbd41956e": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "15454181901443885170688",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "8510432005",
          debt: "0",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "7286976862067288064",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "7499860171",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "31046988874317983383552",
          debt: "6975502563269727",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "24608193590471329579008",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "193662030580838236160",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "24307025223431739146240",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "6040321643",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "560503969",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "9911492788",
        },
      ],
    },
    "0x3e8c91472fc50a8528e448ff501af9bf8c00cceb": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "521807905434130382848",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "25",
          debt: "0",
        },
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "54820188571219582976",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "100000063413739831296",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "206801494411743494144",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1627490339251798272",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "204270546004484194304",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "5",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "9",
        },
      ],
    },
    "0x44f4da18d1e9609e13b3d10cd091e3836c69bff2": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "20518855202200002560",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "6283174992001402880",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "49447450214992704",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "6206278102142011392",
        },
      ],
    },
    "0xdb602740afa1a0d0977620a2f7f85cb742068969": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "17",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "9506965647",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "2185397091",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "202791145",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "3585992400",
        },
      ],
    },
    "0xdd6482c094cdbfe03e6f8cc4a8b5e352e2becfa5": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "66967534053013",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "20506443029666",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "161381995899",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "20255474101845",
        },
      ],
    },
    "0x36c9ef27f5e85c689792b2812d116a9325f87059": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "214680265",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "49349250",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "4579300",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "80976604",
        },
      ],
    },
    "0x9d280ff8d3b9fcb4d669290c4ffebdab70bc7817": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "6291785923",
          debt: "100000000",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "0",
          debt: "4500000000",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "388896327",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "36087140",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "638135413",
        },
      ],
    },
    "0x156e4293477d4371ce37eed4ba084b609e841bcc": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "1487286048640250150912",
          debt: "0",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "4666278749894701",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "455428845534777638912",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "3584142602222703104",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "449855061290592174080",
        },
      ],
    },
    "0x9c63104a0dfe3e1bf838120d9a3de9b9e5332e92": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "23601716840354",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "7121413482799",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "56044235454",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "7034257777455",
        },
      ],
    },
    "0x9c85809be5e5747ed60d66735ec496e605c98680": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "24123347751724",
          debt: "0",
        },
      ],
      claim: [],
    },
    "0x839375339b030c4a8a2f8bcedd85c308d898307a": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "100",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "332",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "99",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "9",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "162",
        },
      ],
    },
    "0xfd25508e72c88c096c1195b54397a4f948c36451": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "27163378444004",
          debt: "0",
        },
        {
          address: "0x6de36c1af417a438a69d4aaa3655022e52bbc606",
          collateral: "614557",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "28066022",
          debt: "0",
        },
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "11",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "8317834119812",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "65459849369",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "8216035972380",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "143",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "13",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "235",
        },
      ],
    },
    "0x10e6bdbef34d5279e729142a19b0bce07813b6a8": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "292",
          debt: "0",
        },
        {
          address: "0x6de36c1af417a438a69d4aaa3655022e52bbc606",
          collateral: "1454",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "935",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "282",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "26",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "463",
        },
      ],
    },
    "0xd940d9a6f3654f35d49d9f1b5213748ef0c4819e": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "10000000000000000000000",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "184",
          debt: "0",
        },
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "198680866887177895936",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "2544916761",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "698821088703223",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "3123189821809000185856",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "24578938740759171072",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "3084966537554885083136",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "585008328",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "54285104",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "959933289",
        },
      ],
    },
    "0x2d8bd6e540c4a6dfe70304ab77654a0ac2414613": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "192592540",
          debt: "288634268",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "0",
          debt: "27672041",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "107788740498159861760",
          debt: "68362137566217240576",
        },
        {
          address: "0x6de36c1af417a438a69d4aaa3655022e52bbc606",
          collateral: "157369590895",
          debt: "0",
        },
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "71122006819196256256",
          debt: "53341452587987304448",
        },
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "40375672491",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "17535898137096642560",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "138004345130146880",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "17321284342422702080",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "17869016",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "1658132",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "29321059",
        },
      ],
    },
    "0x5b3067c5e26fec823d6fbf8f315e43632658d2f6": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "678331",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "207714",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1634",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "205172",
        },
      ],
    },
    "0x7a27340ce20b2171077955713e5cc69f0bc73353": {
      positions: [
        {
          address: "0xfe4812f9e6c7a098cba5c43b8f2c4d9f87a4d6a7",
          collateral: "115514609562985021440",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "14815862666295",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "36062501603225872",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "283805361926677",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "35621149226860804",
        },
      ],
    },
    "0xfc13365daa84c954d4521d7c1ef6ffe51ef46786": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "2",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "0",
        },
      ],
    },
    "0x85378cdccf0aed81fb31cb19529156c0444546f4": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "907686347438368096256",
          debt: "907652400760162091008",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "44631271",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "847287666",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "2045915264486872186880",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "617330255545217056768",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "4858277402131923968",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "609775034382674034688",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "205028304",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "19025340",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "336428534",
        },
      ],
    },
    "0x83c802a614f089a904c5a376f6242c3a2c879578": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "2002094604757801728",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "604097727661275008",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "4754139802177651",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "596704453323473920",
        },
      ],
    },
    "0x2a8afa76f3348381a080a1f828b2f7ced52921ca": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "2372883628864699891712",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "715976959727741698048",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "5634609113432032256",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "707214446908325756928",
        },
      ],
    },
    "0x3b445453b7664771364685cc35e2a0880d0aa9c2": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "2399911985733917696",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "734888317265917824",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "5783438075152391",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "725894357036624512",
        },
      ],
    },
    "0xe56169888ab88d11c6ad4247b8650e72566f8569": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "101612504093315295084544",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "31481551959054393344",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "247754117172883680",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "31096263719162957824",
        },
      ],
    },
    "0x9419b5a1453bb8ad923aeadf75fa1cdea7c13b0f": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "10000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "2298732",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "213307",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "3771963",
        },
      ],
    },
    "0xf9bfd697bc8653916272cb23d0cbe93551b9fb17": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "43",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "9",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "16",
        },
      ],
    },
    "0x155391b243de445ee177c4a6712abe5c424e60c8": {
      positions: [
        {
          address: "0x6de36c1af417a438a69d4aaa3655022e52bbc606",
          collateral: "49118205168",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "11494160",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "1066586",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "18860632",
        },
      ],
    },
    "0x87952626142ed897efb89f1cc4610cae4a015986": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "2193464496224732184576",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "661840312004307451904",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "5208563492146793472",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "653740352725521006592",
        },
      ],
    },
    "0x7e3e96e16842e81754cbf08c279b2944ba219816": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "346157595161309",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "107246430105",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "844009998",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "105933890357",
        },
      ],
    },
    "0x61cc5cc864e9b8ad10ee425f109dc2faa63ae7de": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "370000000",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "30000000",
          debt: "1689421796",
        },
        {
          address: "0xb8330f4027b6cb4402c5d02d535c87579cab2477",
          collateral: "826901083861",
          debt: "0",
        },
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "814656824650",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "85975880",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "7978022",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "141076811",
        },
      ],
    },
    "0x7364c5c921fdea9776129ca089da90a79a2a57e3": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "44317580598721",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "13570694435917",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "106798909525",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "13404608946227",
        },
      ],
    },
    "0xd7973f5377a830ac9f8c0e73cb3f97a01f0cb807": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "4929042113555219873792",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1509345128527995863040",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "11878273037936928768",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1490872947464126332928",
        },
      ],
    },
    "0x65e1640c7400a0662041d943ea9566f3b26f8241": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "767",
          debt: "12191",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "42845",
          debt: "4097",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "682",
          debt: "17140",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "2498",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "231",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "4099",
        },
      ],
    },
    "0xe2acac86d4f1702a6b179794ef3c8953e6d579c8": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "957932604373481",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "71099546734090207232",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "21453362792266383360",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "168834083081436480",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "21190804948843180032",
        },
      ],
    },
    "0xb1c39123d7775b342acc4efeb4b0bfa1f0e54bff": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "827627369578561929216",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "249722371822269497344",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1965269877724394240",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "246666134530472181760",
        },
      ],
    },
    "0xb6ca5d1ed0ca4bf8444c9dee2d068a9f4c5e2e92": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "5907807567747",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1782579663645",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "14028579386",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1760763490733",
        },
      ],
    },
    "0x84b6e0b3c91f98c1f0b015af21a68e067f3882a4": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "22120043612918",
          debt: "0",
        },
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "2387832641267933",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "743401983912",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "5850439091",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "734303828831",
        },
      ],
    },
    "0xe1c5a94bfbfbeb910ad491f53578c5674d3c031b": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "976486374150002442240",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "510235404",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "289262711268807",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "299014564726720167936",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2353190516212652032",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "295355062949447467008",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "117289470",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "10883727",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "192458913",
        },
      ],
    },
    "0x852ceff85e980922a3fa611fda7060f873e19085": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "2853751137715777175552",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "884148220948332160",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "6958086507804089",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "873327537384339328",
        },
      ],
    },
    "0x727514c52b7c218c950ae33d065e2af9bbd5fe15": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "4672956597",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "40",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1430927980",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "11261144",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1413415510",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "9",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "15",
        },
      ],
    },
    "0xb996b66e3d704ecf5fb00d07c34ab0b03073456f": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "520631231908579835904",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "157091549719005757440",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1236282069784004096",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "155168978469285462016",
        },
      ],
    },
    "0xe9755def636fe3a6fa28a59421616b144a772ae1": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "130080137956",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "0",
          debt: "101585940206",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "6550053832",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "607803920",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "10747906345",
        },
      ],
    },
    "0x2bcd8898a678050efa5f41f4c6012045dee1b5c3": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "80032181",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "40029835767221854208",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "12078316762937434112",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "95054167292262368",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "11930495797424171008",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "18397257",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "1707150",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "30187843",
        },
      ],
    },
    "0x251ff61a8b0587902c527143f42fdba479bfd867": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "440000000",
          debt: "300000000",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "32182254",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "2986311",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "52807483",
        },
      ],
    },
    "0x6601a4900877d5bc33f5ba6af8ca4c007d63d2d7": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "543163869904050782208",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "645586329440576820215808",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "33690581318386839552",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "265138778495877440",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "33278257783830368256",
        },
      ],
    },
    "0x3756c2a65e70d7c556bb716fbf7bd52278a2887e": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "1070485617614628585472",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "88",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "7678",
          debt: "6174",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "3207697288",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "327798427135070175232",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2579714304781959680",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "323786652899977920512",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "737225738",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "68409925",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1209705048",
        },
      ],
    },
    "0xc373956fefaff488103475f77a5190bfea9baf1d": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "339736640211799",
          debt: "493827305178087",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "67",
          debt: "0",
        },
        {
          address: "0x6de36c1af417a438a69d4aaa3655022e52bbc606",
          collateral: "1279008152",
          debt: "0",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "69647515501077987328",
          debt: "0",
        },
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "1548082412290156789760",
          debt: "0",
        },
        {
          address: "0xb8330f4027b6cb4402c5d02d535c87579cab2477",
          collateral: "82899311",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "499051126375555968",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "3927442058768912",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "492943469092739712",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "318472",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "29552",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "522577",
        },
      ],
    },
    "0x82ba77eb696829c1f53c68ce3f21b40419c06c40": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "11144681041130",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "288567054097",
          debt: "2786244605033392373760",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "3256652177932440035131392",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "168273341108202930176",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1324280744615697920",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "166213921054815649792",
        },
      ],
    },
    "0xb9c44251e341d45b07aff34f376ba3e092c1c174": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "605158732221107798016",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "182596273992443920384",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1436999634608063488",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "180361562148860592128",
        },
      ],
    },
    "0x216be7c987b81a71bc0198b98752bb4a51be18ec": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "3200000000000000000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "979887024703441600512",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "7711533568939620352",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "967894637938917376000",
        },
      ],
    },
    "0x0575d52465bf30e9c0bfc3fd7256e4743a2f11fd": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "46901163508353515520",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "321",
          debt: "0",
        },
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "19720887331540676608",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "490",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "35082808939391435669504",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "10606057084008724955136",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "83467750031873540096",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "10476254427792772431872",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "186",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "17",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "305",
        },
      ],
    },
    "0xf4bb7b8cf001338e24f305b033a76c5c3629cbe7": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "106421889",
          debt: "6845859771769",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "7968973357968536",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "372674379090",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2932879926",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "368113388712",
        },
      ],
    },
    "0xcc1c16d0c6b5583ae64ba5cf2a1568f3136328a2": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "16865288544162766",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "5225198043735",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "41121363078",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "5161249247311",
        },
      ],
    },
    "0x2d4a925a52fdd839f096142d3d58e4af31ca4828": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "5671900390",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1711398716",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "13468398",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1690453694",
        },
      ],
    },
    "0x5d47e5d242a8f66a6286b0a2353868875f5d6068": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "0",
          debt: "14086405821719946199040",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "17719920462132006323486720",
          debt: "0",
        },
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "24680780723875024",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1239648334087672037376",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "9755808068680497152",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1224476848090215612416",
        },
      ],
    },
    "0x4cdfb34272b4f0ecd53b78869da757aed447d74b": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "161869925",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "37209565",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "3452814",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "61056738",
        },
      ],
    },
    "0xec539249ba784ce2102ec9707ca245b95b613ded": {
      positions: [
        {
          address: "0xf58653cce3e68f769a75924dd83dd3bd24c04104",
          collateral: "6863196368690257",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "2124156098684",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "16716724119",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "2098159528833",
        },
      ],
    },
    "0x462f21e0dafa85ba0e4ba5c0e5462abfc6e742c4": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "1",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "4",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "1",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1",
        },
      ],
    },
    "0xe167720b29882a19a5a6f4bc974e8037b126e10a": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "923663408850714",
          debt: "0",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "8476523922872",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "5431",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "3075643328219611",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "85988722841",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1210864587926098",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "9529285194952",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1196045372963770",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "19762797587",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "1833863684",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "32428542273",
        },
      ],
    },
    "0x69b235c1c3f16f828b2394193a7abea79ee40c07": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "21",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "4",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "7",
        },
      ],
    },
    "0x99b689aa595612b130fc908b0182bdbd8324d5b8": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "950000000000000000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "286646215375839592448",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2255853844936130304",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "283138084139573313536",
        },
      ],
    },
    "0x78100c2f6ff4228d08c52497779085829171256c": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "4974303010804",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1500910665452",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "11811895339",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1482541709903",
        },
      ],
    },
    "0xef628669196277859db27272de06076cdbe970b3": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "1580433875017096",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "3764147559",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "489649493417",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "3853452908",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "483656898398",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "865114391",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "80277190",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1419556035",
        },
      ],
    },
    "0x7b7a009685bb67af28e39d82c1a177554c832cf8": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "36",
          debt: "0",
        },
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "21021671206104875008",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "12417448886667625627648",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "3753211038136215797760",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "29537091707752357888",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "3707277213885575725056",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "8",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "13",
        },
      ],
    },
    "0x774d478cb54da2b9d36c1e1a9c4bbb95515eaf75": {
      positions: [
        {
          address: "0xe10a0f4f7831fc7049f271686005f9a8d274fcee",
          collateral: "135773911856",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "75010337",
          debt: "112652631",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "22923141",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "2127123",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "37614312",
        },
      ],
    },
    "0xb851558906290e8a797278cdcbc029a9faf6658e": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "7905796003",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "129000251287970201600",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "67930912870217588736",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "534603991848893824",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "67099537660760768512",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "1817331018",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "168636922",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "2982037107",
        },
      ],
    },
    "0x3344b131d3f71ae43bbb5f9da3d3058e2dc74ec0": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "2470000000000000000",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "1824244443444629760",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1306784787333819648",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "10284159807049418",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1290791649152969984",
        },
      ],
    },
    "0xaab4667dd4a832e2a8072e51d527af07425da7e0": {
      positions: [
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "3162122852374974824448",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "4334503438984005812224",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "2279391928741617467392",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "17938402011783751680",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "2251495498940766486528",
        },
      ],
    },
    "0x722b99cec8fa4d635fad6c94659db034b846dfbd": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "0",
          debt: "17000665368",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "22006381204",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "1150680165",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "106775903",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1888137559",
        },
      ],
    },
    "0xd52929b69680a6f74d2eb9c8f1ef482f37b1b32b": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "2",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "0",
        },
      ],
    },
    "0x3aec2b5fa113c7eb7b3be0c365d073d579b1074f": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "17385898",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "39898618316358180864",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "12038724146430765056",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "94742580564837600",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "11891387736747098112",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "3996552",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "370855",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "6557896",
        },
      ],
    },
    "0xf44a2c87bd60a59362373a39ad90765323d01e12": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "1346006839228684042240",
          debt: "19651328771524669440",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "86308093884217",
          debt: "0",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "23054678994963207815168",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "413292367348365983744",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "3252536143702909440",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "408234272087264395264",
        },
      ],
    },
    "0x7d2c48765c8552a8f15e3c07e59f97c0a6e84d36": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "344862715217586159616",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "409641300708915563986944",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "21312899246380085248",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "167728660392895104",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "21052060471712890880",
        },
      ],
    },
    "0x82784592893afcdec068050c6a10a7d0233293f9": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "0",
          debt: "50017460205",
        },
        {
          address: "0x6de36c1af417a438a69d4aaa3655022e52bbc606",
          collateral: "59064149057110",
          debt: "0",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "14874819108802199413587968",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "0",
          debt: "25050000000",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "0",
          debt: "12154155604785112285184",
        },
        {
          address: "0xb8330f4027b6cb4402c5d02d535c87579cab2477",
          collateral: "29980930751848",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "941203359713409105920",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "7407100125471450112",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "929684404538786971648",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "3493364842",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "324162350",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "5732221310",
        },
      ],
    },
    "0x03174f008c56cd02034955d81fde78d5001f8197": {
      positions: [
        {
          address: "0xe10a0f4f7831fc7049f271686005f9a8d274fcee",
          collateral: "2965369296089",
          debt: "0",
        },
        {
          address: "0xfe4812f9e6c7a098cba5c43b8f2c4d9f87a4d6a7",
          collateral: "770462173414924209881088",
          debt: "0",
        },
        {
          address: "0xf58653cce3e68f769a75924dd83dd3bd24c04104",
          collateral: "783048352564909547978752",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "482853842456449253376",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "3799972365305383424",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "476944416284358803456",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "689637564",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "63994041",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1131618173",
        },
      ],
    },
    "0x939bdc5fc4d23db6b9647ac015162ffdba1cd5f7": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "53",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "162797210",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "39153178186446397440",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "11813800365348147200",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "92972471108804768",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "11669216694406070272",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "37422735",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "3472595",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "61406527",
        },
      ],
    },
    "0x4e5a1da2d1df0e1b575492b086309f237e7419e5": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "0",
          debt: "15819028585549",
        },
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "18841680944063760",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1038767645832",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "8174913402",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1026054646218",
        },
      ],
    },
    "0x1c1d8ee11b6538bc7be4dcba00fac7243cbea75c": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "3699080237049680756736",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1116134052970373316608",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "8783773026816605184",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1102474201470321426432",
        },
      ],
    },
    "0xf504340af669dab832cf4a8376996f4869b970c2": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "1000000000000000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "301732858290357504",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2374582994669611",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "298040088567971904",
        },
      ],
    },
    "0x4bfc6017ce76d234b4a03b07274176bea6fb625d": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "2569209",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "590592",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "54803",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "969096",
        },
      ],
    },
    "0x3cdc7a2b96a6c207abd7b84f46af11d64ab28090": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "933937370375346061312",
        },
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "1162446807248276620836864",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "72581974022717087744",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "571207001486199488",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "71693676614271959040",
        },
      ],
    },
    "0x062b98dc590a00a6b8db8844e319a7da904c9410": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "2651593406498",
          debt: "495081499315676839936",
        },
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "806340435819252498300928",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "99340707590385795072",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "781793392536575744",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "98124922344891842560",
        },
      ],
    },
    "0xdaae8e983728b9deb8869b5db13090de5cf73059": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "2596794385533129216",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "783538192339263616",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "6166303788540491",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "773948828657106048",
        },
      ],
    },
    "0x669d4419dc8b659bc7e96b315adc2654f8fdcba4": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "59000000000000000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "17802238639131092992",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "140100396685507072",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "17584365225510344704",
        },
      ],
    },
    "0xa2e1b28eb1ed825a5a805ff9fee69dfe0ff62733": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "800000000000000000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "241386286632285962240",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1899666395735688704",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "238432070854377504768",
        },
      ],
    },
    "0xabe21a7537cff588e6209492afca65d635a3b313": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "1365424331421",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "1501294812",
          debt: "0",
        },
        {
          address: "0x6de36c1af417a438a69d4aaa3655022e52bbc606",
          collateral: "15503967869",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "0",
          debt: "12250000",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "3500000152991165841408",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1056065050596825890816",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "8311040847924332544",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1043140355998398283776",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "345919656",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "32099174",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "567615498",
        },
      ],
    },
    "0xa7c3160e9d8cbc073dd9474c49864a11286c7801": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "65",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "52",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "26",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "2",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "44",
        },
      ],
    },
    "0xd3d99ab6981587d5522854ca370726eef63a8e4d": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "0",
          debt: "620964734",
        },
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "999738184968",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "92025238",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "8539365",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "151003131",
        },
      ],
    },
    "0x33ecbf7d63814c8cecf9ad7e65a8b7ad8becf60e": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "98726131324238626816",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "30231392213684195328",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "237915586199502368",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "29861404104119984128",
        },
      ],
    },
    "0xaddadf3df10bebfff7201427d50cc0448e2e6f3a": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "4000000000000000000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1206931433161429876736",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "9498331978678444032",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1192160354271887622144",
        },
      ],
    },
    "0x74f5446d64b3d519caa82db56f8a5c8259e0fef9": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "168220527",
          debt: "118178697",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "11503278",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "1067432",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "18875593",
        },
      ],
    },
    "0xdd3f9005e5c045d7515b3beb4ff92fda1df8cd9b": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "1753",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "2182170397",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "501528832",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "46538730",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "822952766",
        },
      ],
    },
    "0xf5e7e15c6d11bac90579aaca28f597789b0b13b2": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "112",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "25",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "2",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "42",
        },
      ],
    },
    "0x26570de098f37d1d717e2860fbf19d54fe9a6011": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "520841901650753486848",
        },
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "196457497564",
          debt: "0",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "119605200880883183124480",
          debt: "0",
        },
        {
          address: "0xe10a0f4f7831fc7049f271686005f9a8d274fcee",
          collateral: "99863422125",
          debt: "0",
        },
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "682877747788539368570880",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "0",
          debt: "277",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "0",
          debt: "200000007",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "88206469421648101376",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "694168952944904192",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "87126950997819883520",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "23392627",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "2170689",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "38384688",
        },
      ],
    },
    "0xa788d847f4a0a3d7d7a453e6b1d0949a6477853d": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "0",
          debt: "168561908",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "103424531",
          debt: "29",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "1175090182230969024512",
          debt: "697891551443983400960",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "152411245",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "656248707270634897408",
          debt: "433085517651771064320",
        },
        {
          address: "0xe10a0f4f7831fc7049f271686005f9a8d274fcee",
          collateral: "314288600",
          debt: "0",
        },
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "192534329303360390299648",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "271711325056950370304",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2138318960669853184",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "268385975076558012416",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "20128435",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "1867792",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "33028513",
        },
      ],
    },
    "0x00e164c89f7fb337f2e31464e5c46b6f0f319356": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "1302282587",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "299303730",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "27773509",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "491123973",
        },
      ],
    },
    "0xf46f179ad48e5f2a69f35f95040d9ab3a224a321": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "5000000000000000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1508664291451787520",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "11872914973348056",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1490200442839859712",
        },
      ],
    },
    "0xffbea5936a22a3cae4463f2225c091023e35424a": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "5278656",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "1213421",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "112597",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1991089",
        },
      ],
    },
    "0x6cb1945fd754e9c5f828068f3af9c6c2c30321f2": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "159657712307259",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "48173977882568",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "379120488612",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "47584398716615",
        },
      ],
    },
    "0xe67b2b83b3493afff7fc9c98f478081f6ae1f94a": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "264231",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "60739",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "5636",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "99666",
        },
      ],
    },
    "0xccccccf25584cafbd4d80e9464361af1e7280b44": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "62814745652124",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "29796932",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "349333617166891",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "124640228999851",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "980896047953",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "123114814543998",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "6849517",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "635592",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "11239292",
        },
      ],
    },
    "0x8868a2eae35f1f53d3f8e464c060be9755c8d51c": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "4000244755956077953024",
          debt: "220010000000000032768",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "13514521691",
          debt: "0",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "5937167224906277348966400",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "8982132449835231477760",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "5707219090848175095808",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "44914781495028596736",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "5637371060450954838016",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "3106627018",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "288275505",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "5097627759",
        },
      ],
    },
    "0xb0e38dfcf4a8a7f75cda386c95c389590f9404d5": {
      positions: [
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "52936023341111",
          debt: "0",
        },
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "712592890000014",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "16483856056258",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "129724964326",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "16282117720906",
        },
      ],
    },
    "0x7b083271df172787d2342280efa5b92da7694fd3": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "4104",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "943",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "87",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1548",
        },
      ],
    },
    "0x571ed64c898fb5aec65011f59854ff915b271c1e": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "550107816474501906432",
          debt: "23544303198556463104",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "27646507486262396452864",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "304727160",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "1200000000000000000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "531886347362761703424",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "4185849306240140800",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "525376834907206123520",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "70048622",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "6500072",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "114941961",
        },
      ],
    },
    "0x8a30fe8dd7c1b8ee6fff8892731ed345b9e33b29": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "17900009246670949711872",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "27",
          debt: "0",
        },
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "7895000000000000262144",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "60",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "530187709298498",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "7906903817671033225216",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "62225902251130052608",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "7810134857269601370112",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "19",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "1",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "32",
        },
      ],
    },
    "0xea26797f298c81d6dd5a49050f4e29e41559e4dc": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "166443319360",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "50221418493",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "395233475",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "49606781643",
        },
      ],
    },
    "0x005f90797b3df1e67918619669b40eba901cca07": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "290164603797601",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "88852665715463",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "699254400844",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "87765238792302",
        },
      ],
    },
    "0xe4234325e9166b40c9a36f34c4d092cbde01394b": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "21356455716",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "77925572774",
          debt: "77687365041",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "4964025181",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "460630407",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "8145410574",
        },
      ],
    },
    "0xb7fb475d4648bdd74a1c34bedb7b8f9a94730629": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "1355435581356049170432",
          debt: "1049680364351263997952",
        },
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "5821581825467",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "921217002",
          debt: "4940000000",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "317275247848609611776",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "639034956",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "189359107985134354432",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1490221914361774592",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "187041628925719019520",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "590140243",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "54761313",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "968354189",
        },
      ],
    },
    "0x9a62d0194427eb62fa24bc369d0de17519969714": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "2",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "21947973269",
          debt: "17096120718",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "1115101732",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "103474448",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1829757326",
        },
      ],
    },
    "0xd84f88ac551b65ffd3007fc536b02c9b643e983d": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "443176690283111317504",
          debt: "325504587748163911680",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "3",
          debt: "19654780463",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "24601000817",
          debt: "17000000",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "36032927013614985216",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "283572615258110080",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "35591936587054411776",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "1132034988",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "105045747",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1857542906",
        },
      ],
    },
    "0xf5fcaae203bd5dd81ef969c3fecc872f38aeccab": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "1533017969",
          debt: "4755528479",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "3661696089",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "328725405557277523968",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "1843406508",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "99187256211454312448",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "780585757952182400",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "97973348986833485824",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "524627309",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "48682124",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "860854785",
        },
      ],
    },
    "0x0b4d7235604dde67af4f1167d6f9b651f54d13dd": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "33993277",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "8388710552",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "2541558853",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "20001608",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "2510453882",
        },
      ],
    },
    "0x4316d175db9b7bcc6edd00513f0389dfa967bd77": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "80475208",
          debt: "64380686",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "3699700",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "343308",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "6070794",
        },
      ],
    },
    "0x89ccd44662a56d856b6d5831f6f00b6cbe04609e": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "2",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "0",
        },
      ],
    },
    "0x7589639d0476d8829fe603d4e79ae73b42292737": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "10404946009609402368",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "3139514099836294144",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "24707407854873912",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "3101091030248952320",
        },
      ],
    },
    "0xb36c1fb9a64e9e20759c799598668ec48cd4899f": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "1011187027",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "2501007786",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "807251704",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "74907895",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1324609834",
        },
      ],
    },
    "0x45854310c3302c5dab9c0c745e8058d485a4ae8a": {
      positions: [
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "1104735",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "797",
          debt: "1709",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "55604396",
          debt: "217084840367286",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "147",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "78122094324596",
          debt: "0",
        },
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "251824315970700384",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "36098028045674",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "284084948600",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "35656240877514",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "83",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "7",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "137",
        },
      ],
    },
    "0x96e3e323966713a1f56dbb5d5bfabb28b2e4b428": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "14497722185",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "13135989403",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "3018323102304635453440",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "5620138155",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "910727256902196789248",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "7167258711151011840",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "899581284737629421568",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "7643927968",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "709308580",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "12542831557",
        },
      ],
    },
    "0x63dc84c5516ed20c908bad86fa09e6155d093b47": {
      positions: [
        {
          address: "0xe10a0f4f7831fc7049f271686005f9a8d274fcee",
          collateral: "1055764162873",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "0",
          debt: "299999999999999934464",
        },
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "394443729088170954850304",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "31149908767806509056",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "245144145270263232",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "30768679356450402304",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "245532530",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "22783879",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "402891442",
        },
      ],
    },
    "0xfe885ca6c9aa7a3e10d21f46c3f9d7e9f8810d69": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "22994562",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "5285834",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "490492",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "8673464",
        },
      ],
    },
    "0x7d14ace170ad49aab07838f1ad1412541b1dba56": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "10400890553664517701632",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "78",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "3184905530905141968896",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "25064630203578413056",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "3145926936462944632832",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "17",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "1",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "29",
        },
      ],
    },
    "0xc7ee00955bff3cef49e1e2075791ce9d1f81adc8": {
      positions: [
        {
          address: "0x6de36c1af417a438a69d4aaa3655022e52bbc606",
          collateral: "10338",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "2",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "3",
        },
      ],
    },
    "0xc82335bbdc978ce2e1f1c6c4f9e5bb2270bb2af1": {
      positions: [
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "1028427",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "241",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "22",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "396",
        },
      ],
    },
    "0x5b9effdcbd65946f2b143725dc244563248aa4ee": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "2",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "2211532476",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "667292015",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "5251467",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "659125335",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "0",
        },
      ],
    },
    "0x6c4803d61799377874519a206a2427ae11c7d9f6": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "58",
          debt: "0",
        },
        {
          address: "0x6de36c1af417a438a69d4aaa3655022e52bbc606",
          collateral: "11506258",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "2705",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "251",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "4440",
        },
      ],
    },
    "0x80006d8d987d81b8d7e5ba00224ef6fbe030795d": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "84152618835547881472",
          debt: "84152617582128971776",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "6960078299096",
          debt: "0",
        },
        {
          address: "0xf58653cce3e68f769a75924dd83dd3bd24c04104",
          collateral: "195892792973902852653056",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "60628731217663385600",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "477137143609721536",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "59886724052067278848",
        },
      ],
    },
    "0x6d4c52b512e61a6ab241a3b34c501dd1d3e6ac3c": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "47847628469651333120",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "14651646968825726976",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "115305810355583536",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "14472332198084063232",
        },
      ],
    },
    "0x4d8733b9874f8721874e5a1586cbc89f2b25b73d": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "424298999999999967232",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "129926588967076724736",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1022498744302347392",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "128336477182138941440",
        },
      ],
    },
    "0xd42a08d2f4cb730ff8485f744abed7368712c112": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "507856242314029",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "413",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "144",
          debt: "0",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "8362273398510572",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "158103841197081",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1244248620537",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "156168880977391",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "128",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "11",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "210",
        },
      ],
    },
    "0xc424af27cb2ca2506f7d544daeb0bee4bf59639c": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "9312688177658930560761856",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "2885253929715213795328",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "22706426325675257856",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "2849942633446666928128",
        },
      ],
    },
    "0xd246c4a039508379cd70ce624cdb7c8b1c991f37": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "2",
          debt: "0",
        },
        {
          address: "0x6de36c1af417a438a69d4aaa3655022e52bbc606",
          collateral: "517246950",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "4",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "121042",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "11231",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "198617",
        },
      ],
    },
    "0x70d9522f923c966953f1762b1cb867a04d974ef8": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "9449944843042552807424",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "16",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "1000000000000000000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "3195444838246794133504",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "25147572645216641024",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "3156337258067787776000",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "3",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "6",
        },
      ],
    },
    "0x8144fa70ea19ff4e62e3cabced0898e87e496014": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "8600000918223211986944",
          debt: "3011483563397538816",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "0",
          debt: "8200000000",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "11028669690",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "97239435783",
          debt: "6200001474537188229120",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "4228849",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "761780333255218298880",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "5995073374742886400",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "752457254006598139904",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "651207410",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "60427963",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1068558585",
        },
      ],
    },
    "0x02706c602c59f86cc2ebd9ae662a25987a7c7986": {
      positions: [
        {
          address: "0x6de36c1af417a438a69d4aaa3655022e52bbc606",
          collateral: "399",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "0",
        },
      ],
    },
    "0x22ac70c1df5750e16469f4d2d20ecde43b6c8fe9": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "0",
          debt: "6712309074837256192",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "7784673104642919366656",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "386520609084421312",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "3041847250649725",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "381790161063637760",
        },
      ],
    },
    "0x7788ea4ce2b1eac4d6e25790bfe6d3d537cce53a": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "4747389938098091589632",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "286",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "47",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "4595474434496",
          debt: "3",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1453720564370979160064",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "11440517783565342720",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1435929146772858077184",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "76",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "7",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "125",
        },
      ],
    },
    "0x3c6daf49b251e0154c434e1539abf3eb4f502a6a": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "455611681529285",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "137473014938307",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1081887751132",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "135790545915590",
        },
      ],
    },
    "0xf83f7fda18ed2100ab5b0e24dd49e81ead4b46a1": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "0",
          debt: "5173495949323793334272",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "6000374399611721933127680",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "298020265100335710208",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2345365558076515840",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "294372932099032907776",
        },
      ],
    },
    "0x26d067c1bd1762d9bb6efe783b1fcd925f0e746d": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "267641876374515",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "20",
          debt: "0",
        },
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "1208040809547367448576",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "10",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "21261658582428",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "371158237884071542784",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2920948169201165824",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "366615802861123731456",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "6",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "11",
        },
      ],
    },
    "0xcbe68ade2d49b26d67a79fe769ccce7906834177": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "258700606",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "59468348",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "5518289",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "97580914",
        },
      ],
    },
    "0xebdb6fc1dbde7139348b379408f447400ef07065": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "200013424966717341696",
          debt: "60000000000000000000",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "42246650914230124544",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "332473497951416512",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "41729613577785524224",
        },
      ],
    },
    "0xdff3b6566fbfcd220b55294b251bc8711e106c29": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "32",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "107",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "31",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "2",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "52",
        },
      ],
    },
    "0x058fd36a48e1c9980b34b41eac8a46c3eaf19a41": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "186682558",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "42913326",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "3982087",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "70415972",
        },
      ],
    },
    "0xe61d67814f7ae3aea14435c73b15cc23a5ed5e2a": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "150049444349379411968",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "52",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "0",
          debt: "85000117394992054272",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "20300016492742483968",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "159757456407986464",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "20051573924395520000",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "11",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "1",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "19",
        },
      ],
    },
    "0xae5905de19d8e65b45d8179f71c72af8018721cd": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "32512409529597521035264",
          debt: "22301604323864287903744",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "40455799191",
          debt: "30264796621",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "45",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "4125846506748875",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "3126699848926068473856",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "24606562019013468160",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "3088433607063901831168",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "2342638888",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "217382198",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "3844008616",
        },
      ],
    },
    "0xfcc04e43cdd8eb524c1f86d987c4ab29324fceac": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "63116848689545",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "19044427161376",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "149876195575",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "18811351173563",
        },
      ],
    },
    "0x0a286ce2b626ec222ccc73fd71b1a2d365006892": {
      positions: [
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "9",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "0",
        },
      ],
    },
    "0x64e0a768547744d545d9b2d9e4dec992090ca27e": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "2540918666",
          debt: "1909979389",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "145036061",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "13458437",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "237987969",
        },
      ],
    },
    "0x89f6b520a1715373fa21e311d6833d19b3cec5dc": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "38657911",
          debt: "103310736",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "2",
          debt: "0",
        },
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "83358727067",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "4713167",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "437352",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "7733780",
        },
      ],
    },
    "0x8b5e2a644d5f3ba0a8d2783ec587871f8389a724": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "310208869",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "126498607312009",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "38168786354001",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "300381441772",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "37701656126996",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "71308720",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "6617002",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "117009641",
        },
      ],
    },
    "0xd929588402bd21789b0cf2dc10511e9fdfbcae45": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "6981288723474579193856",
          debt: "5393715302524970336256",
        },
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "926004483587231436505088",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "771772840980425474048",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "6073712602345828352",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "762327468024095178752",
        },
      ],
    },
    "0x70ddcfb2cec730d7c8391ae37ffd3bb606cbced5": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "26870011130590",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "3504788420",
          debt: "2500006242",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "8227992268906",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "64752810259",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "8127293654580",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "230972544",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "21432803",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "379000133",
        },
      ],
    },
    "0x231304b170c55c74e0a79bb6bf397adb3a9da373": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "312987645976455",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "95841416620250",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "754254605815",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "94668457588042",
        },
      ],
    },
    "0x957cd711e28c4da8b8f82d1b8872913de9e05347": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "311468634173339",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "93980321256915",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "739608122080",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "92830139315167",
        },
      ],
    },
    "0xaf02f27abf8337fe8c78e9dd22ab85b4661ff50d": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "64269665085289415049216",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "721",
          debt: "0",
        },
        {
          address: "0xe10a0f4f7831fc7049f271686005f9a8d274fcee",
          collateral: "470",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "0",
          debt: "40094952955522179923968",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "397",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "7582351147685033017344",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "59671731467775229952",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "7489554238189275709440",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "257",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "23",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "421",
        },
      ],
    },
    "0xc41ac49915a7475ef55ba04e19a2c5d25709591a": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "403400000000000000000",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "1426737164",
          debt: "1141389724",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "2972760",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "123527008051678478336",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "972135200534457856",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "122015217795175645184",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "65593743",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "6086688",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "107632002",
        },
      ],
    },
    "0x27387ce1110544f1e81b09640b2d4d207e197047": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "198597693562355810304",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "59923449728442146816",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "471586705913776576",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "59190074178719473664",
        },
      ],
    },
    "0xb0bcffe2d1c8f8ce141e3b4dd3edffb705af7d55": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "1749225",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "9257854",
          debt: "0",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "12505987562481",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "3877929911",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "30518606",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "3830469710",
        },
      ],
    },
    "0x0fe85948329dcedd0236535ad9b5570f79c1b870": {
      positions: [
        {
          address: "0xf58653cce3e68f769a75924dd83dd3bd24c04104",
          collateral: "187485554726264320",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "58026692388383",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "456659568875",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "57316530379657",
        },
      ],
    },
    "0x8091110790e54379a19e92b4503644789de5afe0": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "106507295223126",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "0",
          debt: "1160",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "1454",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "158570416595466912",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "19",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "47813290940697528",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "376281947648255",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "47228126056389464",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "71",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "6",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "118",
        },
      ],
    },
    "0xb1a98621c5c543876ce700aeba3299351832efa0": {
      positions: [
        {
          address: "0xe10a0f4f7831fc7049f271686005f9a8d274fcee",
          collateral: "56624722",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "438",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "1093",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "13520",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "1254",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "22186",
        },
      ],
    },
    "0x79c51606e4335d13d179eeb5bacf3e702748e8d7": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "0",
          debt: "207",
        },
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "503275866796",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "118184174",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "10966750",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "193927023",
        },
      ],
    },
    "0x93384fc5828f1b7f2a8e5ab58595115cdc09469f": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "74683079860653",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "22534339152281",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "177341171426",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "22258551736197",
        },
      ],
    },
    "0xb368d7e406a3bb8c04308522559d7de2a6cb41ab": {
      positions: [
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "9666417392893314",
          debt: "0",
        },
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "4",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "2981694619495",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "23465397102",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "2945203029965",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "0",
        },
      ],
    },
    "0xcb096b8c7bc24f8d8b03ce2fb9228d8955ea2f31": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "33662237099551",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "99918247",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "4390448",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "407406",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "7204235",
        },
      ],
    },
    "0x045fc327c18ea6004eb0f10741a05c5f39cf0e4a": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "1297728653",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "298313102",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "27681585",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "489498463",
        },
      ],
    },
    "0xb332db7267ed7cf71a159267add3f1e33d246ef5": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "29101562714687040126976",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "126",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "2472520604774123",
          debt: "21008010562636064227328",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "2572519829081037471744",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "20245265544489824256",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "2541035941681789140992",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "28",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "2",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "47",
        },
      ],
    },
    "0xe643bea0678bec6ca9c386b20d2440c98a39b857": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "50000000000000000000",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "0",
          debt: "268340955",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "75032845",
          debt: "0",
        },
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "312535310936",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "15310734760991275008",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "120492712014681568",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "15123353717795584000",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "28956272",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "2686960",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "47514007",
        },
      ],
    },
    "0xbe89d2368243de3ead0e2df165664c346780cd11": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "0",
          debt: "53800000",
        },
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "62521584788",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "2314756",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "214794",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "3798257",
        },
      ],
    },
    "0xfa1f780a446e9cdb4c51b031686bcf8b02f8ed7c": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "1034579269158800000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "312166560011233792",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2456694339182201",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "308346097010676416",
        },
      ],
    },
    "0x1cf8da0110f4cb8924aa4eba7ef3a04430897c05": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "504471829814153379840",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "592545088551062387818496",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "29105433108264996864",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "229054491787806080",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "28749225094500413440",
        },
      ],
    },
    "0xbc26974429b83b92a33d636ee1a1316e5823e2ec": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "1000000000000000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "301732858290357504",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2374582994669611",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "298040088567971904",
        },
      ],
    },
    "0x7c92b8efbcf4ca58a6d877f35ab78aaa0d3d13bf": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "3865853934775647076352",
          debt: "2194150610343978336256",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "511900123988812496896",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "4028561344894617088",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "505635213731898261504",
        },
      ],
    },
    "0x51dcd4d4632149f8fdf9fca8c79700595e8034cd": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "9",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "2",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "3",
        },
      ],
    },
    "0x903691fd69d85fababd39f1d06cd726f410cca83": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "17272644482258",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "5289137565775",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "41624555546",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "5224406242938",
        },
      ],
    },
    "0xd13cf36b646adcad473523f7b32baa74f4f8f502": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "1675767052317742858240",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "53545660",
          debt: "0",
        },
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "98678886522552188928",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "543462573054725980160",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "4276952107659744256",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "536811384495424208896",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "12308714",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "1142171",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "20197225",
        },
      ],
    },
    "0xb0b0eb2b7253b7202e391e5123426f7c712f6d27": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "1661423954499",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "508752429857",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "4003789561",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "502526042782",
        },
      ],
    },
    "0x6c2e73d510d9df0b154bb8a0abca71d2ceb27883": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "223822930550633758720",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "67534732585966895104",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "531486124702652288",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "66708206044853911552",
        },
      ],
    },
    "0xe98b3031f2a3fcc8b1175ab93c48de0541a76164": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "2",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "345673822200868",
          debt: "0",
        },
      ],
      claim: [],
    },
    "0x39dac2b94334f3e889274d7f66db4fdc39e2bbd0": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "330380886296491261952",
          debt: "105000000000000016384",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "138494258280905318596608",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "111923184084842758144",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "880815205685662336",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "110553407694683193344",
        },
      ],
    },
    "0x9b2936efcd9426e98c21984de5807e811b66d3b5": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "1177962656",
          debt: "36309121616940095242240",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "42456874419609000000618496",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "2012895506051010396160",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "15841123389074257920",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1988260603438189248512",
        },
      ],
    },
    "0x2a1842bac18058078f682e1996f763480081174a": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "24544175299918823424",
          debt: "106895580991532335104",
        },
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "48944962053087666176",
          debt: "0",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "132285028732795785052160",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "25000000000000000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "38348451753669533696",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "301795375956513024",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "37879122684443533312",
        },
      ],
    },
    "0x78583242f3912f6cc94897de774cfe30701f106f": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "25898",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "7814",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "61",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "7718",
        },
      ],
    },
    "0x766492ea549984ca0aad4b5d17ef66039f4d0cb0": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "759910987060622592",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "43441639484235",
          debt: "0",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "1126444096791538827264",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "116311728972219360",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "915352259820087",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "114888243198941040",
        },
      ],
    },
    "0xc2b21f2db514c35b4a572c692fd945338d846f8e": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "19998999999999998164992",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "6034355432948859142144",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "47489285310397546496",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "5960503731270870630400",
        },
      ],
    },
    "0x8d478398fe9db84ea78b7e9476cdaf2410c5e853": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "932003976702887723008",
          debt: "0",
        },
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "491835766800781213696",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "50000000000000000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "451591451847743307776",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "3553943008301395456",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "446064631700542980096",
        },
      ],
    },
    "0x11047ba5c5fe45e24fa78639e31acca9c9d26447": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "1394057",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "7",
          debt: "83315",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "1853425132",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "1312958290",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "426880",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "3359",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "421656",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "727791036",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "67534444",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1194223757",
        },
      ],
    },
    "0x8e1dfeb00c819b4d3b47ccbd97b248dc9f59ca8e": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "3758775",
          debt: "0",
        },
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "7173624201711269707776",
          debt: "5200000352836404641792",
        },
        {
          address: "0xe10a0f4f7831fc7049f271686005f9a8d274fcee",
          collateral: "437929679348",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "497294775872771",
          debt: "0",
        },
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "1964613099700281822674944",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1212378668174371979264",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "9541200732525774848",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1197540923080026882048",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "101846592",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "9450725",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "167118876",
        },
      ],
    },
    "0x17e22287a6564e9b87b7019bc448f079faf200da": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "350000000000000000000",
          debt: "350000000000000000000",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "700000000000000000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "211213000803250241536",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1662208096268727552",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "208628061997580320768",
        },
      ],
    },
    "0x38a564a38be5dfb6ef2ab765da1e4397d03c2d62": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "53346819938",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "211780894802",
          debt: "186798927143",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "1075806318323083859984384",
          debt: "790258263031376137682944",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "125008993162",
          debt: "124999172283",
        },
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "205174658957639491256320",
          debt: "170188737097442185445376",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "96908296591266686173184",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "762650758130490146816",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "95722280505621073625088",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "18007950077",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "1671024839",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "29549033621",
        },
      ],
    },
    "0x09cc15dda77789d42c0133c909e88fb6e3af793a": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "236",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "199",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "99",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "9",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "164",
        },
      ],
    },
    "0x1b6f00536581aac87611f76fe71e7cb4389c07e6": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "3185928653918",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "975578171751",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "7677623675",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "963638519057",
        },
      ],
    },
    "0x4d396974c5813159c704e96acdada21eb01005ed": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "73457068225393270784",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "3029493897",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "22493633758380728320",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "177020827342502560",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "22218344516897304576",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "696399606",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "64621516",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1142713929",
        },
      ],
    },
    "0x2d5feaae545e4ec422dc5c5b5c3fbecb5b28a416": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "221",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "33000000000000000000",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "91",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "9957184323581794304",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "78361238824097152",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "9835322922743070720",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "71",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "6",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "117",
        },
      ],
    },
    "0x61c41492c69dd33a44e9e4861399736e53dbd4df": {
      positions: [
        {
          address: "0x6de36c1af417a438a69d4aaa3655022e52bbc606",
          collateral: "1",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "0",
        },
      ],
    },
    "0xabea63c0967f2f5faf4b262c0104233ab5a56ac8": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "1054222152629500",
          debt: "28706100914783784",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "304311623879534837760",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "2085",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "9658946302759412",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "88728735157814528",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "698279089781927",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "87642824963767824",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "479",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "44",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "786",
        },
      ],
    },
    "0x3e8ed075563ff3ef9221fc042e17a817f7d101a5": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "305110666924399",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "92061913625976",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "724510601170",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "90935210193180",
        },
      ],
    },
    "0xcaa5c0d44669d971f99f67c2250b20f64933a701": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "1500000000",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "1500000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "689619748",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "63992388",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1131588940",
        },
      ],
    },
    "0xfee16caaffa068347e8167295515908cb65e4b27": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "0",
          debt: "153",
        },
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "11101700708",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "2606976",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "241911",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "4277756",
        },
      ],
    },
    "0xf765288e2fa6855a8bf9c9f748d250a149a9164b": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "679338444512002703360",
          debt: "495134493777933762560",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "56405956632320696320",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "443904671755335488",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "55715630063334350848",
        },
      ],
    },
    "0x4a4f62950ec25bff5267d52e79250aba3f77ad24": {
      positions: [
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "494326520583375880192",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "500000000000000000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "302743182964115046400",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2382534067028761088",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "299038048342572728320",
        },
      ],
    },
    "0x7ec4a166b471214fc3e9bd70d97687f0c8304d2f": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "2",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "27098496359",
          debt: "21222087269",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "1350575659",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "125324951",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "2216143725",
        },
      ],
    },
    "0xb17b6031527db97423837af83b487edaf9ea0c8e": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "2520521296342071808",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "771820660554466816",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "6074088933740342",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "762374702356356224",
        },
      ],
    },
    "0x9320ed7b32db6156e68b8b5d118cc0475c488a57": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "3604696325",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "828623258",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "76891042",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1359678164",
        },
      ],
    },
    "0x4f555e32e41c6f646ca72a93130fd24be10a8016": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "715179992791941120",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "832303975473844191232",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "38865515184173704",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "305864571589357",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "38389858013356328",
        },
      ],
    },
    "0xcda77c9243e2a7f0c3b197fa8733d7cd854ed0b0": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "0",
          debt: "26038693068776",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "1179772965977783140352",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "365509008146015168",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2876489753419144",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "361035711448438016",
        },
      ],
    },
    "0xdc4eb419f1f6f1d8321f8c1ac01ffe03645aa133": {
      positions: [
        {
          address: "0xf58653cce3e68f769a75924dd83dd3bd24c04104",
          collateral: "517941565553530241024",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "66",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "4506814906425564725248",
          debt: "0",
        },
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "6215",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1360014446176125321216",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "10703067589964365824",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1343369854674548555776",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "16",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "1",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "27",
        },
      ],
    },
    "0x2d1992cd36101b9345ae6b8d8e493459ef53828a": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "12514319009",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "11604979774943646",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "3501607549963916",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "27557017784750",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "3458752985123185",
        },
      ],
    },
    "0xabf0f7bd0dc8ce44b084b4b66b8db97f1b9ce419": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "4",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "231",
          debt: "0",
        },
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "806171854483494912",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "248671062214736",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1956996261352",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "245627691417856",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "54",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "5",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "88",
        },
      ],
    },
    "0xc45d05cdc809d20c7b14959e8cd4a1199e3e966f": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "24749534333505135181824",
          debt: "339153237070000422912",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "147",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "273",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "7474817407644674818048",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "58825460392427724800",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "7383336554151586824192",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "96",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "8",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "158",
        },
      ],
    },
    "0xade9c91b6db5befcaf3621442c9d82c0d06dc9d5": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "330000000000000000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "99571843235817979904",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "783612388240971648",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "98353229227430739968",
        },
      ],
    },
    "0xa9248d0396f5e2ee5b16b5be13149186b77c2aba": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "394514631356162310144",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "120806177600489078784",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "950722757231526784",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "119327686336899448832",
        },
      ],
    },
    "0x3f888f4e16a08c6b3745ddbade98e24569852fa4": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "4483148166695008337920",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "63",
          debt: "0",
        },
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "8401444800278057451520",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "92",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "749130727302681",
          debt: "9496226313598821990400",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "32",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1088740319722010312704",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "8568189303185545216",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1075415727528140210176",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "42",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "3",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "70",
        },
      ],
    },
    "0xa99ff8e07c03c9bfeca90070e70848acfe8b9f8f": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "12483834381147",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "3822733540197",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "30084221218",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "3775948862009",
        },
      ],
    },
    "0x65757df30f81d8879f1a57f3061572f01e45b3d5": {
      positions: [
        {
          address: "0x6de36c1af417a438a69d4aaa3655022e52bbc606",
          collateral: "100002",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "0",
          debt: "86",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "3",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "5",
        },
      ],
    },
    "0x164572acff302ac81c257299fc5c2a074f069c34": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "85651390988559",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "25843839019522",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "203386336511",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "25527548156200",
        },
      ],
    },
    "0xc7d0fe5d1b6bc13289fafbcaa29b1195280e0371": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "139703119056788",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "42153021425082",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "331736650814",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "41637129976907",
        },
      ],
    },
    "0x54174bb9b690eb2a28a899f9cd0581227134602d": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "423222261",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "0",
          debt: "100077879",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "74282249",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "6892926",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "121888869",
        },
      ],
    },
    "0x6fdb230daba18114c3e9c952188a99cbefa487c0": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "3450018054015632277504",
          debt: "2587514189910794829824",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "316139000907277795328",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2487956730200944128",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "312269921029035982848",
        },
      ],
    },
    "0xa982050dc95e4419c656c733a24701603c54e122": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "155304713",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "35700399",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "3312773",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "58580365",
        },
      ],
    },
    "0x7f981e37a25c4685d377b0ba9167b3bd933fea70": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "156039889880",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "47781707321",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "376033390",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "47196928974",
        },
      ],
    },
    "0x84b417c678a2da8231ed7ee3233cb629d0cd56df": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "10000000000000000000",
          debt: "2000000196068429824",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "2413862807162572288",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "18996663491776128",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "2384320650107523072",
        },
      ],
    },
    "0x818d1b45a6e6bfe6cd5bb662b76361c3c7db72a8": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "1503542803591",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "465827127",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "3665975",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "460126083",
        },
      ],
    },
    "0x4dd3fbddcebdb85ee45207aa69d527007016c534": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "100252598586176",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "5000004263",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "5002975920",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "1326356138444972097536",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "1437013484",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "133345839",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "2357978536",
        },
      ],
    },
    "0x2e5f476141531d3794f203a9258ecc92cb179fee": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "2648758441926620348416",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "3108470385309347458580480",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "151976493853826646016",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1196027505720082688",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "150116523421048438784",
        },
      ],
    },
    "0xb8a9fe6d753cb8279a636acb8917140633b7fc4d": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "29354577204388",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "8857240483784",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "69704879845",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "8748840789871",
        },
      ],
    },
    "0x5a7db30c139a28cf8d111accdfc621389c341fc3": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "50000000",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "200000000000000000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "60346571658071490560",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "474916598933922176",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "59608017713594376192",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "11493662",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "1066539",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "18859815",
        },
      ],
    },
    "0xa24875087f3b491ebe2d59b46a358172e02c0ffa": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "50000000",
          debt: "0",
        },
        {
          address: "0x6de36c1af417a438a69d4aaa3655022e52bbc606",
          collateral: "98453961346",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "34532892",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "3204435",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "56664617",
        },
      ],
    },
    "0xb359439487ea89d5ebab5c3f68228fd45abebbf6": {
      positions: [
        {
          address: "0x6de36c1af417a438a69d4aaa3655022e52bbc606",
          collateral: "176",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "0",
        },
      ],
    },
    "0xe79f4f05a3b89f19b186fd98ecde7af7ba0e926f": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "1951426404334790246400",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "545372946",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "0",
          debt: "1485120016166550241280",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "149445934265142607872",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1176112459674600960",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "147616934187673812992",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "125366651",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "11633239",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "205712664",
        },
      ],
    },
    "0x04b9d539b8ddfef5b1e762332a367c13eb26f9a1": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "4000000000000000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1224858780879302144",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "9639416961174528",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1209868297423646720",
        },
      ],
    },
    "0x866c521883bc8cb7c59769e2a06ef38cc685915e": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "93628722699448942067712",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "28670490785233311367168",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "225631574410543628288",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "28319605830583257661440",
        },
      ],
    },
    "0x23618291ceef9dec8ed9d1b30df3e2204b5f0355": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "61",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "14",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "1",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "23",
        },
      ],
    },
    "0x5cddc6d054be28b5b7da2c6522bf42d20a9135f7": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "25450884392026334298112",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "29888852652513307742175232",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1466719503283304267776",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "11542817080582088704",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1448768997648465920000",
        },
      ],
    },
    "0x8605c7b18c75e05221653045690e1b01bdee5cba": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "6472878403357104930816",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "17081322972",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1982090487478986473472",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "15598693467235188736",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1957832593324988170240",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "3926539219",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "364358216",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "6443012053",
        },
      ],
    },
    "0x11d79337b270d411a2ee2dcc5fb646c311c0b4c8": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "8024023074",
          debt: "205979",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "739484541",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "68619528",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1213411492",
        },
      ],
    },
    "0xacf89c236462a336917817b1d91fde5488ffb3ac": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "331204612194235",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "101419719378458",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "798154839101",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "100178490063574",
        },
      ],
    },
    "0xe8e50f783ac30c5aba5c2f59ed2c2bde08b9a04f": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "1629514506534817890304",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "498981287974843645952",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "3926892443192915968",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "492874485412103520256",
        },
      ],
    },
    "0x502b6ffbbea3950b63719310405635ca28b028db": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "2592516489743213002752",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "3080332007761756270100480",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "160480783400045674496",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1262954725554938624",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "158516732877599342592",
        },
      ],
    },
    "0x47ac1133be90a1f215d72ce07d8db01f3cb865ab": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "653434870",
          debt: "522747374",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "30041559",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "2787668",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "49294841",
        },
      ],
    },
    "0x1f864a883ee9135741417ab01f106c47d0965c69": {
      positions: [
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "293539264921733",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "90544863857",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "712571694",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "89436726899",
        },
      ],
    },
    "0x253778bfa0b9204d3d6c4bdbf038eb3bcbc2c9a2": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "69",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "138240352582688",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "41711656715841",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "328263190419",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "41201166927412",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "15",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "1",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "26",
        },
      ],
    },
    "0x685ad8cbbb310b27c13f7141d608654f4cf36b93": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "7641819402553",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "0",
          debt: "59923475221112",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "77852251570148592",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "3699239630006",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "29112346492",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "3653966337005",
        },
      ],
    },
    "0x37211495be248bf71e8d9b5a985d6252435f9f0c": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "8772017525527096",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "122118663",
          debt: "0",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "10250951966899924992",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "489825866209497",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "3854840930619",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "483831112644278",
        },
      ],
    },
    "0x62917a155a81992b4c408086d018dc52475cea8d": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "3340236252796426911744",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1022829426112269516800",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "8049482497383977984",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1010311487040888373248",
        },
      ],
    },
    "0x79ee22a5a4ed44a141a8f81209a7da9d1e96103b": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "197122827167087591424",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "2",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "60361906441840058368",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "475037280907274688",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "59623164821995003904",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "0",
        },
      ],
    },
    "0x8961869e37a296524f76b8c6f04f3a080d8fd824": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "63000000000000000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "19009170072292524032",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "149598728664185504",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "18776525579782230016",
        },
      ],
    },
    "0xf72ad45609f3dfa55f88c7da479dc5fc67f1cdf6": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "959131146421903818752",
          debt: "719348388883536412672",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "0",
          debt: "538015118",
        },
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "625450925727",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "73425004018580488192",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "577841495003134464",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "72526389153622917120",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "23199295",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "2152749",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "38067451",
        },
      ],
    },
    "0xf9c3a5174aed54e51210ffc41e382957d94a54f6": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "8408451682357",
          debt: "0",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "3476130841582555",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "3651765161370",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "28738731014",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "3607072886563",
        },
      ],
    },
    "0x70af2e1240d4b465ba9eb7985c36a6dbefcae84c": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "63",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "14",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "1",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "23",
        },
      ],
    },
    "0xdd6531332d309fc9578cc9b1ef66dadeaa46ad5f": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "105018459",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "24140934",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "2240127",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "39612575",
        },
      ],
    },
    "0x2a86ebd12573f4633453899156da81345ac1d57d": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "2082123163539",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "1",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "1",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "3352773105327",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "1",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1649218522202",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "12979051335",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1629034494984",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1",
        },
      ],
    },
    "0x39858bf4b981c4b0c1e5acc79c00d190b20a4411": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "321817400882282627072",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "98545217327604580352",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "775533028116444288",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "97339167721687613440",
        },
      ],
    },
    "0x046cd7b314cb8476f72413f72d30e0e10df9e295": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "638999579268",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "1",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "2688940414996729344",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "811341872860484352",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "6385113723026924",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "801412232715957504",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "0",
        },
      ],
    },
    "0xb488885afc5a3e1055e598d40a60e3350fef602e": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "2653139542298417692672",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "812430316320577159168",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "6393679576098545664",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "802487355216984932352",
        },
      ],
    },
    "0xed229a9524272a9d3b8f9ce9648fd1a317610b66": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "2179398198",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "500985346",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "46488298",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "822060965",
        },
      ],
    },
    "0x082823dd961713d40d1f3aba28235bf6dcc0c646": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "1000348543473549180928",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "301838025308869951488",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2375410640074804224",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "298143968495698313216",
        },
      ],
    },
    "0x729aab0dcf1f346e6bbaaaac9c6d3a1f07997165": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "14429620697735901478912",
          debt: "11961785786650733838336",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "6166636062193805462339584",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "23433600609397956935680",
          debt: "21571210016868718870528",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "3228176869703620755456",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "25405167809756446720",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "3188668697241092882432",
        },
      ],
    },
    "0xeb88911a64e424fb9d922172f1e5b57ce0206b43": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "3285386117978",
          debt: "4321637414643976634368",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "16659379578207",
          debt: "0",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "5083946212694770707333120",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "251757633804025233408",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1981287021229938432",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "248676487876602560512",
        },
      ],
    },
    "0x702ed968ec46e7785bb673e3d6d3ace640ceacb7": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "97",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "22",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "2",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "36",
        },
      ],
    },
    "0xc66eedc1b60e70e63a8281380f74d71df12f9b8c": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "471430985093060",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "767686801840276",
          debt: "9288468853895872",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "241322006785882619904",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "72339662426512128",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "569300053071566",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "71454330558283344",
        },
      ],
    },
    "0x69db96b584b6e25420a4aa2ca4b20e3860d19d8c": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "187",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "42",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "3",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "70",
        },
      ],
    },
    "0xc25a74f2dc4f2b504867b4ee728c53a838db72bd": {
      positions: [
        {
          address: "0xe10a0f4f7831fc7049f271686005f9a8d274fcee",
          collateral: "767600794",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "0",
          debt: "653392",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "28347",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "2630",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "46514",
        },
      ],
    },
    "0x66c12cc019b358137fc3f8527425328c39919716": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "299548891823",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "90383743327",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "711303704",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "89277578249",
        },
      ],
    },
    "0x57b94e72b8cb8123a36706187eabf5ef68b63866": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "0",
          debt: "83",
        },
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "328221119",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "77057",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "7150",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "126442",
        },
      ],
    },
    "0x6b85b90cdd9e0d8963dd948ca8d972e52a6cde2a": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "246322242009085",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "75427490262676",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "593600699384",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "74504367889276",
        },
      ],
    },
    "0x7d4390e53b9f07d913dab03a9a3991365d9d3a1d": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "705772369915981332480",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "0",
          debt: "8265326462",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "68",
          debt: "1005",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "77469861448720",
          debt: "520001304281721995264",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "10964449758",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "59216414667960991744",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "466022467929333632",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "58491692195264151552",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "619982860",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "57530521",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1017322589",
        },
      ],
    },
    "0x83fe9748fac353106c5c988b93ce229f895e0b02": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "395056582334673",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "1",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "1658",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "94632183987426",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "1535",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "149525770314982",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1176740754940",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "147695793160806",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "734",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "68",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1204",
        },
      ],
    },
    "0x2a28ea1f5be7e0f2374362c0f7ee4ecf7884c5a3": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "40753345740240",
          debt: "0",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "20845255591225140",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "18937543445261",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "149035040070",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "18705775558107",
        },
      ],
    },
    "0xa903504a9a8cee76d89000501db3de793b9ccda2": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "7861698565745814798336",
          debt: "364585226460550",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "11000000000000000000000",
          debt: "0",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "3643852638083190095872",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "5727557896975531638784",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "45074844218841817088",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "5657460949281461501952",
        },
      ],
    },
    "0x0c921726fbe2eddb2ebc69618259c1304914abec": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "33466591955473100800",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "10247962255691460608",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "80649608532073600",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "10122542157435037696",
        },
      ],
    },
    "0xba9b8e4355bd706e88be4cfd856f8088aa6ddc72": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "6186547169514253975552",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "8744576164307070948999168",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "814830000186119684096",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "6412564653885522944",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "804857670455019700224",
        },
      ],
    },
    "0x8029fc28c52cc77631c121191fe1375fd1cf52b1": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "31574703289392076",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "1019129771691926",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "9976143083399018",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "78510440833175",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "9854049655015718",
        },
      ],
    },
    "0xc3f7389cd37510dcef2bc5cd9f9eaa9e13027aae": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "16888961",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "3882320",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "360254",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "6370453",
        },
      ],
    },
    "0x02b8231efa006258ecf20f570b919ab6b1d3ab12": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "24197394325485301792768",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "0",
          debt: "327",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "45726263501868828549185536",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "1336501702954250",
          debt: "10000000000000000000000",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "553",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "3739969723194641219584",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "29432884955244576768",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "3694197953309500768256",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "51",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "4",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "85",
        },
      ],
    },
    "0xb4839b528f5cb090385618d397864ed413ec3c93": {
      positions: [
        {
          address: "0xe10a0f4f7831fc7049f271686005f9a8d274fcee",
          collateral: "677485263",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "4",
          debt: "3895",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "836",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "156856",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "14555",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "257383",
        },
      ],
    },
    "0xb05bc92efae79b5371cd7250d7fe3ff8fd9df95c": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "2511214992",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "2498536238",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "999895608",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "1381413897",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "128186546",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "2266745827",
        },
      ],
    },
    "0x9578380ecb0bb6e546c89fb595090645f8abffa2": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "0",
          debt: "17313518463",
        },
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "20119641026867",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "744778568",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "69110780",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1222098399",
        },
      ],
    },
    "0x9220aa515cd8914d740fa6e586bb69a5de8c158d": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "129972302",
          debt: "0",
        },
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "80810059038611865600",
          debt: "28000000000000000000",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "100000000",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "50200000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "16225349039143741440",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "127690560879696208",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "16026774452317569024",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "64401951",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "5976097",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "105676404",
        },
      ],
    },
    "0x5450d6352ab98b6c9ab28106daacd8af72f351f0": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "4487602802631437713408",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1354057220509802692608",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "10656185301960298496",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1337485536754152767488",
        },
      ],
    },
    "0x61125f52cee83ed5d7a6cd14598d34974b11865e": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "7280011944144681304064",
          debt: "6101683827031089872896",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "774457459505670782976",
          debt: "0",
        },
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "501928365764925343137792",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "749325031017825959936",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "5897052399984077824",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "740154386486611148800",
        },
      ],
    },
    "0x37871fdbced02755e6948acd9d82762959fb8bf8": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "485893649706423222272",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "148787775854101037056",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1170932872076772608",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "146966830674818023424",
        },
      ],
    },
    "0x10e31e921df740dab342ff12d44e2c8f8a1aa136": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "773272142116",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "233321613676",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1836198878",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "230466097723",
        },
      ],
    },
    "0x492c1313e2becd36eb57fe73d34c9b108939e1f6": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "341051451",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "78398605",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "7274898",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "128643350",
        },
      ],
    },
    "0x628f9801b3edf1a1c4b7231185ac40b70d34ba29": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "3513996743263304810496",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1076037441741832192000",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "8468219952131086336",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1062868314231053352960",
        },
      ],
    },
    "0xdfcb6b1f3d6b671099ba0f483d2c6632ce3314c2": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "8",
          debt: "99",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "1166822192906292915339264",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "278617235",
          debt: "227",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "276729263047448526848",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "165516182",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "13283556213815",
          debt: "1598353209044995932160",
        },
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "449582913518154481664",
          debt: "0",
        },
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "60808094975057131995136",
          debt: "0",
        },
      ],
      claim: [],
    },
    "0x4ca4eb53123a88d0bdef9c9951fd8bb29b2242d9": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "2200000074247268466688",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "67013760434782001430528",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "17748940017289157148672",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "139680946176264224768",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "17531718900995579707392",
        },
      ],
    },
    "0xe661b73022db70945f21b7c39b3505b3e4e05f8b": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "43172962421948104704",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "13026701352436594688",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "102517782396668096",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "12867273543979134976",
        },
      ],
    },
    "0x828ae2080d961cfff81e418089f1d01c08e6713f": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "110950537757774",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "33477422886505",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "263461260209",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "33067708099991",
        },
      ],
    },
    "0x4aab498defdc86c8011f22f007fcbe3d83c26f14": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "170000011869546315776",
          debt: "40000000000000000000",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "39225275159178608640",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "308695817492272256",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "38745215051436990464",
        },
      ],
    },
    "0xe38498a9db02da420075e3a284f472d90840739b": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "1875000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "431012343",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "39995242",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "707243087",
        },
      ],
    },
    "0x810600abb77ec85aa36a0bb877e6753c75698e2f": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "349057680",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "225911941",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "132170135",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "12264559",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "216876421",
        },
      ],
    },
    "0xaf41166ae5af9474ceba8de0af03a053a110ffac": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "634184594112168",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "196482858377",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1546284540",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "194078195012",
        },
      ],
    },
    "0x917c74a6cdcf6042789cbc7ed8e90fa6293be615": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "3",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "7511991260146",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "2266614594376",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "17837846702",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "2238874540495",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1",
        },
      ],
    },
    "0x16f04722feeb47799749b711ed9dd6bdf6f46328": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "60000000000000000000",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "7",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "10386852299832",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "18372884847244163072",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "144591279082060736",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "18148027557053079552",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "1",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "2",
        },
      ],
    },
    "0xb4d6ea68ef6eb5a36949c35d39921f9d9949b958": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "350000015118066122752",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "2",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "107175147956312932352",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "843449020535106816",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "105863480597286305792",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "0",
        },
      ],
    },
    "0x697b260e66f8a033d15a4332a2d6b0da996a8710": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "9114812780946583977984",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "2209875745",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "2791089617703328022528",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "21965370229646712832",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "2756930755154784288768",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "507895952",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "47129559",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "833400498",
        },
      ],
    },
    "0x18668c448a12714b0422e71f63943f764c721faa": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "12",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "2",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "4",
        },
      ],
    },
    "0x352bb3324833607370ab925e66a2e3b783075d5e": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "116453719",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "3021056523",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "721099302",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "66913493",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1183243369",
        },
      ],
    },
    "0x3343470010e6f8aa444359ae6aa53a06ee497ced": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "2000017680",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "462865979226869",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "139661874917488",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1099113683083",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "137952617443877",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "459750563",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "42661969",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "754399295",
        },
      ],
    },
    "0x28c974c18c6553b445c4b77f35d83f3499acf58f": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "1000744",
          debt: "0",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "719750459293300817920",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "364542",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "205771352534504046592",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "267536",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "848587041516535808",
          debt: "484706777633224512",
        },
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "307378415824365",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "62422491123523780608",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "491253709478982592",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "61658530955171782656",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "375330",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "34828",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "615875",
        },
      ],
    },
    "0xd1db1b014513ffcc2a3b204a8483d9243d08b684": {
      positions: [
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "148217206",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "34805",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "3229",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "57112",
        },
      ],
    },
    "0x0164243fdcbcf38c9a8e9d2c32dc92ef011dae67": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "66029541895322",
          debt: "1709948501985064",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "1059103177181684957184",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "82181913422188",
          debt: "476908943619475",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "327508497098978432",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2577432607862214",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "323500271184294400",
        },
      ],
    },
    "0xd43286c2e873a297199b531c02762acda802f674": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "0",
          debt: "7800303853433147",
        },
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "9047239425738167296",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "437095550308836",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "3439862886296",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "431746138835669",
        },
      ],
    },
    "0x93ae6eef133a1097167a15f585eacf1ddf89151e": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "5265819910436352425984",
          debt: "3555652544201984311296",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "10221186823",
          debt: "6652275445",
        },
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "17225409236672",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "33",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "523678384118678880256",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "4121254120781364736",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "517269325151424020480",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "820397263",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "76127721",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1346180227",
        },
      ],
    },
    "0x839873757ea10e6b8b0820dc8964b9057e050810": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "0",
          debt: "22846181",
        },
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "0",
          debt: "2113041491273971200",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "20471357962511454208",
          debt: "0",
        },
        {
          address: "0xb8330f4027b6cb4402c5d02d535c87579cab2477",
          collateral: "27022866365",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "5527671023493191680",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "43501770695069056",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "5460020399340018688",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "992501",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "92097",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1628584",
        },
      ],
    },
    "0x73d0a216875b5f374274fc66ca3494ba183e0667": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "176",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "98",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "117",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "89",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "8",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "147",
        },
      ],
    },
    "0xaaf7595e927e2af70f6f9f90ef9424bef9c4678c": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "1500000000000000000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "452599287435536236544",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "3561874492004416512",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "447060132851957891072",
        },
      ],
    },
    "0x8fc197172906cf30dae5104b8b7dd2e05ec175f8": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "2491685628926954",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "762990755445486",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "6004599178348",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "753652862396205",
        },
      ],
    },
    "0xd24a96acce72acc44758d45d3c59e97c21674ed6": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "10000000000000000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "3017328582903575040",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "23745829946696112",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "2980400885679719424",
        },
      ],
    },
    "0x0c8ac71c2052366593f695ebcaa409bd3039c0f4": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "0",
          debt: "1656033471",
        },
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "2117974515682",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "116685951",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "10827724",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "191468606",
        },
      ],
    },
    "0x6da43f5ba492912179f648a9978efb1f2b59b396": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "16830061271294009344",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "41582424",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "0",
          debt: "500000000",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "772645953",
          debt: "6802460",
        },
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "49026916360",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "5153612082720283648",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "40557994519029496",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "5090539393959033856",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "82180186",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "7625805",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "134848501",
        },
      ],
    },
    "0x8e0917f6ee8fe42d77bfefd26fa5948e26cb7aa4": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "993461263",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "228327296",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "21187341",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "374659577",
        },
      ],
    },
    "0xb4bd807c9cdde19ae1498c7b7006713268e25997": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "66944621169450141351936",
          debt: "57453208507624686878720",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "7546427570",
          debt: "5596247521",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "13970219518549525790720",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "7121684301722161250304",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "56046366750025900032",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "7034525281949508960256",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "448294225",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "41598892",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "735600725",
        },
      ],
    },
    "0x7abdf455390a678614dab6f42d1a0c3bca71a7df": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "20305",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "6217",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "48",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "6141",
        },
      ],
    },
    "0x0b0263fdf373f0dbeed077bb84714f7e02650389": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "9524140",
          debt: "0",
        },
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "530706899",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "0",
          debt: "1",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "3958688539601318902235136",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1226479556440606375936",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "9652172171554516992",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1211469237058053865472",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "2189345",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "203157",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "3592470",
        },
      ],
    },
    "0x42aed3bb770d7f028d1a649dc9689f5e1a638a58": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "2999924946",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "689473035",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "63978774",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1131348199",
        },
      ],
    },
    "0x2f8ec6866a50a64ac2d0ce211519c6f4172b770b": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "1",
          debt: "0",
        },
        {
          address: "0x6de36c1af417a438a69d4aaa3655022e52bbc606",
          collateral: "67857253",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "200464",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "22821978894054",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "6886140923545",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "54192682986",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "6801864610880",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "61960",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "5749",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "101670",
        },
      ],
    },
    "0x7ae94d1374e622e4c9b75b919c82f749bfd121bf": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "586",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "134",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "12",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "221",
        },
      ],
    },
    "0x5f81ad8264b6fa7b02d5c0ee1cc8eaec5162b00a": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "1263192428037563",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "22101995619327772",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "7055706396496242",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "55527132574931",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "6969354849970438",
        },
      ],
    },
    "0x0e25e126f72f74427975ad446a03adeed6e0caae": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "6",
          debt: "14310889098",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "28711299890",
          debt: "6000001498",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "1931029384",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "179187417",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "3168603419",
        },
      ],
    },
    "0x48202f0943a8d467a2e75842ccc7150d013ea86a": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "4273794",
          debt: "3",
        },
        {
          address: "0xb8330f4027b6cb4402c5d02d535c87579cab2477",
          collateral: "140528596",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "1014902",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "94176",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1665341",
        },
      ],
    },
    "0x58e708e69a042808dd6f5108929b09983e4a1676": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "81179453",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "12000000000000000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "3620794299484289536",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "28494995936035332",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "3576481062815663104",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "18660984",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "1731622",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "30620590",
        },
      ],
    },
    "0x286cae0ddf1c64da5edb9d17a4f867a690e0a2aa": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "22355078703679320064",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "6845453611862374400",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "53872481206159472",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "6761675252498030592",
        },
      ],
    },
    "0xaf79408efb452a1b86bfff6af0f8e86a15d1b7e5": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "48051132056857714688",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "306",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "14498605419603103744",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "114101401056838144",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "14321163654017187840",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "70",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "6",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "115",
        },
      ],
    },
    "0x9a1cf0b8939f1f15f7e6e091f3b71a04562a8f29": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "6864085781",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "2071120222",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "16299341",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "2045772734",
        },
      ],
    },
    "0x6b73f63cf407beb818d011b0f1ea144ffa56fb7b": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "2212981260018935660544",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "695073126",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "2298824228",
          debt: "2304322147",
        },
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "4933870073738531176448",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "0",
          debt: "1690930579",
        },
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "4153537289590",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "838233598142226890752",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "6596746734801543168",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "827974842536209285120",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "745159943",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "69146169",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1222724192",
        },
      ],
    },
    "0xea869669210a69b035b382e0f2a498b87dc6a45c": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "0",
          debt: "3156611662884217",
        },
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "3661288403753167360",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "176904345945826",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1392205190864",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "174739294992580",
        },
      ],
    },
    "0xdbae73777a212e26c0b2cfe1f0f0b32ccf6561a5": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "8243885958653553664",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "2487451273724280320",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "19575791407414312",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "2457008501261365248",
        },
      ],
    },
    "0x253ad9a6f3c0e3e385e50f1686bc7d6645061307": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "30425079956253",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "9316606585842",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "73320007943",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "9202584921412",
        },
      ],
    },
    "0xc6aa0663740bb4418cbfad37267fb06962b5b11f": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "2259916900",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "519396915",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "48196776",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "852272294",
        },
      ],
    },
    "0xc12a184f2239a1dd3d5f214439fb169798d1eb2e": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "214450000000000000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "64706611460367155200",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "509229323206898048",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "63914696993401577472",
        },
      ],
    },
    "0xbae7a58b23f91a6e0d5d06276e7e5db05340d7ba": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "18001316341078",
          debt: "2210002043342377451520",
        },
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "3044647654252995999170560",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "262414244848556015616",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2065152621783127808",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "259202677558238183424",
        },
      ],
    },
    "0xd1275eb5d5ea553bb52f00cf8025f07b50a66329": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "613031536236232",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "184971757650687",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1455694261142",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "182707973354806",
        },
      ],
    },
    "0x3f4b551d6f6af518a6f63c5dfb5eeb4a0c06cb56": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "1675000000000000000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "505402537636348755968",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "3977426516071598080",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "499217148351352930304",
        },
      ],
    },
    "0x7d3bed945ada5746ed6eb5fb8cc3b7c83f3e5590": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "121",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "833803724519678",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "251585981052468",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1979936145136",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "248506935904149",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "27",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "2",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "45",
        },
      ],
    },
    "0xd43a72d2212d8c285299f2b2655f8ccb946e9d8b": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "1000000000000000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "301732858290357504",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2374582994669611",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "298040088567971904",
        },
      ],
    },
    "0xd211dbe903af354658238731b75354f522f11bee": {
      positions: [
        {
          address: "0x6de36c1af417a438a69d4aaa3655022e52bbc606",
          collateral: "814",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "0",
        },
      ],
    },
    "0x1ecdd9c3f1e6772112078ae155a3557e72600f3b": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "14033377317746238",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "697",
          debt: "0",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "16373583330109937664",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "775631740872588",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "6104081446209",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "766139140614716",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "160",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "14",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "262",
        },
      ],
    },
    "0x9963aa58dea8fbdf6239a6a59f0ced8f85958702": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "892259875401",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "269224122542",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2118745126",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "265929212290",
        },
      ],
    },
    "0x32cf8e7884b904e93961e046564bfd90dd7bc7e8": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "3018895259",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "693963263",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "64395439",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1138716162",
        },
      ],
    },
    "0x672fd76b1d6c6287c3dbca06506552ab4f113c43": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "2",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "0",
        },
      ],
    },
    "0xd6cc994556121579d47ea74754b7392a4da778ac": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "2250000000000000000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "678898931153304158208",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "5342811738006624256",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "670590199277936705536",
        },
      ],
    },
    "0x0770882b757be24ff1b753ea1094a85d67aae2dd": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "137298731293881925632",
        },
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "0",
          debt: "57588071833491",
        },
        {
          address: "0xf58653cce3e68f769a75924dd83dd3bd24c04104",
          collateral: "170280757700561165352960",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "10658908823591131136",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "83883683658599456",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "10528459339234512896",
        },
      ],
    },
    "0xc95078df8fd5e5af4d1c7a5702eedcb7cb6c35dd": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "3",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1",
        },
      ],
    },
    "0xac08f4f54d72952d7e9ea7033beb153e7f5ae166": {
      positions: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "15189103",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "3491568",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "323995",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "5729273",
        },
      ],
    },
    "0x72e376572d75114509c025797b7b14f8a96f7b58": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "38506551824279781376",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "11618691944845717504",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "91437003145298848",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "11476496116155545600",
        },
      ],
    },
    "0xd7f4221d6106f002c5283bf0c7008a09dfa3d067": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "20373039638271598592",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "6147215482118439936",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "48377473474769664",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "6071982538189270016",
        },
      ],
    },
    "0x5c0642fe68fc72cf03f676b28faf5cf97cc0b265": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "3609802998093069",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "163",
          debt: "52457140773",
        },
        {
          address: "0x6de36c1af417a438a69d4aaa3655022e52bbc606",
          collateral: "122531965113872",
          debt: "0",
        },
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "79653568496881",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "0",
          debt: "81327572089",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "0",
          debt: "41303084075",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1105374724864681",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "8699099061579",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1091846551834409",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "7132549394",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "661855855",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "11703716467",
        },
      ],
    },
    "0x88b0160a0d18e8f2836887b817b44757586ea7cf": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "200008167",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "200560258",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "224956985",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "143781850",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "13342054",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "235929948",
        },
      ],
    },
    "0xe4b7cae9159da75a1fb7ee6750e5e8e8612ce016": {
      positions: [
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "979714532195525176852480",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "302201884168188329984",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2378274143455552512",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "298503374253731938304",
        },
      ],
    },
  },
} as ClaimData;
