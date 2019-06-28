

import React from "react"
import rouletteConst from "./rouletteConstants"
import {Button} from "react-bootstrap"
import {Badge} from "react-bootstrap"
import {Form} from "react-bootstrap"
import {InputGroup,FormControl,Container,Row,Col} from "react-bootstrap"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            rouletteNumber:[4,8,13,34,35,4,6,34,6],
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
            odd:0,even:0
        }
        this.handleRedNumber=this.handleRedNumber.bind(this);
        this.handleBlackNumber=this.handleBlackNumber.bind(this);
        this.handleRowList1=this.handleRowList1.bind(this);
        this.handleRowList2=this.handleRowList2.bind(this);
        this.handleRowList3=this.handleRowList3.bind(this);
        this.handleColList1=this.handleColList1.bind(this);
        this.handleColList2=this.handleColList2.bind(this);
        this.handleColList3=this.handleColList3.bind(this);
        this.handleLeftWheel=this.handleLeftWheel.bind(this);
        this.handleRightWheel=this.handleRightWheel.bind(this);
        this.handleTier=this.handleTier.bind(this);
        this.handleOrphan=this.handleOrphan.bind(this);
        this.handleVoison=this.handleVoison.bind(this);
        this.handleZero=this.handleZero.bind(this);
        this.handleOdd=this.handleOdd.bind(this);
        this.handleEven=this.handleEven.bind(this);
        this.handleSmall=this.handleSmall.bind(this);
        this.handleLarge=this.handleLarge.bind(this);
        
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleRouletteBlur=this.handleRouletteBlur.bind(this);
    }
