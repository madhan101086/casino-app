
import React from "react"
import rouletteConst from "./rouletteConstants"
import { Label } from 'semantic-ui-react'
import { Icon, Image, Statistic } from 'semantic-ui-react'
import DetermineLabel from "./DetermineRouletteType"
const DisplayThreeNeighbourStats=(maxOutcome)=>
{
   // console.log("maxOutcomeCount")
    //console.log(maxOutcome);
    const _0N3={count:maxOutcome._0N3,label:"0"};
    const _1N3={count:maxOutcome._1N3,label:"1"};
    const _2N3={count:maxOutcome._2N3,label:"2"};
    const _3N3={count:maxOutcome._3N3,label:"3"};
    const _4N3={count:maxOutcome._4N3,label:"4"};
    const _5N3={count:maxOutcome._5N3,label:"5"};
    const _6N3={count:maxOutcome._6N3,label:"6"};
    const _7N3={count:maxOutcome._7N3,label:"7"};
    const _8N3={count:maxOutcome._8N3,label:"8"};
    const _9N3={count:maxOutcome._9N3,label:"9"};
    const _10N3={count:maxOutcome._10N3,label:"10"};
    const _11N3={count:maxOutcome._11N3,label:"11"};
    const _12N3={count:maxOutcome._12N3,label:"12"};
    const _13N3={count:maxOutcome._13N3,label:"13"};
    const _14N3={count:maxOutcome._14N3,label:"14"};
    const _15N3={count:maxOutcome._15N3,label:"15"};
    const _16N3={count:maxOutcome._16N3,label:"16"};
    const _17N3={count:maxOutcome._17N3,label:"17"};
    const _18N3={count:maxOutcome._18N3,label:"18"};
    const _19N3={count:maxOutcome._19N3,label:"19"};
    const _20N3={count:maxOutcome._20N3,label:"20"};
    const _21N3={count:maxOutcome._21N3,label:"21"};
    const _22N3={count:maxOutcome._22N3,label:"22"};
    const _23N3={count:maxOutcome._23N3,label:"23"};
    const _24N3={count:maxOutcome._24N3,label:"24"};
    const _25N3={count:maxOutcome._25N3,label:"25"};
    const _26N3={count:maxOutcome._26N3,label:"26"};
    const _27N3={count:maxOutcome._27N3,label:"27"};
    const _28N3={count:maxOutcome._28N3,label:"28"};
    const _29N3={count:maxOutcome._29N3,label:"29"};
    const _30N3={count:maxOutcome._30N3,label:"30"};
    const _31N3={count:maxOutcome._31N3,label:"31"};
    const _32N3={count:maxOutcome._32N3,label:"32"};
    const _33N3={count:maxOutcome._33N3,label:"33"};
    const _34N3={count:maxOutcome._34N3,label:"34"};
    const _35N3={count:maxOutcome._35N3,label:"35"};
    const _36N3={count:maxOutcome._36N3,label:"36"};

   const _0Stats=DisplayMaxCountStats(_0N3)
   const _1Stats=DisplayMaxCountStats(_1N3)
   const _2Stats=DisplayMaxCountStats(_2N3)
   const _3Stats=DisplayMaxCountStats(_3N3)
   const _4Stats=DisplayMaxCountStats(_4N3)
   const _5Stats=DisplayMaxCountStats(_5N3)
   const _6Stats=DisplayMaxCountStats(_6N3)
   const _7Stats=DisplayMaxCountStats(_7N3)
   const _8Stats=DisplayMaxCountStats(_8N3)
   const _9Stats=DisplayMaxCountStats(_9N3)
   const _10Stats=DisplayMaxCountStats(_10N3)
   const _11Stats=DisplayMaxCountStats(_11N3)
   const _12Stats=DisplayMaxCountStats(_12N3)
   const _13Stats=DisplayMaxCountStats(_13N3)
   const _14Stats=DisplayMaxCountStats(_14N3)
   const _15Stats=DisplayMaxCountStats(_15N3)
   const _16Stats=DisplayMaxCountStats(_16N3)
   const _17Stats=DisplayMaxCountStats(_17N3)
   const _18Stats=DisplayMaxCountStats(_18N3)
   const _19Stats=DisplayMaxCountStats(_19N3)
   const _20Stats=DisplayMaxCountStats(_20N3)
   const _21Stats=DisplayMaxCountStats(_21N3)
   const _22Stats=DisplayMaxCountStats(_22N3)
   const _23Stats=DisplayMaxCountStats(_23N3)
   const _24Stats=DisplayMaxCountStats(_24N3)
   const _25Stats=DisplayMaxCountStats(_25N3)
   const _26Stats=DisplayMaxCountStats(_26N3)
   const _27Stats=DisplayMaxCountStats(_27N3)
   const _28Stats=DisplayMaxCountStats(_28N3)
   const _29Stats=DisplayMaxCountStats(_29N3)
   const _30Stats=DisplayMaxCountStats(_30N3)
   const _31Stats=DisplayMaxCountStats(_31N3)
   const _32Stats=DisplayMaxCountStats(_32N3)
   const _33Stats=DisplayMaxCountStats(_33N3)
   const _34Stats=DisplayMaxCountStats(_34N3)
   const _35Stats=DisplayMaxCountStats(_35N3)
   const _36Stats=DisplayMaxCountStats(_36N3)
   const countGroup=(<div> <Statistic.Group widths='ten'>
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
                  {_13Stats}
                  {_14Stats}
                  {_15Stats}
                  {_16Stats}
                  {_17Stats}
                  </Statistic.Group>
                  <Statistic.Group widths='ten'>
                  
                
                  {_18Stats}
                  {_19Stats}
                  {_20Stats}
                  {_21Stats}
                  {_22Stats}
                  {_23Stats}
                  {_24Stats}
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
                  <Statistic.Group widths='ten'>
                  
                  
                 
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
    if(outcome.count>=10 && outcome.count<20)
    {
        colorLabel="orange";
    }
    else if(outcome.count>=20)
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


export default DisplayThreeNeighbourStats