'use strict';

$(document).ready(function () {

  // Добавление бэкграунда вместо изображения
  var configuratorBg = $('.configurator__img img').attr('src');
  $('.configurator--third').css('background-image', 'url(\'' + configuratorBg + '\')');

  var sizeState = {
    height: 0,
    width: 0
  };

  // sdfgsdf
  $.get("http://avtokoja.digitalwf.ru/json_price.php?ID=49").done(function (data) {
    console.log('success');
    console.log(data);
  }).fail(function () {
    console.log('ошибка');
  });

  // Данные кропера
  var cropperData = {
    toggleDragModeOnDblclick: false,
    zoomOnWheel: false,
    zoomOnTouch: false,
    zoomable: false,
    movable: false,
    guides: true,
    center: false,
    modal: false,
    dragMode: 'move',
    cropBoxMovable: false,
    minCropBoxHeight: 50,
    minCropBoxWidth: 50,
    data: {
      x: 0,
      y: 0,
      width: 500,
      height: 300
    },
    change: function change(e) {
      console.log(e);
    },
    crop: function crop(e) {
      var confHeight = $('#configurator-height');
      var confWidth = $('#configurator-width');
      var cropHeight = scaleRounded(e.height);
      var cropWidth = scaleRounded(e.width);

      // sizeState.height = cropHeight;
      // sizeState.width = cropWidth;

      confHeight.val(cropHeight);
      confWidth.val(cropWidth);

      // configuratorImg.cropper('setData', {
      //   width: fifthRounded(cropWidth)
      // });

      // Передаю значения размеров в функцию рендер
      render(cropHeight, cropWidth);
    }
  };

  // При нажатии на кнопку инструмент отреза
  $('#cropping').on('click', function () {
    $('.configurator__field').toggleClass('configurator__field--active');
    $(this).toggleClass('icon-btn--active');
    configuratorImg.cropper(cropperData);
    if ($('.cropper-crop-box').length) {
      configuratorImg.cropper('destroy');
    }
  });

  var configuratorPrice = $('.configurator-price__number');

  var prices = {
    alcantara: 4
  };
  var renderPrice = 0;

  function render() {
    var height = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    // console.log(height, width, prices.alcantara)
    renderPrice = height * width * prices.alcantara;
    configuratorPrice.text(renderPrice);
    // console.log(`Обычная цена ${renderPrice}; Скрытая цена ${renderPrice * 1.2}`);
  }

  render();

  var configuratorImg = $('.configurator--third .configurator__img img');

  function scaleRounded(size) {
    if (size % 10 > 0) {
      size = size - size % 10;
    }
    return Math.round(size / 10 / 5) * 10;
  }

  // function fifthRounded(size) {
  //   if ( size % 10 > 0 ) {
  //     return size = size - ( size % 10 )
  //   }
  // }


  // Изменение размера кропера по вводу в инпут
  $('.form-control #configurator-height').on('keyup change', function () {
    configuratorImg.cropper("setData", {
      height: $(this).val()
    });
  });
});