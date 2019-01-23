+function(){
	var chbAll=document.querySelector("table>thead input");
	var chbs=document.querySelectorAll("table>tbody input");
	chbAll.onclick=function(){
		for(var i=0;i<chbs.length;i++){
			chbs[i].checked=chbAll.checked;
		}
	}
	//遍历chbs中每个chb，绑定单击事件为check
	for(var i=0;i<chbs.length;i++){
		chbs[i].onclick=check;
	}
	function check(){
		//查找table下tbody下所有input中未选中的chb
		var unchecked=document.querySelector(
		"table>tbody input:not(:checked)"	
		);
		if(unchecked)//如果找到
			chbAll.checked=false;//就设置chbAll取消选中
		else//否则
			chbAll.checked=true;//就设置chbAll选中
	}
}();