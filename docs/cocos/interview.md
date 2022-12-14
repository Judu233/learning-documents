<!--
 * @features: 功能
 * @description: 说明
 * @Date: 2022-06-09 14:35:32
 * @Author: judu233(769471424@qq.com)
 * @LastEditTime: 2022-07-22 00:20:30
 * @LastEditors: judu233
-->
# cocos 面试

**js 基础面试题参考**
+ 简介 +

  关于 js 基础参考


## 编程基础
- **设计模式有几种，具体有那些？**
+ 【参考答案】 +

  设计模式有 23 种，分为 4 大类：
    - 创建型模式
      - 工厂模式
      - 抽象工厂模式
      - 单例模式
      - 建造者模式
      - 原型模式
    - 结构型模式
      - 适配器模式
      - 桥接模式
      - 过滤器模式
      - 组合模式
      - 装饰器模式
      - 外观模式
      - 享元模式
      - 代理模式
    - 行为型模式
      - 责任链模式
      - 命令模式
      - 解释器模式
      - 迭代器模式
      - 中介模式
      - 备忘录模式
      - 观察者模式
      - 状态模式
      - 空对象模式
      - 策略模式
      - 模板模式
      - 访问者模式
    - J2ee模式
      - mvc模式
      - 业务代表模式
      - 组合实体模式
      - 数据访问对象模式
      - 前端控制器模式
      - 拦截过滤器模式
      - 服务定位器模式
      - 传输对象模式

