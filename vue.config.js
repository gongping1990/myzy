// const px2rem = require('postcss-px2rem')
// // 配置基本大小
// const postcss = px2rem({
//   // 基准大小 baseSize，需要和rem.js中相同  (//375的图就给37.5，也就是1rem=37.5px)
//   remUnit: 16
// })

module.exports = {
  lintOnSave: true,
  publicPath: './',
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          // 把px单位换算成rem单位
          require('postcss-pxtorem')({
            rootValue: 100, // 换算的基数(设计图750的根字体为32)
            selectorBlackList: ['.van-'], // 要忽略的选择器并保留为px。
            propList: ['*'], // 可以从px更改为rem的属性。
            minPixelValue: 2 // 设置要替换的最小像素值。
          })
        ]
      }
    }
  },
  // devServer: {
  //   port: 9898,
  //   proxy: {
  //     '/api': {
  //       target: 'http://192.168.31.26:8765', // 跨域接口
  //       // target: 'http://192.168.31.137:8880', // 跨域接口
  //       // target: 'http://192.168.31.119:8765', // 跨域接口
  //       // target: 'http://192.168.3.188:8765', // 跨域接口
  //       ws: true,
  //       changeOrigin: true
  //     },
  //     '/hz':{
  //       target: 'http://192.168.31.26:8083',
  //       ws: true,
  //       changeOrigin: true
  //     },
  //   }
  // }
}


