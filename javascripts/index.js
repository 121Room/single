'use strict'

const getTiming = require('./timing')
const post = require('./post')
const getPosition = require('./position')
const getNav = require('./nav')
const getNetwork = require('./network')
const getResourceTimingData = require('./resource_timing/resource_timing')
const getLastImgTiming = require('./resource_timing/last_img_timing')

window.onload = () => {
  const ua = navigator.userAgent
  const timing = getTiming()
  const url = window.location.href
  const nav = getNav()
  const lang = navigator.language
  const resolution = {width: screen.width, height: screen.height}
  const network = getNetwork()
  const resourceTiming = performance.getEntriesByType('resource')

  const lastImgTiming = getLastImgTiming(resourceTiming)

  let lastImgTimingData
  if (lastImgTiming !== undefined) {
    lastImgTimingData = getResourceTimingData(lastImgTiming)
  }


  let data = { ua, timing, url, nav, lang, resolution, network, lastImgTimingData }

  navigator.geolocation.getCurrentPosition((postion) => {
    const ps = getPosition(postion)
    post(Object.assign(data, {ps}))
  }, () => {
    post(data)
  })
}
