import React from 'react'
import { Label } from 'semantic-ui-react'
import rouletteConst from "./rouletteConstants"
import { Table } from 'semantic-ui-react'


const DisplayThreeNeighbourBetting = (props) => 
{
  
       let rowList=[]
       
       props.wheelNumbers.map((item,id) => 
       { 
        let numberLabel= determineNumberLabel(item.actualNumber)
        let nei_1=determineNumberLabel(item.neighbours[0])
        let nei_2=determineNumberLabel(item.neighbours[1])
        let nei_3=determineNumberLabel(item.neighbours[2])
        let nei_4=determineNumberLabel(item.neighbours[3])
        let nei_5=determineNumberLabel(item.neighbours[4])
        let nei_6=determineNumberLabel(item.neighbours[5])
        let nei_7=determineNumberLabel(item.neighbours[6])
       
        const tableRow=( <Table.Row>
            <Table.Cell>{numberLabel}</Table.Cell>
            
            <Table.Cell>{nei_1}{nei_2}{nei_3}{nei_4}{nei_5}{nei_6}{nei_7}</Table.Cell>
          </Table.Row>)
          rowList.push(tableRow);         
        })

    const displayTable=(
        <Table id="neighbourTable" stackable sortable celled striped selectable role="grid" aria-labelledby="header"  >
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



  export default DisplayThreeNeighbourBetting;