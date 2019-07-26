import React from 'react';
import rouletteConst from "./rouletteConstants"

function DetermineNumberIndex(rouletteType,statsList)
{ 

  let listArr=[]; 
  let index=0;
  let rouletteNumber=statsList
  //console.log(statsList)
  rouletteType.forEach((item,index)=>
  {  
    let listIndex=rouletteNumber.lastIndexOf(item) 
    if(listIndex!=-1)
    {    
      const actualIndex=rouletteNumber.length-listIndex
      listArr.push(actualIndex)
    }    
  })
 //console.log(rouletteType);
  //console.log(listArr);
  if(listArr.length==0)
  {
    index=0;
  }
  else{
    index=Math.min.apply(null, listArr);
  }
  
 
  return index
 
}
function HandleNumberLocation(statsList)
{
   //console.log(statsList)
    let rouletteType={};
   rouletteType.redCount=DetermineNumberIndex(rouletteConst.redList,statsList);
   rouletteType.blackCount=DetermineNumberIndex(rouletteConst.blacklist,statsList);
   rouletteType.small=DetermineNumberIndex(rouletteConst.small,statsList);
   rouletteType.large=DetermineNumberIndex(rouletteConst.large,statsList);
   rouletteType.odd=DetermineNumberIndex(rouletteConst.odd,statsList);
   rouletteType.even=DetermineNumberIndex(rouletteConst.even,statsList);
   rouletteType.rightWheel=DetermineNumberIndex(rouletteConst.rightWheelList,statsList);
   rouletteType.leftWheel=DetermineNumberIndex(rouletteConst.leftWheelList,statsList);
   rouletteType.zeroVar=DetermineNumberIndex(rouletteConst.zeroList,statsList);
   rouletteType.voisins=DetermineNumberIndex(rouletteConst.voisinsList,statsList);
   rouletteType.orephellins=DetermineNumberIndex(rouletteConst.orphelinsList,statsList);
   rouletteType.tier=DetermineNumberIndex(rouletteConst.tierList,statsList);
   rouletteType.rowList1=DetermineNumberIndex(rouletteConst.rowList1,statsList);
   rouletteType.rowList2=DetermineNumberIndex(rouletteConst.rowList2,statsList);
   rouletteType.rowList3=DetermineNumberIndex(rouletteConst.rowList3,statsList);
   rouletteType.colList1=DetermineNumberIndex(rouletteConst.colList1,statsList);
   rouletteType.colList2=DetermineNumberIndex(rouletteConst.colList2,statsList);
   rouletteType.colList3=DetermineNumberIndex(rouletteConst.colList3,statsList);
   rouletteType.corn_0_1_2_3=DetermineNumberIndex(rouletteConst.corn_0_1_2_3,statsList);
   rouletteType.corn_1_2_4_5=DetermineNumberIndex(rouletteConst.corn_1_2_4_5,statsList);
   rouletteType.corn_2_3_5_6=DetermineNumberIndex(rouletteConst.corn_2_3_5_6,statsList);
   rouletteType.corn_4_5_7_8=DetermineNumberIndex(rouletteConst.corn_4_5_7_8,statsList);
   rouletteType.corn_5_6_8_9=DetermineNumberIndex(rouletteConst.corn_5_6_8_9,statsList);
   rouletteType.corn_7_8_10_11=DetermineNumberIndex(rouletteConst.corn_7_8_10_11,statsList);
   rouletteType.corn_8_9_11_12=DetermineNumberIndex(rouletteConst.corn_8_9_11_12,statsList);
   return rouletteType;
}
function HandleFourCornerNumberLocation(statsList)
{
   //console.log(statsList)
    let rouletteType={};
   rouletteType.corn_0_1_2_3=DetermineNumberIndex(rouletteConst.corn_0_1_2_3,statsList);
   rouletteType.corn_1_2_4_5=DetermineNumberIndex(rouletteConst.corn_1_2_4_5,statsList);
   rouletteType.corn_2_3_5_6=DetermineNumberIndex(rouletteConst.corn_2_3_5_6,statsList);
   rouletteType.corn_4_5_7_8=DetermineNumberIndex(rouletteConst.corn_4_5_7_8,statsList);
   rouletteType.corn_5_6_8_9=DetermineNumberIndex(rouletteConst.corn_5_6_8_9,statsList);
   rouletteType.corn_7_8_10_11=DetermineNumberIndex(rouletteConst.corn_7_8_10_11,statsList);
   rouletteType.corn_8_9_11_12=DetermineNumberIndex(rouletteConst.corn_8_9_11_12,statsList);
   rouletteType.corn_10_11_13_14=DetermineNumberIndex(rouletteConst.corn_10_11_13_14,statsList);
   rouletteType.corn_11_12_14_15=DetermineNumberIndex(rouletteConst.corn_11_12_14_15,statsList);
   rouletteType.corn_13_14_16_17=DetermineNumberIndex(rouletteConst.corn_13_14_16_17,statsList);
   rouletteType.corn_14_15_17_18=DetermineNumberIndex(rouletteConst.corn_14_15_17_18,statsList);
   rouletteType.corn_16_17_19_20=DetermineNumberIndex(rouletteConst.corn_16_17_19_20,statsList);
   rouletteType.corn_17_18_20_21=DetermineNumberIndex(rouletteConst.corn_17_18_20_21,statsList);
   rouletteType.corn_19_20_22_23=DetermineNumberIndex(rouletteConst.corn_19_20_22_23,statsList);
   rouletteType.corn_20_21_23_24=DetermineNumberIndex(rouletteConst.corn_20_21_23_24,statsList);
   rouletteType.corn_22_23_25_26=DetermineNumberIndex(rouletteConst.corn_22_23_25_26,statsList);
   rouletteType.corn_23_24_26_27=DetermineNumberIndex(rouletteConst.corn_23_24_26_27,statsList);
   rouletteType.corn_25_26_28_29=DetermineNumberIndex(rouletteConst.corn_25_26_28_29,statsList);
   rouletteType.corn_26_27_29_30=DetermineNumberIndex(rouletteConst.corn_26_27_29_30,statsList);
   rouletteType.corn_28_29_31_32=DetermineNumberIndex(rouletteConst.corn_28_29_31_32,statsList);
   rouletteType.corn_29_30_32_33=DetermineNumberIndex(rouletteConst.corn_29_30_32_33,statsList);
   rouletteType.corn_31_32_34_35=DetermineNumberIndex(rouletteConst.corn_31_32_34_35,statsList);
   rouletteType.corn_32_33_35_36=DetermineNumberIndex(rouletteConst.corn_32_33_35_36,statsList);
   return rouletteType;
}