+ 【解析】 +

  [模式详细解说](https://www.runoob.com/design-pattern/design-pattern-tutorial.html)
***

- **数据结构有哪些？**
+ 【参考答案】 +

  - 线性表，还可细分为顺序表、链表、栈和队列；
  - 树结构，包括普通树，二叉树，线索二叉树等；
  - 图存储结构；

+ 【解析】 +

  [常用数据结构详解](http://data.biancheng.net/view/154.html)
***

- **面向对象和面向过程的区别？**
+ 【参考答案】 +

  - 面向过程：直接将解决问题的步骤分析出来，然后用函数把步骤一步一步实现，然后再依次调用就可以了；
  - 面向对象：将构成问题的事物，分解成若干个对象，建立对象的目的不是为了完成一个步骤，而是为了描述某个事物在解决问题过程中的行为。

+ 【解析】 +

  无
***

- **面向对象的三大特性**
+ 【参考答案】 +

  - 封装：隐藏内部实现
  - 继承：复用现有代码
  - 多态：改写对象行为

+ 【解析】 +

  - 1、封装
    - 封装就是将一个类的某些信息隐藏在类的内部，不允许外界直接访问，而是提供某些方法实现对隐藏信息的访问和操作。
    - 封装的好处就是增强了数据安全性以及隐藏了类的实现细节，使用者无需了解具体实现细节，只需通过特定的接口进行访问，这样也方便类自身的实现和修改。
  - 2、继承
    - 继承是类与类之间的一种关系，即子类继承父类的特征和行为，使得子类具有和父类相同的属性和行为。
    - 继承的好处在于子类继承了父类的属性和方法从而实现了代码的复用。
  - 3、多态
    - 多态是指一个类对象的相同方法在不同情形下有不同的表现形式。
    - 多态使得具有不同内部结构的对象可以共享相同的外部接口。
    - 多态：父类声明指向子类对象，即引用变量在程序编写的时候不确定，在程序运行的时候才能确定。
    - 实现：子类继承父类并且覆写父类中的方法，或者说实现接口
***

- **你了解红黑树吗？**
+ 【参考答案】 +

  xx------xx

+ 【解析】 +

  [什么是红黑树？](https://zhuanlan.zhihu.com/p/273829162)
***

## JavaScript 基础
- **Javascript 有哪些常用的数据类型？** 
+ 【参考答案】 +

  Number, String, Boolean, Null, Undefined, Object。

+ 【解析】 +

  无
***

- **举例两个最常见的内置对象数据类型。**
+ 【参考答案】 +

  数组，函数  

+ 【解析】 +

  无
***

- **ES6 新增类型有那些？**
+ 【参考答案】 +

  ES6新增类型：map | set | weekMap | weekSet| Symbol

+ 【解析】 +

  无
***

- **什么是 js, ts 区别是什么？**
+ 【参考答案】 +

  - JavaScript 是一种轻量级的解释性脚本语言，可嵌入到 HTML 页面中，在浏览器端执行，能够实现浏览器端丰富的交互功能,是基于对象和事件驱动的，无需特定的语言环境，只需在支持的浏览器上就能运行。
    - 一种脚本编写语言，无需编译，只要嵌入 HTML 代码中，就能由浏览器逐行加载解释执行。
    - 一种基于对象的语言，可以创建对象同时使用现有对象。但是 Javascript 并不支持其它面向对象语言所具有的继承和重载功能。
    - 语法简单，使用的变量为弱类型。
    - 语言较为安全，仅在浏览器端执行，不会访问本地硬盘数据。
    - 语言具有动态性。JavaScript 是事件驱动的，只根据用户的操作做出相应的反应处理。
    - 只依赖于浏览器，与操作系统的因素无关。因此 JavaScript 是一种跨平台的语言。
    - 兼容性较好，能够与其他技术（如 XML，REST API 等）一起使用。
  - TypeScript 是 Microsoft 开发和维护的一种面向对象的编程语言。它是 JavaScript 的超集，包含了 JavaScript 的所有元素，可以载入 JavaScript 代码运行，并扩展了 JavaScript 的语法。
    - 是 Microsoft 推出的开源语言，使用 Apache 授权协议
    - 增加了静态类型、类、模块、接口和类型注解
    - 可用于开发大型的应用
    - 易学易于理解

+ 【解析】 +

  [参考](https://vue3js.cn/interview/typescript/typescript_javascript.html#%E4%BA%8C%E3%80%81%E7%89%B9%E6%80%A7)
***

- **什么是值类型，什么是引用类型，都有那些？**
+ 【参考答案】 +

  - 值类型：存储在堆栈的具体数值， 有 数值、布尔值、null、undefined。
  - 引用类型：存储在堆栈的引用（指针），该引用指向其他位置， 有 对象、数组、函数。

+ 【解析】 +

  无
***

- **null 和 undefined 的区别。**
+ 【参考答案】 +

  - null 表示一个“空”的值，
    - 它和 0 以及空字符串''不同，0 是一个数值，''表示长度为 0 的字符串，而 null 表示“空”。
JavaScript 的设计者希望用 null 表示一个空的值。
  - undefined 表示值未定义。
    - 大多数情况下，我们都应该用 null。undefined 仅仅在判断函数参数是否传递的情况下有用。

+ 【解析】 +

  无
***

- **== 和 === 的区别？**
+ 【参考答案】 +

  - == 在比较的时候可以自动转换数据类型。
  - === 严格比较，不会进行自动转换，要求进行比较的操作数必须类型一致，不一致时返回 false;

+ 【解析】 +

  无
***

- **如何判断一个对象是否属于某个类？**
+ 【参考答案】 +

  使用 instanceof 即 value instanceof PersonClass.

+ 【解析】 +

  无
***

- **判断一个变量的类型有几种？区别是什么？**
+ 【参考答案】 +

  - typeof
    - 优点：能够快速区分基本数据类型
    - 缺点：不能将Object、Array和Null区分，都返回object
  - instanceof
    - 优点：能够区分Array、Object和Function，适合用于判断自定义的类实例对象
    - 缺点：Number，Boolean，String基本数据类型不能判断
  - Object.prototype.toString.call()
    - 优点：精准判断数据类型
    - 缺点：写法繁琐不容易记，推荐进行封装后使用

+ 【解析】 +

  无
***

- **遍历对象/数组的方式有，区别是？**
+ 【参考答案】 +

  - for：可以遍历对象或数组
  - forEach：不支持 return, 对于空数组是不会执行回调函数的
  - for in：一般用来遍历对象，不建议遍历数组, 并且会遍历数组或对象的 prototype 中的属性（可以使用对象的 hasOwnProperty()方法来避免此问题，）
  - for of：遍历对象或数组，替代 for-in
  - filter：创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素 
    - 不会对空数组进行检测。
    - 不会改变原始数组。
  - map：返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
    - 不会对空数组进行检测
    - 不会改变原始数组。
  - some：检测数组中的元素是否满足指定条件（函数提供）。
    - 只要有一个元素满足则返回 true，并不再继续往下判断。
    - 不会对空数组进行检测。
    - 不会改变原始数组。
  - every：用于检测数组所有元素是否都符合指定条件（函数提供）
    - 所有元素都满足条件，则返回 true。
    - 只要有一个不满足就返回 false ，且剩余的元素不会再进行检测。
    - 不会对空数组进行检测。
    - 不会改变原始数组。

+ 【解析】 +

  无
***

- **js的数值精度和数值范围是多少**
+ 【参考答案】 +

  JavaScript 内部，所有数字都是以64位浮点数形式储存，即使整数也是如此。所以，1与1.0是相同的，是同一个数。 JavaScript 会自动把64位浮点数，转成32位整数，然后再进行运算

+ 【解析】 +

  无
***

## Javascript 代码题
- **如下一段代码，请问四条 log 语句分别输出什么？**
```js
var a = [];
a[100] = 1;
console.log(a.length);
console.log(a[0]);
a[200] = undefined;
console.log(a.length);
console.lolg(a['100']);
```
+ 【参考答案】 +

  分别输出 101，undefined, 201，1

+ 【解析】 +

  无
***

- **请问以下分别返回什么值？**
```js
consel.log(parseInt('1.9'));
consel.log(parseInt('hello'));
```
+ 【参考答案】 +

  1, NaN

+ 【解析】 +

  无
***

- **请问以下输出什么**
```js
consel.log(["1", "2", "3"].map(parseInt));
```
+ 【参考答案】 +

  [1,NaN,NaN]

+ 【解析】 +

  - **方法签名**： Array.prototype.map() array.map(callback[, thisArg])  
  - callback函数的执行规则参数：自动传入三个参数
    - currentValue（当前被传递的元素）；
    - index（当前被传递的元素的索引）；
    - array（调用 map 方法的数组）
  - parseInt方法接收两个参数，第三个参数["1", "2", "3"]将被忽略。parseInt 方法将会通过以下方式被调用
    - parseInt("1", 0)
    - parseInt("2", 1)
    - parseInt("3", 2)
***

- **以下代码片段输出是什么，为什么？如果想输出 0,1,2 请问如何修改？**
```js
var s = [];
function foo() {
    for(var i=0; i<3; i++){
        s[i] = function(){
          console.log(i);
        }
    }
}
foo();
s[0]();
s[1]();
s[2]();
```
+ 【参考答案】 +

  - 输出3,3,3。
    - 因为 foo()函数执行时生成了三个闭包，这三个闭包绑定了同一个变量 i，第三个闭包生成时，i 的值为 3。因此执行这三个闭包时都会输出 3。
修改为输出 0,1,2 的原则是让三个闭包绑定不同的变量，所以在生成闭包时就要区分出来.
  - 一种修改方法如下：
```js
var s = [];
function foo() {
        for(var i=0; i<3; i++){ 
            s[i] = function(index){
                return function(){
                    document.write(index);
                }
            }(i);
        }
}
foo();
s[0]();
s[1]();
s[2]();
```
+ 【解析】 +

  无
***

## Javascript 进阶题
- **Javascript 中 Map 结构的底层实现算法是什么？**
+ 【参考答案】 +

  哈希表＋单向链表＋红黑树

+ 【解析】 +

  Map的底层数据结构是哈希表＋单向链表＋红黑树，Map存入元素时，根据元素哈希值经过一系列复杂计算找到哈希表中最小可能被二次选择的位置并存入，但是后期再次插入元素时还是有可能选择到这个位置，此时第二个选择哈希表相同位置的元素会以链表元素的形式挂在到哈希表桶下，当挂载的链表元素个数达到8就会影响查询效率，所以会将单向链表转为红黑树。
***

- **eval 是做什么的？**
+ 【参考答案】 +

  - 它的功能是把对应的字符串解析成 JS 代码并运行；
  - 应该避免使用 eval，不安全，非常耗性能（2次，一次解析成 js 语句，一次执行）

+ 【解析】 +

  无
***

- **什么是闭包（closure），为什么要用它？**
+ 【参考答案】 +

  - 闭包指的是一个函数可以访问另一个函数作用域中变量。常见的构造方法，是在一个函数内部定义另外一个函数。内部函数可以引用外层的变量；外层变量不会被垃圾回收机制回收。
  - 优点：避免全局变量污染。
  - 缺点：容易造成内存泄漏。

+ 【解析】 +

  注意，闭包的原理是作用域链，所以闭包访问的上级作用域中的变量是个对象，其值为其运算结束后的最后一个值。例子：
```js
function makeFunc() {
    var name = "Mozilla";
    function displayName() {
        console.log(name); 
    }
    return displayName;
}
var myFunc = makeFunc();
myFunc(); //输出Mozilla
```
  - myFunc 变成一个 闭包。
  - 闭包是一种特殊的对象。它由两部分构成：函数，以及创建该函数的环境。环境由闭包创建时在作用域中的任何局部变量组成。在我们的例子中，myFunc 是一个闭包，由 displayName 函数和闭包创建时存在的 "Mozilla" 字符串形成。
***

- **什么是防抖和节流，区别是？**
+ 【参考答案】 +

  - 防抖：触发高频事件后 n 秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间。
  - 节流：高频事件触发，但在 n 秒内只会执行一次，所以节流会稀释函数的执行频率。
  - 区别： 函数节流不管事件触发有多频繁，都会保证在规定时间内一定会执行一次真正的事件处理函数，而函数防抖只是在最后一次事件后才触发一次函数。

+ 【解析】 +

  无
***

- **箭头函数和普通函数的区别，什么是 bind,apply, call区别是什么？**
+ 【参考答案】 +

  - 箭头函数和普通函数的区别是 this 的作用域不同，箭头函数的 this 指向定义时所在的对象，普通函数指向运行时对象（全局对象）
    - fun.call(thisArg, param1, param2, ...)
    - fun.apply(thisArg, [param1,param2,...])
    - fun.bind(thisArg, param1, param2, ...)
  - call,bind, apply 时绑定函数的指向的 this 对象，call 和 apply 的区别是，传参不同， call, apply 和 bind 的区别是 前者立即调用，后者只是绑定


+ 【解析】 +

  无
***

- **怎么使 objA.fun 输出 objB 的信息,有几种写法**
```js
let objA = {
    fun: function () {
        console.log('a=' + this.a + ",b=" + this.b);
    }
};
let objB = {
    a:1,
    b:2,
};
```
+ 【参考答案】 +

  - objA.fun.apply(objB);
  - objA.fun.bind(objB);objA.fun();
  - objA.fun.call(objB);objA.fun();

+ 【解析】 +

  无
***

- **var && let && const 的区别，说说 ES6 为什么要引入 let 关键字**
+ 【参考答案】 +

  - 区别：
    - var定义的变量，没有块的概念，可以跨块访问, 不能跨函数访问。
    - let定义的变量，只能在块作用域里访问，不能跨块访问，也不能跨函数访问。
    - const用来定义常量，使用时必须初始化(即必须赋值)，只能在块作用域里访问，且不能修改。
    - var可以先使用，后声明，因为存在变量提升；let必须先声明后使用。
    - var是允许在相同作用域内重复声明同一个变量的，而let与const不允许这一现象。
    - 在全局上下文中，基于let声明的全局变量和全局对象GO（window）没有任何关系 ;
    - var声明的变量会和GO有映射关系；
    - 会产生暂时性死区：
    - let /const/function会把当前所在的大括号(除函数之外)作为一个全新的块级上下文，应用这个机制，在开发项目的时候，遇到循环事件绑定等类似的需求，无需再自己构建闭包来存储，只要基于let的块作用特征即可解决，因为要解决 var 声明对象产生的问题.
  - 引入 let 的原因
    - var 是函数级作用域，而 let 是块作用域。 
    - var 存在变量提升，即变量可以在声明之前使用，值为 undefined，而 let 声明的变量如果在声明之前使用会抛出一个错误。
    - 另外 let 不允许重复声明变量。
    - ES6 规定暂时性死区和 let、const 语句不出现变量提升，主要是为了减少运行时错误，防止在变量声明前就使用这个变量，从而导致意料之外的行为。

+ 【解析】 +

  无
***

- **说说对 prototype 和 __proto __ 的理解**
+ 【参考答案】 +

  - prototype 是函数才有的属性，prototype 本身也是个函数对象；
    - __proto __ 是所有对象都有的属性
    - __proto __ 指向构造它的对象的对象的 prototype。例如：
```js
var o = new Object()
consle.log(o.__proto__ == Object.prototype) //true
```
  - o 是 Object 构造出的对象，o 的 __proto __ 指向 Object 的 prototype，这样 o 可以使用 Object.prototype 里面的方法。
  - 原型链：当 js 查找对象的属性时，先查找对象自身是否具有该属性，如果没有，就会去 __proto __ 指向的 prototype 对象上查找，直到找到或者 __proto __ 为 null.

+ 【解析】 +

  无
***

- **JS垃圾回收机制有那些？浏览器常用的回收机制是哪一种？怎么优化？**
+ 【参考答案】 +

  - 常用标记清除的方式。
  - 1) 标记清除：
这个算法把“对象是否不再需要”简化定义为“对象是否可以获得”。
这个算法假定设置一个叫做根（root）的对象（在 Javascript 里，根是全局对象）。定期的，垃圾回收器将从根开始，找所有从根开始引用的对象，然后找这些对象引用的对象。从根开始，垃圾回收器将找到所有可以获得的对象和所有不能获得的对象。
  - 1) 引用计数：
这是最简单的垃圾收集算法。此算法把“对象是否不再需要”简化定义为“对象有没有其他对象引用到它”。如果没有引用指向该对象（零引用），对象将被垃圾回收机制回收。
该算法有个限制：无法处理循环引用。两个对象被创建，并互相引用，形成了一个循环。它们被调用之后不会离开函数作用域，所以它们已经没有用了，可以被回收了。然而，引用计数算法考虑到它们互相都有至少一次引用，所以它们不会被回收。
  - 内存优化：手动取消内存的占用即可。
    - （1）堆内存：fn = null 【null：空指针对象】
    - （2）栈内存：把上下文中，被外部占用的堆的引用取消即可。

+ 【解析】 +

  无
***

- **同步和异步的区别?**
+ 【参考答案】 +

  - javascript 同步表示 sync
    - 指：代码依次执行 
  - javascript 异步表示 async
    - 指：代码执行不按顺序，‘跳过’执行，待其他某些代码执行完后再来执行，成为异步。

+ 【解析】 +

  无
***

- **异步编程有几种，优缺点是？**
+ 【参考答案】 +

  - 4种
  - 1：回调函数，优点是简单、容易理解和部署，缺点是不利于代码的阅读和维护，各个部分之间高度耦合（Coupling），流程会很混乱，而且每个任务只能指定一个回调函数,且容易形成回调地狱。
  - 2：时间监听，可以绑定多个事件，每个事件可以指定多个回调函数，而且可以“去耦合”（Decoupling），有利于实现模块化。缺点是整个程序都要变成事件驱动型，运行流程会变得很不清晰。
  - 3：发布/订阅，性质与“事件监听”类似，但是明显优于后者。
  - 4：Promises 对象.
    - 优点：使用链式调用可以将 异步操作 以 同步操作的流程 表达出来，减少回调地狱。
    - 缺点：promise 一旦新建就会立即执行，无法中途取消，当处于pending状态时，无法得知当前处于哪一个状态，是刚刚开始还是刚刚结束，如果不设置回掉函数，promise 内部抛出的错误就不会反应到外部

+ 【解析】 +

  无
***

- **setTimeout、Promise、Async/Await 的区别?**
+ 【参考答案】 +

  - settimeout 的回调函数放到宏任务队列里，等到执行栈清空以后执行。
  - Promise 本身是同步的立即执行函数， 当在 executor 中执行 resolve 或者 reject 的时候, 此时是异步操作， 会先执行 then/catch 等，当主栈完成后，才会去调用 resolve/reject 中存放的方法执行。
  - async 函数返回一个 Promise 对象，当函数执行的时候，一旦遇到 await 就会先返回，等到触发的异步操作完成，再执行函数体内后面的语句。可以理解为，是让出了线程，跳出了 async 函数体。

+ 【解析】 +

  无
***

- **什么是跨域问题 ？**
+ 【参考答案】 +

  - 同源策略：同源策略就是用来限制从一个源加载的文档或脚本与来自另一个源的资源进行交互。
  - 跨域问题 ：指不同源的文件脚本无法进行交互
      		
    | URL1                        | URL2                         | 说明                           | 是否允许通信                           |
    | --------------------------- | ---------------------------- | ------------------------------ | -------------------------------------- |
    | http://www.a.com/a.js       | http://www.a.com/b.js        | 同一域名下                     | 允许                                   |
    | http://www.a.com/lab/a.js   | http://www.a.com/script/b.js | 同一域名下不同文件夹           | 允许                                   |
    | http://www.a.com:8000/a.js  | http://www.a.com/b.js        | 同一域名，不同端口             | 不允许                                 |
    | http://www.a.com/a.js       | https://www.a.com/b.js       | 同一域名，不同协议             | 不允许                                 |
    | http://www.a.com/a.js       | http://70.32.92.74/b.js      | 域名和域名对应ip               | 不允许                                 |
    | http://www.a.com/a.js       | http://script.a.com/b.js     | 主域相同，子域不同             | 不允许                                 |
    | http://www.a.com/a.js       | http://a.com/b.js            | 同一域名，不同二级域名（同上） | 不允许（cookie这种情况下也不允许访问） |
    | http://www.cnblogs.com/a.js | http://www.a.com/b.js        | 不同域名                       | 不允许                                 |

+ 【解析】 +

  无
***

- **commonjs? requirejs? AMD|CMD|UMD 是什么?**
+ 【参考答案】 +

  - CommonJS 就是为 JS 的表现来制定规范，NodeJS 是这种规范的实现，webpack 也是以 CommonJS 的形式来书写。
    - 因为 js 没有模块的功能，所以 CommonJS 应运而生。但它不能在浏览器中运行。 
    - CommonJS 定义的模块分为:{模块引用 (require)} {模块定义 (exports)} {模块标识 (module)}
  - RequireJS 是一个 JavaScript 模块加载器。
    -  RequireJS 有两个主要方法 (method): define() 和 require()。
       > 这两个方法基本上拥有相同的定义 (declaration) 并且它们都知道如何加载的依赖关系，然后执行一个回调函数 (callback function)。与 require()不同的是， define() 用来存储代码作为一个已命名的模块。 因此 define()的回调函数需要有一个返回值作为这个模块定义。这些类似被定义的模块叫作 AMD (Asynchronous Module Definition，异步模块定义)。
  - AMD 是 RequireJS 在推广过程中对模块定义的规范化产出 AMD 异步加载模块。
    - 它的模块支持对象 函数 构造器 字符串 JSON 等各种类型的模块。 
    - 适用 AMD 规范适用 define 方法定义模块。
  - CMD 是 SeaJS 在推广过程中对模块定义的规范化产出
    - AMD 与 CDM 的区别：
      - 对于于依赖的模块，AMD 是提前执行(好像现在也可以延迟执行了)，CMD 是延迟执行。
      - AMD 推崇依赖前置，CMD 推崇依赖就近。
      - AMD 推崇复用接口，CMD 推崇单用接口。
      - 书写规范的差异。
  - umd 是 AMD 和 CommonJS 的糅合。
  - AMD 浏览器第一的原则发展 异步加载模块。
  - CommonJS 模块以服务器第一原则发展，选择同步加载，它的模块无需包装 (unwrapped modules)。这迫使人们又想出另一个更通用的模式UMD ( Universal Module Definition ), 希望解决跨平台的解决方案。UMD 先判断是否支持 Node.js 的模块( exports )是否存在，存在则使用 Node.js 模块模式。


+ 【解析】 +

  无
***


## Cocos Creator 基础
- **讲讲 cocos creator 与 ，egret, laya, unity 的区别。**
+ 【参考答案】 +

  cocos creator 和 cocos2dx，cocos2d 的区别
  - cocos creator 是一套包含编辑器在内的开发框架，其内部引擎使用了 cocos2d-x js 的精简修改版本。creator 使用 js/ts 语言开发，以内容创作为核心，脚本作为自定义组件添加到场景的节点上。
    - 【开发语言不同】：Cocos2d 是 Object-C 写的，Cocos2dx 是 C++ 写的，支持使用 C++、Lua 或 Java 进行开发。 Cocos Creator 是基于 cocos2dx 使用 electron 框架配合 vue 开发的一个编辑器，
    - 【运行平台不同】：Cocos2d 只能在 IOS 下运行，Cocos2dx 是跨平台的，适配 iOS、Android、HTML5、Windows 和 Mac 系统，功能侧重于原生移动平台。

+ 【解析】 +

  无
***

- **Cocos Creator 引擎的优缺点**
+ 【参考答案】 +

  优点：开发可视化，组件式开发更方便，缺点: 由于使用 js 开发，而非 c++ 等底层语言开发，造成性能开销较大，尤其是原生端平台尤为明显

+ 【解析】 +

  无
***

- **cocos运行时左下角的面板那些信息表示什么？**
+ 【参考答案】 +

  - frame rate: 帧率，测量单位为每秒显示的帧数 frames per second (fps)  或者 hz 大于16即可
  - frame time: 帧周期，每帧需要的时间，加入这个参数的原因是在 fps 上更加精准的监测画面的卡顿，该数字越稳定每帧进行渲染一致时间画面越流畅
  - drawCall：cpu 向 gpu 提交命令，数据，状态等调用的次数， cpu在这之前还得进行很多工作  检查渲染状态等，而 gpu 是需要等待 cpu 完成准备工作后，才进行本次渲染的，gpu的渲染速度是高于 cpu的提交速度的 如果drawCall 的数量太多，cpu 就会把大量的时间花费在提交drawCall 命令上  造成cpu 的一个过载
  - game Logic: 游戏逻辑需要的时间
  - renderer： 渲染器需要的时间

+ 【解析】 +

  无
***

- **一张 1024x1024,32 位的贴图，在内存里面占多少字节？**
+ 【参考答案】 +

  4M 字节

+ 【解析】 +

  1024x1024x32/8 = 4M 字节
***

- **creator 中需要动态载入的资源，放在工程的哪个子目录中**
+ 【参考答案】 +

  asserts/resources

+ 【解析】 +

  无
***

- **如果做一个射击游戏，需要发射大量的子弹，为了避免频繁的申请内存，一般会采取什么方法？**
+ 【参考答案】 +

  使用节点对象池来进行管理（NodePool）

+ 【解析】 +

  无
***

- **超多个场景切换卡这个性能怎么处理？**
+ 【参考答案】 +

  切换卡有可能加载资源较多，可以把碎图打成图集方式进行加载。

+ 【解析】 +

  无
***

- **编辑器界面超多个节点，导致开发太卡怎么处理？**
+ 【参考答案】 +

  - 分模块开发，把游戏分成多个工程模块开发，最后合并
  - 分场景开发，把游戏节点分成多个场景开发
  - 分预制体开发，把部分节点分成预制体，最后动态加载显示

+ 【解析】 +

  无
***

- **mate 文件是什么，作用是什么**
+ 【参考答案】 +

  mate 文件是 assets 目录下每一个文件/目录生成的同名文件，它的作用是用来管理游戏资源的

+ 【解析】 +

  无
***

- **列举出组件的生命周期回掉函数，并说明其调用时机**
+ 【参考答案】 +

  - onLoad 组件首次激活时触发
  - start 组件第一次执行 update 之前触发
  - update 每一帧渲染前调用
  - lateUpdate 所有组件 update 调用后调用
  - onDestroy 组件或所在节点调用了 destroy()时调用，并在当前帧结束时统一回收组件
  - onEnable 组件的 enabled 属性从 false 变为 true 时
  - onDisable 组件的 enabled 属性从 true 变为 false 时

+ 【解析】 +

  无
***

- **你了解九宫格技术吗？有什么优点？**
+ 【参考答案】 +

  - 九宫格是手动指定几个拉升区域范围，范围内中间的被拉升，4个角不会被拉升。比如聊天气泡，中间拉伸，4个角不拉升，不变，这样4个角能保持大小，中间也放大了，不会导致图片模糊。
  - 优点是：减少了图片在包体中的大小，同时九宫格由于可以任意大小拉升，并且4个角的形状不变，节约运行的内存。比如100x100的内容大小，如果用10x10的九宫格拉伸。

+ 【解析】 +

  无
***

- **帧动画和骨骼动画的优点和缺点？**
+ 【参考答案】 +

  - 帧动画优点：性能好，直接换图即可，不用计算。缺点：内存高，动作分解了好多图片。
  - 骨骼动画优点：内存资源占用少，只有一个一个的骨骼，动画代码控制。缺点：动画需要代码计算，所以性能比帧动画要差。

+ 【解析】 +

  - 帧动画是是把一个动作分成了几个图，把这些图连起来形成的动画就是帧动画。很多角色的移动和行走，攻击等很多都是帧动画做的。
  - 骨骼动画是把一个角色分成了几个部分,叫做骨骼,比如人(头，手，身体，角), 然后使用专业的工具来调运动参数，比如行走，手摆动，脚摆动，通过代码来控制手摆动，脚摆动。
***

## cocos 深度挖掘

- **什么是 draw call? 为什么减少 draw call 可以优化游戏速度。如何减少 draw call? 在 creator 中如何做**
+ 【参考答案】 +

  - cpu 向 gpu 提交一次绘制的图元(顶点)集合即为 draw call。
  - draw call 太多就会让 gpu 反复切换渲染状态，cpu 需要不断提交数据到 gpu，降低帧数。减少 draw call 就要对需要绘制的图元进行合并，这样就要保证这些图元的渲染状态（材质）是一样的，且这些图元必须是在一起绘制的（中间不要插入别的材质的图元）。
  - 在 creator 中可使用图集合并工具如 texture packer 将 sprite 合并成到一张贴图上，并且安排节点的绘制顺序，将使用同一张贴图的节点放到一起绘制。
  - 解决办法是尽可能合批处理,即将小的 dc 合并成大的 dc, 将碎图 合并成大图,静态合图,动态合图,textuepaker打包图集
  - 1. 尽量将处于同一界面（UI）下的相邻且渲染状态相同的碎图打包成图集
  - 2.改变渲染状态会打断渲染合批，例如改变纹理状态（预乘、循环模式和过滤模式）或改变 Material（材质）、Blend（混合模式）等等，所以使用自定义 Shader 也会打断合批。
  - 3.合理控制图集最大尺寸，避免单个图像加载时间过长。
  - 4.尺寸太大的图像没有必要打进图集（如背景图）而且图像尺寸越大，加载的时间也越长，而且是非线性的那种增长，例如加载一张图像比加载两张图像所消耗的时间还长。，得不偿失。
  - 5.间距保持默认的 2 并保持勾选扩边选项，避免图像裁剪错误和出现黑边的情况。

+ 【解析】 +

  详细教程：https://forum.cocos.org/t/cocos-creator-drawcall/95043
***

- **cocos 中 sprite 的 Blend 属性，Src Blend Factor 设置为 SRC_ALPHA, Dst Blend Factor 设置为 ONE_MINUS_SRC_ALPHA 是什么意思，有什么作用？**
+ 【参考答案】 +

  - 这表示绘制这个 Sprite 时，和 Frame buffer 上面已经有的像素进行混合的公式参数。
  - 以上参数设置的公式为: FinalColor = SpriteColor(RGB) * SpriteAlpha + BufferColor(RGB) * (1-SpriteAlpha)。效果是标准的透明图元渲染。

+ 【解析】 +

  无
***

- **减小纹理占用内存的方法有？**
+ 【参考答案】 +

  - 减小图片的尺寸，在满足视觉要求的情况下，尽可能地缩小图片尺寸，比如将一张 256x256 图片缩小成 128x128 尺寸，就减少了 75% 的内存占用。
  - 降低通道位数，比如 RGB888 格式的图片转换为 RGB565 格式。但是这也依赖于具体的解码方法，现在小游戏引擎，会把图片资源都解码成 RGBA8888 格式，那么即使将 RGB888 格式转换为 RGB565 格式，也不会降低解码后纹理数据占用的内存。
  - 使用压缩纹理，但是有几个限制点：首先压缩纹理是有损压缩，会降低一些图片质量（一般不明显）；其次各个平台、不同图形 api 支持的压缩纹理格式，也不尽相同。比如浏览器上可以支持 s3tc 纹理，手机端支持 etc2 纹理（需要支持 opengles3.0），ios 系统支持 pvrtc 纹理。

+ 【解析】 +

  - 像 pngquant、tinypng 等采用 color reduction 方法压缩图片的工具，能够减小文件大小，加快加载速度，编码数据占用的内存也更小。但是在解码方式不变的情况下，并不能减小解码后的图片内存占用大小。
  - [参考](https://forum.cocos.org/t/topic/85287)
***

- **”优化多次创建“ 和 ”优化单次创建“ “自动调整” 的优化策略有什么不同？**
+ 【参考答案】 +

  - 自动调整：实例化时优先走普通实例化的流程，若实例化超过了 3 次，则在之后包括第 3 次会使用 JIT 优化实例化流程。
  - 优化单次创建性能：实例化只走普通实例化流程。
  - 优化多次创建性能：实例化只走 JIT 优化实例化流程。

+ 【解析】 +

  [让实例化快 50% 的原理，“拖节点”性能会更好吗？](https://forum.cocos.org/t/cocos-creator-50/92957)
***

- **JIT 是什么，JIT实例化流程是怎样的？ JIT 优化的原理是什么？**
+ 【参考答案】 +

  - JIT是一种实例化对象的方案
  - JIT流程大概是创建一个空对象作为 clone 对象，判断被克隆对象是否是 CCClass 对象（引擎内 cc.Node / cc.Component / cc.Prefab 等，使用了 @ccclass 装饰器的类都属于 CCClass 对象），如果是 CCClass 对象走 CCClass 对象克隆函数，不是则走普通对象克隆函数
  - 优化原理：把整个实例化过程通过字符串拼接，生成一个没有遍历，没有分支的实例化函数。

+ 【解析】 +

  [实例化参考](https://forum.cocos.org/t/cocos-creator-50/92957)
***

- **了解引擎的底层吗？**
+ 【参考答案】 +

  引擎底层是由 c/c++ 编写的 cocos2d-x 框架，并整合 JavaScript 引擎，同时提供一套 JavaScript 与 c++ 的交互接口称之为 JSB（全称 JavaScript Binding），引擎提供统一的 JavaScript API 接口用于游戏内容的生产。

+ 【解析】 +

  无
***

- **了解2.0引擎渲染原理吗？比如 cocos 是怎么把一张精灵图片渲染到屏幕上去的？**
+ 【参考答案】 +

  - 首先引擎会先加载贴图到内存中，得到内存的首地址和 size 包装成 buffer 
  - 然后 texture 类使用刚刚的 buffer 生成 texture 对象创建 sprite 句柄生成 texture
  - 接着将 texture 赋值给 sprite 并且完成其他的设置操作 size scale alpha 等。
  - 接着挂载到节点树渲染前的准备工作，renderflow visit 到当前节点，将顶点数据、文理数据、shader 等渲染相关数据放到 renderscene 队列开始渲染，
  - 然后 renderengine 中 api 调用开辟显存，把数据上传到 gpu，开始渲染流程。
  - 最后显示渲染结果到屏幕上。
  - 一次资源的加载流程底层的调用到的函数如下：
    - cc.loader.loadRes()
    - CCLoader.load()
    - loading-items.append
    - pipeline.flowIn
    - pipeline.flow
    - pipe.handle（pipe 对应于 asset-loader、downloader、loader）
    - 加载完成，进行回调

+ 【解析】 +

  [参考](https://forum.cocos.org/t/cocoscreator/77954)
***

- **讲一下渲染流。**
+ 【参考答案】 +

  答案

+ 【解析】 +

  无
***

- **对于多图集怎么优化dc**
+ 【参考答案】 +

  使用动态和图。

+ 【解析】 +

  参考[江兰白景图技术分享](https://forum.cocos.org/t/topic/121618/1)
***

- **你对label字体的渲染模式了解有哪些?**
+ 【参考答案】 +

  三种缓存模式

+ 【解析】 +

  - [浅析Label 的三种缓存模式](https://forum.cocos.org/t/topic/126172)
  - [【乐府】突破Label的缓存模式之(1) BITMAP](https://forum.cocos.org/t/label-1-bitmap/97573)
  - [【乐府】突破Label的缓存模式(2)-CHAR的无限模式](https://forum.cocos.org/t/label-2-char/97766)
***

- **小游戏包体过大怎么处理？**
+ 【参考答案】 +

  进行合并资源，压缩资源，进行远程加载

+ 【解析】 +

  无
***

- **热更新怎么处理？**
+ 【参考答案】 +

  答案

+ 【解析】 +

  无
***

- **你在使用引擎过程中遇到过什么难题，如何解决的，研究到哪一步了？(探寻深度)**
+ 【参考答案】 +

  答案

+ 【解析】 +

  无
***




## 【模板】
- **题目**
+ 【参考答案】 +

  答案

+ 【解析】 +

  无
***
## 【模板】


如何优化Cocos Creator 包体体积。
如何优化图片文件体积?
如何优化声音文件体积？
setting.js 大小与什么相关？
如何优化引擎代码体积?
如何优化字体字库文件大小?
Cocos creator如何做资源管理。
cc.Sprite如何显示远程服务器上的图片？
包体体积超过4M，如何处理？
如何实现第三方远程资源部署?
loadRes与load有和区别？
如何卸载掉资源?
什么是异步加载资源？对写代码有和影响?
Cocos Creator如何编写单例模式。
如何实现单例模式?
单例是否要扩展继承自组件类? 为什么?
组件实例的单例如何保证全局唯一，并且不随场景切换而改变。
如何实现常驻节点？不随场景切换而消亡。
列举一下什么情况下你会用常驻节点？
Cococs creator 如何使用物理引擎?
物理引擎与碰撞系统有什么区别，用哪个?
你是如何开启一个物理引擎的。有哪些步骤？
刚体类型Static, kenimatic, Dynamic有什么区别？
物理碰撞器的性能开销排序是怎么样的？
如何给刚体一个力?
线性速度是什么，角速度是什么，摩擦力如何设置?
Trigger有什么作用？
物理引擎如何做碰撞检测，触发器如何做碰撞检测?
物理引擎高速物体的穿越如何发生的？如何解决？
Cocos Creator Label的原理与如何节约Drawcall?
Label 是底层是如何绘制的。？
每个Label一个drawcall, 如何优化?
性能参数Drawcall是什么意思？降低drawcall有哪些好处？
2D游戏开发降低drawcall要注意哪些事情？
在项目里面，你是如何分类图片打包图集的？有什么好处?
如何组织场景节点的顺序，来降低Drawcall,有哪些注意的点?
Cocos Creator 背包系统可能会需要哪些优化？
背包系统要显示的数据过多怎么办？
背包系统里面drawcall 比较高怎么办？
背包系统如何做到数据显示分离? 你如何设计?
背包系统文字过多，导致FPS降低，如何优化？
背包系统弹出框的动画是如何做的？
Cocos Creator WebSocket与http://Socket.IO分别是什么？
WebSokcet是什么？为什么creator用websocket
http://Socket.IO 是什么？如何使用？
项目中到底用WebSocket和socket.io, 你怎么看？
微信小游戏能否使用UDP？
WSS 是什么？WebSocket 如何支持?
WebSocket发送数据有哪些模式，如何设置?
Cocos Creator如何内置protobuf JS版本?
说说protobuf 是什么？
cocos creator如何支持protobuf,具体如何操作？
protobuf 与json和xml相比有哪些优势？
websocket 发送protobuf数据要如何配置才正确？
Cocos Creator 材质, shader 分别是什么？
cc.Sprite是如何绘制一个物体的？
材质是什么？有什么作用？
Shader是什么？如何切换Shader?
cocos creator 2D Shader 主要有哪些部分组成？
如何实现一个置灰Shader?
set pass call是什么？
Cocos creator 固定宽度与固定高度的底层原理是什么？Cocos creator是如何做适配的?
为什么会有固定高度或固定宽度的设置？
什么是逻辑坐标，什么是像素坐标？
逻辑坐标怎么来的？逻辑坐标如何到像素坐标？
游戏中需要适配的东西是什么？游戏地图到底怎么适配？
刘海屏，水滴屏怎么适配？
到底采用固定宽度还是高度，设计分辨率选多少合适？
Widget有什么作用？分别用在什么时候？
Cocos Creator 图集打包有什么意义，我们一般在项目里面怎么规划图集？
Cocos Creator 如何做游戏框架，能让多人很好的协作,代码好维护?
Cococs creator 骨骼动画与帧动画的优缺点是什么？
如何使用Cococs Creator制作一个地图编辑与寻路导航系统?
Cocos Creator 节点池的基本原理是什么？如何使用?
Cocos Creator 如何设计热更新系统, 如何设计大厅与子游戏模式？
Cocos Android里 runOnGLThread是什么意思？
Cocos Creator 如何设计自动化打包发布脚本?

