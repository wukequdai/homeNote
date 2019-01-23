//index.js
//获取应用实例
Page({
  // 全局变量
  data:{   
     num:1,
     timer:null  
  },
  // 自定义事件
  chg:function(){
     var that=this;//让此处的this存储到that变量      
    //自动运行的定时器
    that.data.timer=setInterval(function(){
         detail(that) 
    },1000)
  }
})

//写到外边
 function detail(obj){//obj=that
   //console.log(this)
        var old=obj.data.num;//得到innerHTML
        old++;//自增
        obj.setData({
            num:old
        })//设置到ng变量上
        if(old>=10){
         clearInterval(obj.data.timer)
        }  
 }