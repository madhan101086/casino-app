import React from 'react'
import {HandleNumberLocation} from './DetermineStatsList'
import { Table } from 'semantic-ui-react'
import DetermineLabel from './DetermineRouletteType'
import { Label } from 'semantic-ui-react'
import DetermineCountLabel from './DetermineLargeCountLabel'
import {RouletteTypeMaxStats} from "./DetermineRouletteTypeMaxStats"
import DisplayRouletteTypeNumLabel from "./DisplayRouletteTypeNumLabel"
import './style.css'
const RetrieveStatsList=(props)=>
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
        
       var result= HandleNumberLocation(updatedStatsList)
        result.outcome=statsList[i];
        results.push(result);
       //console.log(result)
       const roundLabel=(<Label circular color="brown" >{i+1}</Label>)
       const outcomeColorLabel=DetermineLabel(result.outcome)
       const redColorLabel=DetermineCountLabel(result.redCount)
       const blackColorLabel=DetermineCountLabel(result.blackCount)
       const smallColorLabel=DetermineCountLabel(result.small)
       const largeColorLabel=DetermineCountLabel(result.large)
       const oddColorLabel=DetermineCountLabel(result.odd)
       const evenColorLabel=DetermineCountLabel(result.even)
       const rightColorLabel=DetermineCountLabel(result.rightWheel)
       const leftColorLabel=DetermineCountLabel(result.leftWheel)
       const zeroColorLabel=DetermineCountLabel(result.zeroVar)
       const voisinsColorLabel=DetermineCountLabel(result.voisins)
       const orphellinsColorLabel=DetermineCountLabel(result.orephellins)
       const tierColorLabel=DetermineCountLabel(result.tier)
       const rowList1ColorLabel=DetermineCountLabel(result.rowList1)
       const rowList2ColorLabel=DetermineCountLabel(result.rowList2)
       const rowList3ColorLabel=DetermineCountLabel(result.rowList3)      
       const colList1ColorLabel=DetermineCountLabel(result.colList1)
       const colList2ColorLabel=DetermineCountLabel(result.colList2)
       const colList3ColorLabel=DetermineCountLabel(result.colList3)

       //console.log(outcomeLabel)
       
       
       const tableRow=( <Table.Row>
           <Table.Cell>{roundLabel}</Table.Cell>
        <Table.Cell>{redColorLabel}</Table.Cell>
        <Table.Cell>{blackColorLabel}</Table.Cell>
        <Table.Cell>{smallColorLabel}</Table.Cell>
        <Table.Cell>{largeColorLabel}</Table.Cell>
        <Table.Cell>{oddColorLabel}</Table.Cell>
        <Table.Cell>{evenColorLabel}</Table.Cell>
        <Table.Cell>{rightColorLabel}</Table.Cell>
        <Table.Cell>{leftColorLabel}</Table.Cell>
        <Table.Cell>{zeroColorLabel}</Table.Cell>
        <Table.Cell>{voisinsColorLabel}</Table.Cell>
        <Table.Cell>{orphellinsColorLabel}</Table.Cell>
        <Table.Cell>{tierColorLabel}</Table.Cell>
        <Table.Cell>{rowList1ColorLabel}</Table.Cell>
        <Table.Cell>{rowList2ColorLabel}</Table.Cell>
        <Table.Cell>{rowList3ColorLabel}</Table.Cell>
        <Table.Cell>{colList1ColorLabel}</Table.Cell>
        <Table.Cell>{colList2ColorLabel}</Table.Cell>
        <Table.Cell>{colList3ColorLabel}</Table.Cell>
        <Table.Cell>{outcomeColorLabel}</Table.Cell>
      </Table.Row>)
      rowList.push(tableRow);
    }
    let maxOutcomeCount=RouletteTypeMaxStats(results);
    const disNum=DisplayRouletteTypeNumLabel(maxOutcomeCount);
    const diplayTable=(
      <div>
        {disNum}
        <Table stackable sortable celled striped selectable role="grid" aria-labelledby="header"  >
          <Table.Header>
            <Table.Row>
            <Table.HeaderCell>Round</Table.HeaderCell>
            <Table.HeaderCell>Red</Table.HeaderCell>
              <Table.HeaderCell>Black</Table.HeaderCell>
              <Table.HeaderCell>Small</Table.HeaderCell>
              <Table.HeaderCell>Large</Table.HeaderCell>
              <Table.HeaderCell>Odd</Table.HeaderCell>
              <Table.HeaderCell>Even</Table.HeaderCell>
              <Table.HeaderCell>Right</Table.HeaderCell>
              <Table.HeaderCell>Left</Table.HeaderCell>
              <Table.HeaderCell>Zero</Table.HeaderCell>
              <Table.HeaderCell>Voisins</Table.HeaderCell>
              <Table.HeaderCell>Orphelins</Table.HeaderCell>
              <Table.HeaderCell>Tier</Table.HeaderCell>
              <Table.HeaderCell>1-12</Table.HeaderCell>
              <Table.HeaderCell>13-24</Table.HeaderCell>
              <Table.HeaderCell>25-36</Table.HeaderCell>
              <Table.HeaderCell>Col1</Table.HeaderCell>
              <Table.HeaderCell>Col2</Table.HeaderCell>
              <Table.HeaderCell>Col3</Table.HeaderCell> 
              <Table.HeaderCell>Outcome</Table.HeaderCell> 
         
            </Table.Row>
          </Table.Header>
        
          <Table.Body>
      
           {rowList}
          </Table.Body>
        </Table>
        
        </div>
      )
