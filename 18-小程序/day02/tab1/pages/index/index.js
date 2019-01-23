//index.js
//获取应用实例
Page({
  data:{
    ng1:"block",
    ng2:"none",
    ng3:"none"
  },
  fn1:function(){
     var that=this;
     that.setData({
       ng1:"block",
       ng2:"none",
       ng3:"none"
     })
  },
  fn2:function(){
       var that=this;
     that.setData({
       ng1:"none",
       ng2:"block",
       ng3:"none"
     })
     },
  fn3:function(){
     var that=this;
     that.setData({
       ng1:"none",
       ng2:"none",
       ng3:"block"
     })
     }

})
