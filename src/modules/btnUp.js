const btnUp = () => {
  const services = document.getElementById("services");
  const btnUp = document.querySelector(".up");
  let currentScroll = 0;

  window.addEventListener("scroll", () => {
    currentScroll = window.pageYOffset;
    if (currentScroll >= services.offsetTop) {
      if (!btnUp.style.display) {
        btnUp.style.display = "block";
      }
    } else {
      if (btnUp.style.display) {
        btnUp.style.display = "";
      }
    }
  });

  btnUp.addEventListener("click", () => {
    document.getElementById("slider").scrollIntoView({
      behavior: "smooth",
    });
  });
};

export default btnUp;
