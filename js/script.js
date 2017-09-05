var catalogOpener = document.querySelector(".catalog-opener");
var catalogList = document.querySelector(".catalog-list");

var page = document.querySelector(".page");
var login = Array.from(document.querySelectorAll(".user-is-logged-out"));
var logout = Array.from(document.querySelectorAll(".user-is-logged-in"));


var heroButtons = Array.from(document.getElementsByClassName("hero__slider-button"));
var heroes = document.querySelector(".heroes");
var heroSlides = heroes.getElementsByClassName("slider__slide");

var advantagesButtons = Array.from(document.getElementsByClassName("advantages__btn"));
var advantages = document.querySelector(".advantages");
var advantagesSlides = advantages.getElementsByClassName("slider__slide");

catalogOpener.addEventListener("click", function () {
  catalogList.classList.toggle("hidden");
});

catalogOpener.addEventListener('keypress', function (press) {
  if (press.keyCode == '13') {
    catalogList.classList.toggle("hidden");
  }
});

login.forEach(function (a) {
  a.addEventListener("click", function () {
    page.classList.add("page--logged");
    page.classList.remove("page--not-logged");
  });
});

logout.forEach(function (b) {
  b.addEventListener("click", function () {
    page.classList.remove("page--logged");
    page.classList.add("page--not-logged");
  });
});


heroButtons.forEach(function (button, i) {
  button.addEventListener('click', function () {

    for (var y = 0; y < heroSlides.length; y++) {
      heroSlides[y].classList.remove("slider__slide--active");
      heroButtons[y].classList.remove("hero__slider-button--active");
    }

    this.classList.add("hero__slider-button--active");
    heroSlides[i].classList.add("slider__slide--active");
  });
});

advantagesButtons.forEach(function (button, i) {
  button.addEventListener('click', function () {

    for (var y = 0; y < advantagesSlides.length; y++) {
      advantagesSlides[y].classList.remove("slider__slide--active");
      advantagesButtons[y].classList.remove("advantages__btn--active");
    }

    this.classList.add("advantages__btn--active");
    advantagesSlides[i].classList.add("slider__slide--active");
  });
});
