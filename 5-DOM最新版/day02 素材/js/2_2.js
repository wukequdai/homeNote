+function(){
	//查找id 为sel和unsel的元素
	//查找所有button
	var sel=document.getElementById("sel");
	var unsel=document.getElementById("unsel");
	//定义两个数组分别保存对应sel的国家列表
	var selCts=[];
	var unselCts=
		unsel.innerHTML
				 .replace(/^\s*<option>|<\/option>\s*$/g,"")
				 .split(/<\/option>\s*<option>/)
	console.log(unselCts);
	var btns=document.getElementsByTagName("button");
	for(var i=0,len=btns.length;i<len;i++){
		btns[i].onclick=move;
	}
	function move(){
		switch(this.innerHTML){
			case "&gt;&gt;":
				//将unselCts拼接到selCts后
				selCts=selCts.concat(unselCts);
				unselCts=[];
				selCts.sort();
				break;
			case "&lt;&lt;":
				unselCts=unselCts.concat(selCts);
				selCts=[];
				unselCts.sort();
				break;
			/*case "&gt;":
				var opts=unsel.children;
			for(var i=opts.length-1;i>=0;i--){
				if(opts[i].selected)
					selCts.push(unselCts.splice(i,1)[0]);
			}
			selCts.sort();
				break;
			case "&lt;":*/
			case "&gt;":
				//获得unsel下所有option
				var opts=unsel.children;
				//反向遍历每个option
				for(var i=opts.length-1;i>=0;i--){
					//如果当前option被选中
					if(opts[i].selected)
						//删除unselCts中i位置的元素，压入selCts中
						selCts.push(unselCts.splice(i,1)[0]);
				}
				selCts.sort();//对selCts排序
				break;
			case "&lt;":
				//获得sel下所有option
				var opts=sel.children;
				//反向遍历每个option
				for(var i=opts.length-1;i>=0;i--){
					//如果当前option被选中
					if(opts[i].selected)
						//删除unselCts中i位置的元素，压入selCts中
						unselCts.push(selCts.splice(i,1)[0]);
				}
				unselCts.sort();//对selCts排序
		}
			updateSel(unsel,unselCts);//更新unsel元素
			updateSel(sel,selCts);//更新sel元素
	}
	function updateSel(select,cts){
		select.innerHTML=cts.length!=0?"<option>"+
			cts.join("</option><option>")+"</option>":"";
	}
}();