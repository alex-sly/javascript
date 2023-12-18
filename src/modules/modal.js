const modal = () => {
  const callbackBtns = document.querySelectorAll(".callback-btn");
  const modalOverlay = document.querySelector(".modal-overlay");
  const modalCallback = document.getElementById("callback");
  const modalClose = modalCallback.querySelector(".modal-close>img");

  const openModal = () => {
    modalOverlay.style.display = "block";
    modalCallback.style.display = "block";
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
};

export default modal;
