const products = [
  "Книга",
  "Кофе",
  "Арбуз",
  "Макароны",
  "Сахар",
  "Молоко",
  "Яблоки",
];

const addBtn = document.createElement("button");
addBtn.textContent = "Добавить товар";
addBtn.classList.add("button");
document.body.append(addBtn);

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

function sortProducts(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

addBtn.onclick = function () {
  const newProducts = prompt("Введите название товара");

  if (newProducts === null || newProducts.trim() === "") {
    alert("Название товара не введено!");
  } else {
    products.push(newProducts);
    sortProducts(products);
    renderList(products);
  }
};

sortProducts(products);
renderList(products);
