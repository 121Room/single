'use strict'

const resourceLoadTime = (r) => (r.responseEnd - r.startTime)

// 获取最后加载的一张图片的信息

module.exports = (resourceTiming) => {
  const imgTimingData = resourceTiming.filter((r) => {
    return (r.initiatorType === 'img')
  })

  if (imgTimingData.length === 0) {
    return
  }


  const lastImgTiming = imgTimingData.reduce((prev, current) => {
    if (resourceLoadTime(prev) < resourceLoadTime(current)) {
      return current
    } else {
      return prev
    }
  })

  return lastImgTiming
}
