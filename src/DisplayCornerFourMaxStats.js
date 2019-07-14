
import React from "react"
import rouletteConst from "./rouletteConstants"
import { Label } from 'semantic-ui-react'
import { Icon, Image, Statistic } from 'semantic-ui-react'
import DetermineLabel from "./DetermineRouletteType"
const DisplayCornerFourMaxStats=(maxOutcome)=>
{
    //console.log("maxOutcomeCount")
    //console.log(maxOutcome);
  
    const corn_0_1_2_3={count:maxOutcome.corn_0_1_2_3,label:"0_1_2_3"};
    const corn_1_2_4_5={count:maxOutcome.corn_1_2_4_5,label:"1_2_4_5"};
    const corn_2_3_5_6={count:maxOutcome.corn_2_3_5_6,label:"2_3_5_6"};
    const corn_4_5_7_8={count:maxOutcome.corn_4_5_7_8,label:"4_5_7_8"};
    const corn_5_6_8_9={count:maxOutcome.corn_5_6_8_9,label:"5_6_8_9"};
    const corn_7_8_10_11={count:maxOutcome.corn_7_8_10_11,label:"7_8_10_11"};
    const corn_8_9_11_12={count:maxOutcome.corn_8_9_11_12,label:"8_9_11_12"};
    const corn_10_11_13_14={count:maxOutcome.corn_10_11_13_14,label:"10_11_13_14"};
    const corn_11_12_14_15={count:maxOutcome.corn_11_12_14_15,label:"11_12_14_15"};
    const corn_13_14_16_17={count:maxOutcome.corn_13_14_16_17,label:"13_14_16_17"};
    const corn_14_15_17_18={count:maxOutcome.corn_14_15_17_18,label:"14_15_17_18"};
    const corn_16_17_19_20={count:maxOutcome.corn_16_17_19_20,label:"16_17_19_20"};
    const corn_17_18_20_21={count:maxOutcome.corn_17_18_20_21,label:"17_18_20_21"};
    const corn_19_20_22_23={count:maxOutcome.corn_19_20_22_23,label:"19_20_22_23"};
    const corn_20_21_23_24={count:maxOutcome.corn_20_21_23_24,label:"20_21_23_24"};
    const corn_22_23_25_26={count:maxOutcome.corn_22_23_25_26,label:"22_23_25_26"};
    const corn_23_24_26_27={count:maxOutcome.corn_23_24_26_27,label:"23_24_26_27"};
    const corn_25_26_28_29={count:maxOutcome.corn_25_26_28_29,label:"25_26_28_29"};
    const corn_26_27_29_30={count:maxOutcome.corn_26_27_29_30,label:"26_27_29_30"};
    const corn_28_29_31_32={count:maxOutcome.corn_28_29_31_32,label:"28_29_31_32"};
    const corn_29_30_32_33={count:maxOutcome.corn_29_30_32_33,label:"29_30_32_33"};
    const corn_31_32_34_35={count:maxOutcome.corn_31_32_34_35,label:"31_32_34_35"};
    const corn_32_33_35_36={count:maxOutcome.corn_32_33_35_36,label:"32_33_35_36"};
    
    
   
   
   const corn_0_1_2_3Label=DisplayMaxCountStats(corn_0_1_2_3)
   const corn_1_2_4_5Label=DisplayMaxCountStats(corn_1_2_4_5)
   const corn_2_3_5_6Label=DisplayMaxCountStats(corn_2_3_5_6)
   const corn_4_5_7_8Label=DisplayMaxCountStats(corn_4_5_7_8)
   const corn_5_6_8_9Label=DisplayMaxCountStats(corn_5_6_8_9)
   const corn_7_8_10_11Label=DisplayMaxCountStats(corn_7_8_10_11)
   const corn_8_9_11_12Label=DisplayMaxCountStats(corn_8_9_11_12)
   const corn_10_11_13_14Label=DisplayMaxCountStats(corn_10_11_13_14)
   const corn_11_12_14_15Label=DisplayMaxCountStats(corn_11_12_14_15)
   const corn_13_14_16_17Label=DisplayMaxCountStats(corn_13_14_16_17)
   const corn_14_15_17_18Label=DisplayMaxCountStats(corn_14_15_17_18)
   const corn_16_17_19_20Label=DisplayMaxCountStats(corn_16_17_19_20)
   const corn_17_18_20_21Label=DisplayMaxCountStats(corn_17_18_20_21)
   const corn_19_20_22_23Label=DisplayMaxCountStats(corn_19_20_22_23)
   const corn_20_21_23_24Label=DisplayMaxCountStats(corn_20_21_23_24)
   const corn_22_23_25_26Label=DisplayMaxCountStats(corn_22_23_25_26)
   const corn_23_24_26_27Label=DisplayMaxCountStats(corn_23_24_26_27)
   const corn_25_26_28_291Label=DisplayMaxCountStats(corn_25_26_28_29)
   const corn_26_27_29_30Label=DisplayMaxCountStats(corn_26_27_29_30)
   const corn_28_29_31_32Label=DisplayMaxCountStats(corn_28_29_31_32)
   const corn_29_30_32_33Label=DisplayMaxCountStats(corn_29_30_32_33)
   const corn_31_32_34_35Label=DisplayMaxCountStats(corn_31_32_34_35)
   const corn_32_33_35_36Label=DisplayMaxCountStats(corn_32_33_35_36)
  
   
   const countGroup=(<div> <Statistic.Group widths='ten'>
                  
                  {corn_0_1_2_3Label}
                  {corn_1_2_4_5Label}
                  {corn_2_3_5_6Label}
                  {corn_4_5_7_8Label}
                  {corn_5_6_8_9Label}
                  {corn_7_8_10_11Label}
                  {corn_8_9_11_12Label}
                  {corn_10_11_13_14Label}
                  </Statistic.Group>
                  <Statistic.Group widths='ten'>
                  {corn_11_12_14_15Label}
                  {corn_13_14_16_17Label}
                  {corn_14_15_17_18Label}
                  {corn_16_17_19_20Label}
                  {corn_17_18_20_21Label}
                  {corn_19_20_22_23Label}
                  {corn_20_21_23_24Label}            
                  </Statistic.Group>
                  <Statistic.Group widths='ten'>
                  {corn_22_23_25_26Label}
                  {corn_23_24_26_27Label}
                  {corn_25_26_28_291Label}
                  {corn_26_27_29_30Label}
                  {corn_28_29_31_32Label}
                  {corn_29_30_32_33Label}
                  {corn_31_32_34_35Label}
                  {corn_32_33_35_36Label}
                  
                 
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


export default DisplayCornerFourMaxStats;