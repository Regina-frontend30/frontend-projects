const form = document.getElementById("film-form");
const titleInput = document.getElementById("title");
const genreInput = document.getElementById("genre");
const yearInput = document.getElementById("releaseYear");
const watchedInput = document.getElementById("isWatched");
const addBtn = document.getElementById("addBtn");
const editBlock = document.querySelector(".edit-block");
const updateBtn = editBlock.querySelector('button[type="button"]');
const sortSelect = document.getElementById("sortSelect");
const sortBtn = document.getElementById("sortBtn");
const tbody = document.getElementById("film-tbody");

let editIndex = -1;

const getFilms = () => JSON.parse(localStorage.getItem("films") || "[]");
const setFilms = (films) =>
  localStorage.setItem("films", JSON.stringify(films));

const handleFormSubmit = (evt) => {
  evt.preventDefault();
  const films = getFilms();
  const film = {
    title: titleInput.value,
    genre: genreInput.value,
    releaseYear: yearInput.value,
    isWatched: watchedInput.checked,
  };

  if (editIndex < 0) {
    films.push(film);
  } else {
    films[editIndex] = film;
  }

  setFilms(films);
  renderTable();
  resetForm();
};

function renderTable() {
  const films = getFilms();
  tbody.innerHTML = "";
  films.forEach((film, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${film.title}</td>
      <td>${film.genre}</td>
      <td>${film.releaseYear}</td>
      <td>${film.isWatched ? "Да" : "Нет"}</td>
      <td>
        <button class="edit-btn">Редактировать</button>
        <button class="delete-btn">Удалить</button>
      </td>
    `;
    tbody.appendChild(row);

    row
      .querySelector(".edit-btn")
      .addEventListener("click", () => editFilm(film, index));
    row
      .querySelector(".delete-btn")
      .addEventListener("click", () => deleteFilm(films, index));
  });
}

const editFilm = (film, index) => {
  titleInput.value = film.title || "";
  genreInput.value = film.genre || "";
  yearInput.value = film.releaseYear || "";
  watchedInput.checked = !!film.isWatched;

  editIndex = index;
  addBtn.style.display = "none";
  editBlock.style.display = "block";
};

const deleteFilm = (films, index) => {
  films.splice(index, 1);
  setFilms(films);
  resetForm();
  renderTable();
};

function resetForm() {
  editIndex = -1;
  form.reset();
  addBtn.style.display = null;
  editBlock.style.display = null;
}

const handleSort = () => {
  const sortField = sortSelect.value;
  const filmList = getFilms();

  if (sortField === "releaseYear") {
    filmList.sort(
      (filmA, filmB) => Number(filmA.releaseYear) - Number(filmB.releaseYear)
    );
  } else {
    filmList.sort((filmA, filmB) => {
      const valueA = (filmA[sortField] || "").toString().toLowerCase();
      const valueB = (filmB[sortField] || "").toString().toLowerCase();
      if (valueA < valueB) return -1;
      if (valueA > valueB) return 1;
      return 0;
    });
  }

  setFilms(filmList);
  renderTable();
};

form.addEventListener("submit", handleFormSubmit);
form.addEventListener("reset", resetForm);
updateBtn.addEventListener("click", () => {
  if (editIndex >= 0)
    form.dispatchEvent(new Event("submit", { cancelable: true }));
});
sortBtn.addEventListener("click", handleSort);

renderTable();
