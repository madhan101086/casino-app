const IndividualNumberMaxStats=(results)=>
{
  //console.log(results)
    let maxOutcome={
        _1Arr:[],_2Arr:[],_3Arr:[],_4Arr:[],_5Arr:[],_6Arr:[],
        _7Arr:[],_8Arr:[],_9Arr:[],_10Arr:[],_11Arr:[],_12Arr:[],
        _13Arr:[],_14Arr:[],_15Arr:[],_16Arr:[],_17Arr:[],_18Arr:[],
       _19Arr:[],_20Arr:[],_21Arr:[],_22Arr:[],_23Arr:[],_24Arr:[],
       _25Arr:[],_26Arr:[],_27Arr:[],_28Arr:[],_29Arr:[],_30Arr:[],
       _31Arr:[],_32Arr:[],_33Arr:[],_34Arr:[],_35Arr:[],_36Arr:[],
       _0Arr:[]
   };
  
   let maxOutcomeResult={};
   results.forEach(item => {
    maxOutcome._0Arr.push(item._0);
    maxOutcome._1Arr.push(item._1);
    maxOutcome._2Arr.push(item._2);
    maxOutcome._3Arr.push(item._3);
    maxOutcome._4Arr.push(item._4);
    maxOutcome._5Arr.push(item._5);
    maxOutcome._6Arr.push(item._6);
    maxOutcome._7Arr.push(item._7);
    maxOutcome._8Arr.push(item._8);
    maxOutcome._9Arr.push(item._9);
    maxOutcome._10Arr.push(item._10);
    maxOutcome._11Arr.push(item._11);
    maxOutcome._12Arr.push(item._12);
    maxOutcome._13Arr.push(item._13);
    maxOutcome._14Arr.push(item._14);
    maxOutcome._15Arr.push(item._15);
    maxOutcome._16Arr.push(item._16);
    maxOutcome._17Arr.push(item._17);
    maxOutcome._18Arr.push(item._18);
    maxOutcome._19Arr.push(item._19);
    maxOutcome._20Arr.push(item._20);
    maxOutcome._21Arr.push(item._21);
    maxOutcome._22Arr.push(item._22);
    maxOutcome._23Arr.push(item._23);
    maxOutcome._24Arr.push(item._24);
    maxOutcome._25Arr.push(item._25);
    maxOutcome._26Arr.push(item._26);
    maxOutcome._27Arr.push(item._27);
    maxOutcome._28Arr.push(item._28);
    maxOutcome._29Arr.push(item._29);
    maxOutcome._30Arr.push(item._30);
    maxOutcome._31Arr.push(item._31);
    maxOutcome._32Arr.push(item._32);
    maxOutcome._33Arr.push(item._33);
    maxOutcome._34Arr.push(item._34);
    maxOutcome._35Arr.push(item._35);
    maxOutcome._36Arr.push(item._36);

   });
   maxOutcomeResult._0=Math.max.apply(null, maxOutcome._0Arr);
   maxOutcomeResult._1=Math.max.apply(null, maxOutcome._1Arr);
   maxOutcomeResult._2=Math.max.apply(null, maxOutcome._2Arr);
   maxOutcomeResult._3=Math.max.apply(null, maxOutcome._3Arr);
   maxOutcomeResult._4=Math.max.apply(null, maxOutcome._4Arr);
   maxOutcomeResult._5=Math.max.apply(null, maxOutcome._5Arr);
   maxOutcomeResult._6=Math.max.apply(null, maxOutcome._6Arr);
   maxOutcomeResult._7=Math.max.apply(null, maxOutcome._7Arr);
   maxOutcomeResult._8=Math.max.apply(null, maxOutcome._8Arr);
   maxOutcomeResult._9=Math.max.apply(null, maxOutcome._9Arr);
   maxOutcomeResult._10=Math.max.apply(null, maxOutcome._10Arr);
   maxOutcomeResult._11=Math.max.apply(null, maxOutcome._11Arr);
   maxOutcomeResult._12=Math.max.apply(null, maxOutcome._12Arr);
   maxOutcomeResult._13=Math.max.apply(null, maxOutcome._13Arr);
   maxOutcomeResult._14=Math.max.apply(null, maxOutcome._14Arr);
   maxOutcomeResult._15=Math.max.apply(null, maxOutcome._15Arr);
   maxOutcomeResult._16=Math.max.apply(null, maxOutcome._16Arr);
   maxOutcomeResult._17=Math.max.apply(null, maxOutcome._17Arr);
   maxOutcomeResult._18=Math.max.apply(null, maxOutcome._18Arr);
   maxOutcomeResult._19=Math.max.apply(null, maxOutcome._19Arr);
   maxOutcomeResult._20=Math.max.apply(null, maxOutcome._20Arr);
   maxOutcomeResult._21=Math.max.apply(null, maxOutcome._21Arr);
   maxOutcomeResult._22=Math.max.apply(null, maxOutcome._22Arr);
   maxOutcomeResult._23=Math.max.apply(null, maxOutcome._23Arr);
   maxOutcomeResult._24=Math.max.apply(null, maxOutcome._24Arr);
   maxOutcomeResult._25=Math.max.apply(null, maxOutcome._25Arr);
   maxOutcomeResult._26=Math.max.apply(null, maxOutcome._26Arr);
   maxOutcomeResult._27=Math.max.apply(null, maxOutcome._27Arr);
   maxOutcomeResult._28=Math.max.apply(null, maxOutcome._28Arr);
   maxOutcomeResult._29=Math.max.apply(null, maxOutcome._29Arr);
   maxOutcomeResult._30=Math.max.apply(null, maxOutcome._30Arr);
   maxOutcomeResult._31=Math.max.apply(null, maxOutcome._31Arr);
   maxOutcomeResult._32=Math.max.apply(null, maxOutcome._32Arr);
   maxOutcomeResult._33=Math.max.apply(null, maxOutcome._33Arr);
   maxOutcomeResult._34=Math.max.apply(null, maxOutcome._34Arr);
   maxOutcomeResult._35=Math.max.apply(null, maxOutcome._35Arr);
   maxOutcomeResult._36=Math.max.apply(null, maxOutcome._36Arr);
   //console.log("Max Outcome");
   //console.log(maxOutcomeResult)
return maxOutcomeResult;
}
export default IndividualNumberMaxStats;