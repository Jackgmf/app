/*
* @Author: Administrator
* @Date:   2017-08-15 09:46:55
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-15 19:02:09
*/

'use strict';
//封装 鼠标事件
window.tool = {};
window.tool.captureMouse = function(elem,mousedown,mousemove,mouseup){
   //1.获取坐标的方法 getPoint
   function getPoint(e){ // e -> event
     e = window.event||arguments[0];
     /*计算坐标 X,Y*/
     /*将当前的鼠标坐标值减去元素的偏移位置  返回的是  鼠标相对于elem元素的坐标*/
     //pageX - 指鼠标在页面上的位置，以页面左侧为参考点
     //pageY - 指鼠标在页面上的位置，以页面上方为参考点
     //clientX - 指可视区域内离左侧的距离，以滚动条滚动到的位置为参考点，各个浏览器相同
     //即当前有滚动条时  clientX 小于 pageX
     //offsetLeft - 盒子距离左边页面的距离
     //offsetTop - 盒子距离上边页面的距离
     var x = (e.pageX||e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft)
         x -=elem.offsetLeft;
     var y = (e.pageY||e.clientY+document.body.scrollTop+document.documentElement.scrollTop)
         y -=elem.offsetTop;
     return {dx:x,dy:y};
   };
   if(!elem){return};

   /*为elem绑定mousedown事件*/
   elem.addEventListener("mousedown",function(e){
     e.point = getPoint(e);
     mousedown && mousedown.call(this,e)

   });


   /*为elem绑定mousemove事件*/
    elem.addEventListener("mousemove",function(e){
     e.point = getPoint(e);
     mousemove && mousemove.call(this,e)

   });

   /*为elem绑定mouseup事件*/
    elem.addEventListener("mouseup",function(e){
     e.point = getPoint(e);
     mouseup && mouseup.call(this,e)

   });


};