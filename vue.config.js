const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports = {

  publicPath:'./',
  //输出文件目录
  outputDir: '/Users/jxh/Desktop/web/public/supermall/dist',
  
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'content': 'components/content',
        'common': 'components/common',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          // pxtorem({
          //   rootValue: 37.5,
          //   propList: ['*']
          // })
        ]
      }
    }
  }
}