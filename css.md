
<!-- flex -->
flex 属性是 flex-grow flex-shrink flex-basis的简写
flex-grow 默认是0 flex-shrink默认是1 flex-basis 默认是0
flex:1 等于flex：1 1 0 
flex：0 等于flex：0 0 0 0

<!-- 竖向百分比设定是相对于父容器的宽度！ -->
当按百分比设置一个元素的宽度时，他是相对于父元素的宽度计算的；同时，对于一些竖向属性（例如：padding-top、padding-bottom等）当设置百分比时，也是相对于父容器得宽度。

<!-- 实现小于12px的字体效果 -->
transform:scale()这个属性只可以缩放可以定义宽高的元素
而行内元素是没有宽高的，所以对于行内元素设置小于12px，我们可以加上一个display:inline-block;

<!-- 三角形 -->
width：0；
height：0；
border：10px solid transparent；
border-bottom-color：red

<!-- 扇形 -->
width：0；
height：0；
border：10px solid transparent；
border-bottom-color：red
border-radius：10px;

<!-- 样式优先级 -->
内联样式 > 内部样式 > 外部样式 > 浏览器用户自定义样式 > 浏览器默认样式

<!-- display:inline-block 为什么会显示间隙 -->
因为原来HTML代码中的回车换行等被转成一个空白符，在字体不为0的情况下，空白符占据一定宽度，所以inline-block的元素之间就出现了空隙

<!-- 如何消除 display:inline-block 的间隙 -->
1. 移除空格
2. 使用margin负值
3. 使用font-size:0
4. letter-spacing
5. word-spacing