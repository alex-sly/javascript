const slider = () => {
  const sliderBlock = document.getElementById("slider");
  const slides = sliderBlock.querySelectorAll(".item");
  const tables = sliderBlock.querySelectorAll(".table");
  const dots = sliderBlock.querySelectorAll(".slick");
  let timeInterval = 3000;
  let currentSlide = 0;
  let interval;

  const prevSlide = (slides, index) => {
    slides[index].style.display = "none";
    tables[index].classList.remove("active");
    dots[index].classList.remove("slick-active");
  };

  const nextSlide = (slides, index) => {
    slides[index].style.display = "";
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

  const startSlide = (timer = 2000) => {
    interval = setInterval(autoSlide, timer);
  };

  nextSlide(slides, currentSlide);
  startSlide(timeInterval);
};

export default slider;
