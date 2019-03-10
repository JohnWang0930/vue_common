import Express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import baseConfig from './webpackConfigBase'

const app = Express()
const compiler = webpack(Object.assign(baseConfig, {
    mode: 'development'
}))

// 告诉 express 使用 webpack-dev-middleware，
// 以及将 webpack.config.js 配置文件作为基础配置
app.use(webpackDevMiddleware(compiler, {
    publicPath: baseConfig.output.publicPath,
}))

// 将文件 serve 到 port 3000。
app.listen(3000, function () {
    console.log('Example app listening on port 3000!\n');
})
