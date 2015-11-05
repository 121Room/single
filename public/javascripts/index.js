'use strict'

let hello = require('./hello')

// TODO run in phantomjs

// The Navigation Timing API
// https://developer.mozilla.org/en-US/docs/Web/API/Navigation_timing_API
let navEvents = [
  'navigationStart',
  'unloadEventStart',
  'unloadEventEnd',
  'redirectStart',
  'redirectEnd',
  'fetchStart',
  'domainLookupStart',
  'domainLookupEnd',
  'connectStart',
  'connectEnd',
  'secureConnectionStart',
  'requestStart',
  'responseStart',
  'responseEnd',
  'domLoading',
  'domInteractive',
  'domContentLoadedEventStart',
  'domContentLoadedEventEnd',
  'domComplete',
  'loadEventStart',
  'loadEventEnd']

let time = performance.timing
let perfData = Object.create(null)

navEvents.forEach((e)=>{
  perfData[e] = time[e]
})

for (let prop in perfData) {
  //TODO post to backend, save to database and show it
  console.log(`${prop}: ${perfData[prop]}`)
}

hello()
