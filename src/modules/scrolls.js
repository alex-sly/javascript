const scrolls = () => {
  const links = document.querySelectorAll("ul>li>a");

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const id = event.target.getAttribute("href");

      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
};

export default scrolls;
