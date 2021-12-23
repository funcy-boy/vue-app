module.exports = {
    // 关闭eslint校验功能
    lintOnSave: false,
    // 配置代理，解决跨域问题
    devServer: {
        proxy: {
            '/api': {
                target: 'http://39.98.123.211',
                // pathRewrite: {'^/api': ''}
            }
        }
    }
}