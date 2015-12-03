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

});
