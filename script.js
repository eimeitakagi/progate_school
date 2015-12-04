$(function(){

//もっと詳しく
  var status = "close";
  $('#read-more').click(function(){
    $('#text-js').fadeToggle();
    if (status == "close"){
      $(this).html("閉じる");
      status = "open";
    }else{
      $(this).html("もっと詳しく");
      status = "close";
    }
  });

//ページ内リンクのスクロール
  $('a[href^=#]').click(function(){
    var speed = 700;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });

//スライド
  $('#bxSlider').bxSlider({
    auto: 'true',
    pause: 5000,
    speed: 700,
    infiniteLoop: 'true',
    pager: 'true',
    controls: 'true',
    nextText: '',
    prevText:''
  });


});
