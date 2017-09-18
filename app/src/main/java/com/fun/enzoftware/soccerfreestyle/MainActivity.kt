package com.`fun`.enzoftware.soccerfreestyle

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.os.Handler
import android.view.animation.TranslateAnimation
import android.widget.Toast
import kotlinx.android.synthetic.main.activity_main.*
import java.util.*

class MainActivity : AppCompatActivity() {
    var counterKicks = 0
    var incrementer = 1
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)


            ball.setOnClickListener {
            counterKicks++
            counter.text = counterKicks.toString()
            val animation = TranslateAnimation(0.0f, 0.0f, 0.0f, -750.0f)
            animation.duration = 700
            animation.repeatCount = 1
            animation.repeatMode = 2
            animation.fillAfter = true
            ball.startAnimation(animation)
        }
    }



}
