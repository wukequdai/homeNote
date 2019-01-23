var util=require('util');
var obj={name:'Cola',price:9.9,isOnsale:false};
//“商品名称：Cola，价格：9.9，是否促销：false”
//使用带%占位符的方式格式化字符串
var str=util.format('商品名称：%s，价格：%d，是否促销：%s',obj.name,obj.price,obj.isOnsale);
var str2=util.format('%j',obj);
console.log(str);
console.log(str2);

//返回一个对象的字符串表示
var str3=util.inspect(obj);
console.log(str3);

//实现两个构造方法之间的继承
function Base(){
    this.name="base";
}
Base.prototype.age=20;
function Sub(){
    this.name='sub';
}
util.inherits(Sub,Base);
var user=new Sub();
console.log(user.name);
console.log(user.age);