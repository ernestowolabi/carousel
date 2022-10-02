const slides = document.getElementsByClassName("carousel-item");
let slidePosistion = 0;
const totalSlides = slides.length

document.getElementById("carousel-button-prev").addEventListener("click", moveToPrevSlide);
document.getElementById("carousel-button-next").addEventListener("click", moveToNextSlide);

function hideAllSlides() {
  for (let slide of slides) {
    slide.classList.remove("carousel-item-visible");
    slide.classList.add("carousel-item-hidden");
  }
}


function moveToNextSlide() {
  hideAllSlides();

  if (slidePosistion === totalSlides - 1) {
    slidePosistion = 0;
  } else {
    slidePosistion++
  }

  slides[slidePosistion].classList.add("carousel-item-visible")
}

function moveToPrevSlide() {
  hideAllSlides();

  if (slidePosistion === 0) {
    slidePosistion = totalSlides - 1
  } else {
    slidePosistion--
  }

  slides[slidePosistion].classList.add("carousel-item-visible")
}


letsetInterval(moveToNextSlide, 3000)