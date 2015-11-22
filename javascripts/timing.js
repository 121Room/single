// Navigation Timing API
// https://developer.mozilla.org/en-US/docs/Web/API/Navigation_timing_API

module.exports = function() {
  if (window.performance === undefined) {
    return
  }

  const timing = performance.timing
  let api = Object.create(null)

  for (let k in timing) {
    if (k !== 'toJSON') {
      api[k] = timing[k]
    }
  }

  if (api.firstPaint === undefined) {
    var firstPaint = 0

     // Chrome
    if (window.chrome && window.chrome.loadTimes) {
      // Convert to ms
      firstPaint = window.chrome.loadTimes().firstPaintTime * 1000
      api.firstPaintTime = firstPaint - (window.chrome.loadTimes().startLoadTime*1000)
    } else if (typeof window.performance.timing.msFirstPaint === 'number') {
        // IE
      firstPaint = window.performance.timing.msFirstPaint
      api.firstPaintTime = firstPaint - window.performance.timing.navigationStart
    }
  }

  return api
}
