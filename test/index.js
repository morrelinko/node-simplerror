'use strict'

const should = require('should')
const SimplError = require('../')
const funcs = require('./funcs')

describe('simplerror', function () {
  it('instance', function () {
    try {
      funcs.throwError()
    } catch(e) {
      should(e.message).eql('unexpected error')
      should(e.code).eql('UNEXP_ERR')
    }
  })
})
