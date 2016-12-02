'use strict'

module.exports = class SimplError extends Error {
  constructor (opts) {
    super()
    opts = opts || {}
    Error.captureStackTrace(this, this.constructor)
    this.name = 'SimplError'
    this.status = opts.status || 500
    this.code = opts.code || ''
    this.message = opts.message || ''
    this.help = opts.help || ''
  }
}
