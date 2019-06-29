import React from "react"
import {InputGroup,FormControl,Container,Row,Col,Badge} from "react-bootstrap"

function DisplayStats(props) {
    return (

        <Col>
          <h5>
              {props.name} <Badge variant={props.variant}>{props.count}</Badge>
          </h5>
          </Col>
       
      
       
    )
}

export default DisplayStats