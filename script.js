var catalogOpener = document.querySelector(".catalog-opener");
var catalogList = document.querySelector((".catalog-list"));
catalogOpener.addEventListener("click", function () {
    catalogList.classList.toggle("hidden");
  }
);
