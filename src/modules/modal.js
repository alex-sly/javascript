import { animate } from "./helpers";

const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const modalWin = modal.querySelector(".popup-content");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const width = screen.width;
      modal.style.display = "block";
      if (width >= 768) {
        modalWin.style.top = "-100%";
        animate({
          duration: 500,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            modalWin.style.top = Math.floor(progress * 100 - 90) + "%";
          },
        });
      }
    });
  });

  modal.addEventListener("click", (e) => {
    if (!e.target.closest(".popup-content") || e.target.classList.contains("popup-close")) {
      modal.style.display = "none";
    }
  });
};

export default modal;
