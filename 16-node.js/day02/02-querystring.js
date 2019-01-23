var qs=require('querystring');
var str='name=tom&age=20';
console.log(qs.parse(str));
var obj={keywords:'phone',price:'1000'};
console.log(qs.stringify(obj));
console.log(qs.stringify(obj,","));
console.log(qs.stringify(obj,',','>'));