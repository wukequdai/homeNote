package com.example.demo07_2048_server;

import android.os.Bundle;
import android.app.Activity;
import android.view.Menu;
import android.webkit.WebView;

public class MainActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        WebView wv = new WebView(getApplicationContext());
        
        wv.getSettings().setJavaScriptEnabled(true);
        
        wv.loadUrl("http://172.163.100.222/chaptor4/zepto/day2/2048.html");        
        
        setContentView(wv);
    }


    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.main, menu);
        return true;
    }
    
}
