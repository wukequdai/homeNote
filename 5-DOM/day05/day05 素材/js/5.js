function getFocus(txt){
	txt.className="txt_focus";
	txt.parentNode //td
		.parentNode //tr
		.querySelector("div")
			.className="";
}
function valiName(txt){
	txt.className="";
	var div=txt.parentNode //td
				.parentNode //tr
				.querySelector("div");
	if(/^\w{1,10}$/.test(txt.value)){
		div.className="vali_success";
		return true;
	}else{//否则
		div.className="vali_fail";
		return false;
	}
}
function valiPwd(txt){
	txt.className="";
	var div=txt.parentNode //td
				.parentNode //tr
				.querySelector("div");
	if(/^\d{6}$/.test(txt.value)){
		div.className="vali_success";
		return true;
	}else{//否则
		div.className="vali_fail";
		return false;
	}
}