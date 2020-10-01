$(document).ready(function () {
      $('.burger').click(function (e) { 
          e.preventDefault();
          $('.main-nav').toggleClass('d-nav');
          $(this).toggleClass('open');
         
      });
});



