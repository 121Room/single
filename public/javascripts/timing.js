'use strict'

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

  return api
}
