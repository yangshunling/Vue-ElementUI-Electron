module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/apis': {
        target: 'http://10.26.150.88:9081',  // target host
        ws: true,  // proxy websockets
        changeOrigin: true,  // needed for virtual hosted sites
        pathRewrite: {
          '^/apis': ''  // rewrite path
        }
      },
    },
  }
};
