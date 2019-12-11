const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias
} = require('customize-cra')
const path = require('path')
module.exports = override(
  //按需加载antd
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#437aff' }
  }),
  //别名配置
  addWebpackAlias({
    '@': path.resolve(__dirname, './src'),
    '@views': path.resolve(__dirname, './src/views'),
    '@components': path.resolve(__dirname, './src/components')
  })
)