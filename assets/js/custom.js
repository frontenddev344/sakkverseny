// document.addEventListener("DOMContentLoaded", function () {
//     document.querySelector(".toggle").addEventListener("click", function () {
//       document.body.classList.add("menuToggle");
//     });
  
//     document.querySelector(".close").addEventListener("click", function () {
//       document.body.classList.remove("menuToggle");
//     });
//   });

  // AOS.init({
  //   duration: 1200,
  // })
  

  // Toggle the mobile menu
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});
