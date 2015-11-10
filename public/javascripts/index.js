'use strict'

let fib = require('fibonacci-perf')
let timing = require('timing_commonjs')


document.addEventListener('DOMContentLoaded', () => console.log(fib(41)))

window.onload = () => {
  let request = new XMLHttpRequest()
  request.open('POST', 'http://localhost:4567/report', true)
  request.setRequestHeader('Content-Type', 'application/json charset=UTF-8')
  let data = timing()
  request.send(JSON.stringify(data))
  console.log(data)
}
