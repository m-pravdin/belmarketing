let navMain = document.querySelector('.nav');
let navToggle = document.querySelector('.toggle__button');

const tooltipToggle = document.querySelector(".tooltip-toggle");
const tooltipWrapper = document.querySelector(".tooltip-wrapper");

tooltipToggle.addEventListener("click", () => {
  tooltipWrapper.classList.toggle("tooltip-wrapper--closed");
});

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('nav--closed')) {
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--opened');
    } else {
      navMain.classList.add('nav--closed');
      navMain.classList.remove('nav--opened');
    }
});