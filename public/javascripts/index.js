'use strict'

let hello = require('./hello')
//let timing = require('timing_commonjs')
let timing = require('./ownTiming.js')

hello()
window.onload = () => {
  let timingIndex = 0
  let timerTiming = setInterval(function () {
    timingIndex += 300
    if (timing().loadTime > 0) {
      clearInterval(timerTiming)
      let oTimingResult = {}
      oTimingResult.loadTime = timing().loadTime
      oTimingResult.interactingTime = timing().interactingTime
      oTimingResult.initDomTreeTime = timing().initDomTreeTime
      oTimingResult.ttfb = timing().ttfb
      oTimingResult.loadEventTime = timing().loadEventTime
      oTimingResult.firstPaintTime = timing().firstPaintTime
      window.timing = oTimingResult
      console.log('load '+timingIndex+' 毫秒后可以调用Timg API')
      console.log(JSON.stringify(window.timing))
      console.log('==页面总加载时间==')
      console.log(oTimingResult.loadTime)
      console.log('==白屏时间 (页面开始有东西呈现)==')
      console.log(oTimingResult.firstPaintTime)
      console.log('==页面可交互时间==')
      console.log(oTimingResult.interactingTime)
      console.log('==DOM tree 构建时间 (可判别js是否阻塞)==')
      console.log(oTimingResult.initDomTreeTime)
      console.log('==首字节时间==')
      console.log(oTimingResult.ttfb)
      console.log('==load回调内绑定事件的时间==')
      console.log(oTimingResult.loadEventTime)
    }
  }, 300)
}
