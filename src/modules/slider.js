import { animate } from "./helpers";

const slider = () => {
  const sliderBlock = document.getElementById("slider");
  const slides = sliderBlock.querySelectorAll(".item");
  const tables = sliderBlock.querySelectorAll(".table");
  const dots = sliderBlock.querySelectorAll(".slick");
  let timeInterval = 3000;
  let currentSlide = 0;
  let interval;

  const prevSlide = (slides, index) => {
    slides[index].style.zIndex = "1";
    if (screen.width >= 768) {
      animate({
        duration: 500,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          slides[index].style.left = Math.floor(-(progress * 100)) + "%";
        },
      });
    }
    tables[index].classList.remove("active");
    dots[index].classList.remove("slick-active");
  };

  const nextSlide = (slides, index) => {
    slides[index].style.left = "";
    slides[index].style.zIndex = "";
    tables[index].classList.add("active");
    dots[index].classList.add("slick-active");
  };

  const autoSlide = () => {
    prevSlide(slides, currentSlide);
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    nextSlide(slides, currentSlide);
  };

  const startSlide = (timer = 3000) => {
    interval = setInterval(autoSlide, timer);
  };

  nextSlide(slides, currentSlide);
  startSlide(timeInterval);
};

export default slider;
