
const pxtorem = require('postcss-pxtorem');

module.exports = {
    publicPath:'./',
    // baseUrl: process.env.NODE_ENV === 'production' ? '/online/' : '/',
    // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'
    outputDir: 'dist',
    // pages:{ type:Object,Default:undfind }
    devServer: {
        port: 8888, // 端口号
        host: 'localhost',
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
        proxy: {
            '/api': {
                target: '<url>',
                ws: true,
                changeOrigin: true
            },
            '/foo': {
                target: '<other_url>'
            }
        },  // 配置多个代理
    },
    css: {
        extract: false,
        loaderOptions: {
            postcss: {
                plugins: [
                    pxtorem({
                        // rootValue: 60,
                        rootValue: 75,
                        propList: ['*']
                    })
                ]
            }
        }
    },
}
