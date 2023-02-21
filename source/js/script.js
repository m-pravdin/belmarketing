let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let popupBlock = document.querySelector('.popup-wrapper--closed');
let popupButton = document.querySelector('.add-to-cart');
let popupButtonAdd = document.querySelector('.popup__button');
let mapImage = document.querySelector('.map__image-wrapper')

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
});

if (popupButton) {
  popupButton.addEventListener('click', function() {
    if (popupBlock.classList.contains('popup-wrapper--closed')) {
      popupBlock.classList.remove('popup-wrapper--closed');
      popupBlock.classList.add('popup-wrapper--opened');
      }
  });
}

if(mapImage) {
  mapImage.classList.add('visually-hidden')
}
