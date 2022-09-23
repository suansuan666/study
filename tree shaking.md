tree shaking ：“摇树”，作用是把项目中没必要的代码去掉，删除没被调用的无用模块代码，最终实现代码体积减少，优化项目性能。
在webpack中，tree shaking指按需加载，即没有被引用的模块不会被打包进来，减小包体积，缩小应用加载时间。
在webpack中，tree shaking 主要是尽可能的删除没有被使用过的代码：
    1、被import了但其实没有被使用的代码
    2、从未访问过的导入对象中删除特定属性
举例：
myInfo.js
export const myInfo = {
    name: "Ire Aderinokun",
    birthday: "2 March"
}
index.js
import { myInfo } from "./myInfo.js";

console.log(myInfo.name);
在上面的示例中，birthday属性不会被输出到最终打包文件中，因为从未实际使用过。


tree shaking的实现主要是通过 ES module的静态分析功能，通过 import语法，可以在不运行的情况下就能分析出不需要的代码。如果是common js的require，需要执行后才知道有没有引用，无法进行tree shaking。
webpack中的tree-shaking主要是通过以下几个插件来实现的：
1、uglifyJs
2、webpack-rollup-loader
3、babel minify webpack plugin

使用tree-shaking的条件：
1、使用es module （import/export);
2、确保没有编译器将es6语法转成 commonJs 的（ps:常用的@babel/preset-env会默认将es6转成es5)
3、在package.json中，添加“sideEffects"属性
4、使用mode 为"production" 的配置项以启用更多优化项，包括压缩代码和tree shaking

关于tree shaking的副作用：
有一些代码，是在 import 时执行了一些行为，这些行为不一定和任何导出相关。例如 polyfill ，Polyfills 通常是在项目中全局引用，而不是在 index.js 中使用导入的方式引用。
Tree Shaking 并不能自动判断哪些脚本是副作用，因此手动指定它们非常重要。通过使用sideEffects 去指定这些文件