'use strict'

let t1 = performance.timing.navigationStart

let t2 = performance.now()

console.log(`t1: ${t1}`)
console.log(`t2: ${t2}`)
console.log(`t2 - t1: ${t2 - t1}`)
