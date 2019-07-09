import React from 'react'
import HandleNumberLocation from './DetermineStatsList'
import { Table } from 'semantic-ui-react'
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
       console.log(result)
       
       results.push(result);
       const tableRow=( <Table.Row>
        <Table.Cell>{result.redCount}</Table.Cell>
        <Table.Cell>{result.blackCount}</Table.Cell>
        <Table.Cell>{result.small}</Table.Cell>
        <Table.Cell>{result.large}</Table.Cell>
        <Table.Cell>{result.odd}</Table.Cell>
        <Table.Cell>{result.even}</Table.Cell>
        <Table.Cell>{result.rightWheel}</Table.Cell>
        <Table.Cell>{result.leftWheel}</Table.Cell>
        <Table.Cell>{result.zeroVar}</Table.Cell>
        <Table.Cell>{result.voisins}</Table.Cell>
        <Table.Cell>{result.orephellins}</Table.Cell>
        <Table.Cell>{result.tier}</Table.Cell>
        <Table.Cell>{result.rowList1}</Table.Cell>
        <Table.Cell>{result.rowList2}</Table.Cell>
        <Table.Cell>{result.rowList3}</Table.Cell>
        <Table.Cell>{result.colList1}</Table.Cell>
        <Table.Cell>{result.colList2}</Table.Cell>
        <Table.Cell>{result.colList3}</Table.Cell>
        <Table.Cell>{result.outcome}</Table.Cell>
      </Table.Row>)
      rowList.push(tableRow);
    }
  
    const diplayTable=(
        <Table stackable sortable>
          <Table.Header>
            <Table.Row>
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
      )
//console.log(results);
  return diplayTable;
    
}
export default RetrieveStatsList;