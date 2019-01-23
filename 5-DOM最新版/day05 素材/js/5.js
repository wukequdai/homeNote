function getFocus(txt){
	txt.className="txt_focus";
	txt.parentNode //td
		.parentNode //tr
		.querySelector("div")
			.className="";
}
function valiName(txt){
	return vali(txt,/^\w{1,10}$/);
}
function vali(txt,reg){
  txt.className="";
	var div=txt.parentNode //td
				.parentNode //tr
				.querySelector("div");
	if(reg.test(txt.value)){
		div.className="vali_success";
		return true;
	}else{//否则
		div.className="vali_fail";
		return false;
	}
}
function valiPwd(txt){
	vali(txt,/^\d{6}$/);
}