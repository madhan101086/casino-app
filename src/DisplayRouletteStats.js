import React from 'react'
import { Icon, Image, Statistic } from 'semantic-ui-react'

const DisplayRouletteStats = (props) => (
  
      <Statistic color={props.color}>
    <Statistic.Value>{props.count}</Statistic.Value>
    <Statistic.Label>{props.label}</Statistic.Label>
  </Statistic>
  
)

export default DisplayRouletteStats