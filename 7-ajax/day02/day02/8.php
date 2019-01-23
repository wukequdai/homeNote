<?php
   //练习: 创建数组保存员工信息
   //提示: 二维数组
   //1:创建一个空数组，名称$empList
   //2:向数组中添加一个员工的的信息，
   //  包含:姓名，性别，工资，
   //  生日，照片等属性.
   //3:在一个table中输出5名员工的信息

   $empList = [];
   $empList[] = ['name'=>'tom','sex'=>'M','sal'=>10000.00,'birthday'=>'1994-10-10','photo'=>'img/1.jpg'];
   $empList[] = ['name'=>'jerry','sex'=>'M','sal'=>9000.00,'birthday'=>'1995-10-10','photo'=>'img/2.jpg'];
   $empList[] = ['name'=>'kaka','sex'=>'M','sal'=>11000.00,'birthday'=>'1994-11-10','photo'=>'img/3.jpg'];
   $empList[] = ['name'=>'gogo','sex'=>'M','sal'=>15400.00,'birthday'=>'1990-10-10','photo'=>'img/4.jpg'];
   $empList[] = ['name'=>'long','sex'=>'M','sal'=>11000.00,'birthday'=>'1994-10-10','photo'=>'img/5.jpg'];
   //var_dump($empList);
?>
<table width="100%" border="1">
   <thead>
   	<tr>
   		 <th>照片</th>
   		 <th>姓名</th>
   		 <th>年龄</th>
   		 <th>生日</th>
   	</tr>
   </thead>
   <tbody>
   	<?php
   	  //14:29---14:34
      foreach($empList as $emp){
         echo "<tr>";
         echo "<td><img src='$emp[photo]'/></td>";
         echo '<td>'.$emp['name'].'</td>';
         echo "<td>$emp[birthday]</td>";
         echo "<td>$emp[birthday]</td>";
         echo "</tr>";
      }
   	?>
   </tbody>
</table>	









