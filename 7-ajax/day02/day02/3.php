<html>
<head>
  <title>php程序</title>
</head>
<body>
<?php
   echo 'hello php';
   //1:创建变量
   //js  var msg = 'hello js';
   //变量声明   $变量名
   $msg = 'hello php2';
   //向客户端输出
   echo '<br />';
   echo $msg;
   for($i=1;$i<10;$i++){
   	 //字符串拼接使用.不是+
     echo $i.'<br />';
   }
   echo '<hr/>';
//10:30--10:40
//1:创建一个3.php 向客户端输出 50 *
   for($i=0;$i<50;$i++){
   	  echo '*';
   }

//2:创建一个4.php 向客户端输出 10行50列个*
   for($i=0;$i<10;$i++){
    for($j=0;$j<50;$j++){
        echo '*';
    }
   	echo '<br/>';
   } 



?>
</body>
</html>