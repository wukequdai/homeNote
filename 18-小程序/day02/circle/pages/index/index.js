//index.js
//获取应用实例
Page({
  data:{
   ngsec:-90
  },
  onLoad:function(){
    var that=this;
    setInterval(function(){
       detail(that)
    },1000)
  }
})

function detail(obj){
   /*
   var old=obj.data.ngsec
     old++;
   obj.setData({
     ngsec:old
   })*/
   var dt=new Date();// new String new Number new Number Math
   var old=dt.getSeconds();//从时间中得到秒数
   var sec=old*(360/60)-90// 换算为角度
   obj.setData({
     ngsec:sec
   }) 
}
