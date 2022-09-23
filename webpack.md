npm i -D webpack webpack-cli babel-loader @babel/core @babel/preset-env babel-plugin-component clean-webpack-plugin css-loader mini-css-extract-plugin node-sass postcss postcss-loader autoprefixer cssnano sass-loader terser-webpack-plugin vue-loader vue-template-compiler

组件的按需引入通过babel-plugin-component来进行转换：
    babel-plugin-component 内部会将 import { Button, Select } from 'element-ui' 转换成 
    var button = require('element-ui/lib/button')
    var select = require('element-ui/lib/select')
    require('element-ui/lib/theme-chalk/button/style.css')
    require('element-ui/lib/theme-chalk/select/style.css')

