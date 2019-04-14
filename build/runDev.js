import Express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import baseConfig from './webpackConfigBase'

baseConfig.mode = 'development'
baseConfig.entry.app.push('webpack-hot-middleware/client')
baseConfig.plugins.push(new webpack.HotModuleReplacementPlugin())


const app = Express()
const compiler = webpack(baseConfig)

// 告诉 express 使用 webpack-dev-middleware，
// 以及将 webpack.config.js 配置文件作为基础配置
app.use(webpackDevMiddleware(compiler, {
    publicPath: baseConfig.output.publicPath,
}))

app.use(webpackHotMiddleware(compiler))

// 将文件 serve 到 port 3000。
app.listen(3000, function () {
    console.log('Example app listening on port 3000!\n');
})
