//index.js
//获取应用实例
var app = getApp()
Page({
  data:{
    vvv:"张三"
  }
  ,
  abc:function(){
    this.setData({
      vvv:"李四"
    })
    console.dir(this)
    console.log(452)
  }
})
