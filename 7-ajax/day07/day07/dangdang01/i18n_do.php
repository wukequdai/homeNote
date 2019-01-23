<?php
  //1:设置响应头编码内容javascript utf8
  header("Content-Type:
  application/javascript;charset=utf-8");
  //2:读取请求消息的所有头部
  $list = getallheaders();
  //3:读取可接收语句请求头值
  $lang = $list['Accept-Language'];
  //4:读取客户端首先语言--"可接收语言"
  //  前2字母
  $start2 = substr($lang,0,2);
  $html = "";
  //5:中文
  //6:英文
  //7:日文
  if($start2==='zh'){
    $html = 'var msg="你好";alert(msg);';
  }else if($start2==='en'){
    $html = 'var msg="hello";alert(msg);';
  }else if($start2==='ja'){
    $html = 'var msg="ぁ";alert(msg);';
  }
  echo $html;
?>