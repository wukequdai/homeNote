var str="ryan is not a good man";
       //ryan5 is6 not7 a8 good9 man10
var n=5;
str=str.replace(/\b[a-z]+\b/ig,
  function(kw){
    return kw+n++;
  }
);
console.log(str);

//计算一个只有乘法和加法的表达式的值
//比如: 1+23*2+3*3*3
function calc(exp){
  var subExps=exp.split("+");
  for(var i=0,sum=0;i<subExps.length;i++){
    if(subExps[i].indexOf("*")!=-1){
      var subs=subExps[i].split("*");
      for(var j=0,multi=1;j<subs.length;j++){
        multi*=subs[j];
      }
      sum+=multi;
    }else
      sum+=parseFloat(subExps[i]);
  }
  return sum;
}
console.log(calc("1+23*2+3*3*3"));