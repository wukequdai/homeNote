<?php
  //9:40--9:50
  //1:连接数据库
$conn = mysqli_connect('127.0.0.1','root',
'','humaiche'); 
//2:设置编码
$sql = "set names utf8";
mysqli_query($conn,$sql);
//3:创建sql 
$sql = "SELECT * FROM t_login";  
//4:执行sql获取结果集 huimaiche.t_login
$result = mysqli_query($conn,$sql);
//5:转结果集转换索引数组
//while(true){
// $row = mysqli_fetch_row($result);
// if($row===NULL){
//    break;
// }
// echo $row[0].":".$row[1].":".$row[2];
//}

//抓取关联数组显示数据
//while(true){
// $row = mysqli_fetch_assoc($result);
// if($row===NULL){
//   break;
// }
// echo "$row[id]:$row[name]:$row[pwd] <br />";
//}
?>
<table width="100%" border="1">
  <thead>
    <tr>
	  <td>编号</td>
	  <td>用户名</td>
	  <td>操作</td>
	</tr>
  </thead>
  <tbody>
<?php
  while(true){
    $row = mysqli_fetch_assoc($result);
	if($row===NULL){
	  break;
	}
    echo "<tr>";
	echo "<td>$row[id]</td>";
	echo "<td>$row[name]</td>";
	echo "<td></td>";
	echo "</tr>";
  }
?>    
  </tbody>
</table>