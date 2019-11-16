const path = require('path')
function resolve(relatedPath) {
  return path.join(__dirname, relatedPath)
}
const webpackConfigBase = {
  resolve: {
    alias: {
      '@': path.join(__dirname, './src')
    }
  }
}
module.exports = webpackConfigBase
