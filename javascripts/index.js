'use strict'

const getTiming = require('./timing')
const post = require('./post')
const getPosition = require('./position')
const getNav = require('./nav')
const getNetwork = require('./network')
const getLastImgTiming = require('./resource_timing/last_img_timing')
const getAjaxTiming = require('./resource_timing/ajax_timing.js')

document.addEventListener('DOMContentLoaded', () => {
  post({hello: 'world!'})
})

window.onload = () => {
  const ua = navigator.userAgent
  const timing = getTiming()
  const url = window.location.href
  const ref = document.referrer
  const nav = getNav()
  const lang = navigator.language
  const resolution = {width: screen.width, height: screen.height}
  const network = getNetwork()
  const resourceTiming = performance.getEntriesByType('resource')

  const lastImgTiming = getLastImgTiming(resourceTiming)
  const ajaxTiming = getAjaxTiming(resourceTiming)

  let data = { ua, timing, url, nav, lang, resolution, network,
    lastImgTiming, ajaxTiming, ref}

  navigator.geolocation.getCurrentPosition((postion) => {
    const ps = getPosition(postion)
    post(Object.assign(data, {ps}))
  }, () => {
    post(data)
  })
}
