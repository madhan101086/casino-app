const redList=[1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
const blacklist=[2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35];
const rowList1 =[1,2,3,4,5,6,7,8,9,10,11,12];
const rowList2=[13,14,15,16,17,18,19,20,21,22,23,24];
const rowList3=[25,26,27,28,29,30,31,32,33,34,35,36];
const colList1=[1,4,7,10,13,16,19,22,25,28,31,34];
const colList2=[2,5,8,11,14,17,20,23,26,29,32,35];
const colList3=[3,6,9,12,15,18,21,24,27,30,33,36];
const leftWheelList=[26,3,35,12,28,7,29,18,22,9,31,14,20,1,33,16,24,5];
const rightWheelList=[32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10];
const tierList=[5,10,23,8,30,11,36,13,27,33,16,24];
const orphelinsList=[1,20,14,31,9,6,34,17];
const voisinsList=[22,18,29,7,28,12,35,3,26,0,32,15,19,4,21,2,25];
const zeroList=[12,35,3,26,0,32,15];
const odd=[1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35];
const even=[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36];
const small=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
const large=[19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];
const rouletteConst={
    redList:redList,blacklist,rowList1,rowList2,rowList3,colList1,colList2,colList3,leftWheelList,rightWheelList,
    tierList,orphelinsList,voisinsList,zeroList,odd,even,small,large
};
export default rouletteConst