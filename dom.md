<!-- html的生命周期： -->
DOMContentLoaded：浏览器已完全加载html，并构建了dom树，但样式表之类的外部资源可能尚未加载完成
load：浏览器不仅加载完成了html，还加载完成了所有外部资源：图片、样式等
beforeunload：当用户正在离开页面时
unload：用户几乎已经离开



DOMContentLoaded 一般会在脚本执行结束后发生，除了以下两个特殊情况：
1⃣️ 遇到async 属性的脚本
2⃣️ 使用document.createElement('script') 动态生成并添加到页面的脚本
这俩均不会阻塞DOMContentLoaded

