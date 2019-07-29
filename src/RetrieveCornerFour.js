import React from 'react'
import {HandleFourCornerNumberLocation} from './DetermineStatsList'
import { Table } from 'semantic-ui-react'
import DetermineLabel from './DetermineRouletteType'
import { Label } from 'semantic-ui-react'
import DetermineCountLabel from './DetermineLargeCountLabel'
import {RouletteCornerFourTypeMaxStats} from "./DetermineRouletteTypeMaxStats"
import DisplayCornerFourMaxStats from "./DisplayCornerFourMaxStats"
import rouletteConst from "./rouletteConstants"
import DisplayWheelNumbers from "./DisplayWheelNumbers"
import './style.css'
const RetrieveCornerFourList=(props)=>
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
        
       var result= HandleFourCornerNumberLocation(updatedStatsList)
        result.outcome=statsList[i];
        results.push(result);
        result.recommendedBetting=GetTotalCornerFourStats(updatedStatsList);
       
        //console.log(result.recommendedBetting.bettingType)
        const betting=( <DisplayWheelNumbers wheelNumbers={result.recommendedBetting.bettingType}/>);
       const roundLabel=(<Label circular color="brown" >{i+1}</Label>)
       const outcomeColorLabel=DetermineLabel(result.outcome)
       const corn_0_1_2_3_Label=DetermineCountLabel(result.corn_0_1_2_3)
       const corn_1_2_4_5_Label=DetermineCountLabel(result.corn_1_2_4_5)
       const corn_2_3_5_6_Label=DetermineCountLabel(result.corn_2_3_5_6)
       const corn_4_5_7_8_Label=DetermineCountLabel(result.corn_4_5_7_8)
       const corn_5_6_8_9_label=DetermineCountLabel(result.corn_5_6_8_9)
       const corn_7_8_10_11_label=DetermineCountLabel(result.corn_7_8_10_11)
       const corn_8_9_11_12_label=DetermineCountLabel(result.corn_8_9_11_12)
       const corn_10_11_13_14_label=DetermineCountLabel(result.corn_10_11_13_14) 
       const corn_11_12_14_15_label=DetermineCountLabel(result.corn_11_12_14_15)
       const corn_13_14_16_17_label=DetermineCountLabel(result.corn_13_14_16_17)
       const corn_14_15_17_18_label=DetermineCountLabel(result.corn_14_15_17_18)
       const corn_16_17_19_20_label=DetermineCountLabel(result.corn_16_17_19_20)
       const corn_17_18_20_21_label=DetermineCountLabel(result.corn_17_18_20_21)
       const corn_19_20_22_23_label=DetermineCountLabel(result.corn_19_20_22_23)
       const corn_20_21_23_24_label=DetermineCountLabel(result.corn_20_21_23_24)
       const corn_22_23_25_26_label=DetermineCountLabel(result.corn_22_23_25_26)
       const corn_23_24_26_27_label=DetermineCountLabel(result.corn_23_24_26_27)
       const corn_25_26_28_29_label=DetermineCountLabel(result.corn_25_26_28_29)
       const corn_26_27_29_30_label=DetermineCountLabel(result.corn_26_27_29_30)
       const corn_28_29_31_32_label=DetermineCountLabel(result.corn_28_29_31_32)
       const corn_29_30_32_33_label=DetermineCountLabel(result.corn_29_30_32_33)
       const corn_31_32_34_35_label=DetermineCountLabel(result.corn_31_32_34_35)
       const corn_32_33_35_36_label=DetermineCountLabel(result.corn_32_33_35_36)

 

       //console.log(outcomeLabel)
       
       
       const tableRow=( <Table.Row>
        <Table.Cell>{roundLabel}</Table.Cell>
        <Table.Cell>{corn_0_1_2_3_Label}</Table.Cell>   
        <Table.Cell>{corn_1_2_4_5_Label}</Table.Cell>
        <Table.Cell>{corn_2_3_5_6_Label}</Table.Cell>
        <Table.Cell>{corn_4_5_7_8_Label}</Table.Cell>
        <Table.Cell>{corn_5_6_8_9_label}</Table.Cell>
        <Table.Cell>{corn_7_8_10_11_label}</Table.Cell>
        <Table.Cell>{corn_8_9_11_12_label}</Table.Cell>
        <Table.Cell>{corn_10_11_13_14_label}</Table.Cell>
        <Table.Cell>{corn_11_12_14_15_label}</Table.Cell>
        <Table.Cell>{corn_13_14_16_17_label}</Table.Cell>
        <Table.Cell>{corn_14_15_17_18_label}</Table.Cell>
        <Table.Cell>{corn_16_17_19_20_label}</Table.Cell>
        <Table.Cell>{corn_17_18_20_21_label}</Table.Cell>
        <Table.Cell>{corn_19_20_22_23_label}</Table.Cell>
        <Table.Cell>{corn_20_21_23_24_label}</Table.Cell>
        <Table.Cell>{corn_22_23_25_26_label}</Table.Cell>
        <Table.Cell>{corn_23_24_26_27_label}</Table.Cell>
        <Table.Cell>{corn_25_26_28_29_label}</Table.Cell>
        <Table.Cell>{corn_26_27_29_30_label}</Table.Cell>
        <Table.Cell>{corn_28_29_31_32_label}</Table.Cell>
        <Table.Cell>{corn_29_30_32_33_label}</Table.Cell>
        <Table.Cell>{corn_31_32_34_35_label}</Table.Cell>
        <Table.Cell>{corn_32_33_35_36_label}</Table.Cell>
        <Table.Cell>{outcomeColorLabel}</Table.Cell>
        <Table.Cell>{betting}</Table.Cell>
      </Table.Row>)
      rowList.push(tableRow);
    }
    let maxOutcomeCount=RouletteCornerFourTypeMaxStats(results);
    const displayMaxStats=DisplayCornerFourMaxStats(maxOutcomeCount);
    //stackable sortable celled striped selectable role="grid" aria-labelledby="header" 
    

   // let maxOutcomeCount=RouletteTypeMaxStats(results);
    //const disNum=DisplayRouletteTypeNumLabel(maxOutcomeCount);
    const diplayTable=(
      <div class="scrollTableHeight">
         {displayMaxStats}
        <Table collapsing={true} >
          <Table.Header>
            <Table.Row>
            <Table.HeaderCell>Round</Table.HeaderCell>
            <Table.HeaderCell>01</Table.HeaderCell>
            <Table.HeaderCell>12</Table.HeaderCell>
              <Table.HeaderCell>23</Table.HeaderCell>
              <Table.HeaderCell>45</Table.HeaderCell>
              <Table.HeaderCell>56</Table.HeaderCell>
              <Table.HeaderCell>78</Table.HeaderCell>
              <Table.HeaderCell>89</Table.HeaderCell>
              <Table.HeaderCell>10</Table.HeaderCell>
              <Table.HeaderCell>11</Table.HeaderCell>
              <Table.HeaderCell>13</Table.HeaderCell>
              <Table.HeaderCell>14</Table.HeaderCell>
              <Table.HeaderCell>16</Table.HeaderCell>
              <Table.HeaderCell>17</Table.HeaderCell>
              <Table.HeaderCell>19</Table.HeaderCell>
              <Table.HeaderCell>20</Table.HeaderCell>
              <Table.HeaderCell>22</Table.HeaderCell>
              <Table.HeaderCell>2324</Table.HeaderCell>
              <Table.HeaderCell>2526</Table.HeaderCell>
              <Table.HeaderCell>2627</Table.HeaderCell>
              <Table.HeaderCell>2829</Table.HeaderCell>
              <Table.HeaderCell>2930</Table.HeaderCell>
              <Table.HeaderCell>3132</Table.HeaderCell>
              <Table.HeaderCell>3233</Table.HeaderCell>
              <Table.HeaderCell>O</Table.HeaderCell> 
              <Table.HeaderCell>Betting</Table.HeaderCell> 
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

const GetTotalCornerFourStats=(statsList)=>
{
 
  //const statsList=props.statsList;
    let results=[];     
     var result= HandleFourCornerNumberLocation(statsList)
      result.outcome=statsList[statsList.length-1];
      
  
 
  console.log("Max Get Total Croner Four Results")
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
  checkBettingNumber(bettingType,rouletteConst.corn_2_3_5_6,result.corn_2_3_5_6,55);
  checkBettingNumber(bettingType,rouletteConst.corn_4_5_7_8,result.corn_4_5_7_8,55);
  checkBettingNumber(bettingType,rouletteConst.corn_5_6_8_9,result.corn_5_6_8_9,55);
  checkBettingNumber(bettingType,rouletteConst.corn_7_8_10_11,result.corn_7_8_10_11,55);
  checkBettingNumber(bettingType,rouletteConst.corn_8_9_11_12,result.corn_8_9_11_12,55);  
  checkBettingNumber(bettingType,rouletteConst.corn_10_11_13_14,result.corn_10_11_13_14,55);  
  checkBettingNumber(bettingType,rouletteConst.corn_11_12_14_15,result.corn_11_12_14_15,55);  
  checkBettingNumber(bettingType,rouletteConst.corn_13_14_16_17,result.corn_13_14_16_17,55);  
  checkBettingNumber(bettingType,rouletteConst.corn_14_15_17_18,result.corn_14_15_17_18,55);  
  checkBettingNumber(bettingType,rouletteConst.corn_16_17_19_20,result.corn_16_17_19_20,55);  
  checkBettingNumber(bettingType,rouletteConst.corn_17_18_20_21,result.corn_17_18_20_21,55);  
  checkBettingNumber(bettingType,rouletteConst.corn_19_20_22_23,result.corn_19_20_22_23,55); 
  checkBettingNumber(bettingType,rouletteConst.corn_20_21_23_24,result.corn_20_21_23_24,55); 
  checkBettingNumber(bettingType,rouletteConst.corn_22_23_25_26,result.corn_22_23_25_26,55); 
  checkBettingNumber(bettingType,rouletteConst.corn_23_24_26_27,result.corn_23_24_26_27,55); 
  checkBettingNumber(bettingType,rouletteConst.corn_25_26_28_29,result.corn_25_26_28_29,55); 
  checkBettingNumber(bettingType,rouletteConst.corn_26_27_29_30,result.corn_26_27_29_30,55);
  checkBettingNumber(bettingType,rouletteConst.corn_28_29_31_32,result.corn_28_29_31_32,55);  
  checkBettingNumber(bettingType,rouletteConst.corn_29_30_32_33,result.corn_29_30_32_33,55);     
  checkBettingNumber(bettingType,rouletteConst.corn_31_32_34_35,result.corn_31_32_34_35,55);  
  checkBettingNumber(bettingType,rouletteConst.corn_32_33_35_36,result.corn_32_33_35_36,55);  
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
export {GetTotalCornerFourStats,RetrieveCornerFourList}