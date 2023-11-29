const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");

  const handleMenu = () => menu.classList.toggle("active-menu");

  menuBtn.addEventListener("click", handleMenu);
  closeBtn.addEventListener("click", handleMenu);

  menuItems.forEach((menuItem) =>
    menuItem.addEventListener("click", (event) => {
      const id = menuItem.getAttribute("href");
      event.preventDefault();
      handleMenu();
      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    })
  );
};
export default menu;
