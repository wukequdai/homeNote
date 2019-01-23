package com.tarena.demo05_callandroid;

import android.os.Bundle;
import android.app.Activity;
import android.view.Menu;
import android.webkit.WebView;

public class MainActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //实例化webView
        WebView wv = new WebView(getApplicationContext());
        //允许执行js
        wv.getSettings().setJavaScriptEnabled(true);
        //给wv添加一些java提供的接口
        wv.addJavascriptInterface(
        		new WebInterface(this),
        		"android");
        //指定载入的页面地址
        wv.loadUrl(
     "file:///android_asset/demo03_call.html");
        
        //设置wv为内容视图
        setContentView(wv);
    }


    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.main, menu);
        return true;
    }
    
}
