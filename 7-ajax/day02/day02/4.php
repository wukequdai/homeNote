<?php
//3:创建一个5.php 向客户端输出* 组成三角型
for($i=1;$i<7;$i++){
    for($j=0;$j<$i;$j++){
    	echo '*';
    }
	echo '<br />';
}
//4:创建一个6.php 向客户端输出九九乘法表
echo '<table width="100%" border="1">';
for($i=1;$i<=9;$i++){
  echo '<tr>';
  for($j=1;$j<=$i;$j++){
  	echo "<td>$i*$j=".$i*$j.'</td>';
  }
  echo '</tr>';
}
echo '</table>';
?>