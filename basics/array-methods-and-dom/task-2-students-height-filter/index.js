const heights = ["163", "170", "155", "180", "185", "172"];

function renderList(arr) {
  listEl.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    const liEl = document.createElement("li");
    liEl.textContent = `${i + 1}) ${arr[i]}`;
    listEl.append(liEl);
  }
}

const addBtn = document.createElement("button");
addBtn.textContent = "Добавить рост";
addBtn.classList.add("button");
document.body.append(addBtn);

addBtn.onclick = function () {
  const newheights = prompt("Введите рост ученика");
  if (newheights === null || newheights.trim() === "") {
    alert("Рост не введён!");
  } else {
    heights.push(newheights);
    renderList(heights);
  }
};

function filter(arr, minheights) {
  const result = [];
  for (const item of arr) {
    if (item >= minheights) {
      result.push(item);
    }
  }
  return result;
}

const filterBtn = document.createElement("button");
filterBtn.textContent = "Фильтровать";
filterBtn.classList.add("button", "add-button");
document.body.append(filterBtn);

filterBtn.onclick = function () {
  const newheights = prompt("Введите минимальный рост ");
  if (newheights === null || newheights.trim() === "") {
    renderList(heights);
  } else {
    const result = filter(heights, newheights);
    renderList(result);
  }
};

const listEl = document.createElement("ul");
document.body.append(listEl);
renderList(heights);
