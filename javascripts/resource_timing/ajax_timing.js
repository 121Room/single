'use strict'

// 获取 ajax 的性能信息

const getResourceTimingData = require('./resource_timing')

module.exports = (resourceTiming) => {
  const ajaxTimingData = resourceTiming.filter(r => (r.initiatorType === 'xmlhttprequest'))

  if (ajaxTimingData.length === 0) {return}

  return ajaxTimingData.map(r => getResourceTimingData(r))
}
