"use strict"
{

/**********
 * スクロール時にヘッダーの背景色が変化
 **********/
 $(window).on('scroll', function () {
  if (0 < jQuery(this).scrollTop()) {
    $('.l-header').addClass('change-color');
  } else {
    $('.l-header').removeClass('change-color');
  }
  });

/**********
 * ハンバーガーメニュー
 **********/
  const menuContainer = document.querySelector('.js-btn-menu'); 
  const globalNav = document.querySelector('.p-global-nav');
			
	menuContainer.addEventListener('click', () => {
    menuContainer.classList.toggle('open');
    globalNav.classList.toggle('fade');
 });

/**********
 * スライダー
 **********/
  const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 4000,
  },
  speed:400,
  effect: "fade",

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

/**********
 * ページトップへ戻る
 **********/
  var $pageTop = $(".c-page-top");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $pageTop.fadeIn();
    } else {
      $pageTop.fadeOut();
    }
  });
  $pageTop.on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300
    );
    return false;
  });

 /**********
 * ページ内スムーズスクロール
 **********/
  $('a[href^="#"]').click(function(){
    var adjust = 0;
    var speed = 300;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });

  // $('a[href^="#"]').on("click", function () {
  //   var speed = 300;
  //   var href = $(this).attr("href");
  //   var target = $(href == "#" || href == "" ? "html" : href);
  //   var position = target.offset().top;
  //   $("html, body").animate(
  //     {
  //       scrollTop: position,
  //     },
  //     speed,
  //     "swing"
  //   );
  //   return false;
  // });
}