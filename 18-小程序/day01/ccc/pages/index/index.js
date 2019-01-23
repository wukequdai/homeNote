//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    asd:"dfdssfdfdsf",
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  abc:function(){
    console.log(452)
  },
  onShareAppMessage:function(){}
  ,
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
