'use strict'

const getTiming = require('timing_commonjs')
const post = require('./post')
const getPostion = require('./getPostion')
const getNav = require('./nav')

window.onload = () => {
  const ua = navigator.userAgent
  const timing = getTiming()
  const url = window.location.href
  const nav = getNav()

  navigator.geolocation.getCurrentPosition((postion) => {
    const ps = getPostion(postion)
    post({ua, timing, url, nav, ps})
  }, () => {
    post({ua, timing, url, nav})
  })
}
