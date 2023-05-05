关于js代码压缩方案：
1. 去除多余字符: 空格，换行及注释。但需注意多行代码压缩到一行时要注意行尾分号，而这个问题可以通过AST来解决。

  // 压缩前：
  function sum (a, b) {
    return a + b;
  }
  压缩完变为：function sum(a,b){return a+b}

2. 压缩变量名：变量名，函数名及属性名。（缩短变量的命名也需要 AST 支持，不至于在作用域中造成命名冲突。）

  // 压缩前：
  function sum (x, y) {
    return x + y;  
  }
  // 再压缩: 去除空余字符
  function s(x,y){return x+y}

3. 解析程序逻辑：合并声明以及布尔值简化

  // 压缩前
  const a = 3;
  const b = 4;
  // 压缩后
  const a = 3, b = 4;
4. 解析程序逻辑: 编译预计算
  // 压缩前
  function hello () {
    console.log('hello, world')
  }
  hello()
  // 压缩后
  console.log('hello, world')

<!-- AST -->
AST，抽象语法树，js 代码解析后的最小词法单元，而这个过程就是通过 Parser 来完成的。

那么 AST 可以做什么呢？
1. eslint: 校验你的代码风格
2. babel: 编译代码到 ES 低版本
3. taro/mpvue: 各种可以多端运行的小程序框架
4. GraphQL: 解析客户端查询

不同的解析器会生成不同的 AST，司空见惯的是 babel 使用的解析器 babylon，而 uglify 在代码压缩中使用到的解析器是 UglifyJS。


关于AST的转换可参考：https://astexplorer.net/

<!-- uglify、terser 与 swc -->
uglify，一个用以代码压缩混淆的库。但它有一个致命弱点，不支持 ES6。
terser 它来自于 uglify，与它保持一致的 API，但是它对 ES6 有更好的支持，同时也是 webpack 内置进行代码压缩的库。

在webpack中，一切与性能优化相关的都可以在 optimization 中找到，TerserPlugin 是一个底层基于 uglifyjs 的用来压缩 JS 的插件。

optimization: {
  minimize: isEnvProduction,
  minimizer: [
    new TerserPlugin({
      terserOptions: {
        parse: {
          ecma: 8,
        },
        compress: {
          ecma: 5,
          warnings: false,
          comparisons: false,
          inline: 2,
        },
        output: {
          ecma: 5,
          comments: false,
          ascii_only: true,
        },
      },
      sourceMap: true
    })
  ]
}