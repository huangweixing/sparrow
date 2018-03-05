// JavaScript Document
$(function(){
var t_a = $(".mytab .U_tab_div a")
var c_div = $(".mytab .content div.neirong")
t_a.click(function(){
var i = t_a.index($(this));
function way(){
t_a.removeClass("on").eq(i).addClass("on");
c_div.hide().eq(i).show();
}
timer=setTimeout(way,100);
},function(){
clearTimeout(timer);
});
});
