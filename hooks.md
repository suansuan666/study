hook 通常指运行到某一时期时，会调用被注册到该时期的回调函数
常见的hook有： Windows系统的钩子能监听到系统的各种事件。浏览器提供的onload或addeventListener能注册在浏览器各种时机被调用的方法

react中的hooks 是一系列方法，提供了在函数式组件中完成开发工作的能力。（函数式组件）
vue中的hooks 是一系列提供了组件复用、状态管理等开发能力的方法。（组合式API）

react对hook的定义和使用提出了 “一个假设、两个只在” 核心指导思想
一个假设： 假设任何以 「use」 开头并紧跟着一个大写字母的函数就是一个 Hook。
第一个只在： 只在 React 函数组件中调用 Hook，而不在普通函数中调用 Hook。（Eslint 通过判断一个方法是不是大坨峰命名来判断它是否是 React 函数）
第二个只在： 只在最顶层使用 Hook，而不要在循环，条件或嵌套函数中调用 Hook。
因为是约定，因而 useXxx 的命名并非强制，你依然可以将你自定义的 hook 命名为 byXxx 或其他方式，但不推荐。

使用hooks是为了：
1、更好的状态复用，和mixin相比，它可以更好的追溯方法和属性，同时因为内部的变量定义在闭包里，返回的变量支持定义别名，即避免了重名、覆盖的问题
2、可以将分散在各种声明周期里的代码块，通过hooks的方式将相关内容聚合在一起，形成高度聚合，可阅读性提升

vue 和 react 自定义 Hook 的异同：
相似点： 总体思路是一致的，都遵照着 "定义状态数据"，"操作状态数据"，"隐藏细节" 作为核心思路。
差异点： 
  组合式API 和 React函数组件 有着本质差异
  vue3 的组件里， setup 是作为一个早于 “created” 的生命周期存在的，无论如何，在一个组件的渲染过程中只会进入一次。
  React函数组件 则完全不同，如果没有被 memorized，它们可能会被不停地触发，不停地进入并执行方法，因此需要开销的心智相比于vue其实是更多的。

