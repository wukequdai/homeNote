//index.js
//获取应用实例
Page({
  data:{
    ng:["block","none","none"],
    cc:["one active","one","one"]
  },
  fn:function(e){
    var that=this;
    var m=parseInt(e.target.dataset.p)// "1"
    var tmp=that.data.ng;//[block ,none,none]
    var tmp1=that.data.cc;
    for(var i=0;i<tmp.length;i++){
      tmp[i]="none";
      tmp1[i]="one"
    }
    tmp[m]="block"
    tmp1[m]="one active"
    that.setData({
      ng:tmp,
      cc:tmp1
    })
  }  
  
})
