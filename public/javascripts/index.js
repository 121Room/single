'use strict'

const getTiming = require('timing_commonjs')
const post = require('./post')

window.onload = () => {
  const ua = navigator.userAgent
  const timing = getTiming()
  const url = window.location.href

  post({ua, timing, url})
}
