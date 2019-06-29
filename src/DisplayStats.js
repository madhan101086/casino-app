import React from 'react'
import { Icon, Image, Statistic } from 'semantic-ui-react'

const DisplayStatistics = (props) => (
    <Statistic>
    <Statistic.Value>{props.count}</Statistic.Value>
    <Statistic.Label>{props.label}</Statistic.Label>
  </Statistic>
)

export default DisplayStatistics