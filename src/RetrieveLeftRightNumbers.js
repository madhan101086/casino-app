import React from 'react'
import {HandleLeftRightNumberLocation} from './DetermineStatsList'
import { Table } from 'semantic-ui-react'
import DetermineLabel from './DetermineRouletteType'
import { Label } from 'semantic-ui-react'
import DetermineCountLabel from './DetermineLargeCountLabel'
import {RouletteLeftRightTypeMaxStats} from "./DetermineRouletteTypeMaxStats"
import DisplayLeftRightMaxStats from "./DisplayLeftRightMaxStats"
import rouletteConst from "./rouletteConstants"
import './style.css'
const RetrieveLeftRightNumberList=(props)=>
{
    //console.log(props.statsList)
    const statsList=props.statsList;
    let results=[];
    let rowList=[];
    for(var i=0;i<statsList.length;i++)
    {
        let updatedStatsList=[];
        for(var j=0;j<=i;j++)
        {
            updatedStatsList.push(statsList[j]);
        }
        
       var result= HandleLeftRightNumberLocation(updatedStatsList)
        result.outcome=statsList[i];
        results.push(result);
        
       
       //console.log(result)
       const roundLabel=(<Label circular color="brown" >{i+1}</Label>)
       const outcomeColorLabel=DetermineLabel(result.outcome)
       const LR_1Label=DetermineCountLabel(result.LR_1)
       const LR_2Label=DetermineCountLabel(result.LR_2)
     

 

       //console.log(outcomeLabel)
       
       
       const tableRow=( <Table.Row>
        <Table.Cell>{roundLabel}</Table.Cell>
        <Table.Cell>{LR_1Label}</Table.Cell>   
        <Table.Cell>{LR_2Label}</Table.Cell>

        <Table.Cell>{outcomeColorLabel}</Table.Cell>
      </Table.Row>)
      rowList.push(tableRow);
    }
    let maxOutcomeCount=RouletteLeftRightTypeMaxStats(results);
    const displayMaxStats=DisplayLeftRightMaxStats(maxOutcomeCount);
    //stackable sortable celled striped selectable role="grid" aria-labelledby="header" 
    

   // let maxOutcomeCount=RouletteTypeMaxStats(results);
    //const disNum=DisplayRouletteTypeNumLabel(maxOutcomeCount);
    const diplayTable=(
      <div>
        <Table collapsing={true} >
          <Table.Header>
            <Table.Row>
            <Table.HeaderCell>Round</Table.HeaderCell>
            <Table.HeaderCell>LR_1</Table.HeaderCell>
            <Table.HeaderCell>LR_2</Table.HeaderCell>
           
              <Table.HeaderCell>O</Table.HeaderCell> 
         
            </Table.Row>
          </Table.Header>
        
          <Table.Body>
      
           {rowList}
          </Table.Body>
        </Table>
       {displayMaxStats}
        </div>
      )
//console.log(results);
  return diplayTable;
    
}

const GetTotalLeftRightStats=(statsList)=>
{
 
  //const statsList=props.statsList;
    let results=[];     
     var result= HandleLeftRightNumberLocation(statsList)
      result.outcome=statsList[statsList.length-1];
      
  
 
  console.log("Max Get Total Left Right Results")
  //console.log(result);
  let outcome={};

  outcome.bettingType=getBettingNumbers(result)
  outcome.result=result;
  outcome.nei=[];

  outcome.bettingType.forEach((item,id)=>{
    const numberDetails = rouletteConst.rouList.find( rouNumber => rouNumber.number == item );
    numberDetails.nei.forEach((item)=>{
      outcome.nei.push(item);
    })
  })

  console.log(outcome)
  return outcome
}





function getBettingNumbers(result)
{
  let bettingType=[];
  checkBettingNumber(bettingType,rouletteConst.corn_0_1_2_3,result.corn_0_1_2_3,55);
  checkBettingNumber(bettingType,rouletteConst.corn_1_2_4_5,result.corn_1_2_4_5,55);
 
  //console.log(bettingType)
  return bettingType
}
function checkBettingNumber(bettingType,rouletteType,numCount,checkCount)
{
  if(numCount>checkCount)
  {
   //console.log(rouletteType)
    rouletteType.forEach((item,id)=>
    {
        bettingType.push(item);
    })
    //bettingType.push(rouletteType);
  }
  return bettingType
}
//export default RetrieveStatsList;
export {GetTotalLeftRightStats,RetrieveLeftRightNumberList}