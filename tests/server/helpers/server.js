const agent = require('supertest').agent
const app = require('../../../app')
const http = require('http')

module.exports = function createServer() {
  const server = app.callback()
  return agent(http.createServer(server))
}
