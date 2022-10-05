$(document).ready(function(){
  $('.menu_burger').click(function(event){
    $('.menu_burger,.menu_list').toggleClass('active');
    $('body').toggleClass('lock');
  });
});