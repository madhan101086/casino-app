const RouletteTypeMaxStats=(results)=>
{
    
    let maxOutcome={
        _redArr:[],_blackArr:[],_smallArr:[],_largeArr:[],_oddArr:[],_evenArr:[],
        _rightArr:[],_leftArr:[],_zeroArr:[],_voisinsArr:[],_orphellinsArr:[],_tierArr:[],
        _1_12Arr:[],_13_24Arr:[],_25_36Arr:[],_col1Arr:[],_col2Arr:[],_col3Arr:[]
   };
  
   let maxOutcomeResult={};
   results.forEach(item => {
    maxOutcome._redArr.push(item.redCount);
    maxOutcome._blackArr.push(item.blackCount);
    maxOutcome._smallArr.push(item.small);
    maxOutcome._largeArr.push(item.large);
    maxOutcome._oddArr.push(item.odd);
    maxOutcome._evenArr.push(item.even);
    maxOutcome._rightArr.push(item.rightWheel);
    maxOutcome._leftArr.push(item.leftWheel);
    maxOutcome._zeroArr.push(item.zeroVar);
    maxOutcome._voisinsArr.push(item.voisins);
    maxOutcome._orphellinsArr.push(item.orephellins);
    maxOutcome._tierArr.push(item.tier);
    maxOutcome._1_12Arr.push(item.rowList1);
    maxOutcome._13_24Arr.push(item.rowList2);
    maxOutcome._25_36Arr.push(item.rowList3);
    maxOutcome._col1Arr.push(item.colList1);
    maxOutcome._col2Arr.push(item.colList2);
    maxOutcome._col3Arr.push(item.colList3);
  
 
    

   });
   maxOutcomeResult.red=Math.max.apply(null, maxOutcome._redArr);
   maxOutcomeResult.black=Math.max.apply(null, maxOutcome._blackArr);
   maxOutcomeResult.small=Math.max.apply(null, maxOutcome._smallArr);
   maxOutcomeResult.large=Math.max.apply(null, maxOutcome._largeArr);
   maxOutcomeResult.odd=Math.max.apply(null, maxOutcome._oddArr);
   maxOutcomeResult.even=Math.max.apply(null, maxOutcome._evenArr);
   maxOutcomeResult.right=Math.max.apply(null, maxOutcome._rightArr);
   maxOutcomeResult.left=Math.max.apply(null, maxOutcome._leftArr);
   maxOutcomeResult.zero=Math.max.apply(null, maxOutcome._zeroArr);
   maxOutcomeResult.vosins=Math.max.apply(null, maxOutcome._voisinsArr);
   maxOutcomeResult.orphelins=Math.max.apply(null, maxOutcome._orphellinsArr);
   maxOutcomeResult.tier=Math.max.apply(null, maxOutcome._tierArr);
   maxOutcomeResult.rowList1=Math.max.apply(null, maxOutcome._1_12Arr);
   maxOutcomeResult.rowList2=Math.max.apply(null, maxOutcome._13_24Arr);
   maxOutcomeResult.rowList3=Math.max.apply(null, maxOutcome._25_36Arr);
   maxOutcomeResult.colList1=Math.max.apply(null, maxOutcome._col1Arr);
   maxOutcomeResult.colList2=Math.max.apply(null, maxOutcome._col2Arr);
   maxOutcomeResult.colList3=Math.max.apply(null, maxOutcome._col3Arr);
  
  
   //console.log("Roulette Type Max")
  //  console.log(maxOutcomeResult)
   //console.log("Max Outcome");
   //console.log(maxOutcomeResult)
return maxOutcomeResult;
}

