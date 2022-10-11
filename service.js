/*
 * @features: 功能
 * @description: 说明
 * @Date: 2022-06-09 00:01:37
 * @Author: judu233(769471424@qq.com)
 * @LastEditTime: 2022-06-15 23:44:08
 * @LastEditors: judu233
 */
//使用Koa容器打包
// var childProcess = require('child_process');
// const Koa = require('koa');
// const serve = require("koa-static");
// const app = new Koa();
// const path = require('path');
// path.join(__dirname, 'docs');
// app.use(serve(__dirname + "/docs", {
//     extensions: ["html"]
// }));
// app.listen(3000, function () {
//     let port = `http://localhost:${this.address().port}/`;
//     console.log('启动nodejs成功,网站运行在:');
//     console.log(port);
//     // 使用默认浏览器打开
//     childProcess.exec(`start ${port}`)
// });

//使用express容器打包
var childProcess = require('child_process');
const express = require('express');
const app = express();
const path = require('path');
app.on('ready', function () {
    console.log('进入页面了');
});
app.use(express.static(path.join(__dirname, '/')));
app.listen(3000, function () {
    let port = `http://localhost:${this.address().port}/`;
    console.log('启动nodejs成功,网站运行在:');
    console.log(port);
    // 使用默认浏览器打开
    childProcess.exec(`start ${port}`)
});