+function(){
	//找到name为username的input，绑定获得焦点事件
	var txtName=document.getElementsByName("username")[0];
		//找到name为pwd的input，绑定获得焦点事件
	var txtPwd=document.getElementsByName("pwd")[0]
		txtName.onfocus=txtPwd.onfocus=getFocus;
	function getFocus(){
		var txt=this;
		//为TXT穿txt_focus
		this.className="txt_focus";
		//找到txt旁边的div，清除class
		this.parentNode.nextElementSibling.firstElementChild
			.className="";
	}
	//为txtName绑定失去焦点事件
	txtName.onblur=function(){
		vali(this,/^\w{1,10}$/);//调动vali
	}
	function vali(txt,reg){
		txt.className="";//清除当前文本狂的class
		//找到txt旁边的div
		var div=txt.parentNode.nextElementSibling
			.firstElementChild;
		//用正则验证txt的内容，通过
		if(reg.test(txt.value))
			//为div穿
			div.className="vali_success";
		else
			div.className="vali_fail";
  }
	//为txtPwd绑定焦点事件
	txtPwd.onblur=function(){
		vali(this,/^\d{6}$/);
	}
	//为表单绑定submit事件处理函数
	document.getElementById("form1")
		      .addEventListener("submit",mySubmit);
	function mySubmit(e){//this->form
		//调用vali方法验证姓名文本框
		var rName=vali(this.username,/^\w{1,10}$/);
		//调用vali方法验证密码文本框
		var rPwd=vali(this.pwd,/^\d{6}$/);
		//如果rName和rPwd不都是true
		if(!(rName&&rPwd))
			e.preventDefault();//就取消提交
	}

}();
