function handleFormSubmit(e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const genre = document.getElementById("genre").value;
  const releaseYear = document.getElementById("releaseYear").value;
  const isWatched = document.getElementById("isWatched").checked;

  if (!title.trim()) {
    alert("Заполните название фильма");
    return;
  }

  if (!genre.trim()) {
    alert("Заполните жанр фильма");
    return;
  }

  if (!releaseYear.trim()) {
    alert("Заполните год выпуска фильма");
    return;
  }

  const film = {
    title: title,
    genre: genre,
    releaseYear: releaseYear,
    isWatched: isWatched,
  };

  addFilm(film);
}

async function addFilm(film) {
  // const films = JSON.parse(localStorage.getItem("films")) || [];
  // films.push(film);
  // localStorage.setItem("films", JSON.stringify(films));

  // console.log(film);
  await fetch("https://sb-film.skillbox.cc/films", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      email: "ovikdevil@gmail.com",
    },
    body: JSON.stringify(film),
  });
  renderTable();
}

let allFilms = [];

function renderFilms(filmsToRender) {
  const filmTableBody = document.getElementById("film-tbody");
  filmTableBody.innerHTML = "";

  filmsToRender.forEach((film) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${film.title}</td>
      <td>${film.genre}</td>
      <td>${film.releaseYear}</td>
      <td>${film.isWatched ? "Да" : "Нет"}</td>
      <td>
        <button class="delete-btn" data-id="${film.id}">Удалить</button>
      </td>
    `;

    const deleteBtn = row.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", handleDeleteClick);

    filmTableBody.appendChild(row);
  });
}
function applyFilters() {
  const titleInput = document.getElementById("filter-title");
  const genreInput = document.getElementById("filter-genre");
  const yearInput = document.getElementById("filter-year");
  const statusSelect = document.getElementById("filter-status");

  const titleValue = titleInput.value.trim().toLowerCase();
  const genreValue = genreInput.value.trim().toLowerCase();
  const yearValue = yearInput.value.trim();
  const statusValue = statusSelect.value;

  let filteredFilms = allFilms;

  if (titleValue !== "") {
    filteredFilms = filteredFilms.filter((film) =>
      film.title.toLowerCase().includes(titleValue)
    );
  }

  if (genreValue !== "") {
    filteredFilms = filteredFilms.filter((film) =>
      film.genre.toLowerCase().includes(genreValue)
    );
  }

  if (yearValue !== "") {
    filteredFilms = filteredFilms.filter(
      (film) => String(film.releaseYear) === yearValue
    );
  }

  if (statusValue === "watched") {
    filteredFilms = filteredFilms.filter((film) => film.isWatched === true);
  } else if (statusValue === "unwathed" || statusValue === "unwatched") {
    filteredFilms = filteredFilms.filter((film) => film.isWatched === false);
  }

  renderFilms(filteredFilms);
}

async function renderTable() {
  // const films = JSON.parse(localStorage.getItem("films")) || [];
  const filmsResponse = await fetch("https://sb-film.skillbox.cc/films", {
    headers: {
      email: "ovikdevil@gmail.com",
    },
  });
  const films = await filmsResponse.json();

  allFilms = films;

  renderFilms(allFilms);
}

function handleDeleteClick(event) {
  const button = event.currentTarget;
  const id = button.dataset.id;
  deleteFilm(id);
}

async function deleteFilm(id) {
  await fetch(`https://sb-film.skillbox.cc/films/${id}`, {
    method: "DELETE",
    headers: {
      email: "ovikdevil@gmail.com",
    },
  });
  renderTable();
}

async function deleteAllFilms() {
  await fetch("https://sb-film.skillbox.cc/films", {
    method: "DELETE",
    headers: {
      email: "ovikdevil@gmail.com",
    },
  });

  renderTable();
}

document
  .getElementById("film-form")
  .addEventListener("submit", handleFormSubmit);

document
.getElementById("filter-title")
.addEventListener("input", applyFilters);

document
.getElementById("filter-genre")
.addEventListener("input", applyFilters);

document
.getElementById("filter-year")
.addEventListener("input", applyFilters);

document
  .getElementById("filter-status")
  .addEventListener("change", applyFilters);

document
  .getElementById("delete-all")
  .addEventListener("click", function (event) {
    deleteAllFilms();
  });

renderTable();
