import React from 'react'
import { Icon, Image, Statistic,Divider,Message } from 'semantic-ui-react'
import DisplayRouletteStats from "./DisplayRouletteStats"
import DisplayIndNumLabel from "./DetermineIndividualNumCountLabel"
import DetermineLabel from "./DetermineRouletteType"
const DisplayCurrenThreeNeighboutStatistics = (props) => 
{
    console.log("props");
    console.log(props);

    const CornerThreeMessage=(
 <Message >
 <Message.Header>Individual Number Stats</Message.Header>

</Message>);

const _0={count:props.stats._0N3,label:"0"};
const _1={count:props.stats._1N3,label:"1"};
const _2={count:props.stats._2N3,label:"2"};
const _3={count:props.stats._3N3,label:"3"};
const _4={count:props.stats._4N3,label:"4"};
const _5={count:props.stats._5N3,label:"5"};
const _6={count:props.stats._6N3,label:"6"};
const _7={count:props.stats._7N3,label:"7"};
const _8={count:props.stats._8N3,label:"8"};
const _9={count:props.stats._9N3,label:"9"};
const _10={count:props.stats._10N3,label:"10"};
const _11={count:props.stats._11N3,label:"11"};
const _12={count:props.stats._12N3,label:"12"};
const _13={count:props.stats._13N3,label:"13"};
const _14={count:props.stats._14N3,label:"14"};
const _15={count:props.stats._15N3,label:"15"};
const _16={count:props.stats._16N3,label:"16"};
const _17={count:props.stats._17N3,label:"17"};
const _18={count:props.stats._18N3,label:"18"};
const _19={count:props.stats._19N3,label:"19"};
const _20={count:props.stats._20N3,label:"20"};
const _21={count:props.stats._21N3,label:"21"};
const _22={count:props.stats._22N3,label:"22"};
const _23={count:props.stats._23N3,label:"23"};
const _24={count:props.stats._24N3,label:"24"};
const _25={count:props.stats._25N3,label:"25"};
const _26={count:props.stats._26N3,label:"26"};
const _27={count:props.stats._27N3,label:"27"};
const _28={count:props.stats._28N3,label:"28"};
const _29={count:props.stats._29N3,label:"29"};
const _30={count:props.stats._30N3,label:"30"};
const _31={count:props.stats._31N3,label:"31"};
const _32={count:props.stats._32N3,label:"32"};
const _33={count:props.stats._33N3,label:"33"};
const _34={count:props.stats._34N3,label:"34"};
const _35={count:props.stats._35N3,label:"35"};
const _36={count:props.stats._36N3,label:"36"};

const _0Stats=DisplayMaxCountStats(_0)
const _1Stats=DisplayMaxCountStats(_1)
const _2Stats=DisplayMaxCountStats(_2)
const _3Stats=DisplayMaxCountStats(_3)
const _4Stats=DisplayMaxCountStats(_4)
const _5Stats=DisplayMaxCountStats(_5)
const _6Stats=DisplayMaxCountStats(_6)
const _7Stats=DisplayMaxCountStats(_7)
const _8Stats=DisplayMaxCountStats(_8)
const _9Stats=DisplayMaxCountStats(_9)
const _10Stats=DisplayMaxCountStats(_10)
const _11Stats=DisplayMaxCountStats(_11)
const _12Stats=DisplayMaxCountStats(_12)
const _13Stats=DisplayMaxCountStats(_13)
const _14Stats=DisplayMaxCountStats(_14)
const _15Stats=DisplayMaxCountStats(_15)
const _16Stats=DisplayMaxCountStats(_16)
const _17Stats=DisplayMaxCountStats(_17)
const _18Stats=DisplayMaxCountStats(_18)
const _19Stats=DisplayMaxCountStats(_19)
const _20Stats=DisplayMaxCountStats(_20)
const _21Stats=DisplayMaxCountStats(_21)
const _22Stats=DisplayMaxCountStats(_22)
const _23Stats=DisplayMaxCountStats(_23)
const _24Stats=DisplayMaxCountStats(_24)
const _25Stats=DisplayMaxCountStats(_25)
const _26Stats=DisplayMaxCountStats(_26)
const _27Stats=DisplayMaxCountStats(_27)
const _28Stats=DisplayMaxCountStats(_28)
const _29Stats=DisplayMaxCountStats(_29)
const _30Stats=DisplayMaxCountStats(_30)
const _31Stats=DisplayMaxCountStats(_31)
const _32Stats=DisplayMaxCountStats(_32)
const _33Stats=DisplayMaxCountStats(_33)
const _34Stats=DisplayMaxCountStats(_34)
const _35Stats=DisplayMaxCountStats(_35)
const _36Stats=DisplayMaxCountStats(_36)

const countGroup=(<div> <Statistic.Group widths='ten'>
{_0Stats}
{_1Stats}
{_2Stats}
{_3Stats}
{_4Stats}
{_5Stats}
{_6Stats}
{_7Stats}
{_8Stats}
{_9Stats}
{_10Stats}
{_11Stats}
{_12Stats}
{_13Stats}
{_14Stats}
{_15Stats}
{_16Stats}
{_17Stats}
</Statistic.Group>
<Statistic.Group widths='ten'>


{_18Stats}
{_19Stats}
{_20Stats}
{_21Stats}
{_22Stats}
{_23Stats}
{_24Stats}
{_25Stats}
{_26Stats}
{_27Stats}
{_28Stats}
{_29Stats}
{_30Stats}
{_31Stats}
{_32Stats}
{_33Stats}
{_34Stats}
{_35Stats}
{_36Stats}


</Statistic.Group>
<Statistic.Group widths='ten'>



</Statistic.Group>
</div>)
return countGroup
}
const DisplayMaxCountStats= (outcome) => 
  
   {
    //console.log("outcome Label Result");   
    //console.log(outcome);
    let colorLabel="olive";
    const countLabel=DetermineLabel(Number(outcome.label));
    if(outcome.count>=20 && outcome.count<30)
    {
        colorLabel="orange";
    }
    else if(outcome.count>=30)
    {
        colorLabel="red";
    }
    else if(outcome.count==0)
    {
        colorLabel="black";
    }
        const countStats=( <Statistic color={colorLabel}>
        <Statistic.Value>{outcome.count}</Statistic.Value>
        <Statistic.Label>{countLabel}</Statistic.Label>
        </Statistic>)
        return countStats
   } 
export default DisplayCurrenThreeNeighboutStatistics