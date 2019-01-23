//index.js
//获取应用实例
Page({
  data:{
    ng1:"block",
    ng2:"none",
    ng3:"none"
  },
  fn:function(e){
    var that=this;
    var m=e.target.dataset.p
     if(m=="0"){
      that.setData({
       ng1:"block",
       ng2:"none",
       ng3:"none"
     })
    }else if(m=="1"){
      that.setData({
       ng1:"none",
       ng2:"block",
       ng3:"none"
     })
    }else if(m=="2"){
      that.setData({
       ng1:"none",
       ng2:"none",
       ng3:"block"
     })
    }
  
  }  
  /*,
  fn1:function(e){
    console.dir(e)// target currentTarget
     var that=this;
     that.setData({
       ng1:"block",
       ng2:"none",
       ng3:"none"
     })
  },
  fn2:function(){
       console.dir(e)
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
*/
})
