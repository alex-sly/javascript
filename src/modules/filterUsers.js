import { render } from "./render";

export const filterUsers = () => {
  const btnIsChildren = document.getElementById("btn-isChildren");
  const btnIsPermissions = document.getElementById("btn-isPermissions");
  const btnIsAll = document.getElementById("btn-isAll");

  btnIsChildren.addEventListener("click", () => {
    userService
      .filterUsers("children")
      .then((users) => {
        render(users);
      })
      .catch((error) => {
        console.log(error.message);
      });
  });

  btnIsPermissions.addEventListener("click", () => {
    userService
      .filterUsers("permissions")
      .then((users) => {
        render(users);
      })
      .catch((error) => {
        console.log(error.message);
      });
  });

  btnIsAll.addEventListener("click", () => {
    userService
      .getUsers()
      .then((users) => {
        render(users);
      })
      .catch((error) => {
        console.log(error.message);
      });
  });
};