function HandleThreeCornerNumberLocation(statsList)
{
  let rouletteType={};


   rouletteType.corn_1_2_3=DetermineNumberIndex(rouletteConst.corn_1_2_3,statsList);
   rouletteType.corn_4_5_6=DetermineNumberIndex(rouletteConst.corn_4_5_6,statsList);
   rouletteType.corn_7_8_9=DetermineNumberIndex(rouletteConst.corn_7_8_9,statsList);
   rouletteType.corn_10_11_12=DetermineNumberIndex(rouletteConst.corn_10_11_12,statsList);
   rouletteType.corn_13_14_15=DetermineNumberIndex(rouletteConst.corn_13_14_15,statsList);
   rouletteType.corn_16_17_18=DetermineNumberIndex(rouletteConst.corn_16_17_18,statsList);
   rouletteType.corn_19_20_21=DetermineNumberIndex(rouletteConst.corn_19_20_21,statsList);
   rouletteType.corn_22_23_24=DetermineNumberIndex(rouletteConst.corn_22_23_24,statsList);
   rouletteType.corn_25_26_27=DetermineNumberIndex(rouletteConst.corn_25_26_27,statsList);
   rouletteType.corn_28_29_30=DetermineNumberIndex(rouletteConst.corn_28_29_30,statsList);
   rouletteType.corn_31_32_33=DetermineNumberIndex(rouletteConst.corn_31_32_33,statsList);
   rouletteType.corn_34_35_36=DetermineNumberIndex(rouletteConst.corn_34_35_36,statsList);
   return rouletteType;

}

