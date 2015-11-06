'use strict'

let hello = require('./hello')
let timing = require('timing_commonjs')

hello()

window.onload = () => {
  window.timing = timing()
  console.log(window.timing)
}
