function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}

document.querySelector(".btn--drawing").addEventListener("click", function () {
  document.querySelector(".paintings").classList.add("hidden");
  document.querySelector(".homeImg").classList.add("hidden");
  document.querySelector(".drawings").classList.remove("hidden");
});

document.querySelector(".btn--painting").addEventListener("click", function () {
  document.querySelector(".drawings").classList.add("hidden");
  document.querySelector(".homeImg").classList.add("hidden");
  document.querySelector(".paintings").classList.remove("hidden");
});
