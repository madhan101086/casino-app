import React from 'react'
import {HandleThreeCornerNumberLocation} from './DetermineStatsList'
import { Table } from 'semantic-ui-react'
import DetermineLabel from './DetermineRouletteType'
import { Label } from 'semantic-ui-react'
import DetermineCountLabel from './DetermineLargeCountLabel'
import {RouletteCornerThreeTypeMaxStats} from "./DetermineRouletteTypeMaxStats"
import DisplayCornerThreeMaxStats from "./DisplayCornerThreeStats"
import rouletteConst from "./rouletteConstants"
import './style.css'
const RetrieveCornerThreeList=(props)=>
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
        
       var result= HandleThreeCornerNumberLocation(updatedStatsList)
        result.outcome=statsList[i];
        results.push(result);
        
        
       //console.log(result)
       const roundLabel=(<Label circular color="brown" >{i+1}</Label>)
       const outcomeColorLabel=DetermineLabel(result.outcome)
       const corn_1_2_3_Label=DetermineCountLabel(result.corn_1_2_3)
       const corn_4_5_6_Label=DetermineCountLabel(result.corn_4_5_6)
       const corn_7_8_9_Label=DetermineCountLabel(result.corn_7_8_9)
       const corn_10_11_12_Label=DetermineCountLabel(result.corn_10_11_12)
       const corn_13_14_15_Label=DetermineCountLabel(result.corn_13_14_15)
       const corn_16_17_18_Label=DetermineCountLabel(result.corn_16_17_18)
       const corn_19_20_21_Label=DetermineCountLabel(result.corn_19_20_21)
       const corn_22_23_24_Label=DetermineCountLabel(result.corn_22_23_24)
       const corn_25_26_27_Label=DetermineCountLabel(result.corn_25_26_27)
       const corn_28_29_30_Label=DetermineCountLabel(result.corn_28_29_30)
       const corn_31_32_33_Label=DetermineCountLabel(result.corn_31_32_33)
       const corn_34_35_36_Label=DetermineCountLabel(result.corn_34_35_36)
      

 

       //console.log(outcomeLabel)
       
       
       const tableRow=( <Table.Row>
        <Table.Cell>{roundLabel}</Table.Cell>
        <Table.Cell>{corn_1_2_3_Label}</Table.Cell>   
        <Table.Cell>{corn_4_5_6_Label}</Table.Cell>   
        <Table.Cell>{corn_7_8_9_Label}</Table.Cell>   
        <Table.Cell>{corn_10_11_12_Label}</Table.Cell>   
        <Table.Cell>{corn_13_14_15_Label}</Table.Cell>   
        <Table.Cell>{corn_16_17_18_Label}</Table.Cell>   
        <Table.Cell>{corn_19_20_21_Label}</Table.Cell>   
        <Table.Cell>{corn_22_23_24_Label}</Table.Cell>   
        <Table.Cell>{corn_25_26_27_Label}</Table.Cell>   
        <Table.Cell>{corn_28_29_30_Label}</Table.Cell>   
        <Table.Cell>{corn_31_32_33_Label}</Table.Cell>   
        <Table.Cell>{corn_34_35_36_Label}</Table.Cell> 
        <Table.Cell>{outcomeColorLabel}</Table.Cell>
      </Table.Row>)
      rowList.push(tableRow);
    }
    let maxOutcomeCount=RouletteCornerThreeTypeMaxStats(results);
    const displayMaxStats=DisplayCornerThreeMaxStats(maxOutcomeCount);
    //stackable sortable celled striped selectable role="grid" aria-labelledby="header" 
    

   // let maxOutcomeCount=RouletteTypeMaxStats(results);
    //const disNum=DisplayRouletteTypeNumLabel(maxOutcomeCount);
    const diplayTable=(
      <div>
        <Table collapsing={true} >
          <Table.Header>
            <Table.Row>
            <Table.HeaderCell>Round</Table.HeaderCell>
            <Table.HeaderCell>1</Table.HeaderCell>
            <Table.HeaderCell>4</Table.HeaderCell>
            <Table.HeaderCell>7</Table.HeaderCell>
            <Table.HeaderCell>10</Table.HeaderCell>
            <Table.HeaderCell>13</Table.HeaderCell>
            <Table.HeaderCell>16</Table.HeaderCell>
            <Table.HeaderCell>19</Table.HeaderCell>
            <Table.HeaderCell>22</Table.HeaderCell>
            <Table.HeaderCell>25</Table.HeaderCell>
            <Table.HeaderCell>28</Table.HeaderCell>
            <Table.HeaderCell>31</Table.HeaderCell>
            <Table.HeaderCell>34</Table.HeaderCell>
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

const GetTotalCorneThreeStats=(statsList)=>
{
 
  //const statsList=props.statsList;
    let results=[];     
     var result= HandleThreeCornerNumberLocation(statsList)
      result.outcome=statsList[statsList.length-1];
      
  
 
  console.log("Max Get Total Corner Three Results")
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

  return outcome
}





function getBettingNumbers(result)
{
  let bettingType=[];
 
  checkBettingNumber(bettingType,rouletteConst.corn_1_2_3,result.corn_1_2_3,75);
  checkBettingNumber(bettingType,rouletteConst.corn_4_5_6,result.corn_4_5_6,75);
  checkBettingNumber(bettingType,rouletteConst.corn_7_8_9,result.corn_7_8_9,75);
  checkBettingNumber(bettingType,rouletteConst.corn_10_11_12,result.corn_10_11_12,75);
  checkBettingNumber(bettingType,rouletteConst.corn_13_14_15,result.corn_13_14_15,75);
  checkBettingNumber(bettingType,rouletteConst.corn_16_17_18,result.corn_16_17_18,75);
  checkBettingNumber(bettingType,rouletteConst.corn_19_20_21,result.corn_19_20_21,75);
  checkBettingNumber(bettingType,rouletteConst.corn_22_23_24,result.corn_22_23_24,75);
  checkBettingNumber(bettingType,rouletteConst.corn_25_26_27,result.corn_25_26_27,75);
  checkBettingNumber(bettingType,rouletteConst.corn_28_29_30,result.corn_28_29_30,75);
  checkBettingNumber(bettingType,rouletteConst.corn_31_32_33,result.corn_31_32_33,75);
  checkBettingNumber(bettingType,rouletteConst.corn_34_35_36,result.corn_34_35_36,75);

  
  return bettingType
}
function checkBettingNumber(bettingType,rouletteType,numCount,checkCount)
{
  if(numCount>checkCount)
  {
   
    rouletteType.forEach((item,id)=>
    {
        bettingType.push(item);
    })
    //bettingType.push(rouletteType);
  }
  return bettingType
}
//export default RetrieveStatsList;
export {GetTotalCorneThreeStats,RetrieveCornerThreeList}