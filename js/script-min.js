var page=document.querySelector(".page");var login=Array.prototype.slice.call(document.querySelectorAll(".user-is-logged-out"));var logout=Array.prototype.slice.call(document.querySelectorAll(".user-is-logged-in"));login.forEach(function(a){a.addEventListener("click",function(){page.classList.add("page--logged");page.classList.remove("page--not-logged")})});logout.forEach(function(b){b.addEventListener("click",function(){page.classList.remove("page--logged");page.classList.add("page--not-logged")})});var openingButtonForm=document.querySelector(".btn-toggle-write-us");var closingButtonForm=document.querySelector(".modal-close-btn--write-us");var popupForm=document.querySelector(".popup-form");openingButtonForm.addEventListener("click",function(){popupForm.classList.toggle("visually-hidden")});closingButtonForm.addEventListener("click",function(){popupForm.classList.add("visually-hidden")});var openingMap=document.querySelector(".brief-info__overlay");var closingButtonMap=document.querySelector(".modal-close-btn--map");var popupMap=document.querySelector(".popup-map");openingMap.addEventListener("click",function(){popupMap.classList.toggle("visually-hidden")});closingButtonMap.addEventListener("click",function(){popupMap.classList.add("visually-hidden")});var heroButtons=Array.prototype.slice.call(document.querySelectorAll(".hero__slider-button"));var heroes=document.querySelector(".heroes");var heroSlides=heroes.querySelectorAll(".slider__slide");heroButtons.forEach(function(button,i){button.addEventListener("click",function(){for(var y=0;y<heroSlides.length;y++){heroSlides[y].classList.remove("slider__slide--active");heroButtons[y].classList.remove("hero__slider-button--active")}this.classList.add("hero__slider-button--active");heroSlides[i].classList.add("slider__slide--active")})});var advantagesButtons=Array.prototype.slice.call(document.querySelectorAll(".advantages__btn"));var advantages=document.querySelector(".advantages");var advantagesSlides=advantages.querySelectorAll(".slider__slide");advantagesButtons.forEach(function(button,i){button.addEventListener("click",function(){for(var y=0;y<advantagesSlides.length;y++){advantagesSlides[y].classList.remove("slider__slide--active");advantagesButtons[y].classList.remove("advantages__btn--active")}this.classList.add("advantages__btn--active");advantagesSlides[i].classList.add("slider__slide--active")})});