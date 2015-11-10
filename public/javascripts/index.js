'use strict'

let fib = require('fibonacci-perf')
let timing = require('timing_commonjs')


document.addEventListener('DOMContentLoaded', () => console.log(fib(41)))

window.onload = () => {
  let request = new XMLHttpRequest()
  request.open('POST', 'http://localhost:4567/report', true)
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded charset=UTF-8')
  let data = timing()
  request.send(data)
  console.log(data)
}
