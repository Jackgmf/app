/*
* @Author: Administrator
* @Date:   2017-07-28 10:35:35
* @Last Modified by:   gongmingfei
* @Last Modified time: 2017-07-30 18:14:47
*/
 $(function(){
  var h=$(".auto4 .left4 .sa .lun .box1 a").height();
  var i = 1;
  var count =$(".auto4 .left4 .sa .lun .box1 a").length;

 
 function shi(){
  if(!$(".auto4 .left4 .sa .lun .box1").is(".animated")){
  if(i==count){
  $(".auto4 .left4 .sa .lun .box1").animate({"margin-top":0});
       i=1;
  }else{
  $(".auto4 .left4 .sa .lun .box1").animate({"margin-top":"-="+h});
    i++;
  };
 
 };

};

var t = setInterval(shi,2000); 

$(".auto4 .left4 .sa .lun").mouseover(function(event) {
  /* Act on the event */
   clearInterval(t);

}).mouseout(function(event) {
  /* Act on the event */
 t = setInterval(shi,2000);
})


 });







$(function(){
  var w = $(".auto4 .left4 .e1 .f1 img").width();
  var i=1;
  var count = $(".auto4 .left4 .e1 .f1 img").length;


 
 function points(n){
 	$(".auto4 .left4 .e1 .f2 span").eq(n).addClass('dian1')
 	.siblings(".auto4 .left4 .e1 .f2 span")
 	.removeClass('dian1').addClass('dian2');
 }
  points(0);

$(".auto4 .left4 .e1 .f2 span").click(function(){
  if(!$(".auto4 .left4 .e1 .f1").is(":animated")){
  var index = $(this).index();
  $(".auto4 .left4 .e1 .f1").animate({"margin-left":-index*w});
  points(index);
  i = index+1;
  };
});
  
  function shi(){
  if(!$(".auto4 .left4 .e1 .f1").is(".animated")){
  if(i==count){
  $(".auto4 .left4 .e1 .f1").animate({"margin-left":0});
  	   i=1;
  }else{
  $(".auto4 .left4 .e1 .f1").animate({"margin-left":"-="+w});
  	i++;
  };
  points(i-1);
 };

};


var t = setInterval(shi,2000);

$(".auto4 .left4 .e1").mouseover(function(event) {
  /* Act on the event */
  clearInterval(t);
}).mouseout(function(event) {
  /* Act on the event */
  t = setInterval(shi,2000);
});


});







$(function(){
  $(".guang .dian .ssaa").click(function(){
     var i=$(this).index();
     $(".guang table").css("display","none");
     $(".guang table").eq(i).css("display","block");
  });
});

window.onload=function(){
  span_obj=document.getElementsByClassName('ssaa');
  for(var j=0;j<span_obj.length;j++){
   span_obj[j].onclick=function(){
    for(var k=0;k<span_obj.length;k++){
      span_obj[k].style.backgroundColor = "#D9D9D9";
    };
     this.style.backgroundColor = "#FE4A00";
   };
  };
};






$(function(){
  var w=$(".zltj .tu .box img").width();
  var i=1;
  var count =$(".zltj .tu .box img").length;

 function points(n){
  $(".zltj .dian p").eq(n).addClass('pp1')
  .siblings(".zltj .dian p").removeClass('pp1')
  .addClass('pp2');
 };
 points(0);


 $(".zltj .dian p").click(function(){
  if(!$(".zltj .tu .box").is(":animated")){
    var index = $(this).index();
   $(".zltj .tu .box").animate({"margin-left":-index*w});
   points(index);
   i=index+1;
  }
 });

 function shi(){
  if(!$(".zltj .tu .box").is(".animated")){
  if(i==count){
  $(".zltj .tu .box").animate({"margin-left":0});
       i=1;
  }else{
  $(".zltj .tu .box").animate({"margin-left":"-="+w});
    i++;
  };
  points(i-1);
 };

};
 
 var t = setInterval(shi,2000);

 $(".zltj .tu").mouseover(function(event) {
  /* Act on the event */
   clearInterval(t);

}).mouseout(function(event) {
  /* Act on the event */
 t = setInterval(shi,2000);
})


 


});