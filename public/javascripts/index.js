'use strict'


const getTiming = require('timing_commonjs')
const post = require('./post')
const getLocation = require('./getLocation')
const getNav = require('./nav')

window.onload = () => {
  const ua = navigator.userAgent
  const timing = getTiming()
  const url = window.location.href
  const nav = getNav()
  const location = getLocation()
  const timer = setInterval(function () {
    if (location.latitude) {
      post({ua, timing, url, location, nav})
      clearInterval(timer)
    } else if (location.error) {
      post({ua, timing, url, nav})
      clearInterval(timer)
    }
  }, 200)
}
