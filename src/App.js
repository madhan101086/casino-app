

import React from "react"
import rouletteConst from "./rouletteConstants"
import {Button} from "react-bootstrap"
import {Badge} from "react-bootstrap"
import {Form} from "react-bootstrap"
import {InputGroup,FormControl,Container,Row,Col} from "react-bootstrap"
import DisplayStatistics from "./DisplayStats"
import DisplayRouletteStats from "./DisplayRouletteStats"
import DisplayWheelNumbers from "./DisplayWheelNumbers"
import { Tab } from 'semantic-ui-react'
import { Icon, Image, Statistic,Label ,Accordion} from 'semantic-ui-react'
import DisplayRouletteDetails from "./DisplayRouletteNumberDetails"
//import RetrieveStatsList from "./RetrieveStatsTypeList"
import DetermineIndividualNumberStats from "./DetermineIndividualNumberStats"
import {DetermineIndividualLargeNumberStats,GetIndividualNumberStats} from "./DetermineIndividualLargeStats"
import {GetTotalStats ,RetrieveStatsList}from "./RetrieveStatsTypeList"
import {RetrieveCornerFourList,GetTotalCornerFourStats} from "./RetrieveCornerFour"
import {RetrieveCornerThreeList,GetTotalCorneThreeStats} from "./RetrieveCornerThree"
import DisplayNumberDetails from "./DisplayNumbersWithNeighbours"
import DisplayCurrentNumberStatistics from "./DisplayCurrentIndividualNumberStats"
import DisplayNeighbourNumbers from "./DisplayNeighbourNumber"
import {RetrieveLeftRightNumberList,GetTotalLeftRightStats} from "./RetrieveLeftRightNumbers"
import {RetrieveThreeNeighboursList,GetTotalThreeNeighbourStats} from "./RetrieveThreeNeighbourStats"
import DisplayThreeNeighbourBetting from "./DisplayThreeNeighbourBetting"
import './style.css'


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            rouletteNumber:[33,6,4,28,27,35],
            rouletteNumber:[],
            rouletteText:"",
            redCount:0,
            blackCount:0,
            rowList1:0,
            rowList2:0,
            rowList3:0,
            colList1:0,
            colList2:0,
            colList3:0,
            leftWheel:0,rightWheel:0,tier:0,orephellins:0,voisins:0,zeroVar:0,large:0,small:0,
            odd:0,even:0,totalCount:0,statsList:[],
            wheelNumbers:[],
            outcomeNumber:null,
            rouletteNumberText:"",
            individualNumBetting:[],
            roueletteTypeBetting:[],
            cornerFourBetting:[],
            cornerThreeBetting:[],
            cornerThreeStats:{},
            cornerFourStats:{},
            leftRightStats:{},
            leftRightBetting:[],
            threeNeighbourBetting:[],
            currentThreeNeighbourStats:{},
            currentIndividualNumberStats:{}
        }
        this.rouletteText=React.createRef();
       
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleRouletteBlur=this.handleRouletteBlur.bind(this);
        this.determineNumberIndex=this.determineNumberIndex.bind(this);
        this.handleLeftWheel=this.handleLeftWheel.bind(this)
        this.handleRightWheel=this.handleRightWheel.bind(this)
        this.RetrieveStatsList=RetrieveStatsList.bind(this);
        this.handleRouletteNumberText=this.handleRouletteNumberText.bind(this)
        this.GetTotalStats=GetTotalStats.bind(this);
    }
determineNumberIndex(rouletteType)
{ 
  let listArr=[]; 
  let index=0;
  let rouletteNumber=this.state.rouletteNumber
  
  rouletteType.forEach((item,index)=>
  {  
    let listIndex=rouletteNumber.lastIndexOf(item) 
    if(listIndex!=-1)
    {    
      const actualIndex=rouletteNumber.length-listIndex
      listArr.push(actualIndex)
    }    
  })
 //console.log(rouletteType);
  //console.log(listArr);
  if(listArr.length==0)
  {
    index=0;
  }
  else{
    index=Math.min.apply(null, listArr);
  }
  
 
  return index
}


determineNumberStatsndex(rouletteType,statsList)
{ 
  let listArr=[]; 
  let index=0;
  let rouletteNumber=statsList
  
  rouletteType.forEach((item,index)=>
  {  
    let listIndex=rouletteNumber.lastIndexOf(item) 
    if(listIndex!=-1)
    {    
      const actualIndex=rouletteNumber.length-listIndex
      listArr.push(actualIndex)
    }    
  })
 //console.log(rouletteType);
  //console.log(listArr);
  if(listArr.length==0)
  {
    index=0;
  }
  else{
    index=Math.min.apply(null, listArr);
  }
  
 
  return index
}


