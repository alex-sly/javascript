const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const modalWin = modal.querySelector(".popup-content");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const width = screen.width;
      modal.style.display = "block";
      modalWin.style.top = "-100%";
      if (width >= 768) {
        let top = -100;
        const step = () => {
          modalWin.style.top = top + "%";
          if (top < 10) {
            top += 10;
            setTimeout(step, 33);
          } else {
            modalWin.style.top = "";
          }
        };
        modalWin.style.top = top + "%";
        setTimeout(step, 33);
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
