package com.`fun`.enzoftware.soccerfreestyle

import android.app.Application
import android.os.SystemClock

/**
 * Created by enzoftware on 9/18/17.
 */

class MyClock : Application() {
    override fun onCreate() {
        super.onCreate()
        SystemClock.sleep(2000)
    }
}
