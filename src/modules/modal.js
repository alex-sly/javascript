import { animate } from "./helpers";

const modal = () => {
  const callbackBtns = document.querySelectorAll(".callback-btn");
  const modalOverlay = document.querySelector(".modal-overlay");
  const modalCallback = document.getElementById("callback");
  const modalClose = modalCallback.querySelector(".modal-close>img");
  const servicesCarousel = document.querySelector(".services-carousel");
  const buttonServices = document.querySelector(".button-services");

  const openModal = () => {
    modalOverlay.style.display = "block";
    modalCallback.style.display = "block";
    if (screen.width >= 768) {
      modalCallback.style.top = "-100%";
      animate({
        duration: 200,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          modalCallback.style.top = Math.floor(progress * 100 - 80) + "%";
        },
      });
    }
  };

  const closeModal = () => {
    modalOverlay.style.display = "";
    modalCallback.style.display = "";
  };

  callbackBtns.forEach((btn) => {
    btn.addEventListener("click", () => openModal());
  });

  modalCallback.addEventListener("click", (event) => {
    if (event.target === modalClose) {
      closeModal();
    }
  });

  modalOverlay.addEventListener("click", () => closeModal());

  // п.5 ТЗ
  servicesCarousel.addEventListener("click", (event) => {
    if (event.target.closest(".element")) {
      openModal();
    }
  });

  // п.6 ТЗ
  buttonServices.addEventListener("click", () => {
    openModal();
  });
};

export default modal;
