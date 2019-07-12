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
export default RouletteTypeMaxStats;