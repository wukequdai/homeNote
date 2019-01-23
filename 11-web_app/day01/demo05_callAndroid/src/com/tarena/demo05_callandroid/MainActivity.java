package com.tarena.demo05_callandroid;

import android.os.Bundle;
import android.app.Activity;
import android.view.Menu;
import android.webkit.WebView;

public class MainActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //ʵ����webView
        WebView wv = new WebView(getApplicationContext());
        //����ִ��js
        wv.getSettings().setJavaScriptEnabled(true);
        //��wv����һЩjava�ṩ�Ľӿ�
        wv.addJavascriptInterface(
        		new WebInterface(this),
        		"android");
        //ָ�������ҳ���ַ
        wv.loadUrl(
     "file:///android_asset/demo03_call.html");
        
        //����wvΪ������ͼ
        setContentView(wv);
    }


    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.main, menu);
        return true;
    }
    
}