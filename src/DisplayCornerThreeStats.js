
import React from "react"
import rouletteConst from "./rouletteConstants"
import { Label } from 'semantic-ui-react'
import { Icon, Image, Statistic } from 'semantic-ui-react'
import DetermineLabel from "./DetermineRouletteType"
const DisplayCornerThreeMaxStats=(maxOutcome)=>
{
    //console.log("maxOutcomeCount")
    //console.log(maxOutcome);
 
    const corn_1_2_3={count:maxOutcome.corn_1_2_3,label:"1_2_3"};
    const corn_4_5_6={count:maxOutcome.corn_4_5_6,label:"4_5_6"};
    const corn_7_8_9={count:maxOutcome.corn_7_8_9,label:"7_8_9"};
    const corn_10_11_12={count:maxOutcome.corn_10_11_12,label:"10_11_12"};
    const corn_13_14_15={count:maxOutcome.corn_13_14_15,label:"13_14_15"};
    const corn_16_17_18={count:maxOutcome.corn_16_17_18,label:"16_17_18"};
    const corn_19_20_21={count:maxOutcome.corn_19_20_21,label:"19_20_21"};
    const corn_22_23_24={count:maxOutcome.corn_22_23_24,label:"22_23_24"};
    const corn_25_26_27={count:maxOutcome.corn_25_26_27,label:"25_26_27"};
    const corn_28_29_30={count:maxOutcome.corn_28_29_30,label:"28_29_30"};
    const corn_31_32_33={count:maxOutcome.corn_31_32_33,label:"31_32_33"};
    const corn_34_35_36={count:maxOutcome.corn_34_35_36,label:"34_35_36"};

   const corn_1_2_3Label=DisplayMaxCountStats(corn_1_2_3)
   const corn_4_5_6Label=DisplayMaxCountStats(corn_4_5_6)
   const corn_7_8_9Label=DisplayMaxCountStats(corn_7_8_9)
   const corn_10_11_12Label=DisplayMaxCountStats(corn_10_11_12)
   const corn_13_14_15Label=DisplayMaxCountStats(corn_13_14_15)
   const corn_16_17_18Label=DisplayMaxCountStats(corn_16_17_18)
   const corn_19_20_21Label=DisplayMaxCountStats(corn_19_20_21)
   const corn_22_23_24Label=DisplayMaxCountStats(corn_22_23_24)
   const corn_25_26_27Label=DisplayMaxCountStats(corn_25_26_27)
   const corn_28_29_30Label=DisplayMaxCountStats(corn_28_29_30)
   const corn_31_32_33Label=DisplayMaxCountStats(corn_31_32_33)
   const corn_34_35_36Label=DisplayMaxCountStats(corn_34_35_36)

  
   
   const countGroup=(<div> <Statistic.Group widths='seven'>
                  
                  {corn_1_2_3Label}
                  {corn_4_5_6Label}
                  {corn_7_8_9Label}
                  {corn_10_11_12Label}
                  {corn_13_14_15Label}
                  {corn_16_17_18Label}
                  
                  </Statistic.Group>
                  <Statistic.Group widths='seven'>
                  {corn_19_20_21Label}
                  {corn_22_23_24Label}
                  {corn_25_26_27Label}
                  {corn_28_29_30Label}
                  {corn_31_32_33Label}
                  {corn_34_35_36Label}
                           
                  </Statistic.Group>
      
                  </div>)
                  return countGroup
 
}

const DisplayMaxCountStats= (outcome) => 
  
   {
    //console.log("outcome DisplayMaxCountStats Result");   
    //console.log(outcome);
    let colorLabel="olive";
    //const countLabel=DetermineLabel(outcome.label);
    if(outcome.count>=55)
    {
        colorLabel="red";
    }
    else if(outcome.count>=40 && outcome.count<55)
    {
        colorLabel="orange";
    
    }
    else if(outcome.count==0)
    {
        colorLabel="black";
    }
    else{
        colorLabel="olive";
    }
        const countStats=( <Statistic color={colorLabel}>
        <Statistic.Value>{outcome.count}</Statistic.Value>
        <Statistic.Label>{outcome.label}</Statistic.Label>
        </Statistic>)
        return countStats
   } 


export default DisplayCornerThreeMaxStats;