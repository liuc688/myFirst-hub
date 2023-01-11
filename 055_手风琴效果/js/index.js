$(function () {
  let i = 0;
  let len = $("ul li").length;
  console.log('len',len);
  $(".left").click(function () {
    i--;
    if (i < 0) {
      i = len-1;
    } else {
    }
    console.log("i", i);

    $("ul li").css("width","90px");
    $("ul li").eq(i).css("width","640px");
    $("ul li img").css("width","100%");
    $("ul li").eq(i).find("img").css("width","50%");
    $("ul li i").css("opacity","0.5");
    $("ul li").eq(i).find("i").css("opacity","0");
    $("p").css("display","none");
    $("ul li").eq(i).find("p").css("display","block");
  });
  $(".right").click(function () {
    i++;
    if (i > len-1) {
      i = 0;
    } else {
    }
    console.log("i", i);
    $("ul li").css("width","90px");
    $("ul li").eq(i).css("width","640px");
    $("ul li img").css("width","100%");
    $("ul li").eq(i).find("img").css("width","50%");
    $("ul li i").css("opacity","0.5");
    $("ul li").eq(i).find("i").css("opacity","0");
    $("p").css("display","none");
    $("ul li").eq(i).find("p").css("display","block");
  });
});
