$(document).ready(function(){

   $('.col-sm-offset-3, .col-sm-3, a[href="#sheldure"]').click(function() {
      $('.modal').slideDown(1500);
      $('.overlay').fadeIn(1500);
   });
   
   $('.close').click(function() {
      $('.modal').slideUp(1000);
      $('.overlay').fadeOut(1000);
   });
   
   // $('.col-sm-3').click(function() {
   //    $('.modal').slideDown(1000);
   //    $('.overlay').fadeIn(1000);
   // });
   
   
   // $('.main_mobmenu_field_list').click(function() {
   //    $('.modal').slideDown(1000);
   //    $('.overlay').fadeIn(1000);
   // });
 });



