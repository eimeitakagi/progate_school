$(function(){

  var status = "close";

  $('#read-more').click(function(){
    $('#text-js').fadeToggle();
    if (text == "close"){
      $(this).text("閉じる");
      status = "open";
    }else{
      $(this).text("もっと見る");
      status = "close";
    }
  });

  $('a[href^=#]').click(function(){
    var speed = 700;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });


});
