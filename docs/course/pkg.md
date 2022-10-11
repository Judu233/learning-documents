<!--
 * @features: 功能
 * @description: 说明
 * @Date: 2022-06-09 14:31:28
 * @Author: judu233(769471424@qq.com)
 * @LastEditTime: 2022-06-16 00:02:49
 * @LastEditors: judu233
-->
# 使用 pkg 工具打包 web 项目
!> [pkg 官网](https://github.com/vercel/pkg#readme)
## 打包目的
- 由于使用 [docsify](https://docsify.js.org/#/zh-cn/quickstart) 搭建了一个运行的本地网站，想每次直接双击打开网站，但是又不想挂在网上，并且不用每次执行 npm 命令。

## 调查资料
- 由于 docsify 搭建的项目本质算是一个基于 nodejs 运行动态解析本地静态文件的服务，和其他 web 项目一样，所以只需要一个 nodejs 打包器就可以，然后搜一下 nodejs 打包成 exe 的工具，然后搜到打包为可执行文件 exe 的工具有 [electron](https://www.electronjs.org/)、[NW.js](https://nwjs.io/)、[pkg](https://github.com/vercel/pkg#readme)、[nexe](https://github.com/nexe/nexe)、[node-packer](https://github.com/pmq20/node-packer) 等，其中 electron，NW，pkg 比较热门，很多都搜的到对应的文章教程

## 选择理由
- 去看了对应文档，发现使用 pkg 打包最合适，首先我希望的是在浏览器打开，而不用本地弹出一个客户端程序（如果不弹出，可能需要额外配置，需要去学习 api，增加学习成本）而 pkg 打包只是执行js脚本所以更适合。

## pkg 介绍
- 什么是 pkg ？  
pkg是一个Node.js的单命令二进制编译器，在容器内使用而创建的，不在无服务器环境中使用，通过命令行将Node.js项目打包为可执行文件，即使在未安装Node.js的设备上也可以运行该可执行文件。
- pkg 打包原理  
简单来说，就是将js代码以及相关的资源文件环境和依赖都打包到可执行文件中，使它能够独立与node各种环境和依赖运行。

## 开始配置
### 安装 pkg 框架
首先确保 nodejs 环境正常 npm 正常使用，然后安装 pkg 工具包
```js
npm install -g pkg 
```
> 安装完后可以通过 pkg -h 查看相关命令

### 安装服务端容器
>由于 docsify 是运行在服务器环境的，直接打包无法运行的，会有跨域等等各种问题，所以需要一个容器。运行服务端的容器比较热门的有 [express](https://www.expressjs.com.cn/)、[koa](https://www.koajs.com.cn/)、[egg](https://www.eggjs.org/zh-CN/)、[nest](https://nestjs.com/)、[midway](https://www.midwayjs.org/) 等。  

- 安装服务端框架（ 随便选择其中一种即可，差别不大）
  - 使用 express 
```
npm i -g express 
```
  - 使用 koa
```
npm i -g koa koa-static 
``` 

- 配置打包入口 service.js（在项目根目录创建即可）
  - express
```js
var childProcess = require('child_process');
const express = require('express');
const app = express();
const path = require('path');
app.on('ready', function () {
        console.log('进入页面了');
});
app.use(express.static(path.join(__dirname, 'docs')));
app.listen(3000, function () {
        let port = `http://localhost:${this.address().port}/`;
        console.log('启动nodejs成功,网站运行在:');
        console.log(port);
        // 使用默认浏览器打开
        childProcess.exec(`start ${port}`)
});
```
  - koa
```js
var childProcess = require('child_process');
const Koa = require('koa');
const serve = require("koa-static");
const app = new Koa();
const path = require('path');
path.join(__dirname, 'docs');
app.use(serve(__dirname + "/docs", {
        extensions: ["html"]
}));
app.listen(3000, function () {
        let port = `http://localhost:${this.address().port}/`;
        console.log('启动nodejs成功,网站运行在:');
        console.log(port);
        // 使用默认浏览器打开
        childProcess.exec(`start ${port}`)
});
```

- 使用 pkg 打包有3种使用方法
  - 1. 直接指定一个脚本文件打包，例如 pkg index.js;
  - 2. package.json，例如 pkg package.json，这时会使用 package.json中 的 bin 字段作为入口文件；
  - 3. 一个目录，例如【 pkg . 】这时会寻找指定目录下的 package.json 文件，然后在找 bin 字段作为入口文件。

> 这里推荐使用在 package.json 中的 pkg 字段中指定打包参数，使用 npm 快捷命令来执行打包过程
- package.json 打包配置
```js
{
 ...
  "bin": "service.js",             // 要打包的脚本
  "pkg": {
    "scripts": ["docs/**/*.js"],     // 要打包到 exe 里的脚本
    "assets": ["docs/**/*"],         // 要打包到 exe 里的文件
    "outputPath": "dist"           // 输出路径
  }, 
  "scripts": { 
    "pkg-build": "pkg . -t win"    // 可以使用的 npm 脚本命令
  },
 ...
}
```

- 执行打包命令
```
npm run pkg-build
```

- 修改打包的 exe 的图标 icon
使用 [Resource Hacker](http://www.angusj.com/resourcehacker/) 程序替换ico  
[参考教程](https://blog.csdn.net/qq_21460229/article/details/104131957)
[脚本参考](https://www.vanfon.net/html/1580.html)


### 遇到的问题记录
- 点击 .exe，发现有些接口返回 404 Not Found， Can't get / 
```js 
app.use('/', express.static('docs')); //这里的路径不对
```
  - 因为 pkg 没有把这些文件给打包进去，他只会打包使用 require 或者 通过 __filename 和 __dirname 的文件
所以需要修改为   
```js  
app.use('/', express.static(path.join(__dirname, 'docs'))); 
``` 
   
- 命令行报错 connect ETIMEDOU
```
> pkg@x.x.x
> Fetching base Node.js binaries to PKG_CACHE_PATH
  fetched-v10.15.3-win-x64     [                    ] xx%
> Error! connect ETIMEDOUT 13.229.188.59:443
> Asset not found by direct link:
  {"tag":"v2.6","name":"uploaded-v2.6-node-v10.15.3-win-x64"}
```
  - 这时候可能由于网络的原因，执行打包会超时报错，因为要下载外网资源，这时候我们可以手动下载选择自己电脑对应的版本进行下载。
然后把下载的文件复制到 C:\Users\Administrator\.pkg-cache\v2.6 这个文件目录下，记得同时修改文件名称，我这里下载的是uploaded-v2.6-node-v10.21.0-win-x64，那么将它重名为 fetched-v10.21.0-win-x64。然后重新执行打包命令，即可成功打包。


- 命令行报错 spawnSync patch ENOENT  
```
> Applying patches   Error: spawnSync patch ENOENT
```
  - 可能是 nodejs 环境的问题，重新安装 nodejs 即可
  - [github 提问](https://github.com/vercel/pkg/issues/1337)

- 打包遇到 %1: node_modules\open\xdg-open
尽量把工具包都安装到全局去，项目的包全部删掉

### 动态修改配置
动态修改配置文件 如何将项目的配置文件，不打包进 exe 文件中，在外面灵活的修改呢？这里我们已服务启动的端口为例
在 dist 输出目录下新建 conf.js 文件：
```js
const requestConf = {url: 'localhost',  port: 8080}
module.exports = requestConf;
```
修改 services.js 文件：
```js
const requestConf = require(path.join(process.cwd(), 'conf.js'));// 读取exe目录下的config
```
process.cwd()表示当前运行所在目录

> 参考文章：  
> [NODE打包交付第三方使用之PKG](https://juejin.cn/post/7018016638402297886)  
> [使用pkg打包Node.js应用](https://juejin.cn/post/6844903569062117384)   
> [Egg.js + pkg 打包可执行程序踩坑笔记](https://juejin.cn/post/6855129005730775053)  
> [node pkg 打包一个为一个可执行程序](https://blog.csdn.net/XuHang666/article/details/83587953)  
> [Pkg —— 打包node为可执行文件(.exe)工具](https://juejin.cn/post/6844903928052580359)  
> [使用pkg打包你的前端应用为exe可执行文件](https://juejin.cn/post/6925348130078605325)  
> [pkg打包node应用完全指南](https://juejin.cn/post/6982133816001462285)  


