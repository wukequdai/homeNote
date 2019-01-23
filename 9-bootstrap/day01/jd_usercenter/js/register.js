$('#bt-submit').click(function(){
  //var n = $('#uname').val();
  //var p = $('#upwd').val();

  //表单序列化 - 把选中表单中所有的带name属性的值串联起来，组成k=v&k=v形式，直接用于HTTP请求消息
  var data = $('#form-register').serialize();
  $.ajax({
    type: 'POST',
    url: 'data/8_register.php',
    data: data,
    success: function(obj){
      if(obj.code === 200){
        alert('新用户注册成功！3s自动跳转到登录页');
        location.href = 'productlist.html';
      }else {
        alert('新用户注册失败！错误消息：'+obj.msg);
      }
    },
    error: function(){
      alert('异步请求失败！')
    }
  });
})