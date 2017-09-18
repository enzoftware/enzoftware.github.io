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
    var handler: Handler ?= null
    internal var flag:Boolean = false

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        bindViews()


    }

    private fun bindViews() {

        ball.setOnClickListener {
            if (flag){
                handler?.removeCallbacks(runnable)
                Toast.makeText(this,"hola",Toast.LENGTH_SHORT).show()
                flag=false
            }else{
                Toast.makeText(this,"bye",Toast.LENGTH_SHORT).show()
                handler?.postDelayed(runnable, 0)
                flag=true
            }

        }

        handler = Handler()

    }

    fun Random.nextInt(range: IntRange): Int {
        return range.start + nextInt(range.last - range.start)
    }

    var runnable: Runnable = object : Runnable {

        override fun run() {

            var random:Int = Random().nextInt(1..10)
            if (random < 2) {
                counter.text = random.toString()
            } else {
                counter.text = random.toString()
            }
            handler?.postDelayed(this, 0)
        }

    }



}
