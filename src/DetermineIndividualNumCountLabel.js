
import React from "react"
import rouletteConst from "./rouletteConstants"
import { Label } from 'semantic-ui-react'
import { Icon, Image, Statistic } from 'semantic-ui-react'
import DetermineLabel from "./DetermineRouletteType"
const DisplayIndNumLabel=(maxOutcome)=>
{
   // console.log("maxOutcomeCount")
    //console.log(maxOutcome);
    const _0={count:maxOutcome._0,label:"0"};
    const _1={count:maxOutcome._1,label:"1"};
    const _2={count:maxOutcome._2,label:"2"};
    const _3={count:maxOutcome._3,label:"3"};
    const _4={count:maxOutcome._4,label:"4"};
    const _5={count:maxOutcome._5,label:"5"};
    const _6={count:maxOutcome._6,label:"6"};
    const _7={count:maxOutcome._7,label:"7"};
    const _8={count:maxOutcome._8,label:"8"};
    const _9={count:maxOutcome._9,label:"9"};
    const _10={count:maxOutcome._10,label:"10"};
    const _11={count:maxOutcome._11,label:"11"};
    const _12={count:maxOutcome._12,label:"12"};
    const _13={count:maxOutcome._13,label:"13"};
    const _14={count:maxOutcome._14,label:"14"};
    const _15={count:maxOutcome._15,label:"15"};
    const _16={count:maxOutcome._16,label:"16"};
    const _17={count:maxOutcome._17,label:"17"};
    const _18={count:maxOutcome._18,label:"18"};
    const _19={count:maxOutcome._19,label:"19"};
    const _20={count:maxOutcome._20,label:"20"};
    const _21={count:maxOutcome._21,label:"21"};
    const _22={count:maxOutcome._22,label:"22"};
    const _23={count:maxOutcome._23,label:"23"};
    const _24={count:maxOutcome._24,label:"24"};
    const _25={count:maxOutcome._25,label:"25"};
    const _26={count:maxOutcome._26,label:"26"};
    const _27={count:maxOutcome._27,label:"27"};
    const _28={count:maxOutcome._28,label:"28"};
    const _29={count:maxOutcome._29,label:"29"};
    const _30={count:maxOutcome._30,label:"30"};
    const _31={count:maxOutcome._31,label:"31"};
    const _32={count:maxOutcome._32,label:"32"};
    const _33={count:maxOutcome._33,label:"33"};
    const _34={count:maxOutcome._34,label:"34"};
    const _35={count:maxOutcome._35,label:"35"};
    const _36={count:maxOutcome._36,label:"36"};

   const _0Stats=DisplayMaxCountStats(_0)
   const _1Stats=DisplayMaxCountStats(_1)
   const _2Stats=DisplayMaxCountStats(_2)
   const _3Stats=DisplayMaxCountStats(_3)
   const _4Stats=DisplayMaxCountStats(_4)
   const _5Stats=DisplayMaxCountStats(_5)
   const _6Stats=DisplayMaxCountStats(_6)
   const _7Stats=DisplayMaxCountStats(_7)
   const _8Stats=DisplayMaxCountStats(_8)
   const _9Stats=DisplayMaxCountStats(_9)
   const _10Stats=DisplayMaxCountStats(_10)
   const _11Stats=DisplayMaxCountStats(_11)
   const _12Stats=DisplayMaxCountStats(_12)
   const _13Stats=DisplayMaxCountStats(_13)
   const _14Stats=DisplayMaxCountStats(_14)
   const _15Stats=DisplayMaxCountStats(_15)
   const _16Stats=DisplayMaxCountStats(_16)
   const _17Stats=DisplayMaxCountStats(_17)
   const _18Stats=DisplayMaxCountStats(_18)
   const _19Stats=DisplayMaxCountStats(_19)
   const _20Stats=DisplayMaxCountStats(_20)
   const _21Stats=DisplayMaxCountStats(_21)
   const _22Stats=DisplayMaxCountStats(_22)
   const _23Stats=DisplayMaxCountStats(_23)
   const _24Stats=DisplayMaxCountStats(_24)
   const _25Stats=DisplayMaxCountStats(_25)
   const _26Stats=DisplayMaxCountStats(_26)
   const _27Stats=DisplayMaxCountStats(_27)
   const _28Stats=DisplayMaxCountStats(_28)
   const _29Stats=DisplayMaxCountStats(_29)
   const _30Stats=DisplayMaxCountStats(_30)
   const _31Stats=DisplayMaxCountStats(_31)
   const _32Stats=DisplayMaxCountStats(_32)
   const _33Stats=DisplayMaxCountStats(_33)
   const _34Stats=DisplayMaxCountStats(_34)
   const _35Stats=DisplayMaxCountStats(_35)
   const _36Stats=DisplayMaxCountStats(_36)
   const countGroup=(<div> <Statistic.Group widths='thirteen'>
                  {_0Stats}
                  {_1Stats}
                  {_2Stats}
                  {_3Stats}
                  {_4Stats}
                  {_5Stats}
                  {_6Stats}
                  {_7Stats}
                  {_8Stats}
                  {_9Stats}
                  {_10Stats}
                  {_11Stats}
                  {_12Stats}
                 
                  </Statistic.Group>
                  <Statistic.Group widths='thirteen'>
                  {_13Stats}
                  {_14Stats}
                  {_15Stats}
                  {_16Stats}
                  {_17Stats}
                  {_18Stats}
                  {_19Stats}
                  {_20Stats}
                  {_21Stats}
                  {_22Stats}
                  {_23Stats}
                  {_24Stats}
                 
                 
                 
                  </Statistic.Group>
                  <Statistic.Group widths='thirteen'>
                  {_25Stats}
                  {_26Stats}
                  {_27Stats}
                  {_28Stats}
                  {_29Stats}
                  {_30Stats}
                  {_31Stats}
                  {_32Stats}
                  {_33Stats}
                  {_34Stats}
                  {_35Stats}
                  {_36Stats}
                  
                 
                  </Statistic.Group>
                  </div>)
                  return countGroup
 
}

const DisplayMaxCountStats= (outcome) => 
  
   {
    //console.log("outcome Label Result");   
    //console.log(outcome);
    let colorLabel="olive";
    const countLabel=DetermineLabel(Number(outcome.label));
    if(outcome.count>=100 && outcome.count<150)
    {
        colorLabel="orange";
    }
    else if(outcome.count>=150)
    {
        colorLabel="red";
    }
    else if(outcome.count==0)
    {
        colorLabel="black";
    }
        const countStats=( <Statistic color={colorLabel}>
        <Statistic.Value>{outcome.count}</Statistic.Value>
        <Statistic.Label>{countLabel}</Statistic.Label>
        </Statistic>)
        return countStats
   } 


export default DisplayIndNumLabel