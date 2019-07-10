import React from 'react'
import { Table } from 'semantic-ui-react'
import rouletteConst from "./rouletteConstants"
import { Label } from 'semantic-ui-react'

const DisplayRouletteDetails = (props) => 
{
  let rowList=[]
  const rouletteNumber=props.stats;
 // props.stats.rouletteNumber;
  rouletteNumber.forEach((item,id)=>{
    const result = rouletteConst.rouList.find( rouNumber => rouNumber.number == item );
   // console.log(item)
    const idLabel=(<Label circular color="purple" key={id}>{id+1}</Label>)
    let redBlackColor="";
    let wheelColor=""
    if(result.color=="black")
    {
      redBlackColor="black"
    }
    else if(result.color=="red")
    {
      redBlackColor="red"
    }
    else
    {
      redBlackColor="green"
    }

    if(result.wheelType=="right")
    {
      wheelColor="orange"
    }
    else if(result.wheelType=="left")
    {
      wheelColor="blue"
    }
    else
    {
      wheelColor="green"
    }
    let boxColor=""
    if(result.box=="voisins")
    {
      boxColor="olive"
    }
    else if(result.box=="tiers")
    {
      boxColor="teal"
    }
    else if(result.box=="orphellins" || result.box=="orphelins")
    {
      boxColor="violet"
    }
    else if(result.box=="zero")
    {
      boxColor="green"
    }
    const colorLabel=(<Label circular color={redBlackColor} key={id}>{result.color}</Label>)
    const numberLabel=(<Label circular color={redBlackColor} key={id}>{result.number}</Label>)
    const wheelColorLabel=(<Label circular color={wheelColor} key={id}>{result.wheelType.toUpperCase()}</Label>)
    const boxColorLabel=(<Label circular color={boxColor} key={id}>{result.box.toUpperCase()}</Label>)
   const tableRow=( <Table.Row>
          <Table.Cell>{idLabel}</Table.Cell>
          <Table.Cell>{numberLabel}</Table.Cell>

          <Table.Cell>{result.type.toUpperCase()}</Table.Cell>
          <Table.Cell>{result.numberRange.toUpperCase()}</Table.Cell>
          <Table.Cell >{wheelColorLabel}</Table.Cell>
          <Table.Cell>{boxColorLabel}</Table.Cell>
          <Table.Cell>{result.colList.toUpperCase()}</Table.Cell>
          <Table.Cell >{result.rowList.toUpperCase()}</Table.Cell>
        </Table.Row>)
        rowList.push(tableRow)


  })
  const diplayTable=(
    <Table stackable sortable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Id</Table.HeaderCell>
          <Table.HeaderCell>Number</Table.HeaderCell>

          <Table.HeaderCell>Odd/Even</Table.HeaderCell>
          <Table.HeaderCell>Range</Table.HeaderCell>
          <Table.HeaderCell>Wheel</Table.HeaderCell>
          <Table.HeaderCell>Type</Table.HeaderCell>
          <Table.HeaderCell>Column</Table.HeaderCell>
          <Table.HeaderCell>Row</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
    
      <Table.Body>
  
        {rowList}
      </Table.Body>
    </Table>
  )
  return diplayTable;
}


export default DisplayRouletteDetails
