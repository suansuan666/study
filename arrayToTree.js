

let arr = [
  {id: 1, name: '部门1', pid: 0},
  {id: 2, name: '部门2', pid: 1},
  {id: 3, name: '部门3', pid: 1},
  {id: 4, name: '部门4', pid: 3},
  {id: 5, name: '部门5', pid: 4},
]

const res = arrayToTree(arr);
console.log(res,'===res')

// 扁平数组转换成树形结构解题思路：使用遍历或递归
// 扁平结构转树形结构的重点是：父id = 子pid;顶级pid的值一般设为0;最终返回值是一个对象数组，数组里只有一个Json对象。

// 使用遍历：性能最优，时间复杂度为O(n)，空间复杂度O(n)
// 1. 首先定义一个数组 result 存放最终结果集，同时定义一个对象存放整个JSON对象；
// 2. 将扁平数组进行遍历，使用一个itemMap将循环的item存储起来（使用Map结构，这样之后的遍历就可以借助对象的引用进行数据查找存储）,同时将item里的 children设空；
// 3. 判断pid的值，如果pid=0,则直接将遍历得到的item存进去，如果pid !== 0,则需要去判断itemMap的pid是否存在，不存在则将 children设空，存在则直接push进去。
// 4. 返回reslut数组

function arrayToTree(items) {
  const result = [];   // 存放结果集
  const itemMap = {};  // 
  for (const item of items) {
    const id = item.id;
    const pid = item.pid;
    // if (!itemMap[id]) {
    //   itemMap[id] = {
    //     children: [],
    //   }
    // }
    // itemMap[id] = {
    //   ...item,
    //   children: itemMap[id]['children']
    // }
    itemMap[item.id] = {...item, children: []}
    const treeItem =  itemMap[id];
    if (pid === 0) {
      result.push(treeItem);
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = {
          children: [],
        }
      }
      itemMap[pid].children.push(treeItem)
    }
  }
  return result;
}

// 使用递归：性能较差，
const getChildren = (data, result, pid) => {
  for (const item of data) {
    if (item.pid === pid) {
      const newItem = {...item, children: []};
      result.push(newItem);
      getChildren(data, newItem.children, item.id);
    }
  }
}
const arrayToTree = (data, pid) => {
  const result = [];
  getChildren(data, result, pid)
  return result;
}


