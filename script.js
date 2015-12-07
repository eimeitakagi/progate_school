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
    auto: true,
    pause: 5000,
    speed: 800,
    infiniteLoop: true,
    controls: false,
  });

//コラム画像hover
  $('.colum-item-top img').hover(
    function(){
      $(this).removeClass('colum-img-bgc-remove');
      $(this).addClass('colum-img-bgc');
    },
    function(){
      $(this).removeClass('colum-img-bgc');
      $(this).addClass('colum-img-bgc-remove');
    });

//コラムサーチ
  $('.colum-menu-btn-colum').click(     //コラム
    function(){
    $('.colum-menu-btn').removeClass('selected');
    $(this).addClass('selected');
    $('.prog-show').fadeOut('500');
    $('.colum-show').fadeIn('500');
  });

  $('.colum-menu-btn-prog').click(     //プログラミングTips
    function(){
      $('.colum-menu-btn').removeClass('selected');
      $(this).addClass('selected');
      $('.colum-show').fadeOut('500');
      $('.prog-show').fadeIn('500');
    });

  $('.colum-menu-btn-all').click(     //showall
    function(){
      $('.colum-menu-btn').removeClass('selected');
      $(this).addClass('selected');
      $('.colum-show').fadeIn('500');
      $('.prog-show').fadeIn('500');
    });



});
