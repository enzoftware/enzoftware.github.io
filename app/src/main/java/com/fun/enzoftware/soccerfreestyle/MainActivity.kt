package com.`fun`.enzoftware.soccerfreestyle

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {
    var counterKicks = 0
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        ball.setOnClickListener {
            counterKicks++
            counter.text = counterKicks.toString()
        }
    }
}
