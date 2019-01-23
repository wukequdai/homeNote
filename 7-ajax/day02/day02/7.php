<?php
   //关联数组
   $arr2 = ['eid'=>10,'name'=>'tom','age'=>20];
   $arr2['addr'] = '万寿路';
   //var_dump($arr2); 
   
   //echo $arr2['name'];
   //遍历关联数组使用foreach 循环
   foreach($arr2 as $v){
       echo $v."<br/>";
   }
   foreach ($arr2 as $k=>$v) {
   	   echo $k.'='.$v.'<br />';
   }


?>