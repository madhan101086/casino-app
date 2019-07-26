import React from 'react'
import { Label } from 'semantic-ui-react'
import rouletteConst from "./rouletteConstants"
import { Table } from 'semantic-ui-react'


const DisplayNeighbourNumbers = () => 
{
  
       let rowList=[]
       let rouNumberList=rouletteConst.rouList;
       
       rouNumberList.map((item,id) => 
       { 
        let numberLabel= determineNumberLabel(item.number)
        let nei_1=determineNumberLabel(item.nei[0])
        let nei_2=determineNumberLabel(item.nei[1])
        
        let _3nei_1=determineNumberLabel(item._3Nei[0])
        let _3nei_2=determineNumberLabel(item._3Nei[1])
        let _3nei_3=determineNumberLabel(item._3Nei[2])
        let _3nei_4=determineNumberLabel(item._3Nei[3])
        let _3nei_5=determineNumberLabel(item._3Nei[4])
        let _3nei_6=determineNumberLabel(item._3Nei[5])
        let _3nei_7=determineNumberLabel(item._3Nei[6])

        
        const tableRow=( <Table.Row>
            <Table.Cell>{numberLabel}</Table.Cell>
            
            <Table.Cell>{nei_1}{nei_2}</Table.Cell>
            <Table.Cell>{_3nei_1}{_3nei_2}{_3nei_3}{_3nei_4}{_3nei_5}{_3nei_6}{_3nei_7}</Table.Cell>
          </Table.Row>)
          rowList.push(tableRow);         
        })

    const displayTable=(
        <Table stackable sortable celled striped selectable role="grid" aria-labelledby="header"  >
          <Table.Header>
            <Table.Row>
            <Table.HeaderCell>Number</Table.HeaderCell>
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



  export default DisplayNeighbourNumbers;