

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
import { Icon, Image, Statistic,Label } from 'semantic-ui-react'
import DisplayRouletteDetails from "./DisplayRouletteNumberDetails"


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
            odd:0,even:0,totalCount:0,
            wheelNumbers:[]
        }

        
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleRouletteBlur=this.handleRouletteBlur.bind(this);
        this.determineNumberIndex=this.determineNumberIndex.bind(this);
        this.handleLeftWheel=this.handleLeftWheel.bind(this)
        this.handleRightWheel=this.handleRightWheel.bind(this)
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
  console.log(rouletteType);
  console.log(listArr);
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
handleLeftWheel()
{
  let count=this.determineNumberIndex(rouletteConst.leftWheelList)
  //console.log(count)
  if(count>=4){
    let wheelArr=rouletteConst.leftWheelList;
    wheelArr.sort(function(a, b){return a - b});
    
    this.setState({wheelNumbers:wheelArr});
  }
}
handleRightWheel()
{
  let count=this.determineNumberIndex(rouletteConst.rightWheelList)
  if(count>=4){
    let wheelArr=rouletteConst.rightWheelList.sort();
    wheelArr.sort(function(a, b){return a - b});
    this.setState({wheelNumbers:wheelArr});
  }
}

handleSubmit()
{
  this.setState({wheelNumbers:[]})
 

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

  this.handleLeftWheel()
  this.handleRightWheel()
}
    
    render() {
        const rouList=this.state.rouletteNumber;
        const displayStats=<DisplayStatistics stats={this.state}></DisplayStatistics>
        const displayRouletteDetails= <DisplayRouletteDetails stats={this.state.rouletteNumber}></DisplayRouletteDetails>
        const panes = [
          { menuItem: 'Stats', render: () => <Tab.Pane attached={false}>{displayStats}</Tab.Pane> },
          { menuItem: 'Details', render: () => <Tab.Pane attached={false}>{displayRouletteDetails}</Tab.Pane> },
          
        ]
        const TabsPointing = () => (
          <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
        )
        const RouletteImage = () => (
          <Image src='images/RouletteImage.jpg' size='medium' circular />
        )
        return (
            <div >
         
                
         <Label circular color="red" >{this.state.rouletteNumber.length} Rounds</Label>
                  
                 
                <DisplayWheelNumbers wheelNumbers={this.state.rouletteNumber}/>
              
                

    <div>
    <InputGroup> 
    <InputGroup.Prepend>
      <InputGroup.Text>Enter Roulette Numbers</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl as="textarea" aria-label="Enter Roulette Numbers" onBlur={(evt)=>
      {
        
        this.handleRouletteBlur(evt.target.value)
      }
        

      }/>
  </InputGroup>
  </div>
                
                <Container>

                  <Row>
                    <Col>
                    <Button variant="outline-success" onClick={this.handleSubmit}>Get Stats</Button>
                    </Col>
                    </Row>
                    <h3>Betting Numbers</h3>
                    <DisplayWheelNumbers wheelNumbers={this.state.wheelNumbers}/>
                    
                    
                   
                </Container>
    
    <TabsPointing></TabsPointing>
  
            </div>
        )    
    }
}

export default App