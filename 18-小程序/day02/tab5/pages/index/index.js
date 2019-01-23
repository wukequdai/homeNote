//index.js
//获取应用实例
Page({
  data:{
    ng:0,
    item:"fdsf",
      index:34,
    titles:[
      {
        a:"新闻",
        src:"fd",
        price:[45,56,67]
      }
     ,{
      a:"体育",
        src:"f45",
        price:"24"
     },{
        a:"财经",
        src:"dfdfd",
        price:"54"
     }],
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
