<!-- jq项目引入web-recorder问题： -->
  1.本地图片引入问题：由于没有webpack打包处理文件路径问题，所以vue组件中引入的图片路径在jq项目引入时会404，解决方案就是把图片转成base64 引入
  2.通过vuehttpLoader 在非vue项目中进行vue组件引入

<!-- mouseenter和mouseleave 频繁触发造成得视窗抖动问题： -->
场景描述：
  录屏插件上有一个tooltip提示，在拖拽过程中不显示，hover才显示，所以通过在mouseenter和mouseleave上进行事件监听处理tooltip的显隐。但是在项目引入后，发现由窗口抖动的情况（页面右侧出现滚动条抖动）
解决：
  1.最开始是使用得mouseover时，会造成鼠标在录屏插件上快速频繁划过时，窗口抖动频繁，于是换成 mouseenter ，抖动会好一点，但是还是会出现
  2. 通过在mouseenter和 mouseleave上做防抖处理，解决了窗口抖动


<!-- 录屏插件通过引入VueDraggableResizable，实现了拖拽功能，但是该组件默认状态没有处理移动边界 -->
场景描述：拖拽时，可以被拖到视窗外面，并且没办法拖回来
解决：该组件有个 parent属性，通过设置parent属性将可移动区域设置为父级组件的区域

<!-- 蒙层阻碍底部事件触发问题： -->
场景描述：通过设置录屏插件的最顶级div的样式为：{height: 100%;width: 100%;position: fixed;left: 0;top: 0;}实现了拖拽区域为当前视窗区域。
        当项目引入时，发现页面中除插件外其他区域的dom事件无法触发
原因：插件的顶级div样式形成了一个蒙层，阻碍了底部的事件触发
解决：通过在蒙层上设置 pointer-events: none 让底部事件能够正常触发，同时在插件的点击区域设置pointer-events:auto 让插件本身事件能够正常触发

<!-- 项目引入样式混乱问题 -->
场景描述：在运营系统引入webRecorder插件以后，运营系统的样式全被影响到了，主要表现在组件库样式混乱和本地全局样式失效
原因：1. webRecorder 引用的是element ui 组件库，但是运营系统应用的是lui，二者内部实现有差别，造成了el标签的组件样式引起了错乱 （组件库错乱问题）
     2. 在main.js文件引入的时候，import webRecorder的顺序应该放在 import App from '@/App.vue'之前，否则写在assets里的样式就会被插件里的组件库样式覆盖 （全局引入的样式不生效问题）
解决：方法一：将插件内部组件库换成lui，同时在import引入时，注意顺序，import webRecorder的顺序应该放在 import App from '@/App.vue'之前，使全局样式生效
     方法二：插件内不引入组件库，再系统引入组件库的时候，可以自动识别到标签，使用系统内部的组件库
     二者区别就是：方法一在单独调试的时候有样式，方法二没有组件库样式
