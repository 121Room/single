'use strict'

let fib = require('fibonacci-perf')
let timing = require('timing_commonjs')


document.addEventListener('DOMContentLoaded', () => console.log(fib(41)))

window.onload = () => {
  console.log(timing()) // TODO post to backend
}
