// 实现一个 zip 函数，对两个数组的元素按顺序两两合并，比如输入 [1,2,3], [4,5,6] 时，返回 [[1,4], [2,5],[3,6]]
function zip(arr1,arr2) {
  if(!arr1.length || !arr2.length) {
    return []
  }
  const [one,...rest1] = arr1;
  const [other,...rest2] = arr2;
  return [[one,other],...zip(rest1,rest2)]
}