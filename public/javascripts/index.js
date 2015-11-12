'use strict'

const getTiming = require('timing_commonjs')
const post = require('./post')
const getNav = require('./nav')

window.onload = () => {
  const ua = navigator.userAgent
  const timing = getTiming()
  const url = window.location.href
  const nav = getNav()

  post({ua, timing, url, nav})
}
