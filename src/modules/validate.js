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
  const checkInput = (e, text) => {
    let inp = e.target.value.match(/\S+/g);
    let out = [];
    if (inp) {
      inp.forEach((word) => {
        let source;
        do {
          source = word;
          word = source.replace("--", "-");
        } while (word !== source);
        word = word.replace(/^-(.+)/, (str, $1) => $1).replace(/(.+)-$/, (str, $1) => $1);
        if (text) {
          word = word[0].toUpperCase() + word.slice(1).toLowerCase();
        }
        out.push(word);
      });
      e.target.value = out.join(" ");
    }
  };
  forms.forEach((form) => {
    const textInput = form.querySelector("input[type='text']");
    const emailInput = form.querySelector("input[type='email']");
    const telInput = form.querySelector("input[type='tel']");
    textInput.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^а-яА-Я\-\s]+/g, "");
    });
    textInput.addEventListener("blur", (e) => {
      checkInput(e, true);
    });
    emailInput.type = "text";
    emailInput.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^\w@\-\.\!\~\*\']+/g, "");
    });
    emailInput.addEventListener("blur", (e) => {
      checkInput(e, false);
    });
    telInput.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^\d\(\)\-]+/g, "");
    });
    telInput.addEventListener("blur", (e) => {
      checkInput(e, false);
    });
  });
  // Ваше сообщение
  mess.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^а-яА-Я\-\s]+/g, "");
  });
};
export default validate;
