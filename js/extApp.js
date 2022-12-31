  let serieChartCols =[
    {color:"teal",caption:"active energy import",name:"aei_1",data_field:"aie"},
    {color:"blue",caption:"active energy iexort",name:"aee_1",data_field:"aee"},
    {color:"blue",caption:"reactive energy import",name:"raei_1",data_field:"raie"},
    {color:"black",caption:"arctive energy export",name:"raee_1",data_field:"raee"},
    {color:null,caption:"arctive energy export",name:"raee_1",data_field:"raee"},
    {color:"green",caption:"last active energy",name:"lae_1",data_field:"lae"},
    {color:"yellow",caption:"minimum active energy",name:"mae_1",data_field:"mae"},
 ];
 let dbColumn=["aei","aee","rei","ree","lae","mae"];
 let ages=[25,36,17,85,64,79,44,52,91,125];
 let obj={name:"hossein",lastName:"tavakkoli",age:25,job:"engineer"};
//High-Orders Method
let newAges = ages.map(age=>age + 20);
let checkAgesMap = ages.map(age=>age%2==0);
let checkAgesFilter = ages.filter(age=>age%2==0);
let checkSerieChartColsMap = serieChartCols.map(obj=>obj.color != null);
let hos = serieChartCols.map(obj=>obj.color );
let checkSerieChartColsFilter = serieChartCols.filter(obj=>obj.color != null );
let checkSerieChartColsevery = serieChartCols.every(obj=>obj.color != null );
let checkSerieChartColsSome = serieChartCols.some(obj=>obj.color != null );
console.log("hos:",hos);
console.log("newAges:",newAges);
console.log("ages:",ages);
console.log("checkAgesMap:",checkAgesMap);
console.log("ages:",ages);
console.log("checkAgesFilter:",checkAgesFilter);
console.log("ages:",ages);
console.log("checkSerieChartColsMap:",checkSerieChartColsMap);
console.log("serieChartCols:",serieChartCols);
console.log("checkSerieChartColsFilter:",checkSerieChartColsFilter);
console.log("serieChartCols:",serieChartCols);
console.log("checkSerieChartColsevery:",checkSerieChartColsevery);
console.log("serieChartCols:",serieChartCols);
console.log("checkSerieChartColsSome:",checkSerieChartColsSome);
console.log("serieChartCols:",serieChartCols);
 


var tarf = [
   { tarf: "3", clock: "2022-12-12", mdrTotal: 13.19, tarfType: "other_uses" },
   { tarf: "5", clock: "2022-12-12", mdrTotal: 0, tarfType: "general" },
   { tarf: "1", clock: "2022-12-12", mdrTotal: 36.708, tarfType: "homemade" },
   { tarf: "1", clock: "2022-12-13", mdrTotal: 38.229, tarfType: "homemade" },
   { tarf: "5", clock: "2022-12-13", mdrTotal: 0, tarfType: "general" },
   { tarf: "3", clock: "2022-12-13", mdrTotal: 14.058, tarfType: "other_uses" },
   { tarf: "3", clock: "2022-12-14", mdrTotal: 9.681, tarfType: "other_uses" },
   { tarf: "1", clock: "2022-12-14", mdrTotal: 40.558, tarfType: "homemade" },
   { tarf: "5", clock: "2022-12-14", mdrTotal: 0, tarfType: "general" },
   { tarf: "5", clock: "2022-12-15", mdrTotal: 0, tarfType: "general" },
   { tarf: "1", clock: "2022-12-15", mdrTotal: 43.937, tarfType: "homemade" },
   { tarf: "3", clock: "2022-12-15", mdrTotal: 10.284, tarfType: "other_uses" }
 ];
 console.log(
   "----------------------------------------------------------------------------------------------------------------------"
 );
 var test = tarf.filter((x) => x.clock == "2022-12-12");
 var getClock = tarf.map((x) => x.clock);
 console.log("test");
 console.log(test);
 console.log("getClock");
 console.log(getClock);
 if (tarf.some((x) => x.clock != "2022-12-16")) {
   console.log("exist");
 } else {
   console.log("not exist");
 }
 


 

 