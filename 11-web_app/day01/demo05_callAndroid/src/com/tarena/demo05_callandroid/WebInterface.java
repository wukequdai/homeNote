package com.tarena.demo05_callandroid;

import android.content.Context;
import android.webkit.JavascriptInterface;
import android.widget.Toast;

public class WebInterface {
	Context mContext;

	//构造函数，构造函数名称必须和类的名称一致
	WebInterface(Context c){
		mContext = c;
	}
	
	//创建一个接口,接口中提供了一个showToast的方法
	@JavascriptInterface
	public void showToast(String content){
		Toast.makeText(mContext, 
				content, Toast.LENGTH_LONG).show();
	}
}






