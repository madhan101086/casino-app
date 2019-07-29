const redList=[1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
const blacklist=[2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35];
const rowList1 =[1,2,3,4,5,6,7,8,9,10,11,12];
const rowList2=[13,14,15,16,17,18,19,20,21,22,23,24];
const rowList3=[25,26,27,28,29,30,31,32,33,34,35,36];
const colList1=[1,4,7,10,13,16,19,22,25,28,31,34];
const colList2=[2,5,8,11,14,17,20,23,26,29,32,35];
const colList3=[3,6,9,12,15,18,21,24,27,30,33,36];
const leftWheelList=[26,3,35,12,28,7,29,18,22,9,31,14,20,1,33,16,24,5];
const rightWheelList=[32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10];
const tierList=[5,10,23,8,30,11,36,13,27,33,16,24];
const orphelinsList=[1,20,14,31,9,6,34,17];
const voisinsList=[22,18,29,7,28,12,35,3,26,0,32,15,19,4,21,2,25];
const zeroList=[12,35,3,26,0,32,15];
const odd=[1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35];
const even=[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36];
const small=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
const large=[19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];
const corn_0_1_2_3=[0,1,2,3];
const corn_1_2_4_5=[1,2,4,5];
const corn_2_3_5_6=[2,3,5,6];
const corn_4_5_7_8=[4,5,7,8];
const corn_5_6_8_9=[5,6,8,9];
const corn_7_8_10_11=[7,8,10,11];
const corn_8_9_11_12=[8,9,11,12];
const corn_10_11_13_14=[10,11,13,14];
const corn_11_12_14_15=[11,12,14,15];
const corn_13_14_16_17=[13,14,16,17];
const corn_14_15_17_18=[14,15,17,18];
const corn_16_17_19_20=[16,17,19,20];
const corn_17_18_20_21=[17,18,20,21];
const corn_19_20_22_23=[19,20,22,23];
const corn_20_21_23_24=[20,21,23,24];
const corn_22_23_25_26=[22,23,25,26];
const corn_23_24_26_27=[23,24,26,27];
const corn_25_26_28_29=[25,26,28,29];
const corn_26_27_29_30=[26,27,29,30];
const corn_28_29_31_32=[28,29,31,32];
const corn_29_30_32_33=[29,30,32,33];
const corn_31_32_34_35=[31,32,34,35];
const corn_32_33_35_36=[32,33,35,36];
const corn_1_2_3=[1,2,3];
const corn_4_5_6=[4,5,6];
const corn_7_8_9=[7,8,9];
const corn_10_11_12=[10,11,12];
const corn_13_14_15=[13,14,15];
const corn_16_17_18=[16,17,18];
const corn_19_20_21=[19,20,21];
const corn_22_23_24=[22,23,24];
const corn_25_26_27=[25,26,27];
const corn_28_29_30=[28,29,30];
const corn_31_32_33=[31,32,33];
const corn_34_35_36=[34,35,36];
const _0N=[26,32];
const _1N=[20,33];
const _2N=[21,25];
const _3N=[26,35];
const _4N=[19,21];
const _5N=[20,24];
const _6N=[27,34];
const _7N=[28,29];
const _8N=[23,30];
const _9N=[22,31];
const _10N=[23,5];
const _11N=[36,30];
const _12N=[28,35];
const _13N=[27,36];
const _14N=[20,31];
const _15N=[19,32];
const _16N=[24,33];
const _17N=[25,34];
const _18N=[22,29];
const _19N=[15,4];
const _20N=[1,14];
const _21N=[4,2];
const _22N=[9,18];
const _23N=[8,10];
const _24N=[5,16];
const _25N=[2,17];
const _26N=[0,3];
const _27N=[6,13];
const _28N=[7,12];
const _29N=[18,7];
const _30N=[11,8];
const _31N=[14,9];
const _32N=[15,0];
const _33N=[16,1];
const _34N=[17,6];
const _35N=[12,3];
const _36N=[13,11];
//Three Neighbours

const _0N3=[0,32,15,26,3,35,19];
const _1N3=[20,14,31,1,33,16,24];
const _2N3=[19,4,21,2,25,17,34];
const _3N3=[28,12,35,26,0,32,15];
const _4N3=[32,15,19,4,21,2,25];
const _5N3=[24,16,33,5,10,23,8];
const _6N3=[25,17,34,6,27,13,36];
const _7N3=[22,18,29,7,28,12,35];
const _8N3=[5,10,23,8,30,11,36];
const _9N3=[20,14,31,9,22,18,29];
const _10N3=[30,8,23,10,5,24,16];
const _11N3=[27,13,36,11,30,8,23];
const _12N3=[26,3,35,12,28,7,29];
const _13N3=[34,6,27,13,36,11,30];
const _14N3=[33,1,20,14,31,9,22];
const _15N3=[26,0,32,15,19,4,21];
const _16N3=[10,5,24,16,33,1,20];
const _17N3=[21,2,25,17,34,6,27];
const _18N3=[31,9,22,18,29,7,28];
const _19N3=[0,32,15,19,4,21,2];
const _20N3=[16,33,1,20,14,31,9];
const _21N3=[15,19,4,21,2,25,17];
const _22N3=[14,31,9,22,18,29,7];
const _23N3=[11,30,8,23,10,5,24];
const _24N3=[23,10,5,24,16,33,1];
const _25N3=[4,21,2,25,17,34,6];
const _26N3=[35,3,26,0,32,15,19];
const _27N3=[17,34,6,27,13,36,11];
const _28N3=[18,29,7,28,12,35,3];
const _29N3=[9,22,18,29,7,28,12];
const _30N3=[10,23,8,30,11,36,13];
const _31N3=[1,20,14,31,9,22,18];
const _32N3=[3,26,0,32,15,19,4];
const _33N3=[5,24,16,33,1,20,14];
const _34N3=[2,25,17,34,6,27,13];
const _35N3=[7,28,12,35,3,26,0];
const _36N3=[8,30,11,36,13,27,6];

const LR_1=[0,32,15,19,4,21,2];
const LR_2=[25,17,34,6,27,13];
const LR_3=[36,11,30,8,23,10];
const LR_4=[5,24,16,33,1,20];
const LR_5=[14,31,9,22,18,29];
const LR_6=[7,28,12,35,3,26];




const rouList=[
    {number:1,color:"red",numberRange:"small",rowList:"row1-12",colList:"ColList1",type:"odd",wheelType:"left",box:"voisins",nei:_1N,_3Nei:_1N3},
    {number:2,color:"black",numberRange:"small",rowList:"row1-12",colList:"ColList2",type:"even",wheelType:"right",box:"voisins",nei:_2N,_3Nei:_2N3},
    {number:3,color:"red",numberRange:"small",rowList:"row1-12",colList:"ColList3",type:"odd",wheelType:"left",box:"zero",nei:_3N,_3Nei:_3N3},
    {number:4,color:"black",numberRange:"small",rowList:"row1-12",colList:"ColList1",type:"even",wheelType:"right",box:"voisins",nei:_4N,_3Nei:_4N3},
    {number:5,color:"red",numberRange:"small",rowList:"row1-12",colList:"ColList2",type:"odd",wheelType:"left",box:"tiers",nei:_5N,_3Nei:_5N3},
    {number:6,color:"black",numberRange:"small",rowList:"row1-12",colList:"ColList3",type:"even",wheelType:"right",box:"orphelins",nei:_6N,_3Nei:_6N3},

    {number:7,color:"red",numberRange:"small",rowList:"row1-12",colList:"ColList1",type:"odd",wheelType:"left",box:"voisins",nei:_7N,_3Nei:_7N3},
    {number:8,color:"black",numberRange:"small",rowList:"row1-12",colList:"ColList2",type:"even",wheelType:"right",box:"tiers",nei:_8N,_3Nei:_8N3},
    {number:9,color:"red",numberRange:"small",rowList:"row1-12",colList:"ColList3",type:"odd",wheelType:"left",box:"orphellins",nei:_9N,_3Nei:_9N3},
    {number:10,color:"black",numberRange:"small",rowList:"row1-12",colList:"ColList1",type:"even",wheelType:"right",box:"tiers",nei:_10N,_3Nei:_10N3},
    {number:11,color:"black",numberRange:"small",rowList:"row1-12",colList:"ColList2",type:"odd",wheelType:"right",box:"tiers",nei:_11N,_3Nei:_11N3},
    {number:12,color:"red",numberRange:"small",rowList:"row1-12",colList:"ColList3",type:"even",wheelType:"left",box:"zero",nei:_12N,_3Nei:_12N3},

    {number:13,color:"black",numberRange:"small",rowList:"row12-24",colList:"ColList1",type:"odd",wheelType:"right",box:"tiers",nei:_13N,_3Nei:_13N3},
    {number:14,color:"red",numberRange:"small",rowList:"row12-24",colList:"ColList2",type:"even",wheelType:"left",box:"orphellins",nei:_14N,_3Nei:_14N3},
    {number:15,color:"black",numberRange:"small",rowList:"row12-24",colList:"ColList3",type:"odd",wheelType:"right",box:"zero",nei:_15N,_3Nei:_15N3},
    {number:16,color:"red",numberRange:"small",rowList:"row12-24",colList:"ColList1",type:"even",wheelType:"left",box:"tiers",nei:_16N,_3Nei:_16N3},
    {number:17,color:"black",numberRange:"small",rowList:"row12-24",colList:"ColList2",type:"odd",wheelType:"right",box:"orphellins",nei:_17N,_3Nei:_17N3},
    {number:18,color:"red",numberRange:"small",rowList:"row12-24",colList:"ColList3",type:"even",wheelType:"left",box:"voisins",nei:_18N,_3Nei:_18N3},

    {number:19,color:"red",numberRange:"large",rowList:"row12-24",colList:"ColList1",type:"odd",wheelType:"right",box:"voisins",nei:_19N,_3Nei:_19N3},
    {number:20,color:"black",numberRange:"large",rowList:"row12-24",colList:"ColList2",type:"even",wheelType:"left",box:"orphellins",nei:_20N,_3Nei:_20N3},
    {number:21,color:"red",numberRange:"large",rowList:"row12-24",colList:"ColList3",type:"odd",wheelType:"right",box:"voisins",nei:_21N,_3Nei:_21N3},
    {number:22,color:"black",numberRange:"large",rowList:"row12-24",colList:"ColList1",type:"even",wheelType:"left",box:"voisins",nei:_22N,_3Nei:_22N3},
    {number:23,color:"red",numberRange:"large",rowList:"row12-24",colList:"ColList2",type:"odd",wheelType:"right",box:"tiers",nei:_23N,_3Nei:_23N3},
    {number:24,color:"black",numberRange:"large",rowList:"row12-24",colList:"ColList3",type:"even",wheelType:"left",box:"tiers",nei:_24N,_3Nei:_24N3},

    {number:25,color:"red",numberRange:"large",rowList:"row25-36",colList:"ColList1",type:"odd",wheelType:"right",box:"voisins",nei:_25N,_3Nei:_25N3},
    {number:26,color:"black",numberRange:"large",rowList:"row25-36",colList:"ColList2",type:"even",wheelType:"left",box:"zero",nei:_26N,_3Nei:_26N3},
    {number:27,color:"red",numberRange:"large",rowList:"row25-36",colList:"ColList3",type:"odd",wheelType:"right",box:"tiers",nei:_27N,_3Nei:_27N3},
    {number:28,color:"black",numberRange:"large",rowList:"row25-36",colList:"ColList1",type:"even",wheelType:"left",box:"voisins",nei:_28N,_3Nei:_28N3},
    {number:29,color:"black",numberRange:"large",rowList:"row25-36",colList:"ColList2",type:"odd",wheelType:"left",box:"voisins",nei:_29N,_3Nei:_29N3},
    {number:30,color:"red",numberRange:"large",rowList:"row25-36",colList:"ColList3",type:"even",wheelType:"right",box:"tiers",nei:_30N,_3Nei:_30N3},

    {number:31,color:"black",numberRange:"large",rowList:"row25-36",colList:"ColList1",type:"odd",wheelType:"left",box:"orphellins",nei:_31N,_3Nei:_31N3},
    {number:32,color:"red",numberRange:"large",rowList:"row25-36",colList:"ColList2",type:"even",wheelType:"right",box:"zero",nei:_32N,_3Nei:_32N3},
    {number:33,color:"black",numberRange:"large",rowList:"row25-36",colList:"ColList3",type:"odd",wheelType:"left",box:"tiers",nei:_33N,_3Nei:_33N3},
    {number:34,color:"red",numberRange:"large",rowList:"row25-36",colList:"ColList1",type:"even",wheelType:"right",box:"orphellins",nei:_34N,_3Nei:_34N3},
    {number:35,color:"black",numberRange:"large",rowList:"row25-36",colList:"ColList2",type:"odd",wheelType:"left",box:"voisins",nei:_35N,_3Nei:_35N3},
    {number:36,color:"red",numberRange:"large",rowList:"row25-36",colList:"ColList3",type:"even",wheelType:"right",box:"tiers",nei:_36N,_3Nei:_36N3},
    {number:0,color:"green",numberRange:"zero",rowList:"zero",colList:"zero",type:"zero",wheelType:"zero",box:"zero",nei:_0N,_3Nei:_0N3}
];


const rouletteConst={
    redList:redList,blacklist,rowList1,rowList2,rowList3,colList1,colList2,colList3,leftWheelList,rightWheelList,
    tierList,orphelinsList,voisinsList,zeroList,odd,even,small,large,rouList,corn_0_1_2_3,corn_1_2_4_5,
    corn_2_3_5_6,corn_4_5_7_8,corn_5_6_8_9,corn_7_8_10_11,corn_8_9_11_12,corn_10_11_13_14,corn_11_12_14_15,
    corn_13_14_16_17,corn_14_15_17_18,corn_16_17_19_20,corn_17_18_20_21,corn_19_20_22_23,corn_20_21_23_24,
    corn_22_23_25_26,corn_23_24_26_27,corn_25_26_28_29,corn_26_27_29_30,corn_28_29_31_32,corn_29_30_32_33,
    corn_31_32_34_35,corn_32_33_35_36,corn_1_2_3,corn_4_5_6,corn_7_8_9,corn_10_11_12,corn_13_14_15,
    corn_16_17_18,corn_19_20_21,corn_22_23_24,corn_25_26_27,corn_28_29_30,corn_31_32_33,corn_34_35_36,
    _0N,_2N,_3N,_4N,_5N,_6N,_7N,_8N,_9N,_10N,_11N,_12N,_13N,_14N,_15N,_16N,_17N,_18N,
    _19N,_20N,_21N,_22N,_23N,_24N,_25N,_26N,_27N,_28N,_29N,_30N,_31N,_32N,_33N,_34N,_35N,_36N,LR_1,
    LR_2,LR_3,LR_4,LR_5,LR_6,
    _0N3,_1N3,_2N3,_3N3,_4N3,_5N3,_6N3,_7N3,_8N3,_9N3,_10N3,_11N3,_12N3,_13N3,_14N3,_15N3,_16N3,_17N3,_18N3,
    _19N3,_20N3,_21N3,_22N3,_23N3,_24N3,_25N3,_26N3,_27N3,_28N3,_29N3,_30N3,_31N3,_32N3,_33N3,_34N3,_35N3,_36N3
};


export default rouletteConst