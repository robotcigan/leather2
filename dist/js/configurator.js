'use strict';

$(document).ready(function () {

  var prices = {
    boksmark: 2
  };

  function totalPrice() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var action = arguments[1];

    switch (action.type) {
      case 'TOTAL_PRICE':
        return state.price * prices.boksmark;
      default:
        return state;
    }
  }

  var store = Redux.createStore(totalPrice, {
    price: 2
  });

  var price = document.getElementById('configurator-price');

  function render() {
    price.innerHTML = store.getState();
    console.log('store', store.getState());
  }

  render();
  store.subscribe(render);

  store.dispatch({ type: 'TOTAL_PRICE' });

  var configuratorImg = $('.configurator .configurator__img img');

  configuratorImg.cropper({
    toggleDragModeOnDblclick: false,
    zoomOnWheel: false,
    zoomOnTouch: false,
    zoomable: false,
    movable: false,
    guides: true,
    center: false,
    modal: false,
    data: {
      x: 0,
      y: 0,
      width: 500,
      height: 300
    },
    crop: function crop(e) {
      // Output the result data for cropping image.
      var confHeight = $('#configurator-height');
      var confWidth = $('#configurator-width');
      var cropHeight = Math.round(e.height);
      var cropWidth = Math.round(e.width);
      confHeight.val(cropWidth);
      confWidth.val(cropHeight);

      // console.log(e.x);
      // console.log(e.y);
      // console.log(e.width);
      // console.log(e.height);
      // console.log(e.rotate);
      // console.log(e.scaleX);
      // console.log(e.scaleY);
    }
  });
});