import React from 'react'
import { Icon, Image, Statistic } from 'semantic-ui-react'
import DisplayRouletteStats from "./DisplayRouletteStats"

const DisplayStatistics = (props) => 
{
 
 const ele=( <div>
  <Statistic.Group widths='seven'>
  <DisplayRouletteStats count={props.stats.redCount} label="Red" color="red"/>
                  <DisplayRouletteStats count={props.stats.blackCount} label="Black" color="black"/>
                  <DisplayRouletteStats count={props.stats.small} label="Small" color="orange"/>
                  <DisplayRouletteStats count={props.stats.large} label="Large" color="green"/>
                  <DisplayRouletteStats count={props.stats.odd} label="Odd" color="purple"/>
                  <DisplayRouletteStats count={props.stats.even} label="Even" color="teal"/>
                 
                  </Statistic.Group>
                  <Statistic.Group widths='seven'>
                  <DisplayRouletteStats count={props.stats.rightWheel} label="Right" color="red"/>
                  <DisplayRouletteStats count={props.stats.leftWheel} label="Left" color="red"/>
                  <DisplayRouletteStats count={props.stats.zeroVar} label="Zero" color="olive"/>
                  <DisplayRouletteStats count={props.stats.voisins} label="Voisins" color="olive"/>
                  <DisplayRouletteStats count={props.stats.orephellins} label="Orphellins" color="olive"/>
                  <DisplayRouletteStats count={props.stats.tier} label="Tier" color="olive"/>
                 
                  </Statistic.Group>
                  <Statistic.Group widths='seven'>
                  <DisplayRouletteStats count={props.stats.rowList1} label="1-12" color="orange"/>
                  <DisplayRouletteStats count={props.stats.rowList2} label="13-24" color="orange"/>
                  <DisplayRouletteStats count={props.stats.rowList3} label="25-36" color="orange"/>
                  <DisplayRouletteStats count={props.stats.colList1} label="Col 1" color="green"/>
                  <DisplayRouletteStats count={props.stats.colList2} label="Col 2" color="green"/>
                  <DisplayRouletteStats count={props.stats.colList3} label="Col 3" color="green"/>
    
   
    </Statistic.Group>
    </div>)
    return ele;
}

export default DisplayStatistics