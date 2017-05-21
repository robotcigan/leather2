'use strict';

$(document).ready(function () {

  var windowWidth = $(window).width();
  function fullPageInit() {
    // Главный слайдер всея сайта
    $('#fullpage').fullpage({
      verticalCentered: false,
      scrollOverflow: true,
      slidesNavigation: true,
      navigation: true
    });
  }

  if (windowWidth > 768) {
    fullPageInit();
  }

  $(window).resize(function () {
    windowWidth = $(window).width();
    if (windowWidth > 768) {
      $.fn.fullpage.reBuild();
      // fullPageInit();
    } else {
      $.fn.fullpage.destroy();
    }
  });

  // Таблицы
  $('.table thead th').each(function () {
    var index = $(this).index();
    var text = $(this).text();
    var parent = $(this).closest('.table');
    parent.find('tr').each(function () {
      $(this).find('td').eq(index).attr('data-label', text);
    });
  });

  // Мобильное меню
  $('.mobile-menu-toggle').on('click', function () {
    $('.mobile-menu').stop().slideToggle();
    $(this).toggleClass('mobile-menu-toggle--active');
  });

  // Модалка
  $('.open-modal').magnificPopup({
    type: 'inline'
  });

  // Галлерея
  $('.gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  // Телефон маска
  $('.phone-mask').inputmask("+7 (999) 999 99 99");
});