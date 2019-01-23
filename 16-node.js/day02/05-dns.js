var dns=require('dns');
dns.lookup('www.baidu.com',(err,address,family)=>{
    if(err){
        console.log('解析失败');
    }else{
        console.log(address);
        console.log(family);
    }
});
dns.resolve('www.baidu.com',(err,address)=>{
    if(err){
        console.log('解析失败');
    }else{
        console.log(address);
    }
});

dns.reverse('60.221.254.230',(err,hostname)=>{
    if(err){
        console.log('IP地址解析失败');
    }else{
        console.log(hostname);
    }
});

