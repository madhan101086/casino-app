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
        LR_1:[],LR_2:[]

   };
  
   let maxOutcomeResult={};
   results.forEach(item => {
    maxOutcome.LR_1.push(item.LR_1);
    maxOutcome.LR_2.push(item.LR_2);
    
   });
   maxOutcomeResult.LR_1=Math.max.apply(null, maxOutcome.LR_1);
   maxOutcomeResult.LR_2=Math.max.apply(null, maxOutcome.LR_2);
 
   return maxOutcomeResult;

}



export {RouletteCornerFourTypeMaxStats,RouletteTypeMaxStats,RouletteCornerThreeTypeMaxStats,RouletteLeftRightTypeMaxStats} ;