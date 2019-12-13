const { override, fixBabelImports, addWebpackAlias } = require('customize-cra')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, '.', dir)
}
module.exports = override(
  //按需加载antd
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  }),
  //别名配置
  addWebpackAlias({
    '@': resolve('src'),
    '@views': resolve('src/views'),
    '@comp': resolve('src/components')
  })
)