handleRouletteBlur(val)
{
  //val=this.state.rouletteNumberText
    let valList=val.split(",");
    valList.forEach(item=>{
      this.setState(pre=>{
        let preArr=pre.rouletteNumber;
        if(item)
        {
          preArr.push(Number(item))
        }
        

      return {rouletteNumber:preArr}
      })
    })
  

}   
handleRouletteNumberText(value)
{
  this.setState({rouletteNumberText:value})
  this.handleRouletteBlur()
}
handleLeftWheel()
{
  let count=this.determineNumberIndex(rouletteConst.leftWheelList)
  //console.log(count)
  if(count>10){
    let wheelArr=rouletteConst.leftWheelList;
    wheelArr.sort(function(a, b){return a - b});
    
    this.setState({wheelNumbers:wheelArr});
  }
}
handleRightWheel()
{
  let count=this.determineNumberIndex(rouletteConst.rightWheelList)
  if(count>10){
    let wheelArr=rouletteConst.rightWheelList.sort();
    wheelArr.sort(function(a, b){return a - b});
    this.setState({wheelNumbers:wheelArr});
  }
}

handleSubmit()
{
  //this.handleRouletteBlur()
  this.setState({wheelNumbers:[]})
  this.rouletteText.current.value=""
 // this.GetTotalStats(this.state.rouletteNumber);
  this.setState({redCount:this.determineNumberIndex(rouletteConst.redList)});
  this.setState({blackCount:this.determineNumberIndex(rouletteConst.blacklist)});
  this.setState({small:this.determineNumberIndex(rouletteConst.small)});
  this.setState({large:this.determineNumberIndex(rouletteConst.large)});
  this.setState({odd:this.determineNumberIndex(rouletteConst.odd)});
  this.setState({even:this.determineNumberIndex(rouletteConst.even)});
  this.setState({rightWheel:this.determineNumberIndex(rouletteConst.rightWheelList)});
  this.setState({leftWheel:this.determineNumberIndex(rouletteConst.leftWheelList)});
  this.setState({zeroVar:this.determineNumberIndex(rouletteConst.zeroList)});
  this.setState({voisins:this.determineNumberIndex(rouletteConst.voisinsList)});
  this.setState({orephellins:this.determineNumberIndex(rouletteConst.orphelinsList)});
  this.setState({tier:this.determineNumberIndex(rouletteConst.tierList)});
  this.setState({rowList1:this.determineNumberIndex(rouletteConst.rowList1)});
  this.setState({rowList2:this.determineNumberIndex(rouletteConst.rowList2)});
  this.setState({rowList3:this.determineNumberIndex(rouletteConst.rowList3)});
  this.setState({colList1:this.determineNumberIndex(rouletteConst.colList1)});
  this.setState({colList2:this.determineNumberIndex(rouletteConst.colList2)});
  this.setState({colList3:this.determineNumberIndex(rouletteConst.colList3)});

  this.handleLeftWheel();
  this.handleRightWheel();
  this.setState({outcomeNumber:null})
  
  const indvBetting=GetIndividualNumberStats(this.state.rouletteNumber);
  const rouletteTypeBetting=GetTotalStats(this.state.rouletteNumber);
  const cornerFourOutcome=GetTotalCornerFourStats(this.state.rouletteNumber);
  const cornerThreeOutcome=GetTotalCorneThreeStats(this.state.rouletteNumber);
  const LRStatsOutcome=GetTotalLeftRightStats(this.state.rouletteNumber);
  const threeNeighbourOutcome=GetTotalThreeNeighbourStats(this.state.rouletteNumber);
  const cornerThreeBetting=cornerThreeOutcome.bettingType;
  const cornerThreeStats=cornerThreeOutcome.result;
  const cornerFourBetting=cornerFourOutcome.bettingType;
  const cornerFourStats=cornerFourOutcome.result;
  const LRStatsBetting=LRStatsOutcome.bettingType;
  const LRStats=LRStatsOutcome.result;
  const threeNeighbourBetting=threeNeighbourOutcome;
  const threeNeighbourStats=threeNeighbourOutcome.result;

  this.setState({individualNumBetting:indvBetting.outcome,
    currentIndividualNumberStats:indvBetting.result,
    roueletteTypeBetting:rouletteTypeBetting,
    cornerFourBetting:cornerFourBetting,
    cornerThreeBetting:cornerThreeBetting,
    cornerThreeStats:cornerThreeStats,
    cornerFourStats:cornerFourStats,
    leftRightBetting:LRStatsBetting,
    leftRightStats:LRStats,
    threeNeighbourBetting:threeNeighbourBetting.outcome,
    currentThreeNeighbourStats:threeNeighbourBetting.result
  })
  console.log(this.state); 
  //this.rouletteText.value="";
  //this.RetrieveStatsList(this.state.rouletteNumber)
  this.rouletteText.current.focus()
  
}
componentDidUpdate()
{
  
  //RetrieveStatsList(this.state.rouletteNumber)
}
    
    render() {
        const rouList=this.state.rouletteNumber;
        //RetrieveStatsList(this.state.rouletteNumber)
        //RetrieveStatsList(this.state.rouletteNumber)
        
        const mainStats=(
          <div >
          <Label circular color="red" >{this.state.rouletteNumber.length} Rounds</Label>
        <div id="outcomeWheelNumbers_1"> </div>
           <div>
           <InputGroup> 
           <InputGroup.Prepend>
             <InputGroup.Text>Enter Roulette Numbers</InputGroup.Text>
           </InputGroup.Prepend>
           <FormControl  as="textarea" aria-label="Enter Roulette Numbers" onBlur={(evt)=>
             {
               
               this.handleRouletteBlur(evt.target.value)
             }
       
             }
             
             ref={this.rouletteText}
             />
         </InputGroup>
           </div>
           
           <Container>

             <Row>
               <Col>
               <Button variant="outline-success" onClick={this.handleSubmit}>Get Stats</Button>
               </Col>
               </Row>
               <h3>Betting Numbers Left/Right</h3>
               <DisplayWheelNumbers wheelNumbers={this.state.wheelNumbers}/>
               <h3>Rouletting Betting Type</h3>
               <Label circular color="purple" >{this.state.roueletteTypeBetting.join(" ,")} </Label>
               <h3>Individual Num Betting</h3>
               <DisplayNumberDetails wheelNumbers={this.state.individualNumBetting}/>
               <h3> Corner Four Betting</h3>
               <DisplayWheelNumbers wheelNumbers={this.state.cornerFourBetting}/>
               <h3> Corner Three Betting</h3>
               <DisplayWheelNumbers wheelNumbers={this.state.cornerThreeBetting}/>
               <h3> Three Neighbour Betting</h3>
               <DisplayThreeNeighbourBetting wheelNumbers={this.state.threeNeighbourBetting}/>
               <h3> Left Right Random Betting</h3>
               <DisplayWheelNumbers wheelNumbers={this.state.leftRightBetting}/>
               <h3>Outcome</h3>
               <DisplayWheelNumbers wheelNumbers={this.state.rouletteNumber}/>
         </Container>


</div>
        )
        const displayStats=<DisplayStatistics stats={this.state}></DisplayStatistics>
       const individualStats=<DisplayCurrentNumberStatistics stats={this.state.currentIndividualNumberStats} />
        const displayRouletteDetails= <DisplayRouletteDetails stats={this.state.rouletteNumber}></DisplayRouletteDetails>
        const totalStats=  <RetrieveStatsList statsList={this.state.rouletteNumber}></RetrieveStatsList>
        const smallNumberStats= <DetermineIndividualNumberStats statsList={this.state.rouletteNumber}></DetermineIndividualNumberStats>
        const largeNumberStats= <DetermineIndividualLargeNumberStats statsList={this.state.rouletteNumber}></DetermineIndividualLargeNumberStats>
        const cornerFourStats=<RetrieveCornerFourList statsList={this.state.rouletteNumber}/>     
        const cornerThreeStats=<RetrieveCornerThreeList statsList={this.state.rouletteNumber}/>    
        const leftRightStats=<RetrieveLeftRightNumberList statsList={this.state.rouletteNumber}/>
        const threeNeighbourStats=<RetrieveThreeNeighboursList statsList={this.state.rouletteNumber}/>
        const neighbourNumbers=<DisplayNeighbourNumbers/>
        const panes = [
          { menuItem: 'Main Betting', render: () => <Tab.Pane attached={false}>{mainStats}</Tab.Pane> },
          { menuItem: 'Stats', render: () => <Tab.Pane attached={false}>{displayStats}</Tab.Pane> },
          { menuItem: 'Individual Stats', render: () => <Tab.Pane attached={false}>{individualStats}</Tab.Pane> },
          { menuItem: 'Neighbour Look Up', render: () => <Tab.Pane attached={false}>{neighbourNumbers}</Tab.Pane> },
          { menuItem: 'Details', render: () => <Tab.Pane attached={false}>{displayRouletteDetails}</Tab.Pane> },
          { menuItem: 'Total Stats', render: () => <Tab.Pane attached={false}>{totalStats}</Tab.Pane> },
          { menuItem: 'Small Stats', render: () => <Tab.Pane attached={false}>{smallNumberStats}</Tab.Pane> },
          { menuItem: 'Large Stats', render: () => <Tab.Pane attached={false}>{largeNumberStats}</Tab.Pane> },
          { menuItem: 'Corner Four Stats', render: () => <Tab.Pane attached={false}>{cornerFourStats}</Tab.Pane> },
          { menuItem: 'Corner Three Stats', render: () => <Tab.Pane attached={false}>{cornerThreeStats}</Tab.Pane> },
          //{ menuItem: 'Left Right Stats', render: () => <Tab.Pane attached={false}>{leftRightStats}</Tab.Pane> },
          { menuItem: 'Three Neighbour Stats', render: () => <Tab.Pane attached={false}>{threeNeighbourStats}</Tab.Pane> }
        ]
        const TabsPointing = () => (
          <Tab menu={{ secondary: true, pointing: true }} menuPosition='left' panes={panes} />
        )
        const RouletteImage = () => (
          <Image src='images/RouletteImage.jpg' size='medium' circular />
        )
        return (
          
    <div >
         <TabsPointing></TabsPointing>
    
    </div>
        )    
    }
}

export default App