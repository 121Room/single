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
  const lang = navigator.language
  const resolution = {width: screen.width, height: screen.height}

  let data = {ua, timing, url, nav, lang, resolution}

  navigator.geolocation.getCurrentPosition((postion) => {
    const ps = getPostion(postion)
    post(Object.assign(data, {ps}))
  }, () => {
    post(data)
  })
}
