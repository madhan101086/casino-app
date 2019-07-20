import React from 'react'
import { Label } from 'semantic-ui-react'
import rouletteConst from "./rouletteConstants"
import { Table } from 'semantic-ui-react'


const DisplayNumberDetails = (props) => 
{
  
       let rowList=[]
       
       props.wheelNumbers.map((item,id) => 
       { 
        let numberLabel= determineNumberLabel(item.actualNumber)
        let nei_1=determineNumberLabel(item.neighbours[0])
        let nei_2=determineNumberLabel(item.neighbours[1])
        const tableRow=( <Table.Row>
            <Table.Cell>{numberLabel}</Table.Cell>
            
            <Table.Cell>{nei_1}{nei_2}</Table.Cell>
          </Table.Row>)
          rowList.push(tableRow);         
        })

    const displayTable=(
        <Table stackable sortable celled striped selectable role="grid" aria-labelledby="header"  >
          <Table.Header>
            <Table.Row>
            <Table.HeaderCell>Actual Betting</Table.HeaderCell>
            <Table.HeaderCell>Neighbours</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
        
          <Table.Body>
      
          {rowList}
          </Table.Body>
        </Table>
      )
    return <div>{displayTable}</div>

  
 }
const determineNumberLabel=(numberIn) => 

          { 
            
             
            let labelColor="";
              let labelList=[];
                if(rouletteConst.redList.includes(numberIn))
                {
                labelColor="red"
                }
                else if(rouletteConst.blacklist.includes(numberIn))
                {
                labelColor="black"
                }
                else{
                labelColor="green"
                }
            
               const label=(<Label circular color={labelColor} >
                {numberIn}
              </Label>)
              return label
            }



  export default DisplayNumberDetails;