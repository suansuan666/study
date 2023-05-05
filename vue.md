
静态资源：一般客户端发送请求到web服务器，web器从内存在取到相应文件，返回给客户端，客户端解析并渲染显示出来。
动态资源：一般客户端请求的动态资源，先将请求交于web容器，web容器连接数据库，数据库处理数据之后，将内容交给web服务器，web服务器返回给客户端解析渲染处理。

<!-- vue实例挂载过程中发生了什么 -->
挂载过程指app.mount()过程，这是一个初始化过程，主要是做了：初始化和建立更新机制 这两件事。
初始化会创建组件实例、初始化组件状态、创建各种响应式数据；
建立更新机制这一步会立即执行一次组件的更新函数，首次执行组件渲染函数并执行patch将vnode转换为dom；同时首次执行渲染函数会创建它内部响应式数据和组件更新函数之间的依赖关系，这使得以后数据发生变化时会执行对应的更新函数

<!-- v-for和v-if优先级 -->
vue2中，v-for优先级更高
vue3中，v-if优先级更高
解决办法：可以使用computed属性或再包一层元素使用v-if控制


<!-- new vue 后的流程 -->
1. initProxy: 作用域代理，拦截组件内访问其它组件的数据。
2. initLifecycle: 建立父子组件关系，在当前组件实例上添加一些属性和生命周期标识。如[Math Processing Error]parent,parent,refs,$children,_isMounted等。
3. initEvents: 对父组件传入的事件添加监听，事件是谁创建谁监听，子组件创建事件子组件监听
4. initRender: 声明[Math Processing Error]slots和slots和createElement()等。
5. initInjections: 注入数据，初始化inject，一般用于组件更深层次之间的通信
6. initState: 数据响应式：初始化状态。很多选项初始化的汇总：data,methods,props,computed和watch。
7. initProvide: 提供数据注入。

ps:需注意先注入再提供是因为祖辈数据要和当前data进行判重，相结合，且注入的数据在当前组件中转以后再提供给后代

