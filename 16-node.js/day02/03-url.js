var url=require('url');
//��url�ַ�������Ϊ����
var u='http://tom:123@tedu.cn:8080/news/index.html?pno=2&vno=4#section3';
console.log(url.parse(u));
console.log(url.parse(u,true));
//��һ�������ʽ��Ϊurl
var urlObj={
    protocol:"http:",
    hostname:'tedu.cn',
    port:'80',
    pathname:'couse/01.html',
    query:{name:'tom',pwd:123}
};
console.log(url.format(urlObj));
//���ݻ���ַ����Ե�ַ������Ŀ���ַ
var url1='http://tedu.cn/project/static/base.html';
var url2='../images/1.jpg';
console.log(url.resolve(url1,url2));




