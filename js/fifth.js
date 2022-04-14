$(document).ready(function(){
var x =$(window).height();
console.log(x);
var d= $("header").innerHeight();
// console.log(d);
$(".slid").height(x-d);
$(".top_menu .main").click(function(){
$(".drop-menu").toggleClass("okay")})
$(window).scroll(function(){
    var d =$(this).scrollTop();
    console.log(d);
    if(d > 10200){
        console.log("allah akbar")
        $(".timer").countTo({
        })

    }
    var map= $(".progress span");
    if(d > 6300){
      map.each(function(){
        
        $(this).animate({
            "width":$(this).data("value")
        },1000)
      })
    }
})

})