const RouletteCornerFourTypeMaxStats=(results)=>
{
   
    let maxOutcome={
        corn_0_1_2_3:[],corn_1_2_4_5:[],corn_2_3_5_6:[],corn_4_5_7_8:[],corn_5_6_8_9:[],corn_7_8_10_11:[],
        corn_8_9_11_12:[],corn_10_11_13_14:[],corn_11_12_14_15:[],corn_13_14_16_17:[],corn_14_15_17_18:[],
        corn_16_17_19_20:[],corn_17_18_20_21:[],corn_19_20_22_23:[],corn_20_21_23_24:[],corn_22_23_25_26:[],
        corn_23_24_26_27:[],corn_25_26_28_29:[],corn_26_27_29_30:[],corn_28_29_31_32:[],corn_29_30_32_33:[],
        corn_31_32_34_35:[],corn_32_33_35_36:[]

   };
  
   
   let maxOutcomeResult={};
   results.forEach(item => {
    maxOutcome.corn_0_1_2_3.push(item.corn_0_1_2_3);
    maxOutcome.corn_1_2_4_5.push(item.corn_1_2_4_5);
    maxOutcome.corn_2_3_5_6.push(item.corn_2_3_5_6);
    maxOutcome.corn_4_5_7_8.push(item.corn_4_5_7_8);
    maxOutcome.corn_5_6_8_9.push(item.corn_5_6_8_9);
    maxOutcome.corn_7_8_10_11.push(item.corn_7_8_10_11);
    maxOutcome.corn_8_9_11_12.push(item.corn_8_9_11_12);
    maxOutcome.corn_10_11_13_14.push(item.corn_10_11_13_14);
    maxOutcome.corn_11_12_14_15.push(item.corn_11_12_14_15);
    maxOutcome.corn_13_14_16_17.push(item.corn_13_14_16_17);
    maxOutcome.corn_14_15_17_18.push(item.corn_14_15_17_18);
    maxOutcome.corn_16_17_19_20.push(item.corn_16_17_19_20);
    maxOutcome.corn_17_18_20_21.push(item.corn_17_18_20_21);
    maxOutcome.corn_19_20_22_23.push(item.corn_19_20_22_23);
    maxOutcome.corn_20_21_23_24.push(item.corn_20_21_23_24);
    maxOutcome.corn_22_23_25_26.push(item.corn_22_23_25_26);
    maxOutcome.corn_23_24_26_27.push(item.corn_23_24_26_27);
    maxOutcome.corn_25_26_28_29.push(item.corn_25_26_28_29);
    maxOutcome.corn_26_27_29_30.push(item.corn_26_27_29_30);
    maxOutcome.corn_28_29_31_32.push(item.corn_28_29_31_32);
    maxOutcome.corn_29_30_32_33.push(item.corn_29_30_32_33);
    maxOutcome.corn_31_32_34_35.push(item.corn_31_32_34_35);
    maxOutcome.corn_32_33_35_36.push(item.corn_32_33_35_36);
  
 
    

   });


   maxOutcomeResult.corn_0_1_2_3=Math.max.apply(null, maxOutcome.corn_0_1_2_3);
   maxOutcomeResult.corn_1_2_4_5=Math.max.apply(null, maxOutcome.corn_1_2_4_5);
   maxOutcomeResult.corn_2_3_5_6=Math.max.apply(null, maxOutcome.corn_2_3_5_6);
   maxOutcomeResult.corn_4_5_7_8=Math.max.apply(null, maxOutcome.corn_4_5_7_8);
   maxOutcomeResult.corn_5_6_8_9=Math.max.apply(null, maxOutcome.corn_5_6_8_9);
   maxOutcomeResult.corn_7_8_10_11=Math.max.apply(null, maxOutcome.corn_7_8_10_11);
   maxOutcomeResult.corn_8_9_11_12=Math.max.apply(null, maxOutcome.corn_8_9_11_12);
   maxOutcomeResult.corn_10_11_13_14=Math.max.apply(null, maxOutcome.corn_10_11_13_14);
   maxOutcomeResult.corn_11_12_14_15=Math.max.apply(null, maxOutcome.corn_11_12_14_15);
   maxOutcomeResult.corn_13_14_16_17=Math.max.apply(null, maxOutcome.corn_13_14_16_17);
   maxOutcomeResult.corn_14_15_17_18=Math.max.apply(null, maxOutcome.corn_14_15_17_18);
   maxOutcomeResult.corn_16_17_19_20=Math.max.apply(null, maxOutcome.corn_16_17_19_20);
   maxOutcomeResult.corn_17_18_20_21=Math.max.apply(null, maxOutcome.corn_17_18_20_21);
   maxOutcomeResult.corn_19_20_22_23=Math.max.apply(null, maxOutcome.corn_19_20_22_23);
   maxOutcomeResult.corn_20_21_23_24=Math.max.apply(null, maxOutcome.corn_20_21_23_24);
   maxOutcomeResult.corn_22_23_25_26=Math.max.apply(null, maxOutcome.corn_22_23_25_26);
   maxOutcomeResult.corn_23_24_26_27=Math.max.apply(null, maxOutcome.corn_23_24_26_27);
   maxOutcomeResult.corn_25_26_28_29=Math.max.apply(null, maxOutcome.corn_25_26_28_29);
   maxOutcomeResult.corn_26_27_29_30=Math.max.apply(null, maxOutcome.corn_26_27_29_30);
   maxOutcomeResult.corn_28_29_31_32=Math.max.apply(null, maxOutcome.corn_28_29_31_32);
   maxOutcomeResult.corn_29_30_32_33=Math.max.apply(null, maxOutcome.corn_29_30_32_33);
   maxOutcomeResult.corn_31_32_34_35=Math.max.apply(null, maxOutcome.corn_31_32_34_35);
   maxOutcomeResult.corn_32_33_35_36=Math.max.apply(null, maxOutcome.corn_32_33_35_36);
  
  
   //console.log("Roulette Type Max")
  //  console.log(maxOutcomeResult)
   //console.log("Max Outcome");
   //console.log(maxOutcomeResult)
return maxOutcomeResult;
}

