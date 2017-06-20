$(document).ready(function () {

  // Добавление бэкграунда вместо изображения
  let configuratorBg = $('.configurator__img img').attr('src');
  $('.configurator--third').css('background-image', `url('${configuratorBg}')`);

  let sizeState = {
    height: 0,
    width: 0
  }


  // sdfgsdf
  $.get( "http://avtokoja.digitalwf.ru/json_price.php?ID=49" )
    .done(function (data) {
      console.log('success')
      console.log(data)
    })
    .fail(function () {
      console.log('ошибка')
    })
   

  // Данные кропера
  let cropperData = {
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
    change: function (e) {
      console.log(e)
    },
    crop: function(e) {
      let confHeight = $('#configurator-height');
      let confWidth = $('#configurator-width');
      let cropHeight = scaleRounded(e.height);
      let cropWidth = scaleRounded(e.width);

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
  }

  // При нажатии на кнопку инструмент отреза
  $('#cropping').on('click', function () {
    $('.configurator__field').toggleClass('configurator__field--active');
    $(this).toggleClass('icon-btn--active');
    configuratorImg.cropper(cropperData);
    if ( $('.cropper-crop-box').length ) {
      configuratorImg.cropper('destroy');
    }
  })

  let configuratorPrice = $('.configurator-price__number');
  
  let prices = {
    alcantara: 4
  }
  let renderPrice = 0;

  function render(height = 0, width = 0) {
    // console.log(height, width, prices.alcantara)
    renderPrice = (height * width) * prices.alcantara;
    configuratorPrice.text(renderPrice);
    // console.log(`Обычная цена ${renderPrice}; Скрытая цена ${renderPrice * 1.2}`);
  }

  render();

  let configuratorImg = $('.configurator--third .configurator__img img');

  function scaleRounded(size) {
    if ( size % 10 > 0 ) {
      size = size - ( size % 10 )
    }
    return Math.round(size / 10 / 5) * 10
  }

  // function fifthRounded(size) {
  //   if ( size % 10 > 0 ) {
  //     return size = size - ( size % 10 )
  //   }
  // }


  // Изменение размера кропера по вводу в инпут
  $('.form-control #configurator-height').on('keyup change', function() {
    configuratorImg.cropper("setData", {
      height: $(this).val()
    })
  });

});