//console.log(results);
  return diplayTable;
    
}

const GetTotalStats=(statsList)=>
{
 
  //const statsList=props.statsList;
    let results=[];     
     var result= HandleNumberLocation(statsList)
      result.outcome=statsList[statsList.length-1];
      
  var bettingNumberResult={};
 
  console.log("Max Get Total Results")
  //console.log(result);
  let bettingType=getBettingNumbers(result);
  bettingNumberResult.numbers=bettingType;
  bettingType.forEach((item,id)=>{
    
  })

  return bettingType
}
function getBettingNumbers(result)
{
  let bettingType=[];
  checkBettingNumber(bettingType,"Red",result.redCount,11);
  checkBettingNumber(bettingType,"Black",result.blackCount,11);
  checkBettingNumber(bettingType,"Odd",result.odd,11);
  checkBettingNumber(bettingType,"Even",result.even,11);
  checkBettingNumber(bettingType,"Small",result.small,11);
  checkBettingNumber(bettingType,"Large",result.large,11);
  checkBettingNumber(bettingType,"Right",result.rightWheel,13);
  checkBettingNumber(bettingType,"Left",result.leftWheel,13);
  checkBettingNumber(bettingType,"Zero",result.zeroVar,22);
  checkBettingNumber(bettingType,"Voisins",result.voisins,11);
  checkBettingNumber(bettingType,"Orphellins",result.orephellins,22);
  checkBettingNumber(bettingType,"Tier",result.tier,15);
  checkBettingNumber(bettingType,"Row 1-12",result.rowList1,20);
  checkBettingNumber(bettingType,"Row 13-24",result.rowList2,20);
  checkBettingNumber(bettingType,"Row 25-36",result.rowList3,20);
  checkBettingNumber(bettingType,"Col 1",result.colList1,20);
  checkBettingNumber(bettingType,"Col 2",result.colList2,20);
  checkBettingNumber(bettingType,"Col 3",result.colList3,20);
  

  //console.log(bettingType)
  return bettingType
}
function checkBettingNumber(bettingType,rouletteType,numCount,checkCount)
{
  if(numCount>checkCount)
  {
    bettingType.push(rouletteType);
  }
  return bettingType
}
//export default RetrieveStatsList;
export {GetTotalStats,RetrieveStatsList}