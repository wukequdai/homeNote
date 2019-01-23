<?php
 //php中数据类型
 //注意string类型与JS中string不同
 
 //声明一个字符串类型数据
 $s1 = 'aaa';
 var_dump($s1);
 $s2 = "abc";
 echo $s1;
 $s1 = "一二三";
 echo $s1;
 //var_dump(); 输出变量值，并且类型
 //调试
 var_dump($s1);



 //双引号单引号
 //php中符串可以使用单引号或双引号
 //双引号中变量名会被解析
 $ename = "汤姆";
 $age = 20;
 $isMarried = false;
 echo '姓名'.$ename.'年龄'.$age.'婚否'.$isMarried;
 echo '<br />';
 echo "姓名:$ename 年龄:$age 婚否:$isMarried";
 echo '<hr/>';
 //小心变量boolean
 $stop = true;//true  自动转换1
 $run = false;//false 输出什么出不输出
 //echo '|'.$stop.'|';
 //echo '|'.$run.'|';

 $sal = 10000.50;
 echo $sal;


?>