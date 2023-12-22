const validate = () => {
  const form = document.getElementById("form-callback");
  const textInput = form.querySelector("input[type='text']");
  const telInput = form.querySelector("input[type='tel']");

  const checkInput = (e, text = false) => {
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

  textInput.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^а-яА-Я\s]+/g, "");
  });
  textInput.addEventListener("blur", (e) => checkInput(e, true));

  telInput.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^\d\+]+/g, "");
  });
  telInput.addEventListener("blur", (e) => checkInput(e, false));
};

export default validate;
