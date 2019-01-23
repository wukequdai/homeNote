//index.js
//获取应用实例
var app = getApp()
Page({
  data:{
    vvv:1245,
    uuu:"block"
  }
  ,onLoad:function(){
  }
  ,
  abc:function(e){

    var mm=this.data.vvv;
    mm++;
    this.setData({
      vvv:mm,
      uuu:"block"
    })

//
wx.setStorage({
  key: 'aaa',
  data: "has",
  success: function(res){
    // success
  },
  fail: function() {
    // fail
  },
  complete: function() {
    // complete
  }
})
wx.getStorage({
  key: 'aaa',
  success: function(res){
    // success
    console.dir(res.data)
  },
  fail: function() {
    // fail
  },
  complete: function() {
    // complete
  }
})


    console.dir(e)
    
  }
})
