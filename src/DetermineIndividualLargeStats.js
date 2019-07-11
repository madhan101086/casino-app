import React from 'react'
import { Table } from 'semantic-ui-react'
import { Label } from 'semantic-ui-react'
import DetermineIndividualCountLabel from './DetermineIndividualCountLabel'

import './style.css'
const DetermineIndividualLargeNumberStats=(props)=>
{
   let results=[];
  
    const statsList=props.statsList;
   const smallRowList=[]

    for(var i=0;i<statsList.length;i++)
    {
        let updatedStatsList=[];
        for(var j=0;j<=i;j++)
        {
            updatedStatsList.push(statsList[j]);
            
        }
      var result=  handleIndividualStats(updatedStatsList)
      result.outcome=statsList[i];

      results.push(result);
      const roundLabel=(<Label circular color="brown" >{i+1}</Label>)
      const outcomeColorLabel=DetermineIndividualCountLabel(result.outcome)
      const _0Label=DetermineIndividualCountLabel(result._19)
      const _1Label=DetermineIndividualCountLabel(result._20)
      const _2Label=DetermineIndividualCountLabel(result._21)
      const _3Label=DetermineIndividualCountLabel(result._22)
      const _4Label=DetermineIndividualCountLabel(result._23)
      const _5Label=DetermineIndividualCountLabel(result._24)
      const _6Label=DetermineIndividualCountLabel(result._25)
      const _7Label=DetermineIndividualCountLabel(result._26)
      const _8Label=DetermineIndividualCountLabel(result._27)
      const _9Label=DetermineIndividualCountLabel(result._28)
      const _10Label=DetermineIndividualCountLabel(result._29)
      const _11Label=DetermineIndividualCountLabel(result._30)
      const _12Label=DetermineIndividualCountLabel(result._31)
      const _13Label=DetermineIndividualCountLabel(result._32)
      const _14Label=DetermineIndividualCountLabel(result._33)
      const _15Label=DetermineIndividualCountLabel(result._34)
      const _16Label=DetermineIndividualCountLabel(result._35)
      const _17Label=DetermineIndividualCountLabel(result._36)
      
 
      const tableRow=( <Table.Row>
        <Table.Cell>{roundLabel}</Table.Cell>
        <Table.Cell>{_0Label}</Table.Cell>
     <Table.Cell>{_1Label}</Table.Cell>
     <Table.Cell>{_2Label}</Table.Cell>
     <Table.Cell>{_3Label}</Table.Cell>
     <Table.Cell>{_4Label}</Table.Cell>
     <Table.Cell>{_5Label}</Table.Cell>
     <Table.Cell>{_6Label}</Table.Cell>
     <Table.Cell>{_7Label}</Table.Cell>
     <Table.Cell>{_8Label}</Table.Cell>
     <Table.Cell>{_9Label}</Table.Cell>
     <Table.Cell>{_10Label}</Table.Cell>
     <Table.Cell>{_11Label}</Table.Cell>
     <Table.Cell>{_12Label}</Table.Cell>
     <Table.Cell>{_13Label}</Table.Cell>
     <Table.Cell>{_14Label}</Table.Cell>
     <Table.Cell>{_15Label}</Table.Cell>
     <Table.Cell>{_16Label}</Table.Cell>
     <Table.Cell>{_17Label}</Table.Cell>
    
     <Table.Cell>{outcomeColorLabel}</Table.Cell>
   </Table.Row>)
   smallRowList.push(tableRow);
    }
    console.log("number result")
    console.log(results)
    const diplayTable=(
        <Table stackable sortable celled striped selectable role="grid" aria-labelledby="header"  >
          <Table.Header>
            <Table.Row>
            <Table.HeaderCell>R</Table.HeaderCell>
            <Table.HeaderCell>19</Table.HeaderCell>
           <Table.HeaderCell>20</Table.HeaderCell>
           <Table.HeaderCell>21</Table.HeaderCell>
           <Table.HeaderCell>22</Table.HeaderCell>
           <Table.HeaderCell>23</Table.HeaderCell>
           <Table.HeaderCell>24</Table.HeaderCell>
           <Table.HeaderCell>25</Table.HeaderCell>
           <Table.HeaderCell>26</Table.HeaderCell>
           <Table.HeaderCell>27</Table.HeaderCell>
           <Table.HeaderCell>28</Table.HeaderCell>
           <Table.HeaderCell>29</Table.HeaderCell>
           <Table.HeaderCell>30</Table.HeaderCell>
           <Table.HeaderCell>31</Table.HeaderCell>
           <Table.HeaderCell>32</Table.HeaderCell>
           <Table.HeaderCell>33</Table.HeaderCell>
           <Table.HeaderCell>34</Table.HeaderCell>
           <Table.HeaderCell>35</Table.HeaderCell>
           <Table.HeaderCell>36</Table.HeaderCell> 
           
              <Table.HeaderCell>O</Table.HeaderCell> 
         
            </Table.Row>
          </Table.Header>
        
          <Table.Body>
      
           {smallRowList}
          </Table.Body>
        </Table>
      )
    return diplayTable
    
}


function handleIndividualStats(statsList)
{
    let result={}
    result._0=indexCalc(statsList,0);
    result._1=indexCalc(statsList,1);
    result._2=indexCalc(statsList,2);
    result._3=indexCalc(statsList,3)
    result._4=indexCalc(statsList,4)
    result._5=indexCalc(statsList,5)
    result._6=indexCalc(statsList,6)
    result._7=indexCalc(statsList,7)
    result._8=indexCalc(statsList,8)
    result._9=indexCalc(statsList,9)
    result._10=indexCalc(statsList,10)
    result._11=indexCalc(statsList,11)
    result._12=indexCalc(statsList,12)
    result._13=indexCalc(statsList,13)
    result._14=indexCalc(statsList,14)
    result._15=indexCalc(statsList,15)
    result._16=indexCalc(statsList,16)
    result._17=indexCalc(statsList,17)
    result._18=indexCalc(statsList,18)
    result._19=indexCalc(statsList,19)
    result._20=indexCalc(statsList,20)
    result._21=indexCalc(statsList,21)
    result._22=indexCalc(statsList,22)
    result._23=indexCalc(statsList,23)
    result._24=indexCalc(statsList,24)
    result._25=indexCalc(statsList,25)
    result._26=indexCalc(statsList,26)
    result._27=indexCalc(statsList,27)
    result._28=indexCalc(statsList,28)
    result._29=indexCalc(statsList,29)
    result._30=indexCalc(statsList,30)
    result._31=indexCalc(statsList,31)
    result._32=indexCalc(statsList,32)
    result._33=indexCalc(statsList,33)
    result._34=indexCalc(statsList,34)
    result._35=indexCalc(statsList,35)
    result._36=indexCalc(statsList,36)
    
    return result 

}

function indexCalc(statsList,number)
{
    var findIndex=statsList.lastIndexOf(number);
    var index=0
    if(findIndex!=-1)
    {
        index=(statsList.length-findIndex);
    }
    
    return index
}
export default DetermineIndividualLargeNumberStats