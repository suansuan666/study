npm i -D webpack webpack-cli babel-loader @babel/core @babel/preset-env babel-plugin-component clean-webpack-plugin css-loader mini-css-extract-plugin node-sass postcss postcss-loader autoprefixer cssnano sass-loader terser-webpack-plugin vue-loader vue-template-compiler

组件的按需引入通过babel-plugin-component来进行转换：
    babel-plugin-component 内部会将 import { Button, Select } from 'element-ui' 转换成 
    var button = require('element-ui/lib/button')
    var select = require('element-ui/lib/select')
    require('element-ui/lib/theme-chalk/button/style.css')
    require('element-ui/lib/theme-chalk/select/style.css')

loader执行顺序：横向和纵向都是从后往前

webpack5新特性：
1.清除输出目录 
2、top-level-await
3.打包体积优化
4.打包缓存开箱即用
5.资源模块


<!-- webpack常见优化： -->
打包体积优化：
1⃣️ css代码压缩：css-minimizer-webpack-plugin
  npm i css-minimizer-webpack-plugin -D
  const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(), // 去重压缩css
    ],
  }
2⃣️ js代码压缩：terser-webpack-plugin
  npm i terser-webpack-plugin -D
  // webpack.prod.js

  const TerserPlugin = require('terser-webpack-plugin')
    optimization: {
      minimizer: [
        new CssMinimizerPlugin(), // 去重压缩css
        new TerserPlugin({ // 压缩JS代码
          terserOptions: {
            compress: {
              drop_console: true, // 去除console
            },
          },
        }), // 压缩JavaScript
      ],
    }
3⃣️ tree-shaking： webpack5默认开启，当mode为production时，自动开启tree-shaking 进行优化
4⃣️ source-map: 精准定位错误代码位置（但是体积较大，需要区分环境使用）
  // webpack.dev.js
  module.exports = {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map'
  }
  // webpack.prod.js
  module.exports = {
    mode: 'production',
    devtool: 'nosources-source-map'
  }
用户体验优化：
1⃣️ 懒加载：
  // src/router/index.js
  const routes = [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      // 懒加载
      component: () => import('../views/home/home.vue'),
    },
  ]
2⃣️ 小图片转base64: 小图片转base64可以减少用户的http网络请求次数，提高用户体验
  webpack5 中用asset-module 代替url-loader
  // webpack.base.js
  {
    test: /\.(png|jpe?g|gif|svg|webp)$/,
    type: 'asset',
    parser: {
      // 转base64的条件
      dataUrlCondition: {
        maxSize: 25 * 1024, // 25kb
      }
    },
    generator: {
      // 打包到 image 文件下
      filename: 'images/[contenthash][ext][query]',
    },
  },
3⃣️ 配置hash:改过的文件更新hash值，没改过的保持原来的hash值
  // webpack.base.js
  output: {
    path: path.resolve(__dirname, '../dist'),
    // 给js文件加上 contenthash
    filename: 'js/chunk-[contenthash].js',
    clean: true,
  },
