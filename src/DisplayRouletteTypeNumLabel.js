
import React from "react"
import rouletteConst from "./rouletteConstants"
import { Label } from 'semantic-ui-react'
import { Icon, Image, Statistic } from 'semantic-ui-react'
import DetermineLabel from "./DetermineRouletteType"
const DisplayRouletteTypeNumLabel=(maxOutcome)=>
{
    //console.log("maxOutcomeCount")
    //console.log(maxOutcome);
  
    
    const red={count:maxOutcome.red,label:"Red"};
    const black={count:maxOutcome.black,label:"Black"};
    const small={count:maxOutcome.small,label:"Small"};
    const large={count:maxOutcome.large,label:"Large"};
    const odd={count:maxOutcome.odd,label:"Odd"};
    const even={count:maxOutcome.even,label:"Even"};
    const right={count:maxOutcome.right,label:"Right"};
    const left={count:maxOutcome.left,label:"Left"};
    const zero={count:maxOutcome.zero,label:"Zero"};
    const voisins={count:maxOutcome.vosins,label:"Voisins"};
    const orphellins={count:maxOutcome.orphelins,label:"Orphellins"};
    const tier={count:maxOutcome.tier,label:"Tier"};
    const row1={count:maxOutcome.rowList1,label:"1-12"};
    const row2={count:maxOutcome.rowList2,label:"13-24"};
    const row3={count:maxOutcome.rowList3,label:"25-36"};
    const col1={count:maxOutcome.colList1,label:"colList1"};
    const col2={count:maxOutcome.colList2,label:"colList2"};
    const col3={count:maxOutcome.colList3,label:"colList3"};
    

   
   const _1Stats=DisplayMaxCountStats(red)
   const _2Stats=DisplayMaxCountStats(black)
   const _3Stats=DisplayMaxCountStats(small)
   const _4Stats=DisplayMaxCountStats(large)
   const _5Stats=DisplayMaxCountStats(odd)
   const _6Stats=DisplayMaxCountStats(even)
   const _7Stats=DisplayMaxCountStats(right)
   const _8Stats=DisplayMaxCountStats(left)
   const _9Stats=DisplayMaxCountStats(zero)
   const _10Stats=DisplayMaxCountStats(voisins)
   const _11Stats=DisplayMaxCountStats(orphellins)
   const _12Stats=DisplayMaxCountStats(tier)
   const _13Stats=DisplayMaxCountStats(row1)
   const _14Stats=DisplayMaxCountStats(row2)
   const _15Stats=DisplayMaxCountStats(row3)
   const _16Stats=DisplayMaxCountStats(col1)
   const _17Stats=DisplayMaxCountStats(col2)
   const _18Stats=DisplayMaxCountStats(col3)
   
   const countGroup=(<div> <Statistic.Group widths='seven'>
                  
                  {_1Stats}
                  {_2Stats}
                  {_3Stats}
                  {_4Stats}
                  {_5Stats}
                  {_6Stats}
                 
                  </Statistic.Group>
                  <Statistic.Group widths='seven'>
                 
                 
                  
                  {_7Stats}
                  {_8Stats}
                  {_9Stats}
                  {_10Stats}
                  {_11Stats}
                  {_12Stats}
                 
                  </Statistic.Group>
                  <Statistic.Group widths='seven'>
                  {_13Stats}
                  {_14Stats}
                  {_15Stats}
                  {_16Stats}
                  {_17Stats}
                  {_18Stats}
                  
                 
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
    if(outcome.count>=10)
    {
        colorLabel="red";
    }
    else if(outcome.count>=5 && outcome.count<10)
    {
        colorLabel="orange";
    
    }
    else if(outcome.count==0)
    {
        colorLabel="black";
    }
        const countStats=( <Statistic color={colorLabel}>
        <Statistic.Value>{outcome.count}</Statistic.Value>
        <Statistic.Label>{outcome.label}</Statistic.Label>
        </Statistic>)
        return countStats
   } 


export default DisplayRouletteTypeNumLabel;