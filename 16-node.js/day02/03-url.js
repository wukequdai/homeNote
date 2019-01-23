var url=require('url');
//将url字符串解析为对象
var u='http://tom:123@tedu.cn:8080/news/index.html?pno=2&vno=4#section3';
console.log(url.parse(u));
console.log(url.parse(u,true));
//将一个对象格式化为url
var urlObj={
    protocol:"http:",
    hostname:'tedu.cn',
    port:'80',
    pathname:'couse/01.html',
    query:{name:'tom',pwd:123}
};
console.log(url.format(urlObj));
//根据基地址和相对地址解析出目标地址
var url1='http://tedu.cn/project/static/base.html';
var url2='../images/1.jpg';
console.log(url.resolve(url1,url2));




