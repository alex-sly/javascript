import viewDetailes from "./modules/viewDetailes";

let dbHeroes = [];
let filtered = [];
let gender = "ALL";
let actors = "";
let film = "ALL";
let films = []; // Каталог фильмов
const filmList = document.querySelector(".films");
const selectGender = document.getElementById("gender");
const catalogButton = document.querySelector(".catalog-button");
const inputActors = document.querySelector(".search-wrapper_input");
const checkedFilm = document.querySelector(".checked-film");
const catalogCheck = document.querySelector(".catalog-check");
let catalogList = document.querySelector(".catalog-list");

const createNewCard = (card, index) => {
  const elem = document.createElement("div");
  elem.classList.add("film", "col-12", "col-md-6", "col-lg-4", "col-xl-3");
  elem.dataset.id = index;
  elem.innerHTML = `
    <div class="card">
      <div class="card-img-wrapper">
        <span
          class="card-img-top"
          style="background-image: url('${card.photo}')"
        ></span>
      </div>
      <div class="card-body justify-content-between">
        <div class="card-name">${card.name}</div>
        <h5 class="card-actor">actor: <i>${card.actors}</i></h5>
        <button class="btn btn-details">Подробно</button>
      </div>
    </div>
  `;
  return elem;
};

const render = (filmCards) => {
  filtered = filmCards;
  filmList.textContent = "";
  filmCards.forEach((card, index) => {
    const newCard = createNewCard(card, index);
    filmList.append(newCard);
    if (!dbHeroes.includes(card, 0)) {
      dbHeroes.push(card);
    }
    if (card.movies) {
      card.movies.forEach((film) => {
        if (!films.includes(film, 0)) {
          films.push(film);
        }
      });
    }
  });
  films.sort();
  catalogList.textContent = "";
  const item = document.createElement("li");
  item.textContent = "ALL";
  catalogList.append(item);
  for (let i = 0; i < films.length; i++) {
    const item = document.createElement("li");
    item.textContent = films[i];
    catalogList.append(item);
  }
  viewDetailes(filmCards[0], films);
};

const getData = (url) => {
  return fetch(url)
    .then((responce) => responce.json())
    .then((userData) => render(userData))
    .catch((error) => {
      console.log("Ошибка чтения данных: ", error);
    });
};

const filters = (film, gender, actors) => {
  filtered = dbHeroes;
  if (film !== "ALL") {
    filtered = filtered.filter((item) => {
      return item.movies && item.movies.includes(film, 0);
    });
    catalogCheck.style.display = "block";
  } else {
    catalogCheck.style.display = "";
  }
  if (gender !== "ALL") {
    filtered = filtered.filter((item) => {
      return item.gender.toLowerCase() === gender;
    });
  }
  if (actors) {
    filtered = filtered.filter((item) => {
      return item.name.toLowerCase().includes(actors.toLowerCase());
    });
  }
  render(filtered);
};

catalogButton.addEventListener("click", (e) => {
  const catalog = catalogList.closest(".catalog");
  if (catalog.style.display === "block") {
    catalog.style.display = "";
  } else {
    catalog.style.display = "block";
  }
});

catalogList.addEventListener("click", (e) => {
  film = e.target.textContent;
  checkedFilm.textContent = film;
  filters(film, gender, actors);
});

inputActors.addEventListener("input", () => {
  actors = inputActors.value;
  filters(film, gender, actors);
});

selectGender.addEventListener("change", () => {
  gender = selectGender.options[selectGender.selectedIndex].value;
  filters(film, gender, actors);
});

filmList.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-details")) {
    const index = e.target.closest(".film").dataset.id;
    const card = filtered[index];
    viewDetailes(card, films);
  }
});

getData("dbHeroes.json");
