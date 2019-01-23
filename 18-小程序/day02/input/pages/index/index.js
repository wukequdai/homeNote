//index.js
//获取应用实例

Page({
  data:{
   num1:0,/*初始值 和用户的输入不是同步的绑定*/
   num2:0 /*初始值*/
  },
    xx:function(e){
     console.dir(e)
      var that=this;
      that.setData({num1:e.detail.value})
    },
        yy:function(e){
        var that=this;
        that.setData({num2:e.detail.value})
      },
     xy:function(){
      var that=this
      var x=parseFloat(that.data.num1)+parseFloat(that.data.num2)
        console.dir(x)
   }
})