handleRouletteBlur(val)
{
console.log("val "+val);
let valList=val.split(",");

valList.forEach(item=>{
  this.setState(pre=>{
    let preArr=pre.rouletteNumber;
    if(item)
    {
      preArr.push(Number(item))
    }
    
   console.log(preArr)
  return {rouletteNumber:preArr}
  })
})
console.log(valList);
}   
handleRedNumber()
{
  console.log(this.state.rouletteNumber)
  let rouletteNumber=this.state.rouletteNumber;
  let redListArr=[];   
  rouletteConst.redList.forEach((item,index)=>{
    let redIndex=rouletteNumber.lastIndexOf(item) 
    if(redIndex!=-1)
    {
      
      const actualIndex=rouletteNumber.length-redIndex
      console.log(actualIndex)
      redListArr.push(actualIndex)
      console.log(Math.min(redListArr));
      this.setState({redCount:Math.min.apply(null, redListArr)})
   
    }    
  })
}
handleBlackNumber()
{
  let rouletteNumber=this.state.rouletteNumber;
  let listArr=[]; 
  rouletteConst.blacklist.forEach((item,index)=>{
    let blackIndex=rouletteNumber.lastIndexOf(item) 
    if(blackIndex!=-1)
    {
      
      const actualIndex=rouletteNumber.length-blackIndex
      console.log(actualIndex)
      listArr.push(actualIndex)

      this.setState({blackCount:Math.min.apply(null, listArr)})
   
    }    
  })
}
handleRowList1()
{
  let rouletteNumber=this.state.rouletteNumber;
  let listArr=[]; 
  rouletteConst.rowList1.forEach((item,index)=>{
    let rowListIndex=rouletteNumber.lastIndexOf(item) 
    if(rowListIndex!=-1)
    {
      
      const actualIndex=rouletteNumber.length-rowListIndex
      console.log(actualIndex)
      listArr.push(actualIndex)

      this.setState({rowList1:Math.min.apply(null, listArr)})
   
    }    
  })
}
handleRowList2()
{
  let rouletteNumber=this.state.rouletteNumber;
  let listArr=[]; 
  rouletteConst.rowList2.forEach((item,index)=>{
    let rowListIndex=rouletteNumber.lastIndexOf(item) 
    if(rowListIndex!=-1)
    {
      
      const actualIndex=rouletteNumber.length-rowListIndex
      console.log(actualIndex)
      listArr.push(actualIndex)

      this.setState({rowList2:Math.min.apply(null, listArr)})
   
    }    
  })
}
handleRowList3()
{
  let rouletteNumber=this.state.rouletteNumber;
  let listArr=[]; 
  rouletteConst.rowList3.forEach((item,index)=>{
    let rowListIndex=rouletteNumber.lastIndexOf(item) 
    if(rowListIndex!=-1)
    {
      
      const actualIndex=rouletteNumber.length-rowListIndex
      console.log(actualIndex)
      listArr.push(actualIndex)

      this.setState({rowList3:Math.min.apply(null, listArr)})
   
    }    
  })
}
handleColList1()
{
  let rouletteNumber=this.state.rouletteNumber;
  let listArr=[]; 
  rouletteConst.colList1.forEach((item,index)=>{
    let listIndex=rouletteNumber.lastIndexOf(item) 
    if(listIndex!=-1)
    {
      
      const actualIndex=rouletteNumber.length-listIndex
      listArr.push(actualIndex)

      this.setState({colList1:Math.min.apply(null, listArr)})
   
    }    
  })
}
handleColList2()
{
  let rouletteNumber=this.state.rouletteNumber;
  let listArr=[]; 
  rouletteConst.colList2.forEach((item,index)=>{
    let listIndex=rouletteNumber.lastIndexOf(item) 
    if(listIndex!=-1)
    {
      
      const actualIndex=rouletteNumber.length-listIndex
      listArr.push(actualIndex)

      this.setState({colList2:Math.min.apply(null, listArr)})
   
    }    
  })
}
handleColList3()
{
  let rouletteNumber=this.state.rouletteNumber;
  let listArr=[]; 
  rouletteConst.colList3.forEach((item,index)=>{
    let listIndex=rouletteNumber.lastIndexOf(item) 
    if(listIndex!=-1)
    {
      
      const actualIndex=rouletteNumber.length-listIndex
      listArr.push(actualIndex)

      this.setState({colList3:Math.min.apply(null, listArr)})
   
    }    
  })
}
handleLeftWheel()
{
  let rouletteNumber=this.state.rouletteNumber;
  let listArr=[]; 
  rouletteConst.leftWheelList.forEach((item,index)=>{
    let listIndex=rouletteNumber.lastIndexOf(item) 
    if(listIndex!=-1)
    {
      
      const actualIndex=rouletteNumber.length-listIndex
      listArr.push(actualIndex)

      this.setState({leftWheel:Math.min.apply(null, listArr)})
   
    }    
  })
}
handleRightWheel()
{
  let rouletteNumber=this.state.rouletteNumber;
  let listArr=[]; 
  rouletteConst.rightWheelList.forEach((item,index)=>{
    let listIndex=rouletteNumber.lastIndexOf(item) 
    if(listIndex!=-1)
    {
      
      const actualIndex=rouletteNumber.length-listIndex
      listArr.push(actualIndex)

      this.setState({rightWheel:Math.min.apply(null, listArr)})
   
    }    
  })
}
handleTier()
{
  let rouletteNumber=this.state.rouletteNumber;
  let listArr=[]; 
  rouletteConst.tierList.forEach((item,index)=>{
    let listIndex=rouletteNumber.lastIndexOf(item) 
    if(listIndex!=-1)
    {
      
      const actualIndex=rouletteNumber.length-listIndex
      listArr.push(actualIndex)

      this.setState({tier:Math.min.apply(null, listArr)})
   
    }    
  })
}
handleOrphan()
{
  let rouletteNumber=this.state.rouletteNumber;
  let listArr=[]; 
  rouletteConst.orphelinsList.forEach((item,index)=>{
    let listIndex=rouletteNumber.lastIndexOf(item) 
    if(listIndex!=-1)
    {
      
      const actualIndex=rouletteNumber.length-listIndex
      listArr.push(actualIndex)

      this.setState({orephellins:Math.min.apply(null, listArr)})
   
    }    
  })
}
handleVoison()
{
  let rouletteNumber=this.state.rouletteNumber;
  let listArr=[]; 
  rouletteConst.voisinsList.forEach((item,index)=>{
    let listIndex=rouletteNumber.lastIndexOf(item) 
    if(listIndex!=-1)
    {
      
      const actualIndex=rouletteNumber.length-listIndex
      listArr.push(actualIndex)

      this.setState({voisins:Math.min.apply(null, listArr)})
   
    }    
  })
}
handleZero()
{
  let rouletteNumber=this.state.rouletteNumber;
  let listArr=[]; 
  rouletteConst.zeroList.forEach((item,index)=>{
    let listIndex=rouletteNumber.lastIndexOf(item) 
    if(listIndex!=-1)
    {
      
      const actualIndex=rouletteNumber.length-listIndex
      listArr.push(actualIndex)

      this.setState({zeroVar:Math.min.apply(null, listArr)})
   
    }    
  })
}
handleOdd()
{
  let rouletteNumber=this.state.rouletteNumber;
  let listArr=[]; 
  rouletteConst.odd.forEach((item,index)=>{
    let listIndex=rouletteNumber.lastIndexOf(item) 
    if(listIndex!=-1)
    {
      
      const actualIndex=rouletteNumber.length-listIndex
      listArr.push(actualIndex)

      this.setState({odd:Math.min.apply(null, listArr)})
   
    }    
  })
}
handleEven()
{
  let rouletteNumber=this.state.rouletteNumber;
  let listArr=[]; 
  rouletteConst.even.forEach((item,index)=>{
    let listIndex=rouletteNumber.lastIndexOf(item) 
    if(listIndex!=-1)
    {
      
      const actualIndex=rouletteNumber.length-listIndex
      listArr.push(actualIndex)

      this.setState({even:Math.min.apply(null, listArr)})
   
    }    
  })
}
handleSmall()
{
  let rouletteNumber=this.state.rouletteNumber;
  let listArr=[]; 
  rouletteConst.small.forEach((item,index)=>{
    let listIndex=rouletteNumber.lastIndexOf(item) 
    if(listIndex!=-1)
    {
      
      const actualIndex=rouletteNumber.length-listIndex
      listArr.push(actualIndex)

      this.setState({small:Math.min.apply(null, listArr)})
   
    }    
  })
}
handleLarge()
{
  let rouletteNumber=this.state.rouletteNumber;
  let listArr=[]; 
  rouletteConst.large.forEach((item,index)=>{
    let listIndex=rouletteNumber.lastIndexOf(item) 
    if(listIndex!=-1)
    {
      
      const actualIndex=rouletteNumber.length-listIndex
      listArr.push(actualIndex)

      this.setState({large:Math.min.apply(null, listArr)})
      
    }    
  })
}
handleSubmit()
{
  this.handleRedNumber();
  this.handleBlackNumber();
  this.handleRowList1();
  this.handleRowList2();
  this.handleRowList3();
  this.handleColList1();
  this.handleColList2();
  this.handleColList3();
  this.handleLeftWheel();
  this.handleRightWheel();
  this.handleTier();
  this.handleOrphan();
  this.handleVoison();
  this.handleZero();
  this.handleOdd();
  this.handleEven();
  this.handleSmall();
  this.handleLarge();

  const rouStr=this.state.rouletteNumber.join(",");
  this.setState({rouletteText:rouStr})

}
    
    render() {
        return (
            <div >
                <h1>Roulette Stats</h1>
                <Form>
    <Form.Label>{this.state.rouletteText}</Form.Label>
    </Form>
    <div>
    <InputGroup> 
    <InputGroup.Prepend>
      <InputGroup.Text>Enter Roulette Numbers</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl as="textarea" aria-label="Enter Roulette Numbers" onBlur={(evt)=>
      {
        console.log(evt.target.value)
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
                    <Row>
                      <Col>
                        <h4>
                            Red Stats <Badge variant="danger">{this.state.redCount}</Badge>
                        </h4>
                      </Col>
                      <Col>
                        <h4>
                            Black Stats <Badge variant="secondary">{this.state.blackCount}</Badge>
                        </h4>
                      </Col>
                      <Col>
                        
                      </Col>
                      
                    </Row>
                    <Row>
                      <Col>
                      <h4>
                    RowList1 Stats <Badge variant="warning">{this.state.rowList1}</Badge>
                  </h4>
                      </Col>
                      <Col>
                      <h4>
                    RowList2 Stats <Badge variant="warning">{this.state.rowList2}</Badge>
                  </h4>
                      </Col>
                      <Col>
                      <h4>
                      RowList3 Stats <Badge variant="warning">{this.state.rowList3}</Badge>
                  </h4>
                      </Col>
                      
                    </Row>
                    <Row>
                      <Col>
                      <h4>
                      Col List 1 Stats <Badge variant="primary">{this.state.colList1}</Badge>
                  </h4>
                      </Col>
                      <Col>
                      <h4>
                      Col List 2 Stats <Badge variant="primary">{this.state.colList2}</Badge>
                  </h4>
                      </Col>
                      <Col>
                      <h4>
                      Col List 3 Stats <Badge variant="primary">{this.state.colList3}</Badge>
                  </h4>
                      </Col>
                      
                    </Row>
                    <Row>
                      <Col>
                      <h4>
                      Left Wheel Stats <Badge variant="success">{this.state.leftWheel}</Badge>
                  </h4>
                      </Col>
                      <Col>
                      <h4>
                      Right Wheel Stats <Badge variant="success">{this.state.rightWheel}</Badge>
                  </h4>
                      </Col>
                      <Col>
                      
                      </Col>
                      
                    </Row>

                    <Row>
                      <Col>
                      <h4>
                      Tier Stats <Badge variant="info">{this.state.tier}</Badge>
                  </h4>
                      </Col>
                      <Col>
                      <h4>
                      Orphellins Stats <Badge variant="info">{this.state.orephellins}</Badge>
                  </h4>
                      </Col>
                      <Col>
                      <h4>
                      Voison Stats <Badge variant="info">{this.state.voisins}</Badge>
                  </h4>
                      </Col>

                      
                    </Row>
                  <Row>
                    <Col>
                    <h4>
                      Zero Stats <Badge variant="info">{this.state.zeroVar}</Badge>
                  </h4>
                    </Col>
                    </Row>
                    <Row>
                      <Col>
                        <h4>
                        Odd Stats <Badge variant="success">{this.state.odd}</Badge>
                        </h4>
                      </Col>
                      <Col>
                        <h4>
                        Even Stats <Badge variant="success">{this.state.even}</Badge>
                        </h4>
                      </Col>
                      <Col>
                      
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <h4>
                        Small Stats <Badge variant="success">{this.state.small}</Badge>
                        </h4>
                      </Col>
                      <Col>
                        <h4>
                        Large Stats <Badge variant="success">{this.state.large}</Badge>
                        </h4>
                      </Col>
                      <Col>
                      
                      </Col>
                    </Row>
                    
                   
                </Container>
                <div>
            
                  </div>
            </div>
        )    
    }
}

export default App