
//product section start
const productImages = document.querySelectorAll('.product-image');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const productImageContainer = document.querySelector('.product-images');

let currentIndex = 0;

function showSlide(index) {
  productImageContainer.style.transform = `translateX(${-index * 50}%)`;
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + productImages.length) % productImages.length;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % productImages.length;
  showSlide(currentIndex);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

showSlide(currentIndex);
//product section end



// hameburger code
document.addEventListener('DOMContentLoaded', function () {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const menu = document.querySelector('.menu');

  hamburgerMenu.addEventListener('click', () => {
    menu.classList.toggle('show');
  });
});
// hameburger code end 


