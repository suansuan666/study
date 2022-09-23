结论：v-for使用index作为key渲染出错时的情况仅限于：在使用非文本节点的组件，且该组件没有依赖于响应式的props,那么此时删除操作就会导致视图错乱

视图错乱情况复现：使用index作为key,删除第一行，却是最后一行消失
原因：key值重复，当删除第一行时，第二行的key变成第一行的key，以此类推，key值相同，虚拟DOM会把key相同的组件认为是同一个组件，因而不会去更新视图

但是大部分时候我们并没有复现这个场景是因为：我们使用了props，形成了两次 render：
假设一共两行数据，
第一步：通过修改数据删除第一行，数据变化引起试图更新，更新发现key相同，最终保持第一行不变，第二行消失  （第一次render）
第二步：第一行的虚拟dom没变，但是第一行组件的props变了，由第一行的props变成第二行的props，由于props的变化，重新更新了视图，最终第一行变成了第二行的样子   （第二次render）

ps: 需要注意的是vue 的diff过程对文本节点有特殊处理，不管key值如何，都会用新的文本节点去覆盖旧的文本节点

列子展示：

异常情况：
<div v-for="(item,index) in list" :key="index">
{{Math.randow * 100 }} {{这是例子}}
<button @click="del(index)"></button>
</div>
正常情况
<div v-for="(item,index) in list" :key="index">
{{item.name}}
<button @click="del(index)"></button>
</div>



