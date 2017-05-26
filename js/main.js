$(document).ready(function () {

  let slideIndex = 1,
      sliding = false;

  let windowWidth = $(window).width();
  function fullPageInit () {
    // Главный слайдер всея сайта
    $('#fullpage').fullpage({
      verticalCentered: false,
      scrollOverflow: true,
      slidesNavigation: true,
      navigation: true,
      controlArrows: false,
      onLeave: function(index, nextIndex, direction) {
        if(index == 2 && !sliding) {
            if(direction == 'down' && slideIndex < $('.horizontal-slides .slide').length) {
                sliding = true;
                $.fn.fullpage.moveSlideRight();
                slideIndex++;
                return false;
            } else if(direction == 'up' && slideIndex > 1) {
                sliding = true;
                $.fn.fullpage.moveSlideLeft();
                slideIndex--;
                return false;
            }
        } else if(sliding) {
            return false;
        }
      },
      afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
          sliding = false;
      }
    });
  }


  // fullpage
  if( windowWidth > 1024 ) {
    fullPageInit();
  }

  $(window).resize(function () {
    windowWidth = $(window).width();
    if(windowWidth > 1024) {
      $.fn.fullpage.reBuild();
      // fullPageInit();
    } else {
      $.fn.fullpage.destroy();
    }
  });



  // Таблицы
  $('.table thead th').each(function() {
    let index = $(this).index();
    let text = $(this).text();
    let parent = $(this).closest('.table');
    parent.find('tr').each(function() {
      $(this).find('td').eq(index).attr('data-label', text);
    })
  });

  // Мобильное меню
  $('.mobile-menu-toggle').on('click', function() {
    $('.mobile-menu').stop().slideToggle();
    $(this).toggleClass('mobile-menu-toggle--active');
  });

    // Модалка
    $('.open-modal-page').magnificPopup({
      type: 'inline',
      callbacks: {
        open: function open() {
          console.log('open');
          $.fn.fullpage.setMouseWheelScrolling(false);
          $.fn.fullpage.setAllowScrolling(false);
        },
        close: function close() {
          $.fn.fullpage.setMouseWheelScrolling(true);
          $.fn.fullpage.setAllowScrolling(true);
        }
      }
    });

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

  // Аккордион
  $('.accordion .accordion__header').on('click', function () {
    let parent = $(this).closest('.accordion');
    parent.find('.accordion__body').slideToggle();
    parent.toggleClass('accordion--active');
  })

});



