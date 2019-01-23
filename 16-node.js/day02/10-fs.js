/*根据新闻模版，生成静态的新闻详情页*/
var fs=require('fs');
var util=require('util');
//获取数据（一般通过前端传入或数据库中查询得到，暂时自定义一个对象来代替）
var str={
    title:'web前端训练营即将开播',
    pubtime:'2017-03-20',
    details:'web前端训练营将在3月28号开始，敬请期待~~~'
};
//读取新闻模板
fs.readFile('./model/news.html',(err,data)=>{
    if(err){
        console.log('读取失败');
    }else{
        //将具体的数据内容写入到模板中
         var htmlStr=util.format(data.toString(),str.title,str.title,str.pubtime,str.details);
        //生成新的静态页
        var d=new Date();
        d=d.getTime();
        console.log(d);
        var pathStr='./news/'+d+'.html';//通常是根据某种算法算出来的不重复的文件名
        fs.writeFile(pathStr,htmlStr,(err)=>{
            if(err){
                console.log('文件写入失败');
            }else{
                console.log('文件写入成功');
            }

        });
    }
});



