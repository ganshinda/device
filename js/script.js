var catalogOpener = document.querySelector(".catalog-opener");
var catalogList = document.querySelector(".catalog-list");

var page = document.querySelector(".page");
var login = document.querySelector(".user-is-logged-out");
var logout = document.querySelector(".user-is-logged-in");

catalogOpener.addEventListener("click", function () {
  catalogList.classList.toggle("hidden");
});

catalogOpener.addEventListener('keypress', function (press) {
  if (press.keyCode == '13') {
    catalogList.classList.toggle("hidden");
  }
});


