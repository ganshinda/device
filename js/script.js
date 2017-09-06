//Открывалка каталога//

var catalogOpener = document.querySelector(".catalog-opener");
var catalogList = document.querySelector(".catalog-list");

catalogOpener.addEventListener("click", function () {
  catalogList.classList.toggle("hidden");
});

catalogOpener.addEventListener('keypress', function (press) {
  if (press.keyCode == '13') {
    catalogList.classList.toggle("hidden");
  }
});


//Логин-логаут//

var page = document.querySelector(".page");
var login = Array.prototype.slice.call(document.querySelectorAll(".user-is-logged-out"));
var logout = Array.prototype.slice.call(document.querySelectorAll(".user-is-logged-in"));

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


//Слайдер героев//

var heroButtons = Array.prototype.slice.call(document.querySelectorAll(".hero__slider-button"));
var heroes = document.querySelector(".heroes");
var heroSlides = heroes.querySelectorAll(".slider__slide");


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


//Слайдер преимуществ//

var advantagesButtons = Array.prototype.slice.call(document.querySelectorAll(".advantages__btn"));
var advantages = document.querySelector(".advantages");
var advantagesSlides = advantages.querySelectorAll(".slider__slide");

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