const RouletteCornerThreeTypeMaxStats=(results)=>
{
   
    let maxOutcome={
        corn_1_2_3:[],corn_4_5_6:[],corn_7_8_9:[],corn_10_11_12:[],corn_13_14_15:[],
        corn_16_17_18:[],corn_19_20_21:[],corn_22_23_24:[],corn_25_26_27:[],
        corn_28_29_30:[],corn_31_32_33:[],corn_34_35_36:[]

   };
  
   let maxOutcomeResult={};
   results.forEach(item => {
    maxOutcome.corn_1_2_3.push(item.corn_1_2_3);
    maxOutcome.corn_4_5_6.push(item.corn_4_5_6);
    maxOutcome.corn_7_8_9.push(item.corn_7_8_9);
    maxOutcome.corn_10_11_12.push(item.corn_10_11_12);
    maxOutcome.corn_13_14_15.push(item.corn_13_14_15);
    maxOutcome.corn_16_17_18.push(item.corn_16_17_18);
    maxOutcome.corn_19_20_21.push(item.corn_19_20_21);
    maxOutcome.corn_22_23_24.push(item.corn_22_23_24);
    maxOutcome.corn_25_26_27.push(item.corn_25_26_27);
    maxOutcome.corn_28_29_30.push(item.corn_28_29_30);
    maxOutcome.corn_31_32_33.push(item.corn_31_32_33);
    maxOutcome.corn_34_35_36.push(item.corn_34_35_36);
   });
   maxOutcomeResult.corn_1_2_3=Math.max.apply(null, maxOutcome.corn_1_2_3);
   maxOutcomeResult.corn_4_5_6=Math.max.apply(null, maxOutcome.corn_4_5_6);
   maxOutcomeResult.corn_7_8_9=Math.max.apply(null, maxOutcome.corn_7_8_9);
   maxOutcomeResult.corn_10_11_12=Math.max.apply(null, maxOutcome.corn_10_11_12);
   maxOutcomeResult.corn_13_14_15=Math.max.apply(null, maxOutcome.corn_13_14_15);
   maxOutcomeResult.corn_16_17_18=Math.max.apply(null, maxOutcome.corn_16_17_18);
   maxOutcomeResult.corn_19_20_21=Math.max.apply(null, maxOutcome.corn_19_20_21);
   maxOutcomeResult.corn_22_23_24=Math.max.apply(null, maxOutcome.corn_22_23_24);
   maxOutcomeResult.corn_25_26_27=Math.max.apply(null, maxOutcome.corn_25_26_27);
   maxOutcomeResult.corn_28_29_30=Math.max.apply(null, maxOutcome.corn_28_29_30);
   maxOutcomeResult.corn_31_32_33=Math.max.apply(null, maxOutcome.corn_31_32_33);
   maxOutcomeResult.corn_34_35_36=Math.max.apply(null, maxOutcome.corn_34_35_36);
   return maxOutcomeResult;

}

