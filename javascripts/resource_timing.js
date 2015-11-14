'use strict'

// 提取 Resource Timing API 里有用的东西
// http://www.w3.org/TR/resource-timing

// 参数为 PerformanceResourceTiming 对象
module.exports = function(resourceTiming) {
  let api = Object.create(null)

  for (let k in resourceTiming) {
    if (k !== 'toJSON') {
      api[k] = resourceTiming[k]
    }
  }

  api.loadTime = api.responseEnd - api.startTime

  return api
}
