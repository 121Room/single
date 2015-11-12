'use strict'

// https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigation

module.exports = () => {
  let api = Object.create(null)
  const nav = performance.navigation
  for (let prop in nav) {
    if ((prop === 'type') || (prop === 'redirectCount')) {
      api[prop] = nav[prop]
    }
  }

  return api
}
