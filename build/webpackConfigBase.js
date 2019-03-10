import path from 'path'
import VueLoaderPlugin from 'vue-loader/lib/plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

function resolve(dir) {
    //拼接出绝对路径
    return path.join(__dirname, '..', dir)
}

export default {
    //path.join将路径片段进行拼接，而path.resolve将以/开始的路径片段作为根目录，在此之前的路径将会被丢弃
    //path.join('/a', '/b') // 'a/b',path.resolve('/a', '/b') // '/b'
    context: path.resolve(__dirname, '../'),
    //配置入口，默认为单页面所以只有app一个入口
    entry: {
        app: resolve('src/main.js')
    },
    //配置出口，默认是/dist作为目标文件夹的路径
    output: {
        path: resolve('dist'),
        filename: '[name].js',//文件名
        publicPath: '/' // TODO 根据开发、生产环境配置
    },
    resolve: {
        //自动的扩展后缀，比如一个js文件，则引用时书写可不要写.js
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 添加编译器 TODO 生产环境不需要
        }
    },
    //使用插件配置相应文件的处理方法
    module: {
        rules: [
            //使用vue-loader将vue文件转化成js的模块①
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            //js文件需要通过babel-loader进行编译成es5文件以及压缩等操作②
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src')]
            },
            // 普通的 `.scss` 文件和 `*.vue` 文件中的
            // `<style lang="scss">` 块都应用它
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            //图片、音像、字体都使用url-loader进行处理，超过10000会编译成base64③
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: resolve('index.html'),
            favicon: resolve('favicon.ico')
        })
    ],
}