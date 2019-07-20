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



const rouList=[
    {number:1,color:"red",numberRange:"small",rowList:"row1-12",colList:"ColList1",type:"odd",wheelType:"left",box:"voisins",nei:_1N},
    {number:2,color:"black",numberRange:"small",rowList:"row1-12",colList:"ColList2",type:"even",wheelType:"right",box:"voisins",nei:_2N},
    {number:3,color:"red",numberRange:"small",rowList:"row1-12",colList:"ColList3",type:"odd",wheelType:"left",box:"zero",nei:_3N},
    {number:4,color:"black",numberRange:"small",rowList:"row1-12",colList:"ColList1",type:"even",wheelType:"right",box:"voisins",nei:_4N},
    {number:5,color:"red",numberRange:"small",rowList:"row1-12",colList:"ColList2",type:"odd",wheelType:"left",box:"tiers",nei:_5N},
    {number:6,color:"black",numberRange:"small",rowList:"row1-12",colList:"ColList3",type:"even",wheelType:"right",box:"orphelins",nei:_6N},

    {number:7,color:"red",numberRange:"small",rowList:"row1-12",colList:"ColList1",type:"odd",wheelType:"left",box:"voisins",nei:_7N},
    {number:8,color:"black",numberRange:"small",rowList:"row1-12",colList:"ColList2",type:"even",wheelType:"right",box:"tiers",nei:_8N},
    {number:9,color:"red",numberRange:"small",rowList:"row1-12",colList:"ColList3",type:"odd",wheelType:"left",box:"orphellins",nei:_9N},
    {number:10,color:"black",numberRange:"small",rowList:"row1-12",colList:"ColList1",type:"even",wheelType:"right",box:"tiers",nei:_10N},
    {number:11,color:"black",numberRange:"small",rowList:"row1-12",colList:"ColList2",type:"odd",wheelType:"right",box:"tiers",nei:_11N},
    {number:12,color:"red",numberRange:"small",rowList:"row1-12",colList:"ColList3",type:"even",wheelType:"left",box:"zero",nei:_12N},

    {number:13,color:"black",numberRange:"small",rowList:"row12-24",colList:"ColList1",type:"odd",wheelType:"right",box:"tiers",nei:_13N},
    {number:14,color:"red",numberRange:"small",rowList:"row12-24",colList:"ColList2",type:"even",wheelType:"left",box:"orphellins",nei:_14N},
    {number:15,color:"black",numberRange:"small",rowList:"row12-24",colList:"ColList3",type:"odd",wheelType:"right",box:"zero",nei:_15N},
    {number:16,color:"red",numberRange:"small",rowList:"row12-24",colList:"ColList1",type:"even",wheelType:"left",box:"tiers",nei:_16N},
    {number:17,color:"black",numberRange:"small",rowList:"row12-24",colList:"ColList2",type:"odd",wheelType:"right",box:"orphellins",nei:_17N},
    {number:18,color:"red",numberRange:"small",rowList:"row12-24",colList:"ColList3",type:"even",wheelType:"left",box:"voisins",nei:_18N},

    {number:19,color:"black",numberRange:"large",rowList:"row12-24",colList:"ColList1",type:"odd",wheelType:"right",box:"voisins",nei:_19N},
    {number:20,color:"red",numberRange:"large",rowList:"row12-24",colList:"ColList2",type:"even",wheelType:"left",box:"orphellins",nei:_20N},
    {number:21,color:"black",numberRange:"large",rowList:"row12-24",colList:"ColList3",type:"odd",wheelType:"right",box:"voisins",nei:_21N},
    {number:22,color:"red",numberRange:"large",rowList:"row12-24",colList:"ColList1",type:"even",wheelType:"left",box:"voisins",nei:_22N},
    {number:23,color:"black",numberRange:"large",rowList:"row12-24",colList:"ColList2",type:"odd",wheelType:"right",box:"tiers",nei:_23N},
    {number:24,color:"red",numberRange:"large",rowList:"row12-24",colList:"ColList3",type:"even",wheelType:"left",box:"tiers",nei:_24N},

    {number:25,color:"red",numberRange:"large",rowList:"row25-36",colList:"ColList1",type:"odd",wheelType:"right",box:"voisins",nei:_25N},
    {number:26,color:"black",numberRange:"large",rowList:"row25-36",colList:"ColList2",type:"even",wheelType:"left",box:"zero",nei:_26N},
    {number:27,color:"red",numberRange:"large",rowList:"row25-36",colList:"ColList3",type:"odd",wheelType:"right",box:"tiers",nei:_27N},
    {number:28,color:"black",numberRange:"large",rowList:"row25-36",colList:"ColList1",type:"even",wheelType:"left",box:"voisins",nei:_28N},
    {number:29,color:"black",numberRange:"large",rowList:"row25-36",colList:"ColList2",type:"odd",wheelType:"left",box:"voisins",nei:_29N},
    {number:30,color:"red",numberRange:"large",rowList:"row25-36",colList:"ColList3",type:"even",wheelType:"right",box:"tiers",nei:_30N},

    {number:31,color:"black",numberRange:"large",rowList:"row25-36",colList:"ColList1",type:"odd",wheelType:"left",box:"orphellins",nei:_31N},
    {number:32,color:"red",numberRange:"large",rowList:"row25-36",colList:"ColList2",type:"even",wheelType:"right",box:"zero",nei:_32N},
    {number:33,color:"black",numberRange:"large",rowList:"row25-36",colList:"ColList3",type:"odd",wheelType:"left",box:"tiers",nei:_33N},
    {number:34,color:"red",numberRange:"large",rowList:"row25-36",colList:"ColList1",type:"even",wheelType:"right",box:"orphellins",nei:_34N},
    {number:35,color:"black",numberRange:"large",rowList:"row25-36",colList:"ColList2",type:"odd",wheelType:"left",box:"voisins",nei:_35N},
    {number:36,color:"red",numberRange:"large",rowList:"row25-36",colList:"ColList3",type:"even",wheelType:"right",box:"tiers",nei:_36N},
    {number:0,color:"green",numberRange:"zero",rowList:"zero",colList:"zero",type:"zero",wheelType:"zero",box:"zero",nei:_0N}
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
    _19N,_20N,_21N,_22N,_23N,_24N,_25N,_26N,_27N,_28N,_29N,_30N,_31N,_32N,_33N,_34N,_35N,_36N
};


export default rouletteConst