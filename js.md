<!-- js 执行步骤： -->
1. 读取第一段代码
2. 对代码进行语法分析，若出现语法错误，直接执行步骤5
3. 对var 变量和 function 定义的函数进行预编译处理（需注意的是：赋值型函数不会进行预编译处理）
4. 执行代码块，有错报错
5. 如果还有下一段代码块，则读入下一段代码块，重复步骤2
6. 结束

<!-- js 变量的scope是根据function来划分的，（function 的{} 来划分），而for、while、if块并不是作用域的划分标准 -->
  function test2(){  
      alert ("before for scope:"+i);    // i未赋值（并不是未声明！使用未声明的变量或函数全抛出致命错误而中断脚本执行）  
                                                      // 此时i的值是underfined  
      for(var i=0;i<3;i++){  
          alert("in for scope:"+i);  // i的值是 0、1、2, 当i为3时跳出循环  
      }  
      alert("after for scope:"+i);  // i的值是3，注意，此时已经在for scope以外，但i的值仍然保留为3  
        
      while(true){  
          var j = 1;  
          break;  
      }  
      alert(j);    // j的值是1，注意，此时已经在while scope以外，但j的值仍然保留为1  
    
      if(true){  
          var k = 1;  
      }  
      alert(k);  //k的值是1，注意，此时已经在if scope以外，但k的值仍然保留为1  
  }  
    
  test2();  
  //若在此时（function scope之外）再输出只存在于test2 这个function scope里的 i、j、k变量会发生神马效果呢？  
  alert(i); //error! 没错，是error，原因是变量i未声明（并不是未赋值，区分test2函数的第一行输出），导致脚本错误，程序到此结束！  
  alert("这行打印还会输出吗？"); //未执行  
  alert(j); //未执行  
  alert(k); //未执行  

<!-- js 在执行前会对整个脚本文件的声明部分做完整分析（包括局部变量），从而确定实变量的作用域 -->
  var a =1;  
  function test(){  
      alert(a); //a为undefined! 这个a并不是全局变量，这是因为在function scope里已经声明了（函数体倒数第4行）一个重名的局部变量,  
                    //所以全局变量a被覆盖了，这说明了Javascript在执行前会对整个脚本文件的定义部分做完整分析,所以在函数test()执行前,  
                    //函数体中的变量a就被指向内部的局部变量.而不是指向外部的全局变量. 但这时a只有声明，还没赋值，所以输出undefined。  
      a=4         
      alert(a);  //a为4,没悬念了吧？ 这里的a还是局部变量哦！  
      var a;     //局部变量a在这行声明  
      alert(a);  //a还是为4,这是因为之前已把4赋给a了  
  }  
  test();  
  alert(a); //a为1，这里并不在function scope内，a的值为全局变量的值 

<!-- 当全局变量跟局部变量重名时，局部变量的scope会覆盖掉全局变量的scope，当离开局部变量的scope后，又重回到全局变量的scope，而 当全局变量遇上局部变量时，怎样使用全局变量呢？用window.globalVariableName。 -->

<!-- 如何遍历对象的属性 -->
遍历自身可枚举的属性（可枚举、非继承）：Object.keys()
遍历自身的所有属性（可枚举、不可枚举、非继承）：Object.getOwnPropertyNames()方法
遍历可枚举的自身属性和继承属性：for in

<!-- 如何判断两个对象是否相等 -->
1⃣️ Object.is(obj1,obj2): 判断两个对象引用地址是否一致，true 表示一致，false表示不一致
2⃣️ 判断两个对象内容是否一致，思路：遍历对象的所有键名和键值是否都一致
function isEqual(obj1,obj2) {
  // 是否指向同一内存
  if(obj1 === obj2) return true; 

  let obj1Props = Object.getOwnPropertyNames(obj1);
  let obj2Props = Object.getOwnPropertyNames(obj2);

  // 判断两个对象的键名长度是否一致
  if(obj1Props.length !== obj2Props.length) return false;

  // 遍历键值
  for(let prop in obj1) {
    if(obj2.hasOwnProperty(prop)) {
      //判断键值是否为对象，是对象则需要递归，不是对象则直接判断键值是否相等，不相等直接返回false
      if(typeof obj1[prop] === 'object) {
        if(!isEqual(obj1[prop],obj2[prop])){
          return false
        } else if(obj1[prop] !== obj2[prop]) {
          return false
        }
      }
    } else {
      return false
    }
  }
  return true
} 

