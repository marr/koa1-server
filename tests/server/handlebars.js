const createServer = require('./helpers/server')
const test = require('tap').test
const request = createServer()

test('handlebars can use generator functions', assert => {
  request.get('/')
    .expect(response => {
      assert.equal(response.status, 200)
      assert.equal(response.body, 'home')
    }).end(assert.end)
})
