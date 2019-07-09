import React from 'react';
import rouletteConst from "./rouletteConstants"

function DetermineNumberIndex(rouletteType,statsList)
{ 

  let listArr=[]; 
  let index=0;
  let rouletteNumber=statsList
  //console.log(statsList)
  rouletteType.forEach((item,index)=>
  {  
    let listIndex=rouletteNumber.lastIndexOf(item) 
    if(listIndex!=-1)
    {    
      const actualIndex=rouletteNumber.length-listIndex
      listArr.push(actualIndex)
    }    
  })
 //console.log(rouletteType);
  //console.log(listArr);
  if(listArr.length==0)
  {
    index=0;
  }
  else{
    index=Math.min.apply(null, listArr);
  }
  
 
  return index
 
}
function HandleNumberLocation(statsList)
{
   console.log(statsList)
    let rouletteType={};
   rouletteType.redCount=DetermineNumberIndex(rouletteConst.redList,statsList);
   rouletteType.blackCount=DetermineNumberIndex(rouletteConst.blacklist,statsList);
   rouletteType.small=DetermineNumberIndex(rouletteConst.small,statsList);
   rouletteType.large=DetermineNumberIndex(rouletteConst.large,statsList);
   rouletteType.odd=DetermineNumberIndex(rouletteConst.odd,statsList);
   rouletteType.even=DetermineNumberIndex(rouletteConst.even,statsList);
   rouletteType.rightWheel=DetermineNumberIndex(rouletteConst.rightWheelList,statsList);
   rouletteType.leftWheel=DetermineNumberIndex(rouletteConst.leftWheelList,statsList);
   rouletteType.zeroVar=DetermineNumberIndex(rouletteConst.zeroList,statsList);
   rouletteType.voisins=DetermineNumberIndex(rouletteConst.voisinsList,statsList);
   rouletteType.orephellins=DetermineNumberIndex(rouletteConst.orphelinsList,statsList);
   rouletteType.tier=DetermineNumberIndex(rouletteConst.tierList,statsList);
   rouletteType.rowList1=DetermineNumberIndex(rouletteConst.rowList1,statsList);
   rouletteType.rowList2=DetermineNumberIndex(rouletteConst.rowList2,statsList);
   rouletteType.rowList3=DetermineNumberIndex(rouletteConst.rowList3,statsList);
   rouletteType.colList1=DetermineNumberIndex(rouletteConst.colList1,statsList);
   rouletteType.colList2=DetermineNumberIndex(rouletteConst.colList2,statsList);
   rouletteType.colList3=DetermineNumberIndex(rouletteConst.colList3,statsList);
   
   return rouletteType;
}
export default HandleNumberLocation;