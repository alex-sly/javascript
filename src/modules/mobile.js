const mobile = () => {
  const mobMenuBtn = document.querySelector(".mob-menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");

  mobMenuBtn.addEventListener("click", (event) => {
    if (event.target.closest(".mob-menu-btn")) {
      mobileMenu.classList.add("open");
    }
  });

  mobileMenu.addEventListener("click", (event) => {
    if (event.target.tagName !== "DIV") {
      mobileMenu.classList.remove("open");
    }
  });
};

export default mobile;
