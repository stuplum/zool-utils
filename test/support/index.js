'use strict'

const chai = require('chai')
const sinonChai = require('sinon-chai')
const {Workspace} = require('zool-test-support')

async function thrown (fn) {
  try {
    await fn()
  } catch (ex) {
    return ex.constructor
  }

  throw new Error('Expected function to throw an error but no error was thrown')
}

chai.use(sinonChai)

module.exports = {
  expect: chai.expect,
  Workspace,
  thrown
}
