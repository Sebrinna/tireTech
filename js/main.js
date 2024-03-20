// pc상태였을때 서브메뉴 슬라이드 다운
$('.navList, .sub_shadow').on('mouseenter mouseleave',function(e){
  if(window.innerWidth > 1169 ){
    if(e.type == 'mouseenter') {
      $('.sub').stop().fadeIn();
      $('.sub_shadow').stop().slideDown();
    } 
    else {
      $('.sub').stop().fadeOut(200,function(){
        $('.sub').removeAttr('style')
      });
      $('.sub_shadow').stop().slideUp(200,function(){
        $('.sub_shadow').removeAttr('style')
      });
    }
  }   
})

// mobile 상태였을때 햄버거 버튼을 누르면 gnb가 튀어나옴
$('.trigger').click(function(){
  $(this).toggleClass('open');

  if( $(this).hasClass('open')){
    $('.gnb').animate({right:0},400)
    $('header').animate({left:-250},400)
  } else {
    $('.gnb').animate({right:-250},200)
    $('header').animate({left:0},200)
  }
})


// mobile 상태였을때 각각의 서브메뉴 슬라이드 다운/색바뀜
const $mainBtn = $('.navList>li>a'); 

$mainBtn.click(function(){
  if(window.innerWidth < 1170 ){  
  /*  
    $('.navList>li').removeClass('on');
    $('.sub').slideUp(500);

    $(this).parents('li').addClass('on');
    $(this).siblings('.sub').slideDown(500);
  */

    if(!$(this).parents('li').hasClass('on')){   //닫혀있을때만 -열어준다
      $(this).parents('li').addClass('on');
      $(this).siblings('.sub').slideDown(500);
    } 
    else {   //클릭한 메뉴가 이미 열려있으면 닫아줌                       
      $(this).parents('li').removeClass('on');
      $(this).siblings('.sub').hide();
    }
  }
})

//more btn 누르면 sns내용이 더 보임
$('.moreBtn').click(function(){
  $('.item_wrap_more').show();
  $('.moreBtn').hide()
})