function HandleLeftRightNumberLocation(statsList)
{
  let rouletteType={};


   rouletteType.LR_1=DetermineNumberIndex(rouletteConst.LR_1,statsList);
   rouletteType.LR_2=DetermineNumberIndex(rouletteConst.LR_2,statsList);
  
   return rouletteType;

}

function HandleThreeNeighbours(statsList)
{
  let rouletteType={};
  rouletteType._0N3=DetermineNumberIndex(rouletteConst._0N3,statsList);
  rouletteType._1N3=DetermineNumberIndex(rouletteConst._1N3,statsList);
  rouletteType._2N3=DetermineNumberIndex(rouletteConst._2N3,statsList);
  rouletteType._3N3=DetermineNumberIndex(rouletteConst._3N3,statsList);
  rouletteType._4N3=DetermineNumberIndex(rouletteConst._4N3,statsList);
  rouletteType._5N3=DetermineNumberIndex(rouletteConst._5N3,statsList);
  rouletteType._6N3=DetermineNumberIndex(rouletteConst._6N3,statsList);
  rouletteType._7N3=DetermineNumberIndex(rouletteConst._7N3,statsList);
  rouletteType._8N3=DetermineNumberIndex(rouletteConst._8N3,statsList);
  rouletteType._9N3=DetermineNumberIndex(rouletteConst._9N3,statsList);
  rouletteType._10N3=DetermineNumberIndex(rouletteConst._10N3,statsList);
  rouletteType._11N3=DetermineNumberIndex(rouletteConst._11N3,statsList);
  rouletteType._12N3=DetermineNumberIndex(rouletteConst._12N3,statsList);
  rouletteType._13N3=DetermineNumberIndex(rouletteConst._13N3,statsList);
  rouletteType._14N3=DetermineNumberIndex(rouletteConst._14N3,statsList);
  rouletteType._15N3=DetermineNumberIndex(rouletteConst._15N3,statsList);
  rouletteType._16N3=DetermineNumberIndex(rouletteConst._16N3,statsList);
  rouletteType._17N3=DetermineNumberIndex(rouletteConst._17N3,statsList);
  rouletteType._18N3=DetermineNumberIndex(rouletteConst._18N3,statsList);
  rouletteType._19N3=DetermineNumberIndex(rouletteConst._19N3,statsList);
  rouletteType._20N3=DetermineNumberIndex(rouletteConst._20N3,statsList);
  rouletteType._21N3=DetermineNumberIndex(rouletteConst._21N3,statsList);
  rouletteType._22N3=DetermineNumberIndex(rouletteConst._22N3,statsList);
  rouletteType._23N3=DetermineNumberIndex(rouletteConst._23N3,statsList);
  rouletteType._24N3=DetermineNumberIndex(rouletteConst._24N3,statsList);
  rouletteType._25N3=DetermineNumberIndex(rouletteConst._25N3,statsList);
  rouletteType._26N3=DetermineNumberIndex(rouletteConst._26N3,statsList);
  rouletteType._27N3=DetermineNumberIndex(rouletteConst._27N3,statsList);
  rouletteType._28N3=DetermineNumberIndex(rouletteConst._28N3,statsList);
  rouletteType._29N3=DetermineNumberIndex(rouletteConst._29N3,statsList);
  rouletteType._30N3=DetermineNumberIndex(rouletteConst._30N3,statsList);
  rouletteType._31N3=DetermineNumberIndex(rouletteConst._31N3,statsList);
  rouletteType._32N3=DetermineNumberIndex(rouletteConst._32N3,statsList);
  rouletteType._33N3=DetermineNumberIndex(rouletteConst._33N3,statsList);
  rouletteType._34N3=DetermineNumberIndex(rouletteConst._34N3,statsList);
  rouletteType._35N3=DetermineNumberIndex(rouletteConst._35N3,statsList);
  rouletteType._36N3=DetermineNumberIndex(rouletteConst._36N3,statsList);
  console.log(rouletteType)
  return rouletteType;
}

export {HandleNumberLocation,HandleFourCornerNumberLocation,
  HandleThreeCornerNumberLocation,HandleLeftRightNumberLocation,HandleThreeNeighbours} ;