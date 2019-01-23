package com.tarena.demo06_2048;

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
        
//        创建一个WebView类对应的对象
        WebView wv = new WebView(getApplicationContext());
//        设置wv，允许执行js
        wv.getSettings().setJavaScriptEnabled(true);

        //查看控制台的日志输出
        wv.setWebChromeClient(new WebChromeClient(){
        	@Override
        	public boolean onConsoleMessage(ConsoleMessage consoleMessage) {
        		// TODO Auto-generated method stub
        		return super.onConsoleMessage(consoleMessage);
        	}
        });
        
//        设置wv载入的url
        wv.loadUrl("file:///android_asset/2048.html");
//        将wv设置为要去显示的内容视图
        setContentView(wv);
    }


    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.main, menu);
        return true;
    }
    
}
