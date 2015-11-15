'use strict'

const resourceLoadTime = require('./resource_load_time')

// 获取最后加载的一张图片的信息

module.exports = (resourceTiming) => {
  const imgTimingData = resourceTiming.filter(r => (r.initiatorType === 'img'))

  if (imgTimingData.length === 0) {return}

  const lastImgTiming = imgTimingData.reduce((prev, current) => {
    if (resourceLoadTime(prev) < resourceLoadTime(current)) {
      return current
    } else {
      return prev
    }
  })

  return lastImgTiming
}
