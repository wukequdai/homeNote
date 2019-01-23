//功能1：
//从cookie中获取用户名和用户编号
//1.1 获取cookie所有key=val 以;分隔转数组
var cookieArray = document.cookie.split("; ");
var cookieObject = {};
//1.2 循环数组中的每一个元素
for(var i=0;i<cookieArray.length;i++){
//1.3 获取当前元素
var pair = cookieArray[i].split("=");
//1.4 获取key
var key = pair[0];
//1.5 获取value
var value = pair[1];
//1.6 循环结束
 cookieObject[key]=value;
}
//1.7 如果cookie没有loginUid则跳转
//    productlist.html
if(!cookieObject.loginUid){
  location.href = 'productlist.html'
}
var loginUname = cookieObject.loginUname;
var loginUid = cookieObject.loginUid;






//功能2:
//页面加载完成后，异请求页头和页尾
$(function(){
  $("#site_header").load("data/header.php",function(){
      $("#welcome").html('欢迎回来:'+loginUname);
  });
  $("#site_footer").load("data/footer.php");
});
//功能3：
//页面加载完成后，异步请求当前登录
//用户的购物车中的商品
$.ajax({
  type:"POST",
  url:"data/cart_detail_list.php",
  data:{uid:loginUid},
  success:function(data){
    //接收数据
    var html = '';
    for(var i=0;i<data.length;i++){
        var p = data[i];
        html += `;
                <tr>
                    <td>
                        <input type="checkbox"/>
                        <input type="hidden" value="1" />
                        <div><img src="${p.pic}" alt=""/></div>
                    </td>
                    <td><a href="">${p.pname}</a></td>
                    <td>${p.price}</td>
                    <td>
                        <button>-</button><input type="text" value="${p.count}"/><button>+</button>
                    </td>
                    <td><span>${p.price*p.count}</span></td>
                    <td><a href="${p.did}">删除</a></td>
                </tr>     

    
        `;
    }
     $("#cart tbody").html(html);
  }
});