const RouletteLeftRightTypeMaxStats=(results)=>
{
   
    let maxOutcome={
        LR_1:[],LR_2:[],LR_3:[],LR_4:[],LR_5:[],LR_6:[]

   };
  
   let maxOutcomeResult={};
   results.forEach(item => {
    maxOutcome.LR_1.push(item.LR_1);
    maxOutcome.LR_2.push(item.LR_2);
    maxOutcome.LR_3.push(item.LR_3);
    maxOutcome.LR_4.push(item.LR_4);
    maxOutcome.LR_5.push(item.LR_5);
    maxOutcome.LR_6.push(item.LR_6);
    
   });
   maxOutcomeResult.LR_1=Math.max.apply(null, maxOutcome.LR_1);
   maxOutcomeResult.LR_2=Math.max.apply(null, maxOutcome.LR_2);
   maxOutcomeResult.LR_3=Math.max.apply(null, maxOutcome.LR_3);
   maxOutcomeResult.LR_4=Math.max.apply(null, maxOutcome.LR_4);
   maxOutcomeResult.LR_5=Math.max.apply(null, maxOutcome.LR_5);
   maxOutcomeResult.LR_6=Math.max.apply(null, maxOutcome.LR_6);
   return maxOutcomeResult;

}

const RouletteThreeNeighbourMaxStats=(results)=>
{
   
    let maxOutcome={
        _0N3:[],_1N3:[],_2N3:[],_3N3:[],_4N3:[],_5N3:[],_6N3:[],_7N3:[],_8N3:[],_9N3:[],_10N3:[],_11N3:[],_12N3:[],
        _13N3:[],_14N3:[],_15N3:[],_16N3:[],_17N3:[],_18N3:[],_19N3:[],_20N3:[],_21N3:[],_22N3:[],_23N3:[],_24N3:[],
        _25N3:[],_26N3:[],_27N3:[],_28N3:[],_29N3:[],_30N3:[],_31N3:[],_32N3:[],_33N3:[],_34N3:[],_35N3:[],_36N3:[]
   };
  
   let maxOutcomeResult={};
   results.forEach(item => {
    maxOutcome._0N3.push(item._0N3);
    maxOutcome._1N3.push(item._1N3);
    maxOutcome._2N3.push(item._2N3);
    maxOutcome._3N3.push(item._3N3);
    maxOutcome._4N3.push(item._4N3);
    maxOutcome._5N3.push(item._5N3);
    maxOutcome._6N3.push(item._6N3);
    maxOutcome._7N3.push(item._7N3);
    maxOutcome._8N3.push(item._8N3);
    maxOutcome._9N3.push(item._9N3);
    maxOutcome._10N3.push(item._10N3);
    maxOutcome._11N3.push(item._11N3);
    maxOutcome._12N3.push(item._12N3);
    maxOutcome._13N3.push(item._13N3);
    maxOutcome._14N3.push(item._14N3);
    maxOutcome._15N3.push(item._15N3);
    maxOutcome._16N3.push(item._16N3);
    maxOutcome._17N3.push(item._17N3);
    maxOutcome._18N3.push(item._18N3);
    maxOutcome._19N3.push(item._19N3);
    maxOutcome._20N3.push(item._20N3);
    maxOutcome._21N3.push(item._21N3);
    maxOutcome._22N3.push(item._22N3);
    maxOutcome._23N3.push(item._23N3);
    maxOutcome._24N3.push(item._24N3);
    maxOutcome._25N3.push(item._25N3);
    maxOutcome._26N3.push(item._26N3);
    maxOutcome._27N3.push(item._25N3);
    maxOutcome._28N3.push(item._28N3);
    maxOutcome._29N3.push(item._29N3);
    maxOutcome._30N3.push(item._30N3);
    maxOutcome._31N3.push(item._31N3);
    maxOutcome._32N3.push(item._32N3);
    maxOutcome._33N3.push(item._33N3);
    maxOutcome._34N3.push(item._34N3);
    maxOutcome._35N3.push(item._35N3);
    maxOutcome._36N3.push(item._36N3);
    
   });
  

   maxOutcomeResult._0N3=Math.max.apply(null, maxOutcome._0N3);
   maxOutcomeResult._1N3=Math.max.apply(null, maxOutcome._1N3);
   maxOutcomeResult._2N3=Math.max.apply(null, maxOutcome._2N3);
   maxOutcomeResult._3N3=Math.max.apply(null, maxOutcome._3N3);
   maxOutcomeResult._4N3=Math.max.apply(null, maxOutcome._4N3);
   maxOutcomeResult._5N3=Math.max.apply(null, maxOutcome._5N3);
   maxOutcomeResult._6N3=Math.max.apply(null, maxOutcome._6N3);
   maxOutcomeResult._7N3=Math.max.apply(null, maxOutcome._7N3);
   maxOutcomeResult._8N3=Math.max.apply(null, maxOutcome._8N3);
   maxOutcomeResult._9N3=Math.max.apply(null, maxOutcome._9N3);
   maxOutcomeResult._10N3=Math.max.apply(null, maxOutcome._10N3);
   maxOutcomeResult._11N3=Math.max.apply(null, maxOutcome._11N3);
   maxOutcomeResult._12N3=Math.max.apply(null, maxOutcome._12N3);

   maxOutcomeResult._13N3=Math.max.apply(null, maxOutcome._13N3);
   maxOutcomeResult._14N3=Math.max.apply(null, maxOutcome._14N3);
   maxOutcomeResult._15N3=Math.max.apply(null, maxOutcome._15N3);
   maxOutcomeResult._16N3=Math.max.apply(null, maxOutcome._16N3);
   maxOutcomeResult._17N3=Math.max.apply(null, maxOutcome._17N3);
   maxOutcomeResult._18N3=Math.max.apply(null, maxOutcome._18N3);
   maxOutcomeResult._19N3=Math.max.apply(null, maxOutcome._19N3);
   maxOutcomeResult._20N3=Math.max.apply(null, maxOutcome._20N3);
   maxOutcomeResult._21N3=Math.max.apply(null, maxOutcome._21N3);
   maxOutcomeResult._22N3=Math.max.apply(null, maxOutcome._22N3);
   maxOutcomeResult._23N3=Math.max.apply(null, maxOutcome._23N3);
   maxOutcomeResult._24N3=Math.max.apply(null, maxOutcome._24N3);

   maxOutcomeResult._25N3=Math.max.apply(null, maxOutcome._25N3);
   maxOutcomeResult._26N3=Math.max.apply(null, maxOutcome._26N3);
   maxOutcomeResult._27N3=Math.max.apply(null, maxOutcome._27N3);
   maxOutcomeResult._28N3=Math.max.apply(null, maxOutcome._28N3);
   maxOutcomeResult._29N3=Math.max.apply(null, maxOutcome._29N3);
   maxOutcomeResult._30N3=Math.max.apply(null, maxOutcome._30N3);
   maxOutcomeResult._31N3=Math.max.apply(null, maxOutcome._31N3);
   maxOutcomeResult._32N3=Math.max.apply(null, maxOutcome._32N3);
   maxOutcomeResult._33N3=Math.max.apply(null, maxOutcome._33N3);
   maxOutcomeResult._34N3=Math.max.apply(null, maxOutcome._34N3);
   maxOutcomeResult._35N3=Math.max.apply(null, maxOutcome._35N3);
   maxOutcomeResult._36N3=Math.max.apply(null, maxOutcome._36N3);
 
   return maxOutcomeResult;

}



export {RouletteCornerFourTypeMaxStats,RouletteTypeMaxStats,RouletteCornerThreeTypeMaxStats,
    RouletteLeftRightTypeMaxStats,RouletteThreeNeighbourMaxStats} ;