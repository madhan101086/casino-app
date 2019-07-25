
import React from "react"
import rouletteConst from "./rouletteConstants"
import { Label } from 'semantic-ui-react'
import { Icon, Image, Statistic } from 'semantic-ui-react'
import DetermineLabel from "./DetermineRouletteType"
const DisplayLeftRightMaxStats=(maxOutcome)=>
{
    //console.log("maxOutcomeCount")
    //console.log(maxOutcome);
  
    const LR_1={count:maxOutcome.LR_1,label:"LR_1"};
    const LR_2={count:maxOutcome.LR_2,label:"LR_2"};
    
    
    
   
   
   const LR_1Label=DisplayMaxCountStats(LR_1)
   const LR_2Label=DisplayMaxCountStats(LR_2)

  
   
   const countGroup=(<div> <Statistic.Group widths='ten'>
                  
                  {LR_1Label}
                  {LR_2Label}
                 
                  
                 
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
    if(outcome.count>=13)
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


export default DisplayLeftRightMaxStats;