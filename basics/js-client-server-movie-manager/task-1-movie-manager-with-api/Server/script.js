const titleInput = document.getElementById('title');
const genreInput = document.getElementById('genre');
const releaseYearInput = document.getElementById('releaseYear');
const isWatchedInput = document.getElementById('isWatched');
const filmTableBody = document.getElementById('film-tbody');
const titleFilter = document.getElementById('filter-title');
const genreFilter = document.getElementById('filter-genre');
const yearFilter = document.getElementById('filter-year');
const statusSelect = document.getElementById('filter-status');
const deleteAll = document.getElementById('delete-all');
const filmForm = document.getElementById('film-form');
const filtersForm = document.querySelector('.filters-form');

function handleFormSubmit(e) {
  e.preventDefault();

  const film = {
    title: titleInput.value,
    genre: genreInput.value,
    releaseYear: releaseYearInput.value,
    isWatched: isWatchedInput.checked,
  };

  addFilm(film);
  filmForm.reset();
}

async function addFilm(film) {
  await fetch('https://sb-film.skillbox.cc/films', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      email: 'ovikdevil@gmail.com',
    },
    body: JSON.stringify(film),
  });
  renderFilms();
}

async function renderFilms() {
  const params = `?title=${titleFilter.value}&genre=${genreFilter.value}&releaseYear=${yearFilter.value}&isWatched=${statusSelect.value}`;
  const filmsResponse = await fetch(`https://sb-film.skillbox.cc/films${params}`, {
    headers: {
      email: 'ovikdevil@gmail.com',
    },
  });
  const films = await filmsResponse.json();
  filmTableBody.innerHTML = '';

  films.forEach((film) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${film.title}</td>
      <td>${film.genre}</td>
      <td>${film.releaseYear}</td>
      <td>${film.isWatched ? 'Да' : 'Нет'}</td>
      <td>
        <button class="delete-btn">Удалить</button>
      </td>
    `;

    row.querySelector('.delete-btn').addEventListener('click', () => deleteFilm(film.id));
    filmTableBody.appendChild(row);
  });
}

async function deleteFilm(id) {
  await fetch(`https://sb-film.skillbox.cc/films/${id || ''}`, {
    method: 'DELETE',
    headers: {
      email: 'ovikdevil@gmail.com',
    },
  });
  renderFilms();
}

filmForm.addEventListener('submit', handleFormSubmit);
deleteAll.addEventListener('click', () => deleteFilm());
filtersForm.addEventListener('input', renderFilms);

renderFilms();
