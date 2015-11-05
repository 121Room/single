'use strict'

let request = require('supertest')
let expect = require('chai').expect
let assert = require('chai').assert

let app = require('../app')

describe('get /', function() {
  it('should success', function(done) {
    request(app)
      .get('/')
      .expect(200)
      .end(done)
  })
})
