lightGallery(document.querySelector('.gallery'));

$(document).ready(function(){
    $("#button").click(function(){
        $('.p').toggle(2000);
    });
    $("#button-one").click(function(){
        $('.paragraph-one').fadeToggle(2000);
    });
});

// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,
//     autoplay: {
//         delay: 500,
//     },
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });