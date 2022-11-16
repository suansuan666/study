typeScript：
1. 是js的超集，具有可选的类型并可以编译为纯js
2. 优点：
    1⃣️ 增强代码的可维护性 2⃣️ 友好的在编辑器里提示错误，编译阶段就能检查类型发现大部分错误
    3⃣️ 支持最新的js新特性 4⃣️ 周边生态友好，vue3已全面支持ts
3. 缺点：
    1⃣️ 一定的学习成本 2⃣️ 在vue2项目中使用ts不是很流畅
    3⃣️ 增加前期开发成本
ts基础类型：
 Boolean / Number / String / Enum / Array / tuple(元组) / undefined 、null / any / void / never /unkown

tuple 对于内部不同类型的数组可以使用tuple类型来定义,这是一个已知数量和类型的数组，长度已指定，越界访问会提示错误。
const tuple:[number,string] = [1,'aa']
若一个数组中可能有多种类型，数量和类型都不确定，直接使用any[]即可

默认情况下，null和undefined 是所有类型的子类型，但是如果在tsconfig.json指定了“strictNullCheck":true 开启严格模式后，null和undefined只能给自己的类型赋值，不过 undefined还可以给void赋值
void 一般只用在函数上，告诉别人这个函数没有返回值
never 表示永不存在的值的类型 （当函数抛出异常或无限循环时就会出现永不存在的情况）

unknown 和 any的最大区别是：
任何类型的值都可以赋值给any，同时any类型的值也可以赋值给任何类型。unknown任何类型的值都可以赋值给它，但它只能赋值给unknown 和 any

ts 对象类型：
  object 、Object 、{} / 类 / 数组 / 函数

object 类型用于表示所有的非原始类型，在严格模式下，null 和undefined 也不能赋给object
let object:object;
object = 1 // 报错
object = null // 报错
object = {} // 编译正确

Object 代表所有拥有 toString、hasOwnProperty 方法的类型，即所有原始类型和非原始类型都可以赋给Object。当然严格模式下的null和 undefined还是不行
{} 和Object 一样，都表示原始类型和非原始类型的集合

函数重载（方法重载）：使用相同名称和不同参数数量或类型创建多个方法的一种能力
eg: 
  function add(x: number, y: number): number;
  function add(x: string, y: string): string;
  function add(x: any, y: any): any {
    return x + y;
  }
函数重载真正执行的是同名函数最后定义的函数体，在最后一个函数体定义之前全都属于函数类型定义，
