//index.js
//获取应用实例
// tap start  end
// click mousedown  mouseup

Page({
    data:{
      x:0, /*触摸点 每次按下的x坐标 mouse.clientX*/
      lf:0,/*赋值 页面效果变 id.style.left*/
      lfx:0 /*触摸点 每次按下的时候 inner盒子的lf值 */
      ,
        timer:null,
        page:0,
        pagew:320
    },
    onLoad:function(){//获取系统信息
        var that=this;
      wx.getSystemInfo({
        success: function(res) {
          // success
          //console.dir(res)
          //  res.windowHeight 
           that.setData({pagew:res.windowWidth})
        }
      })
   console.log(34)
    },
    st:function(e){//console.dir(e)
     var that=this;
     that.setData({
       x:e.changedTouches[0].clientX,
       lfx:that.data.lf 
     })
    },
    mv:function(e){
      var that=this;
      var x2=e.changedTouches[0].clientX
      var off=x2- that.data.x
        that.setData({
           lf:off+that.data.lfx
        })
     },
    ed:function(e){
        var that=this;
         var x2=e.changedTouches[0].clientX
        var off=x2- that.data.x
        var p=that.data.page;
         if(off<-50){
          //往左
          p++
            if(p>3) p=3
         }else if(off>50){
          p--
            if(p<0) p=0  
          }
         else{
          
         }
        that.setData({
         page:p
        })
       // console.dir(e.changedTouches[0].clientX)
          animate(that,-p*that.data.pagew)
      }

})

  function animate(obj,mu){
     obj.data.timer=setInterval(function(){
       var dang=obj.data.lf;
       var speed=Math.ceil(Math.abs(mu-dang)/2)   
        // dang=dang+speed  dang=dang-speed  -100  -300
       speed=dang<mu?(speed):(-speed);
        //console.dir(speed)
       dang+=speed//    
        if(mu==dang){
          clearInterval(obj.data.timer)
        }
       obj.setData({
        lf:dang
       }) 
     },30)
  
  }

