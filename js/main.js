$(document).ready(function () {

  // Главная слайдер всея сайта
  $('#fullpage').fullpage({
    verticalCentered: false,
    fitToSectionDelay: 5000
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
  $('.open-modal').magnificPopup({
    type: 'inline'
  })

  // Телефон маска
  $('.phone-mask').inputmask("+7 (999) 999 99 99");

})