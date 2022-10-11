<!--
 * @features: 功能
 * @description: 说明
 * @Date: 2022-05-23 08:57:47
 * @Author: judu233(769471424@qq.com)
 * @LastEditTime: 2022-06-02 14:47:03
 * @LastEditors: judu233
-->
# 值类型和引用类型的区别
[具体区别](https://zhuanlan.zhihu.com/p/358825256)
总结：
- 堆是按需申请、手动分配的，需要用户手动回收。一般速度比栈慢；存储地址通常是链式的，内存较大不会溢出
- 栈是由系统自动分配的，一般速度较快；存储地址是连续且存在有限栈容量，会出现溢出现象

- C#的值类型包括：结构体（数值类型、bool型、用户定义的struct），enum，可空类型。
- C#的引用类型包括：数组，class、interface、delegate，object，string。

值类型是存储在堆上的，是一个具体的值，由系统自动分配内存和清理
引用类型是存储在栈上的，

# struct 和 class 的区别
struct 是值类型，class 是对象类型
struct 不能被继承，class 可以被继承
struct 默认的访问权限是public,而class 默认的访问权限是private.
struct总是有默认的构造函数，即使是重载默认构造函数仍然会保留。这是因为struct的构造函数是由编译器自动生成的，但是如果重载构造函数，必需对struct中的变量全部初始化。并且struct的用途是那些描述轻量级的对象，例如Line,Point等，并且效率比较高。class在没有重载构造函数时有默认的无参数构造函数，但是一被重载，默认构造函数将被覆盖。
struct的new和class的new是不同的。struct的new就是执行一下构造函数创建一个新实例再对所有的字段进行Copy。而class则是在堆上分配一块内存然后再执行构造函数，struct的内存并不是在new的时候分配的，而是在定义的时候分配

> 参考资料：
>
> - [https://danielilett.com/2019-10-07-unity-tips-4-scriptableobjects/](https://danielilett.com/2019-10-07-unity-tips-4-scriptableobjects/)

