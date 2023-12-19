const carusel = () => {
  const servicesCarousel = document.querySelector(".services-carousel");
  const elements = servicesCarousel.querySelectorAll(".services-carousel>div");
  const arrowLeft = document.querySelector(".arrow-left");
  const arrowRight = document.querySelector(".arrow-right");
  let firstElem = 0;
  let lastElem = 0;

  const arrowOff = (arrow) => {
    if (!arrow.classList.contains("arrow-disabled")) {
      arrow.classList.add("arrow-disabled");
      arrow.setAttribute("disabled", "");
    }
  };

  const arrowOn = (arrow) => {
    if (arrow.classList.contains("arrow-disabled")) {
      arrow.classList.remove("arrow-disabled");
      arrow.removeAttribute("disabled", "");
    }
  };

  const render = () => {
    const width = document.defaultView.innerWidth;
    let totalElem = 3;
    if (width < 992) {
      totalElem = 2;
    }
    if (width < 768) {
      totalElem = 1;
    }
    lastElem = firstElem + totalElem - 1;
    if (firstElem === 0) {
      arrowOff(arrowLeft);
    }
    if (lastElem >= elements.length - 1) {
      arrowOff(arrowRight);
    }

    elements.forEach((elem, index) => {
      if (index >= firstElem && index <= lastElem) {
        elem.style.display = "";
      } else {
        elem.style.display = "none";
      }
    });
  };

  arrowLeft.addEventListener("click", () => {
    if (firstElem > 0) {
      firstElem--;
      arrowOn(arrowRight);
    }
    render();
  });

  arrowRight.addEventListener("click", () => {
    if (lastElem < elements.length - 1) {
      firstElem++;
      arrowOn(arrowLeft);
    }
    render();
  });

  window.addEventListener("resize", () => render());

  render();
};

export default carusel;
