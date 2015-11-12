'use strict'

// https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigation

module.exports = () => {
  const nav = performance.navigation

  let api = Object.create(null)
  api.type = nav.type
  api.redirectCount = nav.redirectCount
  
  return api
}
