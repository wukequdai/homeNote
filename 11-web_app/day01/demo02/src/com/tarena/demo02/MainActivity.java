package com.tarena.demo02;

import android.os.Bundle;
import android.app.Activity;
import android.view.Menu;
import android.webkit.WebView;


public class MainActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
        //����һ��WebViewʵ�� (alt + /)
        WebView wv = new WebView(getApplicationContext());
        
        //����ָ������ҳ
        wv.loadUrl("file:///android_asset/demo01.html");
        
        //����Ҫ��ʾ������
        setContentView(wv);
        
    }


    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.main, menu);
        return true;
    }
    
}