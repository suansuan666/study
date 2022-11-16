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