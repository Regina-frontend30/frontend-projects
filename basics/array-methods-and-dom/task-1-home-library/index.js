const books = [
  "Мастер и Маргарита",
  "Гарри Поттер",
  "За пропастью во ржи",
  "Властелин колец",
  "Дюна",
  "Отцы и дети",
];

const addBtn = document.createElement("button");
addBtn.textContent = "Добавить книгу";
addBtn.classList.add("button", "add-button");
document.body.append(addBtn);

addBtn.onclick = function () {
  const newBook = prompt("Введите название книги");

  if (newBook === null || newBook.trim() === "") {
    alert("Название книги не введено!");
  } else {
    books.push(newBook);
    renderList(books);
  }
};

const searchBtn = document.createElement("button");
searchBtn.textContent = "Найти";
searchBtn.classList.add("button");
document.body.append(searchBtn);

searchBtn.onclick = function () {
  const search = prompt("Введите название книги для поиска");
  const findIndex = find(books, search);

  if (findIndex > -1) {
    document.querySelector(
      `li:nth-child(${findIndex + 1})`
    ).style.backgroundColor = "#ffe600ff";
  } else {
    alert("Книга не найдена");
  }
};

const listEl = document.createElement("ul");
document.body.append(listEl);

function renderList(arr) {
  listEl.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    const liEl = document.createElement("li");
    liEl.textContent = `${i + 1}) ${arr[i]}`;
    listEl.append(liEl);
  }
}

function find(arr, search) {
  let result = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search) {
      result = i;
      break;
    }
  }
  return result;
}

renderList(books);
