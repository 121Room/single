'use strict'


const getTiming = require('timing_commonjs')
const post = require('./post')
const getLocation = require('./getLocation')
const getNav = require('./nav')

window.onload = () => {
  const ua = navigator.userAgent
  const timing = getTiming()
  const url = window.location.href
  let location = getLocation()
  let timer = setInterval(function () {
    if (location.latitude) {
      post({ua, timing, url, location})
      clearInterval(timer)
    }
  }, 200)
  const nav = getNav()

  post({ua, timing, url, nav, location})
}
