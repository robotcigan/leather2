$(document).ready(function () {

  let configuratorPrice = document.getElementById('configurator-price');
  
  let prices = {
    alcantara: 4000
  }
  let renderPrice = 0;

  function totalPrice(width, height) {
    return (width * height) * prices.alcantara;
  }

  function render(height, width) {
    renderPrice = (height * width)
    configuratorPrice.innerHTML = renderPrice;
  }

  render();

  let configuratorImg = $('.configurator .configurator__img img');





  configuratorImg.cropper({
    toggleDragModeOnDblclick: false,
    zoomOnWheel: false,
    zoomOnTouch: false,
    zoomable: false,
    movable: false,
    guides: true,
    center: false,
    modal: false,
    minCropBoxHeight: 50,
    minCropBoxWidth: 50,
    data: {
      x: 0,
      y: 0,
      width: 500,
      height: 300
    },
    crop: function(e) {
      // Output the result data for cropping image.
      let confHeight = $('#configurator-height');
      let confWidth = $('#configurator-width');
      let cropHeight = Math.round(e.height);
      let cropWidth = Math.round(e.width);
      confHeight.val(cropWidth);
      confWidth.val(cropHeight);

      render(cropHeight, cropWidth);

      // console.log(e.x);
      // console.log(e.y);
      // console.log(e.width);
      // console.log(e.height);
      // console.log(e.rotate);
      // console.log(e.scaleX);
      // console.log(e.scaleY);
    }
  });


  $('.form-control #configurator-height').on('keyup', function() {
    console.log($(this).val());
    configuratorImg.cropper("setCropBoxData", {
      height: $(this).val()
    })
  });

});

