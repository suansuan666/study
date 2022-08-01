// setTimeout 实现setInterval
// setInterval的缺点：
// 1 无视代码报错。即使内部代码调用报错，他也会继续执行
// 2 无视网络延迟
// 3 不定时。当调用代码执行的时间小于设定时间时，会跳过调用
function mySetInterval(fn,delay) {
  let timeout = null;
  function interval () {
      fn();
      timer = setTimeout(interval,delay)
  }
  interval();
}

let a = mySetInterval(()=>{console.log(1111)},1000)

// setInterval实现setTimeout

function mySetTimeout(fn,delay){
  const timer = setInterval(()=>{
    clearInterval(timer)
  },delay)
}
let b = mySetTimeout(console.log(111),1000)