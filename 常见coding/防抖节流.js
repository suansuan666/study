// 防抖：一段时间连续触发，只执行最后一次（n秒内函数只执行一次，如果在n秒内再次触发事件，则重新计算时间）
// 场景：1.搜索框搜索输入，只需要在用户最后一次输入完后，再发送请求 2. 窗口resize事件，只需窗口调整完成后，计算窗口大小，防止重复渲染。
// 可参老王者荣耀的回城场景 （以最后一次触发时机为准）
const debounce = (fn,wait,immediate) => {
    let timer = null;
    return function(...args) {
      if(timer) clearTimeout(timer);
      if(immediate && !timer) {
        fn.call(this,args)
      }
      timer = setTimeout(()=> {
        fn.call(this,args) // 这里是在给调用的元素绑定执行事件，如果没有fn.call，下面consloe的那句话就不会被打印
      },wait)
    }
}
const betterFn = debounce(() => console.log("fn 防抖执行了"), 1000, true);
document.addEventListener("scroll", betterFn);

// 节流：持续触发事件，保证隔间时间触发一次事件
// 场景：1.防止表单重复提交 2. 
// 参考王者荣耀技能冷却场景（以第一次触发时机为准）
 const throttle = function(fn,wait) {
  let pre = 0;
  return function(...args) {
    let now = Date.now();
    if(now - pre >= wait) {
      fn.call(this,...args);
      pre = now;
    }
  }
 }


