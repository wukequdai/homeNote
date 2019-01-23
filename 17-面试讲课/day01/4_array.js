//数组降维
var arr=[
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0]
];
//arr=String(arr).split(",");

//for(var r=0,result=[];r<arr.length;r++){
//  //for(var c=0;c<arr[r].length;c++){
//  //  result.push(arr[r][c]);
//  //}
//  result=result.concat(arr[r]);
//                     //[0,0,0,0]
//}
var result=
  Array.prototype.concat.apply([],arr);
  //[].concat(arr[1],arr[2],arr[3],arr[4])
console.dir(result);
