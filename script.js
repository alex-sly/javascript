let userData = {};

const getData = (url) => {
  return fetch(url).then((responce) => responce.json());
};

const sendData = ({ url, data = {} }) => {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((responce) => {
    if (responce.ok) {
      return responce.json();
    } else {
      console.log("Код ошибки от сервера: ", responce.status);
    }
  });
};

getData("db.json")
  .then((userData) =>
    sendData({
      url: "https://jsonplaceholder.typicode.com/posts",
      data: userData,
    })
      .then((data) => {
        console.log("Ответ от сервера: ", data);
      })
      .catch((error) => {
        console.log("Ошибка отправки данных: ", error);
      })
  )
  .catch((error) => {
    console.log("Ошибка получения данных: ", error);
  });
