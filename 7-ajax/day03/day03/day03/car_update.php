<?php
$cid = $_REQUEST['cid'] or die('cid required');
$conn = mysqli_connect('127.0.0.1','root','','humaiche');
$sql = "set names utf8";
mysqli_query($conn,$sql);
$sql = "SELECT * FROM t_car WHERE cid=$cid";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);
?>
<h1>更新数据</h1>
<form action="update_car.php" method="post">
  <ul>
  	  <input type="hidden" name="cid" value="<?php echo $row['cid']?>" />
  	  <li>汽车名称<input type="text" value="<?php echo $row['cname']?>" name="cname" /></li>
  	  <li>汽车价格<input type="text" value="<?php echo $row['price']?>" name="price" /></li>
  	  <li><input type="submit" value="更新" /></li>
  </ul>
</form>

