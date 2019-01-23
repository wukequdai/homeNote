/**功能点1：检查当前用户是否登录，未登录则跳转回登录页**/
if(!sessionStorage['LoginUid']){
  location.href="productlist.html";
}

/**功能点2：异步请求页头和页尾**/
$('#header').load('data/header.php',function(){
  $('#welcome').html('欢迎回来：'+sessionStorage['LoginUname']);
});
$('#footer').load('data/footer.php');

/**功能点3：异步请求当前登录用户的购物车信息**/
$.ajax({
  url: 'data/6_cart_detail_list.php',
  data: {uid: sessionStorage['LoginUid']},
  success: function(list){
    console.log('请求购物车详情成功')
    console.log(list);
    var html = '';
    //for
    $('.goods-items').html(html);
  },
  error: function(){
    alert('请求购物车详情失败！')
  }
});




