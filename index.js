'use strict'

module.exports = {
  errors: {
    CompilationError: require('./lib/errors/compilation.error'),
    DestNotFoundError: require('./lib/errors/dest-not-found.error'),
    SrcNotFoundError: require('./lib/errors/src-not-found.error')
  },
  fileAge: require('./lib/file-age.service'),
  onBoom: require('./lib/on-boom/on-boom'),
  ZoolLogger: require('./lib/zool-logger/zool-logger')
}
