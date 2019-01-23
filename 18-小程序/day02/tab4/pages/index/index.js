//index.js
//获取应用实例
Page({
  data:{
    ng:0,
    cc:["one active","one","one"]
  },
  fn:function(e){
    var that=this;
    var m=parseInt(e.target.dataset.p)// "1"
    var tmp1=that.data.cc;
    for(var i=0;i<tmp1.length;i++){
      tmp1[i]="one"
    }
    tmp1[m]="one active"
    that.setData({
      ng:m,
      cc:tmp1
    })
  }  
  
})
