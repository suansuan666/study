<!-- vue3和vue2的区别： -->
1、监听机制的变化：
  1⃣️ vue3使用proxy代替了vue2中的Object.defineProperty来进行数据监听
  2⃣️ vue3可以监测到对象属性的添加和删除，数组的变化
  3⃣️ vue3支持Map、Set、weakMap、weakSet
2、vue3 支持碎片（fragments):
  vue2 在组件中只有一个根结点
  vue3 在组件可以拥有多个根结点
3、API模式不同： vue2采用options API,vue3采用 composition API
4、建立数据方式不同：
  vue2 把数据放在data属性里
  vue3 使用setUp()方法：
  vue3通过三步建立响应式数据：
    1）引入ref/reactive，
    2）简单数据类型使用ref()方法处理，复杂数据类型用reactive()处理
    3）使用setUp()返回响应数据，从template 获取响应数据
5、生命周期不同：
  vue3: setUp(),onBeforeMount(),onMuounted(),onBeforeUpdate(),onUpdated(),onBeforeUnmount(),onUnmounted()
  vue2: beforeCreate(),created(),beforeMount(),mounted(),beforeUpdate(),updated(),beforeDestory(),destoryed()
6、传参方式不同：
  vue3 子组件通过 defineProps()进行接收，并且接收这个函数的返回值进行数据操作
  
<!-- watch 和 watchEffect的区别： -->
  watch: 监听传入的某个或多个值；触发时会返回新老值；第一次不会执行，只有变化才执行
  watchEffect: 传入的是一个函数，会立即执行，默认第一次也会执行一次；不需要传入监听内容，会自动收集函数内的数据源作为依赖，在依赖变化的时候重新执行该函数，如果没有依赖则不会执行；不会返回新老值
  二者的共同点：
    1⃣️ 停止监听：组件卸载时都会自动停止监听
    2⃣️ 清除副作用：onInvalidate 会作为回调的第三个参数传入
    3⃣️ 副作用刷新时机： 响应式系统会缓存副作用函数，并异步刷新，避免同一个tick中多个状态改变导致的重复调用
    4⃣️ 监听器调试：开发模式下可以用onTrack 和 onTrigger 进行调试

<!-- vue3 的diff算法优化 -->
vue3 采用最长递增子序列（贪心+二分查找）优化对比流程，使虚拟dom生成速度提升200%