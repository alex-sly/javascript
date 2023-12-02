const validate = () => {
  const calcBlock = document.querySelector(".calc-block");
  const calcItems = calcBlock.querySelectorAll("input[type='text']");
  const forms = document.querySelectorAll("form");
  const mess = document.getElementById("form2-message");
  // Калькулятор
  calcItems.forEach((item) => {
    item.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/\D+/g, "");
    });
  });
  // Формы
  forms.forEach((form) => {
    const textInput = form.querySelector("input[type='text']");
    const emailInput = form.querySelector("input[type='email']");
    const telInput = form.querySelector("input[type='tel']");
    textInput.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^а-яА-Я\-\s]+/g, "");
    });
    emailInput.type = "text";
    emailInput.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^\w@\-\.\!\~\*\']+/g, "");
    });
    telInput.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^\d\(\)\-]+/g, "");
    });
  });
  // Ваше сообщение
  mess.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^а-яА-Я\-\s]+/g, "");
  });
};
export default validate;
