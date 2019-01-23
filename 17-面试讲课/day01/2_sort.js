//三大排序: 冒泡，插入，快速
var arr=[4,1,3,5,2,7,6];
//插入: 直接修改原数组
function insertSort(arr){
  for(var i=1;i<arr.length;i++){
    var t=arr[i];
    var p=i-1;
    while(p>=0&&arr[p]>t){
      arr[p+1]=arr[p];
      p--;
    }
    arr[p+1]=t;
  }
}
//insertSort(arr);
//console.log(String(arr));
//快速排序:不修改原数组，仅返回新数组
function quickSort(arr){
  if(arr.length<=1) return arr;
  else{
    var c=parseInt((arr.length-1)/2);
    var cv=arr.splice(c,1)[0];
    var left=[], right=[];
    for(var i=0;i<arr.length;i++){
      if(arr[i]<cv)
        left.push(arr[i]);
      else
        right.push(arr[i]);
    }
    return quickSort(left).concat(
              cv,quickSort(right));
  }
}
var newArr=quickSort(arr);
console.log(String(newArr));