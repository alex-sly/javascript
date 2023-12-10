const viewDetailes = (card, films) => {
  const filmDetails = document.querySelector(".view-details");

  const createItem = (key, item) => {
    const elem = document.createElement("div");
    elem.classList.add("filter-input");
    elem.innerHTML = `
      <span class="filter-input_title"><u>${key}</u></span>
      <div class="filter-input_range">
        <div class="filter-input_input-wrapper">
          <span><i>${item}</i></span>
        </div>
      </div>
    `;
    return elem;
  };

  const viewFilms = (movies) => {
    const elem = document.createElement("div");
    films = "";
    elem.classList.add("filter-input");
    movies.forEach((film) => {
      films =
        films +
        `
        <div class="filter-input_range">
          <div class="filter-input_input-wrapper">
            <span>«<i>${film}</i>»</span>
          </div>
        </div>
      `;
    });
    elem.innerHTML = '<span class="filter-input_title"><u>movies</u></span>' + films;
    return elem;
  };

  filmDetails.textContent = "";
  for (let key in card) {
    if (key !== "photo") {
      if (key !== "movies") {
        const newItem = createItem(key, card[key]);
        filmDetails.append(newItem);
      } else {
        filmDetails.append(viewFilms(card[key]));
      }
    }
  }
};

export default viewDetailes;
