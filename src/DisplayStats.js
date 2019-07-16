import React from 'react'
import { Icon, Image, Statistic,Divider,Message } from 'semantic-ui-react'
import DisplayRouletteStats from "./DisplayRouletteStats"

const DisplayStatistics = (props) => 
{
 const CornerThreeMessage=(
 <Message >
 <Message.Header>Corner Three Stats</Message.Header>

</Message>);

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


                <Divider horizontal> 
                <Message info><Message.Header>Corner Three Stats</Message.Header></Message></Divider>
                <Statistic.Group widths={10}>
               

                  <DisplayRouletteStats count={props.stats.cornerThreeStats.corn_1_2_3} label="1_2_3" color="orange"/>
                  <DisplayRouletteStats count={props.stats.cornerThreeStats.corn_7_8_9} label="7_8_9" color="orange"/>
                  <DisplayRouletteStats count={props.stats.cornerThreeStats.corn_10_11_12} label="10_11_12" color="orange"/>
                  <DisplayRouletteStats count={props.stats.cornerThreeStats.corn_13_14_15} label="13_14_15" color="orange"/>
                  <DisplayRouletteStats count={props.stats.cornerThreeStats.corn_16_17_18} label="16_17_18" color="orange"/>
                  <DisplayRouletteStats count={props.stats.cornerThreeStats.corn_19_20_21} label="19_20_21" color="orange"/>
                  <DisplayRouletteStats count={props.stats.cornerThreeStats.corn_22_23_24} label="22_23_24" color="orange"/>
                  <DisplayRouletteStats count={props.stats.cornerThreeStats.corn_25_26_27} label="25_26_27" color="orange"/>
                  <DisplayRouletteStats count={props.stats.cornerThreeStats.corn_28_29_30} label="28_29_30" color="orange"/>
                  <DisplayRouletteStats count={props.stats.cornerThreeStats.corn_31_32_33} label="31_32_33" color="orange"/>
                  <DisplayRouletteStats count={props.stats.cornerThreeStats.corn_34_35_36} label="34_35_36" color="orange"/>
                 
                </Statistic.Group>

    </div>)
    return ele;
}

export default DisplayStatistics