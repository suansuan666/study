// 浅拷贝：
const arr = Object.assign({},{name:'hh'})  // 使用Object.assign()
const arr1 = [1,2,3,4]
const arr2 = [...arr1] // 使用展开运算符

// 深拷贝
function deepClone(obj){
  if(!obj || typeof obj !== 'object') return;
  let newObj = Array.isArray(obj) ? [] : {};
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) :obj[key]
    }
  }
  return newObj
}


// 关于hasOwnProperty
// hasOwnProperty 只检查对象自有属性，不检测原型上的属性
let obj = {
  name:'hhhh',
  child:{
    childName:'yyyy',
  }
}

console.log(obj.hasOwnProperty('name')) // true
console.log(obj.hasOwnProperty('child')) //true
console.log(obj.hasOwnProperty('childName')) // false
console.log(obj.child.hasOwnProperty('childName')) // true