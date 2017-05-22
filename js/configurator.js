$(document).ready(function () {

  let prices = {
    boksmark: 2
  }

  function totalPrice (state = 0, action) {
    switch (action.type) {
      case 'TOTAL_PRICE':
        return state.price * prices.boksmark
      default:
        return state
    }
  }

  let store = Redux.createStore(totalPrice, {
    price: 2
  });

  let price = document.getElementById('configurator-price');

  function render() {
    price.innerHTML = store.getState();
    console.log('store', store.getState())
  }

  render();
  store.subscribe(render);

  store.dispatch({type: 'TOTAL_PRICE'});

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

