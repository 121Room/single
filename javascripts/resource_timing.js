'use strict'

let resourceLoadTime = (r) => (r.responseEnd - r.startTime)

// 首屏时间
// https://en.wikipedia.org/wiki/Above_the_fold
// 如果首页有图片，返回最后一个图片加载完的时间
// 如果首页没有图片，返回 undefined

exports.lastImgTiming = (resourceTiming) => {
  let imgTimingData = resourceTiming.filter((r) => {
    return (r.initiatorType === 'img')
  })

  if (imgTimingData.length === 0) {
    return
  }


  let lastImgTiming = imgTimingData.reduce((prev, current) => {
    if (resourceLoadTime(prev) < resourceLoadTime(current)) {
      return current
    } else {
      return prev
    }
  })

  return lastImgTiming
}
