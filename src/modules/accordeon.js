const accordeon = () => {
  const accordeon = document.querySelector(".accordeon");
  const elements = accordeon.querySelectorAll(".element");
  const titles = accordeon.querySelectorAll(".element>.title");
  const content = accordeon.querySelectorAll(".element>.element-content");

  accordeon.addEventListener("click", (event) => {
    const item = event.target.closest(".title");

    if (item) {
      elements.forEach((elem, index) => {
        if (titles[index] === item) {
          elem.classList.add("active");
          content[index].style.display = "block";
        } else {
          elem.classList.remove("active");
          content[index].style.display = "none";
        }
      });
    }
  });
};

export default accordeon;