<!-- 类数组转数组的方法 -->
1. Array.prototype.slice.call(arrayLike)
2. Array.prototype.splice.call(arrayLike, 0);
3. Array.prototype.concat.apply([], arrayLike);
4. Array.from(arrayLike);

<!-- new.target -->
new.target属性允许你检测函数或构造方法是否是通过new运算符被调用的。
在通过new运算符被初始化的函数或构造方法中，new.target返回一个指向构造方法或函数的引用。在普通的函数调用中，new.target 的值是undefined。

<!-- js的变量提升是什么？ -->
函数在运行的时候，会首先创建上下文，然后将执行上下文入栈，当此执行上下文处于栈顶时，开始运行执行上下文。
在创建执行上下文的过程中会做三件事：
1⃣️ 创建变量对象 2⃣️ 创建作用域链 3⃣️ 确定this指向
创建变量的过程中，首先会为arguments 创建一个属性，值为arguments，然后会扫描function 函数声明，创建一个同名属性，值为函数的引用，接着会扫描var 变量声明，创建一个同名属性，值为 undefined。这就是变量提升。

<!-- 虽然typeof null == object 但是null不是对象！ -->

<!-- web worker -->
webworker 是html5里给js创造多线程运行环境的。它允许主线程创建worker线程，分配任务给后者，主线程运行的同时worker线程也在运行。

<!-- 关于arguments -->
每个函数都会有一个Arguments对象实例arguments，它引用着函数的实参。
1. 作用：
  1）js没有重载函数的功能，arguments对象能够模拟重载（方法重载；指在一个类中定义多个同名的方法，但要求每个方法具有不同的参数的类型或参数的个数。）
  2）匿名函数的递归调用
  3）不定参问题
2. arguments 是一个类数组（类数组：拥有数组特性但没有数组方法）
3. arguments大多用来针对同个方法多处调用并且传递参数个数不一样的时候使用。可以根据arguments的索引来判断执行方法
4. arguments.length为函数实参个数，arguments.callee引用函数自身。fn.length 代表函数形参的个数
5. 箭头函数中没有arguments对象（因为沿着作用域向上找的时候，浏览器在全局是没有arguments的），若想在箭头函数拿到传递的所有参数，可以配合..args剩余参数（展开运算符）使用

<!-- ...args剩余参数和 arguments对象的区别 -->
剩余参数只包含那些没有对应形参的实参，而 arguments 对象包含了传给函数的所有实参。

<!-- 关于展开运算符（...) -->
使用场景：
1. 函数进行多个参数调用时：
  function test(a,b,c) { }
  var args = [0,1,2];
  test(...args);
2. 数组字面量中使用
  var arr1=['a','b','c'];
  var arr2=[...arr1,'d','e']; //['a','b','c','d','e']
  // 可以用在push函数中
  var arr1=['a','b','c'];
  var arr2=['d','e'];
  arr1.push(...arr2); //['a','b','c','d','e']
3. 用于解构赋值
  let [arg1,arg2,...arg3] = [1, 2, 3, 4];
  arg1 //1
  arg2 //2
  arg3 //['3','4']
4. 类数组对象变成数组
  let a=new Set([1,2,3,4,5,2,1])  // a : Set(5) {1, 2, 3, 4, 5}
  let b=[...a]    //  (5) [1, 2, 3, 4, 5] 

<!-- !function -->
“!”的作用是将function(){}函数体转为一个函数表达式。!function(){}()写法和(function(){})()是相同的

