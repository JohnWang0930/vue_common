import webpack from 'webpack'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import baseConfig from './webpackConfigBase'

baseConfig.mode = 'production'
baseConfig.plugins.push(new CleanWebpackPlugin())

webpack(baseConfig, (err, stats) => {
    if (err || stats.hasErrors()) {
        console.log('出现错误\n', err)
    }
    console.log('打包完成')
})
