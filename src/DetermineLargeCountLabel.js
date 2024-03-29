import React from "react"
import rouletteConst from "./rouletteConstants"
import { Label } from 'semantic-ui-react'

const DetermineCountLabel=(resultingNumber)=>
{
    
    let labelColor="";
    if(resultingNumber>=10 && resultingNumber<20)
    {
        labelColor="orange"
    }
    else if(resultingNumber>=5 && resultingNumber<10)
    {
        labelColor="purple"
    }
    else if(resultingNumber>=20)
    {
        labelColor="red"
    }
    else if(resultingNumber==0)
    {
        labelColor="olive"
    }
    else
    {
        labelColor="teal"
    }
    const outcomeColorLabel=(<Label circular color={labelColor} >{resultingNumber}</Label>)
    //console.log("outcome label")
    //console.log(outcomeColorLabel)
    return outcomeColorLabel
}
//export default DetermineRouletteType;
export default DetermineCountLabel