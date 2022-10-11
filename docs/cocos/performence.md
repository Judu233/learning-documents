<!--
 * @features: 功能
 * @description: 说明
 * @Date: 2022-06-02 23:55:16
 * @Author: judu233(769471424@qq.com)
 * @LastEditTime: 2022-07-18 22:38:55
 * @LastEditors: judu233
-->
# cocos 性能优化
优化游戏内容，要知道什么是优化，优化那些东西，怎么去优化。

## 1.性能优化
### 首先什么是优化，为什么要做性能优化？
性能：是一种优秀的能力。唤醒快、运行持久、稳定。表征表现为加载快，手机不发热，运行流畅，不卡顿。
- 所以性能优化的终极目标是，让你的用户感觉很爽，当然这种爽你不能以牺牲自己为代价，要考虑成本和副作用。
- 我们要优化性能，首先要搞明白是哪些因素会影响性能？是体力不行就得加强锻炼，是操劳过度就应该学会休息。在我们的游戏中，哪些因素会影响性能呢？
  - 包体大小
  - 加载速度
  - 渲染速度
  - 运行速度

注意由于edge浏览器在不点击或产生交互状态下，由于为了节省性能，会出现渲染大量物体掉帧的状态，但是只要点击或者操作激活后就会正常

### 优化内容
- 包体大小资源优化：图片、声音、动画，代码等。
  - 图片的优化：
    - 避免使用大尺寸图片，在保证清晰度的情况下减小尺寸
    - 纯色图片或有规律的图片用 1px 的图片
    - 不透明的背景图尽量使用 jpg 格式
    - 带圆角的按钮图片尽量用九宫格形式展示
    - 图片大小不要超过 2048x2048。(超出后需要做切图处理)
    - 使用 tinypng 压缩图片
    - 使用动态合批，静态合批，打图集的方式
  - 音效资源优化：
    - 【[在线压缩](https://www.aconvert.com/cn/audio/)】音乐的大小，数量，声道，采样率。
  - 字库优化
    - 合理设置 label 组件配置选项
    - 字库压缩 fontmin，特定的数量固定的文字
    - 特效文字尽量使用位图字体
  - 预制体优化
    - 合理拆分 Prefab， [让实例化快 50% 的原理，“拖节点”性能会更好吗？](https://forum.cocos.org/t/cocos-creator-50/92957)
    - 合理延迟加载资源
    - 合理选择优化策略
  - 代码
    - 合理剪裁不用的模块
    - 不用动态加载的资源不要放在 resources 文件夹下
- 加载速度
  - 优化节点树减少节点数量
  - 尽量动态加载卸载 Prefab 资源
- 渲染速度
  - 合并渲染批次，降低 DrawCall，提升渲染性能，熟悉 [GPU 渲染流程浅析](https://forum.cocos.org/t/topic/135698)
- 运行速度
  - 内存优化 
    - 合理管理动态资源的加载以及释放
    - [CocosCreator 内存与性能优化](https://forum.cocos.org/t/topic/100971)
    - [优化之压缩纹理让游戏内存立减50%](https://forum.cocos.org/t/topic/106919)
    - [突破动态合图-你真的把动态合图用对了吗？](https://forum.cocos.org/t/topic/98157)
    - [资源释放 [终极方案] 欢迎大家讨论](https://forum.cocos.org/t/topic/136796)
  - CPU 占用及性能优化
    - 绝对避免游戏中出现死循环
    - 控制游戏帧率
    - H5 游戏 JS/ts 代码级别优化
    - JS 异常捕获, 抛出异常效率就会直线下降, 所以尽量避免在 for 循环中 try
    - 全局变量的慎重使用


> 参考文章：
> - [Cocos Creator性能调优优化集锦](https://zhuanlan.zhihu.com/p/266810242)
> - [项目优化](https://www.jianshu.com/p/36cad9c13ab1)
> - [DrawCall优化](https://forum.cocos.org/t/topic/95043) 
> - [使用性能面板调优](https://forum.cocos.org/t/topic/95040)

### 了解熟悉浏览器
1. 调试 js 入门，运行代码片段，实时表达式监视 js 中的更改，控制台输入打印技巧
2. 分析运行时性能入门
3. 资源加载分析

参考以下文章入门：
- [Chrome 控制台性能调试](https://forum.cocos.org/t/topic/131318)
- [edge 控制台在最全文档](https://docs.microsoft.com/zh-cn/microsoft-edge/devtools-guide-chromium/overview)

### 了解 js 浏览器相关的知识
- [js GC垃圾回收机制](https://juejin.cn/post/6971245488058302477)
- [了解浏览器 requestAnimationFrame 的运行机制](https://zhuanlan.zhihu.com/p/145793042)
- [js内存泄漏](https://juejin.cn/post/6844903917986267143)
- [浏览器渲染优化](https://juejin.cn/post/6945273913068765197)
- [游戏帧数很高，为什么还是会卡顿？](https://zhuanlan.zhihu.com/p/93010489)
- [优化Web动画](https://blog.csdn.net/qq_43523725/article/details/115190046)
- [优化动画卡顿](https://juejin.cn/post/6844903796817002504)


### 优化文章
#### 社区征文优化系列文章
- [性能优化1-列表渲染优化｜社区征文](https://forum.cocos.org/t/topic/133526)
- [性能优化2-TiledMap地图优化-裁剪区域共享(Share Culling)](https://forum.cocos.org/t/topic/134525)
- [性能优化3-分帧寻路+寻路任务统一管理](https://forum.cocos.org/t/topic/134884)
- [性能优化4-Sprite颜色数据去除](https://forum.cocos.org/t/topic/135235/1)
- [性能优化5-MutilTexture地图物件多图渲染合批](https://forum.cocos.org/t/topic/136349)

#### 其他优化文章参考
- [动物餐厅项目内存优化思路分享](https://forum.cocos.org/t/topic/98999)
- [《万宁传说：优化请教 | 社区征文》](https://forum.cocos.org/t/topic/132936)
- [江兰白景图技术分享](https://forum.cocos.org/t/topic/121618/1)

#### 3.x优化文章
- [dc性能优化](https://forum.cocos.org/t/topic/132490)
- [CocosCreator 3.3.1 2D游戏在原生Android上的渲染耗时很长，该如何处](https://forum.cocos.org/t/topic/122523/4)
- [Cocos Creator 3.x 性能调优之《如何优化2D/3D Drawcall》](https://forum.cocos.org/t/topic/132490)
- [腾讯光子 《最强魔斗士》3D 开发优化经验分享](https://forum.cocos.org/t/3d/92181/1)
- [高中低端机型性能适配方案+BenchMark+性能检测 |社区征文](https://forum.cocos.org/t/topic/133327)

### 其他优化
- [【乐府互娱】 优化配置等 prefab 的加载解析速度](https://forum.cocos.org/t/topic/134363)
- [CocosCreator ScrollView 性能优化技巧](https://forum.cocos.org/t/cocoscreator-scrollview/63262)
- [分享一个游戏DrawCall分析利器-SpectorJS](https://forum.cocos.org/t/drawcall-spectorjs/86049)




