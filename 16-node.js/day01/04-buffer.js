//创建一个长度为32字节的缓冲区
var buf1=new Buffer(32);
console.log(buf1);

//创建一个长度为3字节的缓冲区，存入十进制
var buf2=new Buffer([65,66,67]);
console.log(buf2);
console.log(buf2.toString());

//创建一个长度为4字节的缓冲区，存入英文字符串
var buf3=new Buffer('ABCD');
console.log(buf3);

//创建一个长度缓冲区，存入中英文字符串,第二个参数设置编码方式
var buf4=new Buffer("AB一二","utf8");
console.log(buf4);
console.log(buf4.toString("utf8"));
console.log(buf4.toString("ascii"));
//判断是否支持某种编码方式
console.log(Buffer.isEncoding("utf-8"));
console.log(Buffer.isEncoding("utf-16"));




