import React from "react"
import rouletteConst from "./rouletteConstants"
import { Label } from 'semantic-ui-react'
const DetermineRouletteType=(outcomeNumber)=>
{
    const result = rouletteConst.rouList.find( rouNumber => rouNumber.number == outcomeNumber );
    //console.log(result)
    return result;
}
const DetermineLabel=(outcomeNumber)=>
{
    const outcomeResult=DetermineRouletteType(outcomeNumber)
    let labelColor="";
    if(outcomeResult.color.toLocaleUpperCase()=="BLACK")
    {
        labelColor="black"
    }
    else if(outcomeResult.color.toLocaleUpperCase()=="RED")
    {
        labelColor="red"
    }
    else
    {
        labelColor="green"
    }
    const outcomeColorLabel=(<Label circular color={labelColor} >{outcomeNumber}</Label>)
   // console.log("outcome label")
   // console.log(outcomeColorLabel)
    return outcomeColorLabel
}
//export default DetermineRouletteType;
export default DetermineLabel
