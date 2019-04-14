const map = {
    development: {
        publicPath: '/',
        devtool: 'eval-source-map',

    },
    test: {
        publicPath: 'https://baidu-test.com',
        devtool: 'eval-source-map',
    },
    pre: {
        publicPath: 'https://baidu-pre.com',
        devtool: 'nosources-source-map',
    },
    online: {
        publicPath: 'https://baidu.com',
        devtool: 'nosources-source-map',
    }
}
const env = process.env.ENV

export default map[env]