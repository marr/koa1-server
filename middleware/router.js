const Router = require('koa-router')
const router = new Router()

router.get('/', function () {
  this.body = 'home'
})

module.exports = router
