<?php
  //试一下
  //传递参数:测试简单传递参数不用表单
  http://127.0.0.1/day02/1.php?name=tom
  @$name = $_REQUEST['name'] or die('您传入的数据有错请检测');
  ///echo $name;   9:33---9:38
  $conn = mysqli_connect('127.0.0.1','root','','tarena');
  $sql = "set names utf8";
  mysqli_query($conn,$sql);
  $sql = "insert into t_class values(null,'abcabc','abc123')";
  $result = mysqli_query($conn,$sql);
  if($result){
   	  echo "添加成功";
   	  echo "新的id值是".mysqli_insert_id($conn);
   	  echo "影响了几行".mysqli_affected_rows($conn);
  }else{
   	  echo "添加失败";
  }

