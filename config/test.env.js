var merge = require('webpack-merge')
var devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  uploadHost: '"http://39.106.101.68:8765/"',

  clientHost: '"http://39.106.101.68:8765/"',
  adminHost: '"http://39.106.101.68:8763/"'
})
