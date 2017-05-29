'use strict';

$(document).ready(function () {

  var slideIndex = 1,
      sliding = false;

  var windowWidth = $(window).width();
  function fullPageInit() {
    // Главный слайдер всея сайта
    $('#fullpage').fullpage({
      verticalCentered: false,
      scrollOverflow: true,
      slidesNavigation: true,
      navigation: true,
      controlArrows: false,
      onLeave: function onLeave(index, nextIndex, direction) {
        if (index == 2 && !sliding) {
          if (direction == 'down' && slideIndex < $('.horizontal-slides .slide').length) {
            sliding = true;
            $.fn.fullpage.moveSlideRight();
            slideIndex++;
            return false;
          } else if (direction == 'up' && slideIndex > 1) {
            sliding = true;
            $.fn.fullpage.moveSlideLeft();
            slideIndex--;
            return false;
          }
        } else if (sliding) {
          return false;
        }
      },
      afterSlideLoad: function afterSlideLoad(anchorLink, index, slideAnchor, slideIndex) {
        sliding = false;
      }
    });
  }

  // fullpage
  if (windowWidth > 1230) {
    fullPageInit();
  }

  $(window).resize(function () {
    windowWidth = $(window).width();
    if (windowWidth > 1230) {
      if ($('#fullpage').length) {
        $.fn.fullpage.reBuild();
      }
      // fullPageInit();
    } else {
      if ($('#fullpage').length) {
        $.fn.fullpage.destroy();
      }
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
  // $('.open-modal-page').magnificPopup({
  $('.open-modal').magnificPopup({
    type: 'inline',
    callbacks: {
      open: function open() {
        if ($('#fullpage').length) {
          $.fn.fullpage.setMouseWheelScrolling(false);
          $.fn.fullpage.setAllowScrolling(false);
        }
      },
      close: function close() {
        if ($('#fullpage').length) {
          $.fn.fullpage.setMouseWheelScrolling(true);
          $.fn.fullpage.setAllowScrolling(true);
        }
      }
    }
  });

  // $('.open-modal').magnificPopup({
  //   type: 'inline'
  // });

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

  // Аккордион
  $('.accordion .accordion__header').on('click', function () {
    var parent = $(this).closest('.accordion');
    parent.find('.accordion__body').slideToggle();
    parent.toggleClass('accordion--active');
  });
});