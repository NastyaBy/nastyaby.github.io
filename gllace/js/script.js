var popupFeedback = document.querySelector(".js-popupFeedback");
var popupFeedbackBtn = document.querySelector(".js-popupFeedbackBtn");
var popupFeedbackCloseBtn = document.querySelector(".js-popupFeedbackCloseBtn");
var sliderBg = document.querySelector(".js-sliderBg");
var sliderItem = document.querySelectorAll(".js-sliderItem");
var sliderDot = document.querySelectorAll(".js-sliderDot");

// slider
var slideIndex = 1;
showSlides(slideIndex);

function current(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;

  if (n > sliderItem.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = sliderItem.length;
  }
  for (i = 0; i < sliderItem.length; i++) {
    sliderItem[i].style.display = "none";
  }
  for (i = 0; i < sliderDot.length; i++) {
    sliderDot[i].className = sliderDot[i].className.replace(" current", "");
  }
  sliderBg.className = sliderBg.className.replace(/\b page-body-bg.+?\b/g, " page-body-bg" + n);
  sliderItem[slideIndex - 1].style.display = "block";
  sliderDot[slideIndex - 1].className += " current";
}

// popup
popupFeedbackBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  togglePopupFeedback();
});

popupFeedbackCloseBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  togglePopupFeedback();
});

function togglePopupFeedback() {
  popupFeedback.classList.toggle("show");
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupFeedback.classList.contains("show")) {
      evt.preventDefault();
      togglePopupFeedback();
    }
  }
});
