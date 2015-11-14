/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	const getTiming = __webpack_require__(1)
	const post = __webpack_require__(2)
	const getPosition = __webpack_require__(3)
	const getNav = __webpack_require__(4)
	const getNetwork = __webpack_require__(5)

	window.onload = () => {
	  const ua = navigator.userAgent
	  const timing = getTiming()
	  const url = window.location.href
	  const nav = getNav()
	  const lang = navigator.language
	  const resolution = {width: screen.width, height: screen.height}
	  const network = getNetwork()

	  let data = { ua, timing, url, nav, lang, resolution, network }

	  navigator.geolocation.getCurrentPosition((postion) => {
	    const ps = getPosition(postion)
	    post(Object.assign(data, {ps}))
	  }, () => {
	    post(data)
	  })
	}


/***/ },
/* 1 */
/***/ function(module, exports) {

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


/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict'

	// ajax post 的简单包装

	module.exports = (data) => {
	  let request = new XMLHttpRequest()
	  request.open('POST', 'http://localhost:4567/report', true)
	  request.setRequestHeader('Content-Type', 'application/json')
	  request.send(JSON.stringify(data))
	}


/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * Created by lvdada on 15/11/12.
	 */

	// 用户的经度和纬度
	// https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation

	'use strict'

	module.exports  = (postion) => {
	  const crd = postion.coords

	  const latitude = crd.latitude
	  const longitude = crd.longitude

	  return {latitude, longitude}
	}


/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict'

	// 用户是如何访问到网页的，以及 redirect 次数
	// https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigation

	module.exports = () => {
	  const nav = performance.navigation

	  let api = Object.create(null)
	  api.type = nav.type
	  api.redirectCount = nav.redirectCount

	  return api
	}


/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict'

	// 网络连接情况，只在一些移动浏览器内才能用
	// https://developer.mozilla.org/en-US/docs/Web/API/navigator/connection

	module.exports = () => {
	  const connection = navigator.connection
	  let network

	  if (connection !== undefined) {
	    network = {type: connection.type, speed: connection.downlinkMax}
	  }

	  return network
	}


/***/ }
/******/ ]);