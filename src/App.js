

import React from "react"
import rouletteConst from "./rouletteConstants"
import {Button} from "react-bootstrap"
import {Badge} from "react-bootstrap"
import {Form} from "react-bootstrap"
import {InputGroup,FormControl,Container,Row,Col} from "react-bootstrap"
import DisplayStats from "./Stats"
import DisplayRouletteStats from "./DisplayRouletteStats"
import DisplayWheelNumbers from "./DisplayWheelNumbers"

import { Icon, Image, Statistic } from 'semantic-ui-react'


import './style.css'


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            rouletteNumber:[4,8,13,34,35,4,6,34,6],
            //rouletteNumber:[],
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
  index=Math.min.apply(null, listArr);
 
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
        return (
            <div >
                <h1>Roulette Stats</h1>
                <Statistic.Group widths='two'>
                  <DisplayRouletteStats count={this.state.rouletteNumber.length} label="Total Rounds" color="red"/>
                  </Statistic.Group>
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
                <div>
                <Statistic.Group widths='seven'>
                  <DisplayRouletteStats count={this.state.redCount} label="Red" color="red"/>
                  <DisplayRouletteStats count={this.state.blackCount} label="Black" color="black"/>
                  <DisplayRouletteStats count={this.state.small} label="Small" color="orange"/>
                  <DisplayRouletteStats count={this.state.large} label="Large" color="green"/>
                  <DisplayRouletteStats count={this.state.odd} label="Odd" color="purple"/>
                  <DisplayRouletteStats count={this.state.even} label="Even" color="teal"/>
                 
                  </Statistic.Group>
                  <Statistic.Group widths='seven'>
                  <DisplayRouletteStats count={this.state.rightWheel} label="Right" color="red"/>
                  <DisplayRouletteStats count={this.state.leftWheel} label="Left" color="red"/>
                  <DisplayRouletteStats count={this.state.zeroVar} label="Zero" color="olive"/>
                  <DisplayRouletteStats count={this.state.voisins} label="Voisins" color="olive"/>
                  <DisplayRouletteStats count={this.state.orephellins} label="Orphellins" color="olive"/>
                  <DisplayRouletteStats count={this.state.tier} label="Tier" color="olive"/>
                 
                  </Statistic.Group>
                  <Statistic.Group widths='seven'>
                  <DisplayRouletteStats count={this.state.rowList1} label="1-12" color="orange"/>
                  <DisplayRouletteStats count={this.state.rowList2} label="13-24" color="orange"/>
                  <DisplayRouletteStats count={this.state.rowList3} label="25-36" color="orange"/>
                  <DisplayRouletteStats count={this.state.colList1} label="Col 1" color="green"/>
                  <DisplayRouletteStats count={this.state.colList2} label="Col 2" color="green"/>
                  <DisplayRouletteStats count={this.state.colList3} label="Col 3" color="green"/>
                 
                  </Statistic.Group>
                  </div>
            </div>
        )    
    }
}

export default App