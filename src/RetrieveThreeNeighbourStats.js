import React from 'react'
import {HandleThreeNeighbours} from './DetermineStatsList'
import { Table } from 'semantic-ui-react'
import DetermineLabel from './DetermineRouletteType'
import { Label } from 'semantic-ui-react'
import DetermineCountLabel from './DetermineLargeCountLabel'
import {RouletteThreeNeighbourMaxStats} from "./DetermineRouletteTypeMaxStats"
import DisplayThreeNeighbourStats from "./DisplayThreeNeighbourStats"
import rouletteConst from "./rouletteConstants"
import './style.css'
const RetrieveThreeNeighboursList=(props)=>
{
    console.log(props.statsList)
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
        
       var result= HandleThreeNeighbours(updatedStatsList)
        result.outcome=statsList[i];
        results.push(result);
 
       //console.log(outcomeLabel)
       
       
     
    }
    let maxOutcomeCount=RouletteThreeNeighbourMaxStats(results);
    const displayMaxStats=DisplayThreeNeighbourStats(maxOutcomeCount);
    //stackable sortable celled striped selectable role="grid" aria-labelledby="header" 
    

   // let maxOutcomeCount=RouletteTypeMaxStats(results);
    //const disNum=DisplayRouletteTypeNumLabel(maxOutcomeCount);
    
       
      
      
//console.log(results);
  return displayMaxStats;
    
}

const GetTotalThreeNeighbourStats=(statsList)=>
{
 
  //const statsList=props.statsList;
    let results=[];     
     var result= HandleThreeNeighbours(statsList)
      result.outcome=statsList[statsList.length-1];
      
  
 
  console.log("Max Get Total Three Neighbour Results")
  //console.log(result);
  let bettingNumbers=getBettingNumbers(result)
  let outcome=[];
 let  outcomeResult={};
  bettingNumbers.forEach((item,id)=>{
    let outcomeDetails={};
    outcomeDetails.actualNumber=item;
    outcomeDetails.neighbours=[];
    const numberDetails = rouletteConst.rouList.find( rouNumber => rouNumber.number == item );
    numberDetails._3Nei.forEach((item)=>{
      outcomeDetails.neighbours.push(item);
    })
    outcome.push(outcomeDetails);
  })
  outcomeResult.outcome=outcome;
  outcomeResult.result=result;
  console.log("Number outcome")
  console.log(outcomeResult)
  return outcomeResult
}





function getBettingNumbers(result)
{
  let bettingType=[];
  
  checkBettingNumber(bettingType,rouletteConst._0N3,result._0N3,30);
checkBettingNumber(bettingType, 1,result._1N3,30);
checkBettingNumber(bettingType, 2,result._2N3,30);
checkBettingNumber(bettingType, 3,result._3N3,30);
checkBettingNumber(bettingType, 4,result._4N3,30);
checkBettingNumber(bettingType, 5,result._5N3,30);
checkBettingNumber(bettingType, 6,result._6N3,30);
checkBettingNumber(bettingType, 7,result._7N3,30);
checkBettingNumber(bettingType, 8,result._8N3,30);
checkBettingNumber(bettingType, 9,result._9N3,30);
checkBettingNumber(bettingType, 10,result._10N3,30);
checkBettingNumber(bettingType, 11,result._11N3,30);
checkBettingNumber(bettingType, 12,result._12N3,30);
checkBettingNumber(bettingType, 13,result._13N3,30);
checkBettingNumber(bettingType, 14,result._14N3,30);
checkBettingNumber(bettingType, 15,result._15N3,30);
checkBettingNumber(bettingType, 16,result._16N3,30);
checkBettingNumber(bettingType, 17,result._17N3,30);
checkBettingNumber(bettingType, 18,result._18N3,30);
checkBettingNumber(bettingType, 19,result._19N3,30);
checkBettingNumber(bettingType, 20,result._20N3,30);
checkBettingNumber(bettingType, 21,result._21N3,30);
checkBettingNumber(bettingType, 22,result._22N3,30);
checkBettingNumber(bettingType, 23,result._23N3,30);
checkBettingNumber(bettingType, 24,result._24N3,30);
checkBettingNumber(bettingType, 25,result._25N3,30);
checkBettingNumber(bettingType, 26,result._26N3,30);
checkBettingNumber(bettingType, 27,result._27N3,30);
checkBettingNumber(bettingType, 28,result._28N3,30);
checkBettingNumber(bettingType, 29,result._29N3,30);
checkBettingNumber(bettingType, 30,result._30N3,30);
checkBettingNumber(bettingType, 31,result._31N3,30);
checkBettingNumber(bettingType, 32,result._32N3,30);
checkBettingNumber(bettingType, 33,result._33N3,30);
checkBettingNumber(bettingType, 34,result._34N3,30);
checkBettingNumber(bettingType, 35,result._35N3,30);
checkBettingNumber(bettingType, 36,result._36N3,30);

  //console.log(bettingType)
  return bettingType
}
function checkBettingNumber(bettingType,rouletteType,numCount,checkCount)
{
  if(numCount>35)
  {
   //console.log(rouletteType)
    
        bettingType.push(rouletteType);
   
    //bettingType.push(rouletteType);
  }
  return bettingType
}
//export default RetrieveStatsList;
export {GetTotalThreeNeighbourStats,RetrieveThreeNeighboursList}