/*
 * @features: 功能
 * @description: 说明
 * @Date: 2022-06-10 13:15:11
 * @Author: judu233(769471424@qq.com)
 * @LastEditTime: 2022-06-10 13:15:22
 * @LastEditors: judu233
 */
!function(){function e(){for(var o=Docsify.dom.getNode("#main"),e=Docsify.dom.findAll(o,"script"),n=e.length;n--;){var i,t=e[n];t&&t.src&&(i=document.createElement("script"),Array.prototype.slice.call(t.attributes).forEach(function(o){i[o.name]=o.value}),t.parentNode.insertBefore(i,t),t.parentNode.removeChild(t))}}window.$docsify.plugins=[].concat(function(o){o.doneEach(e)},window.$docsify.plugins)}();
