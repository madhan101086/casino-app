import React from 'react'
import { Label } from 'semantic-ui-react'
import rouletteConst from "./rouletteConstants"


const DisplayWheelNumbers = (props) => (
  <div>
    {
        props.wheelNumbers.map((item,id) => 
            
           
           { 
              let labelColor=""
              let labelList=[];
                if(rouletteConst.redList.includes(item))
                {
                labelColor="red"
                }
                else if(rouletteConst.blacklist.includes(item))
                {
                labelColor="black"
                }
                else{
                labelColor="green"
                }
            
               const label=(<Label circular color={labelColor} key={id}>
                {item}
              </Label>)
              return label
            }
            
                
             
    )
    }
  </div>
)

export default DisplayWheelNumbers