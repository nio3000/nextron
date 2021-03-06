const withTypeScript = require('@zeit/next-typescript')
const withLess = require('@zeit/next-less')
const { detectExportPathMap } = require('nextron')

module.exports = withTypeScript(withLess({
  webpack: (config) => {
    config.target = 'electron-renderer'
    return config
  },
  exportPathMap: detectExportPathMap
}))
