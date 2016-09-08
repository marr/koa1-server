const Koa = require('koa')
const http = require('http')
const agent = require('supertest').agent
const handlebars = require('koa-handlebars')
const router = require('./router')

const app = new Koa()
app.use(handlebars())
app.use(router.routes())

module.exports = function createServer() {
  const server = app.callback()
  return agent(http.createServer(server))
}
