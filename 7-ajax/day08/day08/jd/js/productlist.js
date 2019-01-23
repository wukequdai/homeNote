
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













