const sendForm = (formId, someElem = [{}]) => {
  const form = document.getElementById(formId);
  const statusBlock = document.getElementById("responseMessage");
  const statusText = statusBlock.querySelector(".modal-content");
  const btnClose = statusBlock.querySelector(".button");
  const sendText = "Идет отправка формы...";
  const errorText = "Ошибка отправки формы...";
  const errorValidate = "Заполните все поля формы!";
  const successText = "Отправлено! Наш менеджер с вами свяжется.";
  const modalOverlay = document.querySelector(".modal-overlay");
  const modalCallback = document.getElementById("callback");

  const closeModal = () => {
    modalOverlay.style.display = "";
    modalCallback.style.display = "";
  };

  const viewAlert = (text) => {
    statusText.innerHTML = text;
    btnClose.style.display = "";
    btnClose.focus();
  };

  const viewError = (text) => {
    statusText.innerHTML = "<font color='#f02a29'>" + text + "</font>";
    btnClose.style.display = "";
    btnClose.focus();
  };

  const openAlert = () => {
    statusBlock.style.display = "block";
    statusText.innerHTML = sendText;
    btnClose.style.display = "none";
  };

  const closeAlert = () => {
    statusBlock.style.display = "";
    if (!modalCallback.style.display) {
      document.documentElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const validate = (list) => {
    let success = true;
    list.forEach((input) => {
      if (!input.value) {
        success = false;
      }
    });
    return success;
  };

  // В проекте на хостинге заменить URL отправки на "SERVER.PHP"
  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    }).then((res) => {
      if (!res.ok) {
        throw new Error(errorText);
      }
      res.json();
    });
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll("input");
    const formData = new FormData(form);
    const formBody = {};

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);
      if (elem.type === "block") {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === "input") {
        formBody[elem.id] = element.value;
      }
    });

    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          viewAlert(successText);
          formElements.forEach((input) => {
            input.value = "";
          });
          closeModal();
        })
        .catch((error) => {
          viewError(errorText);
        });
    } else {
      viewError(errorValidate);
    }
  };

  btnClose.addEventListener("click", (event) => {
    event.preventDefault();
    closeAlert();
  });

  try {
    if (!form) {
      throw new Error("Верните форму на место");
    }
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      openAlert();
      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
