'use strict'

let hello = require('./hello')
let timing = require('timing_commonjs')

hello()
window.onload = () => {
  setTimeout(function () {
    window.timing = timing()
    console.log(window.timing)
  }, 5000)
}
