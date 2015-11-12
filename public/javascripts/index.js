'use strict'


const getTiming = require('timing_commonjs')
const post = require('./post')
const getLocation = require('./getLocation')

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
}
