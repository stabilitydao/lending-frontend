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
    "0x2d5feaae545e4ec422dc5c5b5c3fbecb5b28a416": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "91",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "33000000000000000000",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "221",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "9986223243096274944",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "78589769865937824",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "9864006448273080320",
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
    "0xa24875087f3b491ebe2d59b46a358172e02c0ffa": {
      positions: [
        {
          address: "0x6de36c1af417a438a69d4aaa3655022e52bbc606",
          collateral: "98453961346",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "50000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "34508628",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "3202184",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "56624803",
        },
      ],
    },
    "0x917c74a6cdcf6042789cbc7ed8e90fa6293be615": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "7511991260146",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "3",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "2273224900727",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "17889868617",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "2245403946347",
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
          amount: "3148670111646159360",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "24779464010991248",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "3110134985840012288",
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
          amount: "785823286374328704",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "6184287065097215",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "776205956476912768",
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
    "0x7788ea4ce2b1eac4d6e25790bfe6d3d537cce53a": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "286",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "4595474434496",
          debt: "3",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "4747389938098091589632",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "47",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1457960163949881589760",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "11473882665074479104",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1440116859841790345216",
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
    "0x1ecdd9c3f1e6772112078ae155a3557e72600f3b": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "16373583330109937664",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "697",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "14033377317746238",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "777893776701605",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "6121883258857",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "768373492427257",
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
    "0xd47b727c775e7cb52944f8c896c694b6ef10b575": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "578365902852442",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "24",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "175020940063012",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1377383127378",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "172878939248417",
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
          amount: "2930478",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "271930",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "4808588",
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
          amount: "438370286428312",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "3449894828886",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "433005274045875",
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
          amount: "1973982515",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "15534885",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1949823850",
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
          amount: "228166868",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "21172454",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "374396332",
        },
      ],
    },
    "0x8eb0c55e0c1536182db91f699fc85c923283fd0e": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "10000000000000000000000",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "340",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "3026128255483719974912",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "23815081777556922368",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "2989092863113054650368",
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
    "0x20a1e9b0f535ddbfe442d415119bdb3d58dae037": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "3209386059327057",
          debt: "0",
        },
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
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "971201383688515",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "7643179145862",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "959315296490903",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "36468837",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "3384079",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "59841286",
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
          amount: "25551221",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "2370993",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "41926698",
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
          amount: "83058457271760175104",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "653655028883929472",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "82041943001689997312",
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
          amount: "134082950190695440",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1055208555017797",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "132441970611746640",
        },
      ],
    },
    "0xc373956fefaff488103475f77a5190bfea9baf1d": {
      positions: [
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
          address: "0xb8330f4027b6cb4402c5d02d535c87579cab2477",
          collateral: "82899311",
          debt: "0",
        },
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "1548082412290156789760",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "67",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "339736640211799",
          debt: "493827305178087",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "500506548412698368",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "3938895966835299",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "494381078888741056",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "318248",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "29531",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "522209",
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
          amount: "75647465382924",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "595331863774",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "74721650835168",
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
          amount: "430709503",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "39967140",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "706746161",
        },
      ],
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
          amount: "302310212722823593984",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2379126669577936384",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "298610377024994148352",
        },
      ],
    },
    "0x3756c2a65e70d7c556bb716fbf7bd52278a2887e": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "3207697288",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "88",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "1070485617614628585472",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "7678",
          debt: "6174",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "328754411460880367616",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2587237728435922944",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "324730937373165420544",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "736707745",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "68361858",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1208855080",
        },
      ],
    },
    "0x10e6bdbef34d5279e729142a19b0bce07813b6a8": {
      positions: [
        {
          address: "0x6de36c1af417a438a69d4aaa3655022e52bbc606",
          collateral: "1454",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "292",
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
          amount: "886726731920172160",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "6978378922557964",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "875874491145938304",
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
          amount: "3477475",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "322687",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "5706149",
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
          amount: "2286039498637849657344",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "17990717183955955712",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "2258061712285447487488",
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
          amount: "232440319",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "21569003",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "381408587",
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
          amount: "3833882078578",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "30171958198",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "3786960958554",
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
          amount: "1435101107",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "11293986",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1417537565",
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
          amount: "555906666438008569856",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "4374884870765007360",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "549103180341313273856",
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
          amount: "130305504093802872832",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1025480737783087744",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "128710754940846063616",
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
          amount: "12938305761012047872",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "101822125087782960",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "12779959785555656704",
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
          amount: "74230056",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "6888083",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "121803227",
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
          amount: "1877748347863952640",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "14777539709698868",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1854767449182447872",
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
          amount: "19099967921652",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "150313291308",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "18866212196010",
        },
      ],
    },
    "0x8144fa70ea19ff4e62e3cabced0898e87e496014": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "4228849",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "0",
          debt: "8200000000",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "97239435783",
          debt: "6200001474537188229120",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "8600000918223211986944",
          debt: "3011483563397538816",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "11028669690",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "764001973135151202304",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "6012557278581068800",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "754651704257502511104",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "650749856",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "60385505",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1067807790",
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
          amount: "6545451606",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "607376862",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "10740354606",
        },
      ],
    },
    "0x3f888f4e16a08c6b3745ddbade98e24569852fa4": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "32",
          debt: "0",
        },
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "8401444800278057451520",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "4483148166695008337920",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "749130727302681",
          debt: "9496226313598821990400",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "63",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "92",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1091915498717311139840",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "8593177387313983488",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1078552046967595991040",
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
          amount: "11627205204950",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "91504000961",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "11484905186384",
        },
      ],
    },
    "0xc86b634dfdaafb241998476754c9cefab16fd25f": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "502522816",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "1308892558503299776512",
          debt: "600283499028119945216",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "596740230871196631040",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "193480572",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "397697729315773546496",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "3129809164314449408",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "392830489659476213760",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "159880145",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "14835874",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "262345452",
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
          amount: "1041797085590",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "8198754545",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1029047010055",
        },
      ],
    },
    "0x02b8231efa006258ecf20f570b919ab6b1d3ab12": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "45726263501868828549185536",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "553",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "0",
          debt: "327",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "1336501702954250",
          debt: "10000000000000000000000",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "24197394325485301792768",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "3750876890949005344768",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "29518722391764664320",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "3704971633252599070720",
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
          amount: "2130350942124",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "16765476416",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "2104278556432",
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
          amount: "1716389803",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "13507677",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1695383697",
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
          amount: "17854156707353948160",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "140508982487585840",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "17635647892367024128",
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
          amount: "590177",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "54764",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "968415",
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
          amount: "137873938300421",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1085042945443",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "136186562561012",
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
          amount: "11652576449670121472",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "91703668066695648",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "11509965924104765440",
        },
      ],
    },
    "0x47c21a209ce31e847c088f8c95035f11d63273c9": {
      positions: [
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "2615800749527",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "25998028",
          debt: "2250102546",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "102933724",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "9551604",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "168902738",
        },
      ],
    },
    "0x82784592893afcdec068050c6a10a7d0233293f9": {
      positions: [
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
          address: "0xb8330f4027b6cb4402c5d02d535c87579cab2477",
          collateral: "29980930751848",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "0",
          debt: "12154155604785112285184",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "0",
          debt: "50017460205",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "0",
          debt: "25050000000",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "943948265072321101824",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "7428702033941682176",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "932395716263059259392",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "3490910320",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "323934586",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "5728193713",
        },
      ],
    },
    "0xf83f7fda18ed2100ab5b0e24dd49e81ead4b46a1": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "6000374399611721933127680",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "0",
          debt: "5173495949323793334272",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "298889405030932021248",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2352205532055074816",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "295231435025630363648",
        },
      ],
    },
    "0xd84f88ac551b65ffd3007fc536b02c9b643e983d": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "24601000817",
          debt: "17000000",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "3",
          debt: "19654780463",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "443176690283111317504",
          debt: "325504587748163911680",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "36138012671710248960",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "284399620371542400",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "35695736150096351232",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "1131239592",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "104971940",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1856237751",
        },
      ],
    },
    "0x79c51606e4335d13d179eeb5bacf3e702748e8d7": {
      positions: [
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "503275866796",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "0",
          debt: "207",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "118101135",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "10959044",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "193790765",
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
          amount: "145046418217584967680",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1141489064494838144",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "143271261794220097536",
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
          amount: "264388662169090424832",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2080690928815007232",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "261152930892980879360",
        },
      ],
    },
    "0x65e1640c7400a0662041d943ea9566f3b26f8241": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "682",
          debt: "17140",
        },
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
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "2496",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "231",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "4096",
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
          amount: "144934156",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "13448980",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "237820753",
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
          amount: "942",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "87",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1546",
        },
      ],
    },
    "0xaf02f27abf8337fe8c78e9dd22ab85b4661ff50d": {
      positions: [
        {
          address: "0xe10a0f4f7831fc7049f271686005f9a8d274fcee",
          collateral: "470",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "397",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "721",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "0",
          debt: "40094952955522179923968",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "64269665085289415049216",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "7604464154490247839744",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "59845756829872668672",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "7511396614071282302976",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "256",
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
    "0xa2d30b5c2c84f8c0e47a0dfebb3eda04a6a2ca28": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "468812760973390053376",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "2368464393381222023168",
          debt: "1",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "1756181325069441826816",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "177536507450699546624",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1397180187514692608",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "175363719763449610240",
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
          amount: "48314471441888",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "380226147501",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "47723172839858",
        },
      ],
    },
    "0xc66eedc1b60e70e63a8281380f74d71df12f9b8c": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "241322006785882619904",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "767686801840276",
          debt: "9288468853895872",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "471430985093060",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "72550632271665344",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "570960347576869",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "71662718440501080",
        },
      ],
    },
    "0xedfcfda55e53ed0f6eceb2a7e57f042d87dca0cf": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "172141922320506748928",
          debt: "0",
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
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "4339315565038886",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "51779193255280754688",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "407492881214092032",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "51145491515980447744",
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
          amount: "302612825548371984384",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2381508177755692032",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "298909286311305412608",
        },
      ],
    },
    "0x99b6a44fa3d3e0d3f33464ffac5710f31c3db580": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "20",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "234914203385260",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "111",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "71088050847858",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "559450096432",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "70218036878276",
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
          amount: "42369858143883304960",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "333443116553820288",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "41851312930802991104",
        },
      ],
    },
    "0x0164243fdcbcf38c9a8e9d2c32dc92ef011dae67": {
      positions: [
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
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "66029541895322",
          debt: "1709948501985064",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "328463635879029056",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2584949377224055",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "324443720459968064",
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
          amount: "22600057817286",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "177858365428",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "22323466100678",
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
          amount: "157549688156585066496",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1239887536385303040",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "155621509961169371136",
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
          amount: "2420902545054154240",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "19052064955106968",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "2391274231883768832",
        },
      ],
    },
    "0xad2580cefe08749a7d2aee23857734649bbd8713": {
      positions: [
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "19656",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "4703560614",
          debt: "2700000871",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "460241189",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "42707496",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "755204358",
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
    "0x09cc15dda77789d42c0133c909e88fb6e3af793a": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "199",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "236",
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
          amount: "163",
        },
      ],
    },
    "0x54585b45313ab38e2cdeb2a131c5e4bb0836a6c9": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "332027459195139843424256",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "0",
          debt: "285681520697577865216",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "16717747822906241024",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "131565650205875152",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "16513146993759891456",
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
          amount: "14694376718848995328",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "115642085756103888",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "14514538998343012352",
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
          amount: "197055876785",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1550794092",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "194644200511",
        },
      ],
    },
    "0xacadd458df075ef4b6f423a83d5153a98de4ef4a": {
      positions: [
        {
          address: "0x6de36c1af417a438a69d4aaa3655022e52bbc606",
          collateral: "14777334357",
          debt: "0",
        },
        {
          address: "0xfe4812f9e6c7a098cba5c43b8f2c4d9f87a4d6a7",
          collateral: "29194254427375592800256",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "15000000",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "10000000000000000000",
          debt: "0",
        },
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "20740176346982874349568",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "15656741",
          debt: "0",
        },
        {
          address: "0xb8330f4027b6cb4402c5d02d535c87579cab2477",
          collateral: "14977808298",
          debt: "0",
        },
        {
          address: "0xf58653cce3e68f769a75924dd83dd3bd24c04104",
          collateral: "20639621066671215607808",
          debt: "0",
        },
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "14739784624",
          debt: "0",
        },
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "45380983890740240384",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "9807013806423961600",
          debt: "0",
        },
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "10880563579964476096512",
          debt: "0",
        },
        {
          address: "0xe10a0f4f7831fc7049f271686005f9a8d274fcee",
          collateral: "23976569793",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "15000000",
          debt: "0",
        },
        {
          address: "0x037bb13fb35da590d1144b082f4b08ff7c8c531c",
          collateral: "4437930114644563968",
          debt: "0",
        },
        {
          address: "0x02d742f182d2a588c54e7dc998ad19f9d795bc51",
          collateral: "4953278982612035584",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "46889071006434172928",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "369008504007840320",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "46315217224965259264",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "27465844",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "2548658",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "45068380",
        },
      ],
    },
    "0x9578380ecb0bb6e546c89fb595090645f8abffa2": {
      positions: [
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "20119641026867",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "0",
          debt: "17313518463",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "744255269",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "69062221",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1221239723",
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
          amount: "3194193921314279915520",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "25137728155317452800",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "3155101650532465901568",
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
          amount: "21182897788386037760",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "166705572442898432",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "20923650041791381504",
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
          amount: "154939824727284842496",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1219348383464600320",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "153043587450421706752",
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
          amount: "30319558399703740416",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "238609438129362208",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "29948491264725737472",
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
          amount: "28748224861927874560",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "226243327527758368",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "28396388555653599232",
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
    "0x0c8ac71c2052366593f695ebcaa409bd3039c0f4": {
      positions: [
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "2117974515682",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "0",
          debt: "1656033471",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "116603965",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "10820116",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "191334075",
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
    "0xb4839b528f5cb090385618d397864ed413ec3c93": {
      positions: [
        {
          address: "0xe10a0f4f7831fc7049f271686005f9a8d274fcee",
          collateral: "677485263",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "836",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "4",
          debt: "3895",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "156746",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "14545",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "257202",
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
          amount: "303626096711411171328",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2389482438452306432",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "299910156514460303360",
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
          amount: "302718299273729146880",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2382338236888252928",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "299013469192232501248",
        },
      ],
    },
    "0x37211495be248bf71e8d9b5a985d6252435f9f0c": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "10250951966899924992",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "122118663",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "8772017525527096",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "491254383895092",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "3866083106307",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "485242147358721",
        },
      ],
    },
    "0xb4bd807c9cdde19ae1498c7b7006713268e25997": {
      positions: [
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
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "66944621169450141351936",
          debt: "57453208507624686878720",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "7142453829585120264192",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "56209819175957045248",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "7055040621110331703296",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "447979242",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "41569664",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "735083874",
        },
      ],
    },
    "0x502b6ffbbea3950b63719310405635ca28b028db": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "3080332007761756270100480",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "2592516489743213002752",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "160948806126283390976",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1266637979719367424",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "158979027688877326336",
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
          amount: "30586944257571102720",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "240713716445964992",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "30212604710016884736",
        },
      ],
    },
    "0xabea63c0967f2f5faf4b262c0104233ab5a56ac8": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "304311623879534837760",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "9658946302759412",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "1054222152629500",
          debt: "28706100914783784",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "2085",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "88987501744345120",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "700315535992810",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "87898424625021152",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "478",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "44",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "785",
        },
      ],
    },
    "0xa788d847f4a0a3d7d7a453e6b1d0949a6477853d": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "656248707270634897408",
          debt: "433085517651771064320",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "0",
          debt: "168561908",
        },
        {
          address: "0xe10a0f4f7831fc7049f271686005f9a8d274fcee",
          collateral: "314288600",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "152411245",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "1175090182230969024512",
          debt: "697891551443983400960",
        },
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "192534329303360390299648",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "103424531",
          debt: "29",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "272503738157189398528",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2144555108377605632",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "269168690197197586432",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "20114293",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "1866480",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "33005307",
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
    "0xb7fb475d4648bdd74a1c34bedb7b8f9a94730629": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "639034956",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "317275247848609611776",
          debt: "0",
        },
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "5821581825467",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "1355435581356049170432",
          debt: "1049680364351263997952",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "921217002",
          debt: "4940000000",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "189911350839883071488",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1494567965697530112",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "187587113134077739008",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "589725597",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "54722837",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "967673800",
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
          amount: "13511",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "1253",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "22170",
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
          amount: "1264993268650271744",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "9955268117395008",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1249511597651755264",
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
          amount: "13250",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "1229",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "21742",
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
          amount: "28327",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "2628",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "46481",
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
          amount: "136447643509103558656",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1073818263530541568",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "134777723535865495552",
        },
      ],
    },
    "0xe863d5789202914cd57316980972eb7889fad206": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "851929462577824923648",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "300000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "257804781838581628928",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2028876982000101888",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "254649627646711660544",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "68913520",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "6394742",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "113079385",
        },
      ],
    },
    "0x2bcd8898a678050efa5f41f4c6012045dee1b5c3": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "40029835767221854208",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "80032181",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "12113541707756288000",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "95331381233856144",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "11965289640339052544",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "18384331",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "1705950",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "30166632",
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
          amount: "90808926962",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "714649822",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "89697558257",
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
          amount: "287482184270953349120",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2262432768867907328",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "283963821995740168192",
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
          amount: "302612825548371968",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2381508177755692",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "298909286311305472",
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
          amount: "150175915679855",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1181857281314",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "148337981695481",
        },
      ],
    },
    "0xe167720b29882a19a5a6f4bc974e8037b126e10a": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "8476523922872",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "85988722841",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "3075643328219611",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "923663408850714",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "5431",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1214395927526636",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "9557076198594",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1199533494122570",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "19748911767",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "1832575167",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "32405757195",
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
          amount: "70548",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "6546",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "115762",
        },
      ],
    },
    "0xd929588402bd21789b0cf2dc10511e9fdfbcae45": {
      positions: [
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "926004483587231436505088",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "6981288723474579193856",
          debt: "5393715302524970336256",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "774023622796286230528",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "6091425847946382336",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "764550703556172185600",
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
          amount: "32159642",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "2984213",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "52770380",
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
          amount: "16531929221699",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "130103291439",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "16329602540977",
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
          amount: "40739838440",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "3780401528",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "66849522050",
        },
      ],
    },
    "0x2a1842bac18058078f682e1996f763480081174a": {
      positions: [
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
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "48944962053087666176",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "24544175299918823424",
          debt: "106895580991532335104",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "38460290358619553792",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "302675525539712640",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "37989592548128538624",
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
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "1326356138444972097536",
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
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "1588110682",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "147366712",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "2605912153",
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
          amount: "689135205",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "63947425",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1130793858",
        },
      ],
    },
    "0x3343470010e6f8aa444359ae6aa53a06ee497ced": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "462865979226869",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "2000017680",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "140069181824056",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1102319114733",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "138354939508486",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "459427531",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "42631993",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "753869236",
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
          amount: "307243080902716162048",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2417947449526429184",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "303482874099258949632",
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
          amount: "25919209439196",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "203979488075",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "25601996151960",
        },
      ],
    },
    "0x0fc587968c33acda9a16c5fa6e66258ff8aa2f61": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "451315466469765939200",
          debt: "180660071551036981248",
        },
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
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "81903793806267039744",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "644568036352649344",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "80901410931461799936",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "126404731",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "11729566",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "207416038",
        },
      ],
    },
    "0x38a564a38be5dfb6ef2ab765da1e4397d03c2d62": {
      positions: [
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "205174658957639491256320",
          debt: "170188737097442185445376",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "53346819938",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "125008993162",
          debt: "124999172283",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "1075806318323083859984384",
          debt: "790258263031376137682944",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "211780894802",
          debt: "186798927143",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "97190917875913837248512",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "764874936498922979328",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "96001442918308566269952",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "17995297256",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "1669850737",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "29528271755",
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
    "0xd13cf36b646adcad473523f7b32baa74f4f8f502": {
      positions: [
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "1675767052317742858240",
          debt: "0",
        },
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "98678886522552188928",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "53545660",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "545047515685615239168",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "4289425319361517056",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "538376929742176321536",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "12300066",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "1141369",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "20183034",
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
          amount: "745570025567",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "5867501186",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "736445336821",
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
    "0xdd3f9005e5c045d7515b3beb4ff92fda1df8cd9b": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "2182170397",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "1753",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "501176446",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "46506031",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "822374540",
        },
      ],
    },
    "0x6c4803d61799377874519a206a2427ae11c7d9f6": {
      positions: [
        {
          address: "0x6de36c1af417a438a69d4aaa3655022e52bbc606",
          collateral: "11506258",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "58",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "2704",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "250",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "4436",
        },
      ],
    },
    "0x73d0a216875b5f374274fc66ca3494ba183e0667": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "117",
          debt: "0",
        },
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
          amount: "35675315",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "3310445",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "58539205",
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
          amount: "3026128255483719680",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "23815081777556920",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "2989092863113054208",
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
          amount: "6235",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "49",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "6159",
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
          amount: "1734",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "160",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "2846",
        },
      ],
    },
    "0x5a7db30c139a28cf8d111accdfc621389c341fc3": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "200000000000000000000",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "50000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "60522565109674393600",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "476301635551138368",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "59781857262261092352",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "11485586",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "1065790",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "18846564",
        },
      ],
    },
    "0x85378cdccf0aed81fb31cb19529156c0444546f4": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "44631271",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "2045915264486872186880",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "907686347438368096256",
          debt: "907652400760162091008",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "847287666",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "619130624306310938624",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "4872445978495966208",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "611553369258271309824",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "204884246",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "19011973",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "336192152",
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
          amount: "177420265998799",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1396265388322",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "175248900937234",
        },
      ],
    },
    "0xe79f4f05a3b89f19b186fd98ecde7af7ba0e926f": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "0",
          debt: "1485120016166550241280",
        },
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
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "149881775193246498816",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1179542448911174656",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "148047441059048882176",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "125278565",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "11625065",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "205568125",
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
          amount: "11495195",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "1066682",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "18862331",
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
          amount: "96120926478956",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "756454297825",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "94944546654099",
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
          amount: "10277849193751412736",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "80884813326413936",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "10152063323001442304",
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
          amount: "2077160392",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "16346876",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "2051738981",
        },
      ],
    },
    "0xe19763baa197e17a5663f8941177bfbbd31a7ab0": {
      positions: [
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
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "4385402807042",
          debt: "2616336178018734047232",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "267546105014164979712",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2105539432650609664",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "264271731246798340096",
        },
      ],
    },
    "0x05a9b863da79557856529fb2ffeaddb01b66bf17": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "213875422193697670823936",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "0",
          debt: "262800161520202",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "66455979536553377792",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "522996533409547840",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "65642655358024884224",
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
    "0xc2d5904602e2d76d3d04ec28a5a1c52e136c4475": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "50750884090327733421211648",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "47915739816",
          debt: "0",
        },
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "118619630057118",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "38466233940690289557504",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "0",
          debt: "90692680000",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "3956200021947900755968",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "31134578278474625024",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "3907781908854325379072",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "18009498983",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "1671168568",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "29551575202",
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
          amount: "6967505",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "646540",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "11432898",
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
          amount: "5610787885096",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "44155885355",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "5542120031889",
        },
      ],
    },
    "0x9220aa515cd8914d740fa6e586bb69a5de8c158d": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "50200000",
          debt: "0",
        },
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "80810059038611865600",
          debt: "28000000000000000000",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "129972302",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "100000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "16272668300245110784",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "128062954901906128",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "16073514594738690048",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "64356700",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "5971898",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "105602153",
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
          amount: "6051953898141891166208",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "47627782046936080384",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "5977886816939797381120",
        },
      ],
    },
    "0xa01827ed961bf2d9e065a06690a929db62f8cf6b": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "613235659551855769288704",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "516600462708452163584",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "31894559383746363392",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "251004410869442592",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "31504216535875989504",
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
          amount: "60098209196294217728",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "472962031302169280",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "59362694845795115008",
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
          amount: "605859505360909440",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "4768004673871255",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "598444669435869696",
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
          amount: "19064608009547436032",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "150035015198608608",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "18831285037612244992",
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
          amount: "22907034",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "2125629",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "37587883",
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
          amount: "30020451",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "2785709",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "49260205",
        },
      ],
    },
    "0xf4bb7b8cf001338e24f305b033a76c5c3629cbe7": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "7968973357968536",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "106421889",
          debt: "6845859771769",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "373761238682",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2941433314",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "369186946730",
        },
      ],
    },
    "0x1aecfa80d1057d09f78d0d5d9c77e10183719ccd": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "2520358743578660352",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "2160823516009519",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "119528363065597",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "940666588068",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "118065510386588",
        },
      ],
    },
    "0xd940d9a6f3654f35d49d9f1b5213748ef0c4819e": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "184",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "698821088703223",
          debt: "0",
        },
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "198680866887177895936",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "10000000000000000000000",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "2544916761",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "3132298225843377799168",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "24650620232298287104",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "3093963468020132610048",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "584597287",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "54246962",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "959258817",
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
          amount: "595666662",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "55274130",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "977422424",
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
          amount: "60537944615478542336",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "476422669478818240",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "59797048545364869120",
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
    "0x0b4d7235604dde67af4f1167d6f9b651f54d13dd": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "8388710552",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "33993277",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "2548971001",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "20059940",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "2517775316",
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
          amount: "1149871669",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "106700880",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1886810907",
        },
      ],
    },
    "0xa903504a9a8cee76d89000501db3de793b9ccda2": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "3643852638083190095872",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "11000000000000000000000",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "7861698565745814798336",
          debt: "364585226460550",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "5744261624392818098176",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "45206299530992533504",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "5673960247458899427328",
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
          amount: "506876482793522987008",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "3989026197740783104",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "500673054571436507136",
        },
      ],
    },
    "0x82ba77eb696829c1f53c68ce3f21b40419c06c40": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "3256652177932440035131392",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "288567054097",
          debt: "2786244605033392373760",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "11144681041130",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "168764089883165425664",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1328142848671198208",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "166698663781157011456",
        },
      ],
    },
    "0x0770882b757be24ff1b753ea1094a85d67aae2dd": {
      positions: [
        {
          address: "0xf58653cce3e68f769a75924dd83dd3bd24c04104",
          collateral: "170280757700561165352960",
          debt: "0",
        },
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "0",
          debt: "57588071833491",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "137298731293881925632",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "10689994237437229056",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "84128320240506560",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "10559164312992948224",
        },
      ],
    },
    "0x5db60d88755ebb70d05073d6b41f0f8d0122823a": {
      positions: [
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
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "0",
          debt: "1875303371781477761024",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "4907303509366581231616",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "371127680845181288448",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2920707690834548736",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "366585619795782926336",
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
          amount: "8883071550597",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "69908165666",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "8774355722133",
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
          amount: "76815363210669516128256",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "604523008342358622208",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "75875255298373653102592",
        },
      ],
    },
    "0xb332db7267ed7cf71a159267add3f1e33d246ef5": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "2472520604774123",
          debt: "21008010562636064227328",
        },
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
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "2580022270919857668096",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "20304308404156825600",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "2548446564584404287488",
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
    "0x89f6b520a1715373fa21e311d6833d19b3cec5dc": {
      positions: [
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "83358727067",
          debt: "0",
        },
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
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "4709855",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "437045",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "7728346",
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
          amount: "1513746950396763701248",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "11912914579512367104",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1495220897458904891392",
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
          amount: "183128793862700072960",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1441190469624835328",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "180887564753265754112",
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
          amount: "360479005659494023168",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2836904544054425088",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "356067268849663213568",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "281874948",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "26156227",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "462525289",
        },
      ],
    },
    "0x7d2c48765c8552a8f15e3c07e59f97c0a6e84d36": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "409641300708915563986944",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "344862715217586159616",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "21375055730153316352",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "168217820672662656",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "21113456250859429888",
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
          amount: "2297117",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "213158",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "3769312",
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
          amount: "59426565",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "5514412",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "97512352",
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
          amount: "13610271719080",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "107110375582",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "13443701861218",
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
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "10386852299832",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "7",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "18426467135870109696",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "145012961997562816",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "18200954076684509184",
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
          amount: "30272088360472100864",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "238235857510551104",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "29901602189478559744",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "11864211",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "1100924",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "19467845",
        },
      ],
    },
    "0x8e1dfeb00c819b4d3b47ccbd97b248dc9f59ca8e": {
      positions: [
        {
          address: "0xe10a0f4f7831fc7049f271686005f9a8d274fcee",
          collateral: "437929679348",
          debt: "0",
        },
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "1964613099700281822674944",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "497294775872771",
          debt: "0",
        },
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "7173624201711269707776",
          debt: "5200000352836404641792",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "3758775",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1215914423406180433920",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "9569026486387447808",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1201033405829216993280",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "101775032",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "9444084",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "167001454",
        },
      ],
    },
    "0xe98b3031f2a3fcc8b1175ab93c48de0541a76164": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "345673822200868",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "2",
          debt: "0",
        },
      ],
      claim: [],
    },
    "0x3aec2b5fa113c7eb7b3be0c365d073d579b1074f": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "39898618316358180864",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "17385898",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "12073833624189175808",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "95018885801560048",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "11926067525749803008",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "3993744",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "370594",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "6553288",
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
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "2674842021982125",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "2000000110",
          debt: "0",
        },
      ],
      claim: [],
    },
    "0xd246c4a039508379cd70ce624cdb7c8b1c991f37": {
      positions: [
        {
          address: "0x6de36c1af417a438a69d4aaa3655022e52bbc606",
          collateral: "517246950",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "2",
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
          amount: "120957",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "11224",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "198477",
        },
      ],
    },
    "0x8d478398fe9db84ea78b7e9476cdaf2410c5e853": {
      positions: [
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
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "932003976702887723008",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "452908463504600465408",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "3564307651720990208",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "447365525057265336320",
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
    "0xb0bcffe2d1c8f8ce141e3b4dd3edffb705af7d55": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "12505987562481",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "9257854",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "1749225",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "3889239423",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "30607610",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "3841640810",
        },
      ],
    },
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
          amount: "9223906563111",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "72590475539",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "9111019411638",
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
          amount: "8251988209676",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "64941653971",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "8150995920063",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "230810257",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "21417744",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "378733838",
        },
      ],
    },
    "0xeed2a75957c32e3392736d001438c2ec339513bb": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "578244820199412989952",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "12008473435347",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "265650952599327296",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "98094262358640912",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "771984094113265",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "96893731783249776",
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
          amount: "208320",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1639",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "205771",
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
          amount: "7142182220852",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "56207681664",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "7054772336471",
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
          amount: "754786879678097522688",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "5940036160591480832",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "745549390092369526784",
        },
      ],
    },
    "0x03174f008c56cd02034955d81fde78d5001f8197": {
      positions: [
        {
          address: "0xf58653cce3e68f769a75924dd83dd3bd24c04104",
          collateral: "783048352564909547978752",
          debt: "0",
        },
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
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "484262027081006448640",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "3811054523482571264",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "478335366784748748800",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "689153008",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "63949077",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1130823071",
        },
      ],
    },
    "0xb368d7e406a3bb8c04308522559d7de2a6cb41ab": {
      positions: [
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "4",
          debt: "0",
        },
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "9666417392893314",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "2990390369946",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "23533831085",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "2953792357124",
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
          amount: "49314576",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "4576083",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "80919708",
        },
      ],
    },
    "0xb4d6ea68ef6eb5a36949c35d39921f9d9949b958": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "2",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "350000015118066122752",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "107487711266814754816",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "845908837228855936",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "106172218589140729856",
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
          amount: "5304562693510",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "41745948510",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "5239642589627",
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
          amount: "37254258327476",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "293184271692",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "36798320588507",
        },
      ],
    },
    "0x3344b131d3f71ae43bbb5f9da3d3058e2dc74ec0": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "1824244443444629760",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "2470000000000000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1310595866553500160",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "10314152310874386",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1294556086326332416",
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
          amount: "67731689436444303360",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "533036139475578560",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "66902752430994817024",
        },
      ],
    },
    "0xf46b5e722000087b0f72521c465f712cbd41956e": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "7286976862067288064",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "8510432005",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "31046988874317983383552",
          debt: "6975502563269727",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "15454181901443885170688",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "7499860171",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "22697043443489953546240",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "178621624756308475904",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "22419264764393841229824",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "5856714186",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "543466349",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "9610213469",
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
          amount: "737031529845268736",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "5800304770326807",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "728011339822619520",
        },
      ],
    },
    "0x766492ea549984ca0aad4b5d17ef66039f4d0cb0": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "1126444096791538827264",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "43441639484235",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "759910987060622592",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "116650938012290528",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "918021773583868",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "115223300815531744",
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
          amount: "303083219283246907392",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2385210091329050112",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "299373923113536126976",
        },
      ],
    },
    "0x28e8469dfd89e9f09abf3bcdcfb9f802c3f022f4": {
      positions: [
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "469079766",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "2",
          debt: "406917",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "16603",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "1540",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "27244",
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
          amount: "250450656809335291904",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1971001348785777152",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "247385506372430921728",
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
          amount: "688988594",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "63933820",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1130553287",
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
          amount: "1957397401733523308544",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "15404363350756229120",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1933441714902618079232",
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
          amount: "302612825548371968",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2381508177755692",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "298909286311305472",
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
          amount: "774071581830311040",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "6091803276865731",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "764598075641630208",
        },
      ],
    },
    "0xb36c1fb9a64e9e20759c799598668ec48cd4899f": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "2501007786",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "1011187027",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "806684510",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "74855263",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1323679131",
        },
      ],
    },
    "0x96e3e323966713a1f56dbb5d5bfabb28b2e4b428": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "5620138155",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "3018323102304635453440",
          debt: "0",
        },
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
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "913383282406333480960",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "7188161151247419392",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "902204804366803927040",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "7638557159",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "708810203",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "12534018660",
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
          amount: "51448897395061344",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "404893512562859",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "50819237994931384",
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
          amount: "90647336544",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "713378135",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "89537945470",
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
          amount: "121158494154465476608",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "953495424757872000",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "119675691050559258624",
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
          amount: "101715497680084",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "800482560812",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "100470648470560",
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
          amount: "1079175574335330975744",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "8492916487781074944",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1065968040662585835520",
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
          amount: "3026128255483719680",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "23815081777556920",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "2989092863113054208",
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
          amount: "1787778340871",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "14069492035",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1765898543739",
        },
      ],
    },
    "0x2a28ea1f5be7e0f2374362c0f7ee4ecf7884c5a3": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "20845255591225140",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "40753345740240",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "18992772492152",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "149469682675",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "18760328682086",
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
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "349333617166891",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "29796932",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "125003727099371",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "983756712220",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "123473863957407",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "6844704",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "635145",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "11231395",
        },
      ],
    },
    "0xf8057d4dcf947fe27027602aa6efa3de24029517": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "4627906132125802",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "1",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1437997877928",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "11316783086",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1420398883061",
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
          amount: "2494705623446700544",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "19632881827018760",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "2464174068332925440",
        },
      ],
    },
    "0x2d8bd6e540c4a6dfe70304ab77654a0ac2414613": {
      positions: [
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
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "107788740498159861760",
          debt: "68362137566217240576",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "192592540",
          debt: "288634268",
        },
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "40375672491",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "0",
          debt: "27672041",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "17587039455572715520",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "138406818052275248",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "17371799765815615488",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "17856461",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "1656967",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "29300457",
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
          amount: "4753942274687490850816",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "37412665452069650432",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "4695760960947237158912",
        },
      ],
    },
    "0xeb88911a64e424fb9d922172f1e5b57ce0206b43": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "5083946212694770707333120",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "16659379578207",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "3285386117978",
          debt: "4321637414643976634368",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "252491854385628446720",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1987065204346255360",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "249401722670086258688",
        },
      ],
    },
    "0xd3d99ab6981587d5522854ca370726eef63a8e4d": {
      positions: [
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "999738184968",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "0",
          debt: "620964734",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "91960579",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "8533365",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "150897033",
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
          amount: "1119389122463745441792",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "8809389834708278272",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1105689433664774602752",
        },
      ],
    },
    "0x9021374a2f3c8173d3515fd968ef4456c7b9e026": {
      positions: [
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
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "8215000000000000262144",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "33676301793187889938432",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "265026401216513474560",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "33264153019174908592128",
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
          amount: "270009282018",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2124924189",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "266704762560",
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
          amount: "4912350",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "455835",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "8060618",
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
    "0xe4234325e9166b40c9a36f34c4d092cbde01394b": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "77925572774",
          debt: "77687365041",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "21356455716",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "4960537337",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "460306757",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "8139687412",
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
          amount: "149221697343083905024",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1174347755674795776",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "147395441598204919808",
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
          amount: "5240436699615",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "41241288542",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "5176301404288",
        },
      ],
    },
    "0x2f8ec6866a50a64ac2d0ce211519c6f4172b770b": {
      positions: [
        {
          address: "0x6de36c1af417a438a69d4aaa3655022e52bbc606",
          collateral: "67857253",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "22821978894054",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "1",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "200464",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "6906223517734",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "54350729368",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "6821701423433",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "61917",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "5745",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "101599",
        },
      ],
    },
    "0xbe89d2368243de3ead0e2df165664c346780cd11": {
      positions: [
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "62521584788",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "0",
          debt: "53800000",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "2313130",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "214643",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "3795588",
        },
      ],
    },
    "0xcda77c9243e2a7f0c3b197fa8733d7cd854ed0b0": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "1179772965977783140352",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "0",
          debt: "26038693068776",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "366574970804176640",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2884878686647580",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "362088628279732736",
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
          amount: "36167673512022080",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "284633045817518",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "35725033985021024",
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
          amount: "3489115",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "323768",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "5725248",
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
          amount: "34781",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "3227",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "57072",
        },
      ],
    },
    "0xf17ac82cb2c92853100f150591973857b1b48d7f": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "2399638131257095",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "171827972335853",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "778930974279674",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "6130045816110",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "769397996221049",
        },
      ],
    },
    "0x17e22287a6564e9b87b7019bc448f079faf200da": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "700000000000000000000",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "350000000000000000000",
          debt: "350000000000000000000",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "211828977883860369408",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1667055724428984320",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "209236500417913782272",
        },
      ],
    },
    "0xfee16caaffa068347e8167295515908cb65e4b27": {
      positions: [
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "11101700708",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "0",
          debt: "153",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "2605144",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "241741",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "4274750",
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
          amount: "693475668",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "64350193",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1137916072",
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
          amount: "6462185834798938112",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "50856233154898608",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "6383098113539854336",
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
          amount: "234002067843",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1841553930",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "231138224124",
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
          amount: "37183421",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "3450388",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "61013839",
        },
      ],
    },
    "0x2993cde4b5bf342c13a5ed8fa4b21f7dfbec7e68": {
      positions: [
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "9853277327655355958689792",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "18467654353526912",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "626351305332625",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "3048202513635752280064",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "23988802194765586432",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "3010896964568829919232",
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
          amount: "99630422706475057152",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "784073398074793600",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "98411091770880016384",
        },
      ],
    },
    "0x5f81ad8264b6fa7b02d5c0ee1cc8eaec5162b00a": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "22101995619327772",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "1263192428037563",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "7076283507806755",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "55689070717413",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "6989680127476532",
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
          amount: "6301499109237638144",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "49591657701800872",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "6224377958932424704",
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
          amount: "151306412774185992192",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1190754088877846016",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "149454643155652706304",
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
          amount: "60696",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "5632",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "99596",
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
          amount: "32673637216109867008",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "257135612432098368",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "32273759592852299776",
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
          amount: "58195920193674",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "457991361080",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "57483687083646",
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
          amount: "11485586",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "1065790",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "18846564",
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
          amount: "151306412774185992192",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1190754088877846016",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "149454643155652706304",
        },
      ],
    },
    "0x8868a2eae35f1f53d3f8e464c060be9755c8d51c": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "5937167224906277348966400",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "13514521691",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "8982132449835231477760",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "4000244755956077953024",
          debt: "220010000000000032768",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "5723863502606038990848",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "45045770003673112576",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "5653811768906053844992",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "3104444227",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "288072956",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "5094046043",
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
          amount: "92330401022940",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "726623548400",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "91200411696338",
        },
      ],
    },
    "0xdb2b56dbd6392ffb3b0a7c121f00d2d1ce6a2d67": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "73018578321783",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "35407869303312",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "32970388783060",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "259470993565",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "32566879353814",
        },
      ],
    },
    "0xd0f54ca35479bd757a2ad4a34da98e2187f5224e": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "13805164433667",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "2628960",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "11638120477",
          debt: "1",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "7864537449",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "61892486",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "7768286991",
        },
      ],
    },
    "0x455743dee598d3cf6f75a1cf96de53a837c946c5": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "2441627898192651331043328",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "0",
          debt: "2040941885654795026432",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "11067476363875",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "141055286040439504896",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1110079576476107648",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "139328975248754622464",
        },
      ],
    },
    "0x5d47e5d242a8f66a6286b0a2353868875f5d6068": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "17719920462132006323486720",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "0",
          debt: "14086405821719946199040",
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
          amount: "1243263617990227918848",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "9784259698789840896",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1228047886195317276672",
        },
      ],
    },
    "0xfd25508e72c88c096c1195b54397a4f948c36451": {
      positions: [
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
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "27163378444004",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "8342092073435",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "65650755074",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "8239997044062",
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
          amount: "13064692145799399424",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "102816763065808592",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "12904799385489315840",
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
    "0x48202f0943a8d467a2e75842ccc7150d013ea86a": {
      positions: [
        {
          address: "0xb8330f4027b6cb4402c5d02d535c87579cab2477",
          collateral: "140528596",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "4273794",
          debt: "3",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "1014189",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "94110",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1664171",
        },
      ],
    },
    "0x5c0642fe68fc72cf03f676b28faf5cf97cc0b265": {
      positions: [
        {
          address: "0x6de36c1af417a438a69d4aaa3655022e52bbc606",
          collateral: "122531965113872",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "0",
          debt: "41303084075",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "3609802998093069",
          debt: "0",
        },
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "79653568496881",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "163",
          debt: "52457140773",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "0",
          debt: "81327572089",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1108598416083559",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "8724468928128",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1095030789778642",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "7127537893",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "661390819",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "11695493153",
        },
      ],
    },
    "0x615b12d8de9d8c649de8b5813e23ba11b3f15aff": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "77559461435789221837144064",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "6851158844299001462784",
          debt: "63485456149618676989952",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "6961260578307423862784",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "54783861076230045696",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "6876064910726293094400",
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
          amount: "20566247581768",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "161852646902",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "20314546733530",
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
          amount: "3116912103148231327744",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "24529534230883627008",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "3078765649006445985792",
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
          amount: "14590874615798",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "114827542934",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "14412303609943",
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
          amount: "3177269319",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "25004534",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "3138384180",
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
          amount: "299093432",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "27753994",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "490778898",
        },
      ],
    },
    "0x7dd25a7d5beac9e3477ca3b58399fa7c185eab6a": {
      positions: [
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "5886592409814",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "0",
          debt: "5004435780",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "231799018",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "21509495",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "380356284",
        },
      ],
    },
    "0xe005fb7e43d08f407c2289397216f5aaa091cf48": {
      positions: [
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "5428613",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "60",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "1287",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "119",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "2112",
        },
      ],
    },
    "0x7e1e1c5ac70038a9718431c92a618f01f8dada18": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "120000000000000000000",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "400000000000000000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "159156632350307188736",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1252533896405276928",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "157208787503742648320",
        },
      ],
    },
    "0xf44a2c87bd60a59362373a39ad90765323d01e12": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "23054678994963207815168",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "86308093884217",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "1346006839228684042240",
          debt: "19651328771524669440",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "414497684373878276096",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "3262021770585524736",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "409424837791880118272",
        },
      ],
    },
    "0x4ad8c6d982ea20c6b105c480c866fef79dde36db": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "504350608134856",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "674350426396345",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "359721193435354",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2830940698980",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "355318731140909",
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
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "61184",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "0",
          debt: "53",
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
    "0xb851558906290e8a797278cdcbc029a9faf6658e": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "129000251287970201600",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "7905796003",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "62655189157905121280",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "493085000901686208",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "61888381105299841024",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "1816054117",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "168518433",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "2979941855",
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
          amount: "50367883165",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "396386126",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "49751453801",
        },
      ],
    },
    "0xdfcb6b1f3d6b671099ba0f483d2c6632ce3314c2": {
      positions: [
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "449582913518154481664",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "13283556213815",
          debt: "1598353209044995932160",
        },
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
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "165516182",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "276729263047448526848",
          debt: "0",
        },
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "60808094975057131995136",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "278617235",
          debt: "227",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "11939046",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "1107868",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "19590640",
        },
      ],
    },
    "0x83fe9748fac353106c5c988b93ce229f895e0b02": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "1535",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "1",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "94632183987426",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "395056582334673",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "1658",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "149961844075235",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1180172576523",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "148126530014805",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "733",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "68",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1203",
        },
      ],
    },
    "0xd7e55bdaf3e52c747f6ef0104cf9742a52074518": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "74",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "825",
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
          amount: "338",
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
          amount: "45283026477971251200",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "356369224190657344",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "44728828337061715968",
        },
      ],
    },
    "0x7f1569669247110a6bfaf0bfc55d4969da2f5407": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "3725109731440473407488",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "439958526",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1127265981308938616832",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "8871379288462795776",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1113469891256170446848",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "101063636",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "9378071",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "165834133",
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
          amount: "709301716037457543168",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "5582076153508354048",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "700620898456434638848",
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
          amount: "1987871013807097118720",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "15644185163422160896",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1963542374449129717760",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "3923780338",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "364102209",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "6438485037",
        },
      ],
    },
    "0xd3149ad82ae27e5f8e4b746ac456d5465d4eaa30": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "116130081556062519296",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "4",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "766658948898",
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
          amount: "36084547892669872",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "283978862235214",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "35642925701904708",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "32566983",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "3022011",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "53438780",
        },
      ],
    },
    "0x7d4390e53b9f07d913dab03a9a3991365d9d3a1d": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "10964449758",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "705772369915981332480",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "77469861448720",
          debt: "520001304281721995264",
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
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "59389112153876398080",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "467381565893010816",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "58662276116052000768",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "619547246",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "57490099",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1016607793",
        },
      ],
    },
    "0x4abe666901147c4a98c3c36162c2d26940200c85": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "1528346954648598272",
          debt: "0",
        },
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
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "462497390364461760",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "3639770770943644",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "456837097450069568",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "56797",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "5270",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "93198",
        },
      ],
    },
    "0x93ae6eef133a1097167a15f585eacf1ddf89151e": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "33",
          debt: "0",
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
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "5265819910436352425984",
          debt: "3555652544201984311296",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "525205628563866058752",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "4133273258202438144",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "518777878354040455168",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "819820832",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "76074232",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1345234368",
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
          amount: "242090260438697574400",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1905206542204553472",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "239127429049044369408",
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
          amount: "159652",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "14814",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "261972",
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
          amount: "10103033161178820608",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "79509042783906368",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "9979386783474882560",
        },
      ],
    },
    "0x529407c4e9584701253d93dda4686a630ada00e5": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "9",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "155374305808183",
          debt: "0",
        },
      ],
      claim: [],
    },
    "0x6da43f5ba492912179f648a9978efb1f2b59b396": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "41582424",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "16830061271294009344",
          debt: "0",
        },
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "49026916360",
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
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "5168641966833658880",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "40676276987268776",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "5105385334231161856",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "82122444",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "7620447",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "134753753",
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
          amount: "132077269",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "12255942",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "216724038",
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
          amount: "417605699256753324032",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "3286481285302854656",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "412494815109601492992",
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
          amount: "24816017874962481152",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "195297570092935968",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "24512306042058104832",
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
          amount: "11486084",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "1065836",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "18847380",
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
          amount: "1358006164043092197376",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "10687262772986130432",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1341386150983177076736",
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
          amount: "1212569",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "112518",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1989690",
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
          amount: "344567621",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "31973714",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "565396959",
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
    "0x5b9effdcbd65946f2b143725dc244563248aa4ee": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "2211532476",
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
          amount: "669238091",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "5266782",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "661047594",
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
          amount: "151306453886990450688",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1190754412428177664",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "149454683765296496640",
        },
      ],
    },
    "0x39bbe14f5fbb3276d06760c95a071ebab6529192": {
      positions: [
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "4",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "138040000000000000000",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "42393151492481826816",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "333626430992242368",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "41874321202817802240",
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
          amount: "488402295930063",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "3843637690122",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "482424964786968",
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
          amount: "1505287889233",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "11846343298",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1486865362855",
        },
      ],
    },
    "0xce090f2e691cb9fa2bc95ab2065acb755cafa798": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "7610896954596168564736",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "185",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "99593323123619",
          debt: "1654557686360653",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "2515959285836436",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "16971",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "2365184498758411264",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "18613574013219668",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "2336238093138689536",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "3940",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "365",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "6466",
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
          amount: "89111793730423",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "701293691431",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "88021195458628",
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
          amount: "60522565109674393600",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "476301635551138368",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "59781857262261092352",
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
          amount: "765215925374820",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "6022110863036",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "755850799493859",
        },
      ],
    },
    "0x99e3327611c4d5abfeaa9c64c151817a9554fb5d": {
      positions: [
        {
          address: "0xb8330f4027b6cb4402c5d02d535c87579cab2477",
          collateral: "1579418261448",
          debt: "0",
        },
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
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "242281780",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "22482229",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "397557325",
        },
      ],
    },
    "0x38ae3287806b402316683545bd6b4e6e76e7256f": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "930000000000000000000",
          debt: "500000000000000000000",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "1399406237",
          debt: "1000000000",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "130123514985799958528",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1024048516434947584",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "128530993113861341184",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "91748299",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "8513666",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "150548706",
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
          amount: "74831718",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "6943914",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "122790487",
        },
      ],
    },
    "0x8091110790e54379a19e92b4503644789de5afe0": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "19",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "0",
          debt: "1160",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "158570416595466912",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "106507295223126",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "1454",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "47952732600330256",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "377379328276897",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "47365861153662200",
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
          amount: "47921056871",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "377130046",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "47334573089",
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
          amount: "978423327077",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "7700014533",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "966448853835",
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
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "2688940414996729344",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "1",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "813708052955084416",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "6403735132199259",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "803749454220297984",
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
    "0x3e8c91472fc50a8528e448ff501af9bf8c00cceb": {
      positions: [
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "54820188571219582976",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "521807905434130382848",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "100000063413739831296",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "25",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "207404605869414711296",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1632236717287624704",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "204866276258322546688",
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
    "0x939bdc5fc4d23db6b9647ac015162ffdba1cd5f7": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "39153178186446397440",
          debt: "0",
        },
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
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "11848253880199426048",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "93243614036147872",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "11703248548530065408",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "37396441",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "3470155",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "61363381",
        },
      ],
    },
    "0xefe150ec0d2d4a42afb5e48566bf253343fb70d9": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "2171376141134046951374848",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "1859001295800841535488",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "103783304295870627840",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "816755824698564352",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "102513148151907942400",
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
          amount: "185511205330705",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1459939616768",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "183240818982695",
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
          amount: "9343777338136",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "73533836847",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "9229423143360",
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
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "4506814906425564725248",
          debt: "0",
        },
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "6215",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "66",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1363980763235005235200",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "10734281787492767744",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1347287629802571563008",
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
    "0x45854310c3302c5dab9c0c745e8058d485a4ae8a": {
      positions: [
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "1104735",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "78122094324596",
          debt: "0",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "147",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "55604396",
          debt: "217084840367286",
        },
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "251824315970700384",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "797",
          debt: "1709",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "36203303563028",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "284913447871",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "35760227976214",
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
    "0x685ad8cbbb310b27c13f7141d608654f4cf36b93": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "77852251570148592",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "0",
          debt: "59923475221112",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "7641819402553",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "3710028013387",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "29197249117",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "3664622686322",
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
          amount: "31573364084231659520",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "248476661984163776",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "31186952197953400832",
        },
      ],
    },
    "0x7b7a009685bb67af28e39d82c1a177554c832cf8": {
      positions: [
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
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "36",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "3764156822578426544128",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "29623233050617909248",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "3718089037904632348672",
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
          amount: "255359975",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "23695804",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "419017182",
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
          amount: "680878857483836981248",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "5358393399950307328",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "672545894200437243904",
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
          amount: "1614843",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "149847",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "2649777",
        },
      ],
    },
    "0x57b94e72b8cb8123a36706187eabf5ef68b63866": {
      positions: [
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "328221119",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "0",
          debt: "83",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "77002",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "7145",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "126353",
        },
      ],
    },
    "0x6601a4900877d5bc33f5ba6af8ca4c007d63d2d7": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "645586329440576820215808",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "543163869904050782208",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "33788835809567002624",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "265912023561821888",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "33375309783468261376",
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
          amount: "313076955893914112",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2463858990038189",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "309245350976728896",
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
    "0x8029fc28c52cc77631c121191fe1375fd1cf52b1": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "1019129771691926",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "31574703289392076",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "10005237293835362",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "78739407004566",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "9882787794787420",
        },
      ],
    },
    "0x156e4293477d4371ce37eed4ba084b609e841bcc": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "4666278749894701",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "1487286048640250150912",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "456757048484554801152",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "3594595319092457472",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "451167008975145926656",
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
          amount: "519031974",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "48162912",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "851673467",
        },
      ],
    },
    "0x1cf8da0110f4cb8924aa4eba7ef3a04430897c05": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "592545088551062387818496",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "504471829814153379840",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "29190315571218231296",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "229722501411340224",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "28833068720016678912",
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
          amount: "2464703876807745601536",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "19396773509936852992",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "2434539499276931694592",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "1787619011",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "165879834",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "2933283025",
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
          amount: "814799670728417345536",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "6412325966541673472",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "804827712185605292032",
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
          amount: "2248439132756",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "17694809108",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "2220921519993",
        },
      ],
    },
    "0x7824f6bf5638f5fd2f110e7c84eaca04f2cdeb32": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "899278629218679",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "3893603852655393",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1467889100154743",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "11552021596315",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1449924280361551",
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
          amount: "220",
        },
      ],
    },
    "0x38d4e297ccf13cec8befffda3bdb3ecb65bf92a2": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "7137070287588451",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "1",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "2217653434441",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "17452531233",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "2190512593686",
        },
      ],
    },
    "0x4ca4eb53123a88d0bdef9c9951fd8bb29b2242d9": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "67013760434782001430528",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "2200000074247268466688",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "18394178684962734080000",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "144758857731679043584",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "18169060789282257502208",
        },
      ],
    },
    "0xe61d67814f7ae3aea14435c73b15cc23a5ed5e2a": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "0",
          debt: "85000117394992054272",
        },
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
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "20359219026904600576",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "160223369638846528",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "20110051905962070016",
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
          amount: "3756415242563155918848",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "29562308216775499776",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "3710442203527757955072",
        },
      ],
    },
    "0xc45d05cdc809d20c7b14959e8cd4a1199e3e966f": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "147",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "24749534333505135181824",
          debt: "339153237070000422912",
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
          amount: "7496616805349098258432",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "58997017707651080192",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "7404869159050396303360",
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
    "0x8205602937272c25d60bc14da75315f2d1810f82": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "20227158058455",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "2967808021328",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "7032434246918",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "55343984968",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "6946367517531",
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
          amount: "467185655",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "3676666",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "461467985",
        },
      ],
    },
    "0x6808610782f2783815a8bba72c5a7f77ee7ed821": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "135814619963252",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "686",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "41099245897858",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "323443628101",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "40596251123857",
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
          amount: "614215466422512648192",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "4833764575372968960",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "606698365731929849856",
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
          amount: "64895320438848364544",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "510714428719708096",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "64101096449459453952",
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
          amount: "6165143089946351616",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "48518560504284680",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "6089690738267700224",
        },
      ],
    },
    "0xf5fcaae203bd5dd81ef969c3fecc872f38aeccab": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "1843406508",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "328725405557277523968",
          debt: "0",
        },
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
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "99476523805222256640",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "782862241570712832",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "98259076367520268288",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "524258693",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "48647919",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "860249927",
        },
      ],
    },
    "0x839375339b030c4a8a2f8bcedd85c308d898307a": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "332",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "100",
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
    "0x8b5e2a644d5f3ba0a8d2783ec587871f8389a724": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "126498607312009",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "310208869",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "38280100986620",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "301257467788",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "37811608431006",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "71258617",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "6612352",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "116927427",
        },
      ],
    },
    "0x6b73f63cf407beb818d011b0f1ea144ffa56fb7b": {
      positions: [
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "4153537289590",
          debt: "0",
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
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "2212981260018935660544",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "0",
          debt: "1690930579",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "840678204689595498496",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "6615985345965506560",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "830389530668021841920",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "744636376",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "69097586",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1221865077",
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
          amount: "1025812383986371657728",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "8072957836071958528",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1013257937865068642304",
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
          amount: "313941624565583249408",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2470663776018088448",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "310099437366081421312",
        },
      ],
    },
    "0x39dac2b94334f3e889274d7f66db4fdc39e2bbd0": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "138494258280905318596608",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "330380886296491261952",
          debt: "105000000000000016384",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "112249594466414821376",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "883383996323037440",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "110875823289671630848",
        },
      ],
    },
    "0x1297ad486549a430d59d9d5f99ed7c216b6e77dd": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "970",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "20000000000000000000000",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "20930007686294213230592",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "12480023727599425421312",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "98215528413260300288",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "12327286455241822699520",
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
    "0x88b0160a0d18e8f2836887b817b44757586ea7cf": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "224956985",
          debt: "0",
        },
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
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "143680826",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "13332679",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "235764178",
        },
      ],
    },
    "0x2e5f476141531d3794f203a9258ecc92cb179fee": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "3108470385309347458580480",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "2648758441926620348416",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "152419714851821223936",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1199515574771235328",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "150554320041031958528",
        },
      ],
    },
    "0x9a1abc22708c1e1b662043ee396c027aea6a7144": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "48",
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
          amount: "151306412774185992192",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1190754088877846016",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "149454643155652706304",
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
    "0x0575d52465bf30e9c0bfc3fd7256e4743a2f11fd": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "321",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "35082808939391435669504",
          debt: "0",
        },
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "19720887331540676608",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "46901163508353515520",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "490",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "10636988362171275542528",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "83711173593842745344",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "10506807152263420706816",
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
    "0xe3743e1fed8bc243961cbd29a6cf1aa48361b0a9": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "104225869258612098990080",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "101170536392738045952",
          debt: "87643423403591630848",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "36539678320647032832",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "287560656345259232",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "36092485997832962048",
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
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "4347344290879",
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
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "184764661920650919936",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1454064455222371072",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "182503412174192050176",
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
          amount: "718065019628221235200",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "5651041767003884544",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "709276952003727982592",
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
          amount: "12104513021934878720",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "95260327110227680",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "11956371452452216832",
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
          amount: "2183861578",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "202648659",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "3583472795",
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
          amount: "1295553371639842603008",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "10195770597918873600",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1279697689591710220288",
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
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "26",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "0",
          debt: "5476090",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "222307",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "20628",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "364781",
        },
      ],
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
          amount: "90893266982689259520",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "715313563560790912",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "89780866078842765312",
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
          amount: "98104256205957136384",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "772062743883207680",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "96903603320463654912",
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
    "0x0b0263fdf373f0dbeed077bb84714f7e02650389": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "3958688539601318902235136",
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
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "9524140",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1230056435201531183104",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "9680321560148826112",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1215002340044394987520",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "2187806",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "203014",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "3589946",
        },
      ],
    },
    "0x729aab0dcf1f346e6bbaaaac9c6d3a1f07997165": {
      positions: [
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
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "14429620697735901478912",
          debt: "11961785786650733838336",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "3237591455720252375040",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "25479258898090737664",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "3197968062468089446400",
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
          amount: "500633341",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "46455634",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "821483365",
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
          amount: "3879592",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "360001",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "6365977",
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
          amount: "513393018567931265024",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "4040310155085513216",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "507109837460663828480",
        },
      ],
    },
    "0xaa0e96e52a32fc7f2d1c2289356b5ab51badce62": {
      positions: [
        {
          address: "0xb8330f4027b6cb4402c5d02d535c87579cab2477",
          collateral: "1369621797542",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "60000000000000000000",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "0",
          debt: "1170186142",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "18156769532902313984",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "142890490665341488",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "17934557178678323200",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "47453374",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "4403375",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "77865684",
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
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "2178859852590700036096",
          debt: "1696783008324601511936",
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
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "909579806730262806528",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "7158228485934760960",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "898447877680776871936",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "736756096",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "68366345",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1208934419",
        },
      ],
    },
    "0x9b2936efcd9426e98c21984de5807e811b66d3b5": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "42456874419609000000618496",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "1177962656",
          debt: "36309121616940095242240",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "2023048067804885942272",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "15921022212920240128",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1998288912656687169536",
        },
      ],
    },
    "0xf9c3a5174aed54e51210ffc41e382957d94a54f6": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "3476130841582555",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "8408451682357",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "3662415091226",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "28822544035",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "3617592476823",
        },
      ],
    },
    "0xabf0f7bd0dc8ce44b084b4b66b8db97f1b9ce419": {
      positions: [
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "806171854483494912",
          debt: "0",
        },
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
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "249396281184935",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1962703603416",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "246344034766519",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "53",
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
          amount: "2893668422600055324672",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "22772646862034231296",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "2858254145221892243456",
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
          amount: "233035716812590",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1833948922332",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "230183699819294",
        },
      ],
    },
    "0x253778bfa0b9204d3d6c4bdbf038eb3bcbc2c9a2": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "138240352582688",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "69",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "41833303699850",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "329220530171",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "41321325129914",
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
          amount: "663770488942602485760",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "5223753635375968256",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "655646907115721850880",
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
          amount: "453919238322557878272",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "3572262266633537536",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "448363929466958118912",
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
          amount: "302612825548371968",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2381508177755692",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "298909286311305472",
        },
      ],
    },
    "0x0af5324fa188fe4928c5740e96ddde6f4b507f31": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "4815158134926709205499904",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "10269153707963944271872",
          debt: "4400995985808110911488",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "3271961211555895836672",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "25749742657137385472",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "3231917182664529936384",
        },
      ],
    },
    "0x462f21e0dafa85ba0e4ba5c0e5462abfc6e742c4": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "4",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "1",
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
    "0x76e7db1a3dc0f5f4fc4d5c055c361db861e500f4": {
      positions: [
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "1259262082976",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "0",
          debt: "1081781418",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "47006729",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "4361929",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "77132790",
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
          amount: "302612825548371968",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2381508177755692",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "298909286311305472",
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
          amount: "2420557500369997",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "19049349515880",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "2390933410042857",
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
          amount: "1210451302193487937536",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "9526032711022768128",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1195637145245221650432",
        },
      ],
    },
    "0xabe21a7537cff588e6209492afca65d635a3b313": {
      positions: [
        {
          address: "0x6de36c1af417a438a69d4aaa3655022e52bbc606",
          collateral: "15503967869",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "1501294812",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "3500000152991165841408",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "1365424331421",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "0",
          debt: "12250000",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1059144936135723188224",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "8335278989794704384",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1046182548234249568256",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "345676604",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "32076621",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "567216677",
        },
      ],
    },
    "0xba9b8e4355bd706e88be4cfd856f8088aa6ddc72": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "8744576164307070948999168",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "6186547169514253975552",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "817206352980689027072",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "6431266120365814784",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "807204940160331808768",
        },
      ],
    },
    "0xbae7a58b23f91a6e0d5d06276e7e5db05340d7ba": {
      positions: [
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "3044647654252995999170560",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "18001316341078",
          debt: "2210002043342377451520",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "263179544142811594752",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2071175388744169728",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "259958610706299420672",
        },
      ],
    },
    "0x26d067c1bd1762d9bb6efe783b1fcd925f0e746d": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "20",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "21261658582428",
          debt: "0",
        },
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "1208040809547367448576",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "267641876374515",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "10",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "372240675835082047488",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2929466760003037184",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "367684993351733346304",
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
    "0x28c974c18c6553b445c4b77f35d83f3499acf58f": {
      positions: [
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "307378415824365",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "848587041516535808",
          debt: "484706777633224512",
        },
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
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "267536",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "205771352534504046592",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "364542",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "62604538742280445952",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "492686391296167040",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "61838350576824041472",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "375066",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "34803",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "615442",
        },
      ],
    },
    "0x5cddc6d054be28b5b7da2c6522bf42d20a9135f7": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "29888852652513307742175232",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "25450884392026334298112",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1470997012689782833152",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "11576480305574270976",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1452994156584024408064",
        },
      ],
    },
    "0x2a86ebd12573f4633453899156da81345ac1d57d": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "1",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "1",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "3352773105327",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "2082123163539",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "1",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "1654028267847",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "13016903163",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1633785376363",
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
          amount: "822945327",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "76364165",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1350361314",
        },
      ],
    },
    "0x39b946e35b3dc215455cc95b446edd8368928d10": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "105917432",
          debt: "279118632",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "371824749",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "45633629",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "4234514",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "74879685",
        },
      ],
    },
    "0x3cdc7a2b96a6c207abd7b84f46af11d64ab28090": {
      positions: [
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "1162446807248276620836864",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "933937370375346061312",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "72793650540229754880",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "572872857375095680",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "71902762520211070976",
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
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "312535310936",
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
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "15355386660562821120",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "120844114384324256",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "15167459143298250752",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "28935927",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "2685072",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "47480623",
        },
      ],
    },
    "0x571ed64c898fb5aec65011f59854ff915b271c1e": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "27646507486262396452864",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "1200000000000000000000",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "550107816474501906432",
          debt: "23544303198556463104",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "304727160",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "533437529336498749440",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "4198056827679285760",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "526909032677966479360",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "69999404",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "6495505",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "114861200",
        },
      ],
    },
    "0x61cc5cc864e9b8ad10ee425f109dc2faa63ae7de": {
      positions: [
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
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "85915471",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "7972417",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "140977687",
        },
      ],
    },
    "0x8aa912cd934b13cb61fb4d6764841d37d04655da": {
      positions: [
        {
          address: "0x6de36c1af417a438a69d4aaa3655022e52bbc606",
          collateral: "4656847804",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "100000000000000",
          debt: "1000000000",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "143949551630",
          debt: "112823050454",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "100583553368",
          debt: "40459457864",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "30260979942011",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "238148436267",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "29890629721844",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "19749762390",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "1832654099",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "32407152971",
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
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "0",
          debt: "27150133107",
        },
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "49535060340668",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "0",
          debt: "40378513893",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "3834095093",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "355779981",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "6291321573",
        },
      ],
    },
    "0x4f555e32e41c6f646ca72a93130fd24be10a8016": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "832303975473844191232",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "715179992791941120",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "38978861741859600",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "306756588487716",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "38501817374636992",
        },
      ],
    },
    "0xae5905de19d8e65b45d8179f71c72af8018721cd": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "40455799191",
          debt: "30264796621",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "4125846506748875",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "32512409529597521035264",
          debt: "22301604323864287903744",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "45",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "3135818489528498782208",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "24678324070490804224",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "3097440648816552312832",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "2340992893",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "217229460",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "3841307723",
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
          amount: "982744746276020551680",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "7734023320596752384",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "970717385171088048128",
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
          amount: "2297117",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "213158",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "3769312",
        },
      ],
    },
    "0xe2acac86d4f1702a6b179794ef3c8953e6d579c8": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "71099546734090207232",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "957932604373481",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "21515928920922259456",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "169326467192303136",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "21252605359416987648",
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
          amount: "56570457758497890304",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "445199265851045376",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "55878117935862317056",
        },
      ],
    },
    "0xd5fdc7790ca6a881e5067bc0d73406de1e2dc59e": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "92443883820236727648256",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "106168297840146808832",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "49115385800682291200",
          debt: "171501148553731997696",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "23266735320951070720",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "183104996743322208",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "22981984444898697216",
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
          amount: "2297117",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "213158",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "3769312",
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
          amount: "31240753695870095360",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "245859078415277888",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "30858412475207946240",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "245360013",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "22767870",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "402608361",
        },
      ],
    },
    "0xd42a08d2f4cb730ff8485f744abed7368712c112": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "8362273398510572",
          debt: "0",
        },
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
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "158564931859888",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1247877320616",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "156624328563575",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "127",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "11",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "209",
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
          amount: "35132466578324",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "276486154575",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "34702496473019",
        },
      ],
    },
    "0xc41ac49915a7475ef55ba04e19a2c5d25709591a": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "2972760",
          debt: "0",
        },
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
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "123887259577421725696",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "974970314852735104",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "122371060368131162112",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "65547655",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "6082411",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "107556377",
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
          amount: "491077496733",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "3864691036",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "485067425037",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "864506540",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "80220785",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1418558621",
        },
      ],
    },
    "0x8a30fe8dd7c1b8ee6fff8892731ed345b9e33b29": {
      positions: [
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "27",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "530187709298498",
          debt: "0",
        },
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "7895000000000000262144",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "17900009246670949711872",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "60",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "7929963342945290551296",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "62407376542301593600",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "7832912167616297041920",
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
          amount: "40870380213442723840",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "321642496579312320",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "40370186421325619200",
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
          amount: "5282120",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "490147",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "8667369",
        },
      ],
    },
    "0x58e708e69a042808dd6f5108929b09983e4a1676": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "12000000000000000000",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "81179453",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "3631353906580463616",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "28578098133068304",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "3586911435735665152",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "18647873",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "1730405",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "30599075",
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
          amount: "302612825548371984384",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2381508177755692032",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "298909286311305412608",
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
          amount: "1929672596",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "179061515",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "3166377081",
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
          amount: "3697100",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "343067",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "6066528",
        },
      ],
    },
    "0x80006d8d987d81b8d7e5ba00224ef6fbe030795d": {
      positions: [
        {
          address: "0xf58653cce3e68f769a75924dd83dd3bd24c04104",
          collateral: "195892792973902852653056",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "6960078299096",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "84152618835547881472",
          debt: "84152617582128971776",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "60805547553374388224",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "478528656175963520",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "60061376413941833728",
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
          amount: "78343520",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "7269787",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "128552962",
        },
      ],
    },
    "0x92b356d71ff33bb6384f65666c3f363cd66cbec8": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "287794973787",
          debt: "287796159451",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "383617398731",
          debt: "227197769141",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "35931152210",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "3334185601",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "58959005335",
        },
      ],
    },
    "0x7ec4a166b471214fc3e9bd70d97687f0c8304d2f": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "27098496359",
          debt: "21222087269",
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
          amount: "1349626712",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "125236895",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "2214586609",
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
          amount: "39339670913165303808",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "309596091375661568",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "38858210768387325952",
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
          amount: "11661266822886177374208",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "91772059731339345920",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "11518549939838676631552",
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
          amount: "42275955595695",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "332704120491",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "41758559612727",
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
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "289262711268807",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "510235404",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "299886604411492433920",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2360053310731850752",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "296216430141462740992",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "117207059",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "10876080",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "192323687",
        },
      ],
    },
    "0x11047ba5c5fe45e24fa78639e31acca9c9d26447": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "1312958290",
          debt: "0",
        },
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
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "428125",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "3369",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "422886",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "727279672",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "67486992",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1193384666",
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
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "1000000000000000000000",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "16",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "3204763965266572869632",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "25220912488519479296",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "3165542332576703709184",
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
          amount: "28754104791693072007168",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "226289601511007682560",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "28402196523661861584896",
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
          amount: "6865417546446188544",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "54029593758759896",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "6781394857665458176",
        },
      ],
    },
    "0x2d1992cd36101b9345ae6b8d8e493459ef53828a": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "11604979774943646",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "12514319009",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "3511819563371550",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "27637384482353",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "3468840018393984",
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
          amount: "98832612492895993856",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "777794776061689856",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "97623045589689106432",
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
    "0x7d3bed945ada5746ed6eb5fb8cc3b7c83f3e5590": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "833803724519678",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "121",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "252319701029656",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "1985710388586",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "249231676219885",
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
    "0xb5085a8c27b365facd1abe57c4208d6a1a128c7b": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "501823523",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "1064855482480115843072",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "322238926353982685184",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "2535962039654378496",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "318295192292812193792",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "115253111",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "10694765",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "189117475",
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
          amount: "22",
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
          amount: "33575055726991",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "264229612996",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "33164146057031",
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
          amount: "24123972",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "2238553",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "39584742",
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
          amount: "34100900880388228",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "268367919199443",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "33683555633368464",
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
          amount: "42883174",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "3979289",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "70366496",
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
          amount: "388623079",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "36061784",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "637687043",
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
          amount: "88208734666838",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "694186780014",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "87129188519715",
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
          amount: "1228430932845025536",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "9667529150745940",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1213396731463859968",
        },
      ],
    },
    "0x352bb3324833607370ab925e66a2e3b783075d5e": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "3021056523",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "116453719",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "720592640",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "66866478",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1182411994",
        },
      ],
    },
    "0x1226ff858c262d499af401145beabebf3312e856": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "500008025",
          debt: "0",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "501883536",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "230124686",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "21354127",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "377608893",
        },
      ],
    },
    "0x26570de098f37d1d717e2860fbf19d54fe9a6011": {
      positions: [
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
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "0",
          debt: "200000007",
        },
        {
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "196457497564",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "520841901650753486848",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          collateral: "0",
          debt: "277",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "88463712883549798400",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "696193412440574720",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "87381046175266340864",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "23376191",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "2169163",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "38357718",
        },
      ],
    },
    "0xaf79408efb452a1b86bfff6af0f8e86a15d1b7e5": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "306",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "48051132056857714688",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "14540888842523668480",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "114434163943825344",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "14362929589565632512",
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
          amount: "7837",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "61",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "7741",
        },
      ],
    },
    "0x697b260e66f8a033d15a4332a2d6b0da996a8710": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "2209875745",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "9114812780946583977984",
          debt: "0",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "2799229491801493602304",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "22029429565848190976",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "2764971009076399964160",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "507539092",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "47096445",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "832814931",
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
          amount: "94254403456886",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "741765099398",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "93100867149109",
        },
      ],
    },
    "0x664fe2accb8096bd612639eb1e05a81121a9ea9a": {
      positions: [
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
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "0",
          debt: "984922478",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "0",
          debt: "72177105244300574720",
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
          amount: "6826766541287999488",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "53725417342258368",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "6743216884388504576",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "81077769",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "7523508",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "133039558",
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
          amount: "1513064127741859840",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "11907540888778460",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "1494546431556527104",
        },
      ],
    },
    "0x839873757ea10e6b8b0820dc8964b9057e050810": {
      positions: [
        {
          address: "0xb8330f4027b6cb4402c5d02d535c87579cab2477",
          collateral: "27022866365",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "20471357962511454208",
          debt: "0",
        },
        {
          address: "0x9f0df7799f6fdad409300080cff680f5a23df4b1",
          collateral: "0",
          debt: "2113041491273971200",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "0",
          debt: "22846181",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "5543791805105476608",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "43628638329221376",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "5475943886118136832",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "991804",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "92033",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1627439",
        },
      ],
    },
    "0x61125f52cee83ed5d7a6cd14598d34974b11865e": {
      positions: [
        {
          address: "0xd50190c922f252da3a8106f527f41dffe1b16067",
          collateral: "501928365764925343137792",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "774457459505670782976",
          debt: "0",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          collateral: "7280011944144681304064",
          debt: "6101683827031089872896",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "751510346520560664576",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "5914250437546788864",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "742312956917668642816",
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
          amount: "99862232430962753536",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "785897698659378304",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "98640064482730786816",
        },
      ],
    },
    "0x9a62d0194427eb62fa24bc369d0de17519969714": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "21947973269",
          debt: "17096120718",
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
          amount: "1114318235",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "103401744",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1828471695",
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
          amount: "510236144569",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "4015466127",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "503991598991",
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
          address: "0xc36f478888dddfa1a50f27442c610ac5dba8c22a",
          collateral: "625450925727",
          debt: "0",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          collateral: "0",
          debt: "538015118",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "73639139130752319488",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "579526699587103232",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "72737903564611559424",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "23182995",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "2151236",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "38040704",
        },
      ],
    },
    "0x22ac70c1df5750e16469f4d2d20ecde43b6c8fe9": {
      positions: [
        {
          address: "0xf462864b174d7a084881a6f1e61553318e3d6471",
          collateral: "7784673104642919366656",
          debt: "0",
        },
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "0",
          debt: "6712309074837256192",
        },
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "387647849526411200",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "3050718428948369",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "382903605728138880",
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
          amount: "500436506336767049728",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "3938344748372184576",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "494311894025573236736",
        },
      ],
    },
    "0x685dcbc1aff2c2fb41d0747aa125b28e93150d54": {
      positions: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          collateral: "1445814534039739039744",
          debt: "0",
        },
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
      ],
      claim: [
        {
          address: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
          amount: "437522022890124935168",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "3443219148338741760",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "432167392015118368768",
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
          amount: "107559201301",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "846471450",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "106242833690",
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
          amount: "828041047",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "76837016",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1358722822",
        },
      ],
    },
    "0xb05bc92efae79b5371cd7250d7fe3ff8fd9df95c": {
      positions: [
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          collateral: "999895608",
          debt: "0",
        },
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
      ],
      claim: [
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "1380443282",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "128096479",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "2265153157",
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
          amount: "298103500",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "27662135",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "489154530",
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
          amount: "22559233711045140480",
        },
        {
          address: "0xb1e25689d55734fd3fffc939c4c3eb52dff8a794",
          amount: "177537087099330720",
        },
        {
          address: "0xe5da20f15420ad15de0fa650600afc998bbe3955",
          amount: "22283141621902491648",
        },
        {
          address: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
          amount: "695910299",
        },
        {
          address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
          amount: "64576111",
        },
        {
          address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
          amount: "1141911031",
        },
      ],
    },
  },
} as ClaimData;
