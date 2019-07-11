import React from "react"
import rouletteConst from "./rouletteConstants"
import { Label } from 'semantic-ui-react'

const DetermineIndividualCountLabel=(resultingNumber)=>
{
    
    let labelColor="";
    if(resultingNumber>=50 && resultingNumber<75)
    {
        labelColor="orange"
    }
    else if(resultingNumber>=75 && resultingNumber<90)
    {
        labelColor="purple"
    }
    else if(resultingNumber>=90)
    {
        labelColor="red"
    }
    else if(resultingNumber==0)
    {
        labelColor="black"
    }
    else
    {
        labelColor="teal"
    }
    const outcomeColorLabel=(<Label circular color={labelColor} >{resultingNumber}</Label>)
    console.log("outcome label")
    console.log(outcomeColorLabel)
    return outcomeColorLabel
}
export default DetermineIndividualCountLabel