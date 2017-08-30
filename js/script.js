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
