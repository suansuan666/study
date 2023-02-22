// 使用对象属性名的唯一性保证不重复
function unique(arr) {
  var result = {};
  for(let i=0;i<arr.length;i++){
    if(!result[arr[i]]) {
       result[arr[i]] = true 
    }
  }
  return Object.keys(result);
}

// includes 判断
function unique(arr) {
  var res = [];
  for(let i=0;i<arr.length;i++) {
    if(!res.includes(arr[i])) {
      res.push(arr[i])
    }
  }
  return res;
}
// set 去重
function unique(){
  return [...new Set(arr)]
}