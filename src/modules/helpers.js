export const debounce = (func, ms = 300) => {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, ms);
  };
};

export const getData = (url, id = "", option = "") => {
  const viewError = document.getElementById("error");
  viewError.textContent = "";
  let str = url;
  if (id) {
    str = url + "/" + id;
  } else if (option) {
    str = url + "?" + option;
  }
  try {
    return fetch(str).then((res) => res.json());
  } catch (error) {
    viewError.textContent = "Произошла ошибка, данных нет!";
    throw new Error("Произошла ошибка, данных нет!");
  }
};

export const sendData = (url, method = "", data = "", id = "") => {
  const viewError = document.getElementById("error");
  viewError.textContent = "";
  let str = url;
  let options = {};
  if (id) {
    str = url + "/" + id;
  }
  if (method) {
    options = {
      method: method,
    };
    if (data) {
      options.body = JSON.stringify(data);
      options.headers = {
        "Content-Type": "application/json",
      };
    }
  } else if (data) {
    str = url + data;
  }
  try {
    return fetch(str, options).then((res) => res.json());
  } catch (error) {
    viewError.textContent = "Произошла ошибка, данных нет!";
    throw new Error("Произошла ошибка, данных нет!");
  }
};
