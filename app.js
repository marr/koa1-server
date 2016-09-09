const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const handlebars = require('koa-handlebars')
const router = require('./middleware/router')

const app = new Koa()
app.use(bodyParser())
app.use(handlebars())
app.use(router.routes())

module.exports = app
