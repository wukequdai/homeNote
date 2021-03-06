package com.tarena.demo03;

import android.os.Bundle;
import android.app.Activity;
import android.view.Menu;
import android.webkit.ConsoleMessage;
import android.webkit.WebChromeClient;
import android.webkit.WebView;

public class MainActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //实例化
        WebView wv = new WebView(getApplicationContext());
        
        //设置允许执行js
        wv.getSettings().setJavaScriptEnabled(true);
        
        //查看日志信息
        wv.setWebChromeClient(new WebChromeClient(){
        	@Override
        	public boolean onConsoleMessage(ConsoleMessage consoleMessage) {
        		// TODO Auto-generated method stub
        		return super.onConsoleMessage(consoleMessage);
        	}
        });
        
        
        //载入指定的网页
        wv.loadUrl("file:///android_asset/demo02_js.html");
        //设置显示的组件
        setContentView(wv);
    }


    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.main, menu);
        return true;
    }
    
}
