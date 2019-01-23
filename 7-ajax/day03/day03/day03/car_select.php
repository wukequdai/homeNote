<?php
  //查询数据库 humaiche t_car

  //连接数据库
  $conn = mysqli_connect('127.0.0.1','root','','humaiche');
  //设置编码
  $sql = "set names utf8";
  mysqli_query($conn,$sql);
  //创建sql
  $sql = "SELECT * FROM t_car";
  //执行
  $result = mysqli_query($conn,$sql);
  //
  $list = mysqli_fetch_all($result,MYSQLI_ASSOC);
?>
<table>
    <thead>
        <tr>
           <th>编号</th>
           <th>图片</th>
           <th>名称</th>
           <th>价格</th>
           <th>是否出售</th>
           <th>生产日期</th>
           <th>操作</th>
        </tr>
    </thead>
    <tbody>
      <?php
        foreach($list as $c){
            echo "<tr>";
            echo "<td>$c[cid]</td>";
            echo "<td><img src='$c[pic]' style='width:80px'/></td>";
            echo "<td>$c[cname]</td>";
            echo "<td>￥$c[price]</td>";
            echo "<td>$c[isonsale]</td>";
            echo "<td>$c[birthday]</td>";
            echo "<td>";
            echo "<a class='$c[cid]' href='car_delete_do.php?cid=$c[cid]'>删除</a>";
            echo "<a href='car_update.php?cid=$c[cid]'>修改</a>";
            echo "</td>";       
            echo "</tr>";
        }
      ?>
    <script type="text/javascript" src="js/jquery-1.11.3.js"></script>  
    <script type="text/javascript">
     //
     $(function(){
       //处理是否销售 将 1 是  否
       var  rows = $("tbody tr td:nth-child(5)");
       rows.each(function(i,td){
         //console.log(td.innerHTML);
         var h = td.innerHTML;
         h = (h=='1')?"是":"否";
         td.innerHTML = h;
       });

       //给所有Date对象添加一个方法 toCNString
       Date.prototype.toCNString = function(){
          return this.getFullYear()+'_'+(this.getMonth()+1)+'_'+this.getDate();
       }

       //处理出厂日期
       rows = $("tbody tr td:nth-child(6)");
       rows.each(function(i,td){
        //console.log(td.innerHTML);
        var h = td.innerHTML;
        h = parseInt(h);
        h = new Date(h);
        td.innerHTML = h.toCNString();
       });


       // var rs = confirm('是否删除');
       // console.log(rs);
       
       $('table').on('click','a:contains("删除")',function(e){
          //alert("ok");
          e.preventDefault();
          //显示确认框
          //rs == true  是
          var rs = confirm('是否删除');
          if(rs){
           location.href = 'car_delete_do.php?cid='+$(this).attr('class');
          }
          //rs == false 否
       });

     });

    </script>
    </tbody>    
</table>  