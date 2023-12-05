const menu = () => {
  // const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");
  const nextBtn = document.querySelector("a[href='#service-block']");

  const handleMenu = () => menu.classList.toggle("active-menu");

  const scroll = (link) => {
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  };

  document.addEventListener("click", (e) => {
    if (menu.classList.contains("active-menu")) {
      e.preventDefault();
      if (e.target.closest(".active-menu")) {
        if (e.target === closeBtn) {
          handleMenu();
          return;
        }
        menuItems.forEach((item) => {
          if (e.target === item) {
            handleMenu();
            scroll(e.target);
            return;
          }
        });
      } else {
        handleMenu();
      }
    } else if (e.target.closest(".menu")) {
      handleMenu();
    } else if (e.target.closest("a[href='#service-block']")) {
      e.preventDefault();
      scroll(nextBtn);
    }
  });

  // menuBtn.addEventListener("click", handleMenu);

  // closeBtn.addEventListener("click", handleMenu);
  // menuItems.forEach((menuItem) =>
  //   menuItem.addEventListener("click", (event) => {
  //     const id = menuItem.getAttribute("href");
  //     event.preventDefault();
  //     handleMenu();
  //     document.querySelector(id).scrollIntoView({
  //       behavior: "smooth",
  //     });
  //   })
  // );

  // nextBtn.addEventListener("click", (event) => {
  //   const id = nextBtn.getAttribute("href");
  //   event.preventDefault();
  //   document.querySelector(id).scrollIntoView({
  //     behavior: "smooth",
  //   });
  // });
};
export default menu;
