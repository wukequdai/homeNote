
//功能1：待页面加载完成后，异步请求
//1.1 1.2
//页头页尾
//header.php
//footer.php  16:35--16:45
//1.1 页面加载完成事件 jquery
//1.2 发送ajax请求  data/header.php
//1.3 返回数据保存 #site_header div innerHTML
//1.4 发送ajax请求  data/footer.php
//1.5 返回数据保存 #site_footer div innerHTML
$(function(){
  $("#site_header").load("data/header.php");
  $("#site_footer").load("data/footer.php");
});

//功能2:为登录按钮绑定事件监听
//16:55--17:05
//17:05--17:15  休息
//2.1 声明变量loginUname 赋值 null
//2.2 声明变量loginUid   赋值 null
//全局变量:保存当前登录用户名和uid值
var loginUname = null;
var loginUid = null;
//2.3 获取登录按钮绑定点击事件
//2.3.1 获取用户输入用户名
//2.3.2 获取用户输入密码
$("#bt-login").click(function(){
  var n = $("#uname").val();
  var p = $("#upwd").val(); 
  //2.3.3 发送get请求 data/user_login.php
  //2.3.4 参数用户名密码
  //2.3.4 获取返回数据
  var url = "data/user_login.php?uname=";
      url += n+"&upwd="+p;
  $.get(url,function(data){
  // 17:50--17:55
  //2.3.5 如果返回数据大于0 登录成功
  //      a:登录框隐藏
  //      b:在header.php 欢迎回来 qiangdong
  //        id="welcome"
  //      c:保存用户名 用户id全局
  if(data > 0){
    $(".modal").hide();
    $("#welcome").html("欢迎回来:"+n);
    loginUname = n;
    loginUid = data;
  }else{
   //2.3.6 如果返回数据小于0 登录失败
   //      提示出错｛用户名和密码有误｝ 
   //      class="alert"
   $("p.alert").html("用户名密码有误");  
  }


  });
 
});

//功能3：加载产品列表
//	3.1:当页面加载成功后自动发送ajax请求
//	3.2:获取服务器返回json格式数据
//	3.3:页面哪个位置保存产品信息
//	    找id="plist" 
//			ul li每一个产品都是一个li元素
$(function(){
    $.ajax({  //11:08--11:13
       type:"GET",
       url:"data/product_list.php",
       success:function(data){
         //data javascript 数组22js对象
         //a:创建变量 html 字符串
         var html = '';
         //b:循环：获取data数组中每一个对象
         for(var i=0;i<data.length;i++){
         //c:拼接 productlist.html 36 line
         html += `
        <li>
            <a href=""><img src="${data[i].pic}" alt=""/></a>
            <p>￥${data[i].price}</p>
            <h1><a href="">${data[i].pname}</a></h1>
            <div>
                <a href="" class="contrast"><i></i>对比</a>
                <a href="" class="p-operate"><i></i>关注</a>
                <a href="${data[i].pid}" class="addcart"><i></i>加入购物车</a>
            </div>
        </li>           
         `;
         //d:循环结束
         }
         //e:将字符串赋值 #plist ul innerHTML
         $("#plist ul").html(html);
       }
    });
});

//功能4：不每个商品下的"添加到购物车"
//绑定监听事件
//坑:由于 <a>添加到购物车</a>
//ajax 请示动态添加元素,不能用以前click
//绑定事件.
//$(父元素).on(事件,子元素,fn);
$("#plist").on('click','a.addcart',function(e){
  //1:阻止事件默认行为
  e.preventDefault();
  //2:获取pid
  var pid = $(this).attr("href");
  //3:获取uid
  var uid = loginUid;
  //4:发送ajax请求 cart_detail_add.php
  //5:显示添加成功
  $.ajax({
    type:'POST',
    url:'data/cart_detail_add.php',
    data:{'uid':uid,'pid':pid},
    success:function(data){
      alert(data.msg); 
    },
    error:function(){
      alert("添加购物车出错");
    }
  });
});



//功能5：去购物车结算  15:05--15:10
//绑定事件监听
//1：事件代理 #settle_up   
//15:44--15:50 
//15:55--16:05 休息
$(document.body).on('click',
  "#settle_up",function(){
  //2: 将用户名用户id保存cookie
  document.cookie='loginUname='+loginUname;
  document.cookie='loginUid='+loginUid;
  //alert(loginUname+":"+loginUid);
  //3:跳转
  location.href = 'shoppingcart.html';
});











