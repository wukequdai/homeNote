package com.tarena.demo05_callandroid;

import android.content.Context;
import android.webkit.JavascriptInterface;
import android.widget.Toast;

public class WebInterface {
	Context mContext;

	//���캯�������캯�����Ʊ�����������һ��
	WebInterface(Context c){
		mContext = c;
	}
	
	//����һ���ӿ�,�ӿ����ṩ��һ��showToast�ķ���
	@JavascriptInterface
	public void showToast(String content){
		Toast.makeText(mContext, 
				content, Toast.LENGTH_LONG).show();
	}
}






