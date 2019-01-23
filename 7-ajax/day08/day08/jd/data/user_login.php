<?php
  //1:获取用户参数   17:25--17:35 完成该功能
  //  uname/upwd
  header("content-type:text/plain;charset=utf-8");
  $uname = $_REQUEST['uname'];
  $upwd = $_REQUEST['upwd'];

  //2:连接数据库，设置编码
  require('init.php');
  //3:创建SELECT uid FROM jd_user
  //  WHERE uname = '' and upwd = '';
  $sql = "SELECT uid FROM jd_user";
  $sql .= " WHERE uname='$uname' ";
  $sql .= " AND upwd = '$upwd'";
  //4:执行查询
  $result = mysqli_query($conn,$sql);
  $row = mysqli_fetch_assoc($result);
  //5:返回结果 用户uid值 1 
  //6:如果用户不存在返回 -1
  if($row===NULL){
    echo -1;
  }else{
    echo $row['uid'];
  }