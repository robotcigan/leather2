/**/
$(document).ready(function(){
    
    $('a').click(function(e){
        e.preventDefault();
        if($(this).attr('href').length <1){
            window.location.href = "develop.html";
        }else{
            window.location.href = $(this).attr('href');
        }
    })
    
    $('form.hadoken .btn.btn--primary').click(function(e){
        e.preventDefault();
        $(this).closest('form').submit();
    });
    
    $('form.hadoken').submit(function(e){
        e.preventDefault();
         $.ajax({
          type: 'POST',
          url: 'mail.php',
          data: $(this).serialize(),
          success: function(data) {
              swal({
                  title: "Спасибо!",
                  text: "Наши специалисты свяжуться с вами в ближайшее время.",
                  timer: 4000,
                  type: "success",
                  showConfirmButton: false
                });
              var magnificPopup = $.magnificPopup.instance; 
                // save instance in magnificPopup variable
                magnificPopup.close();
               $('form').trigger('reset')
             
            //$('#results').html(data);
          },
          error:  function(xhr, str){
	       sweetAlert("Ошибка при отправке формы", "", "error");
          }
    })
})
})
