'use strict'

const SimplError = require('../')

exports.throwError = function throwError () {
  throw new SimplError({
    message: 'unexpected error',
    code: 'UNEXP_ERR'
  })
}