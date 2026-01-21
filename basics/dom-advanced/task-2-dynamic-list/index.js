const addButton = document.querySelector("#addItem");
const deleteButton = document.querySelector("#deleteItem");
const list = document.querySelector("#list");
addButton.addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Новый элемент списка";
  list.appendChild(newItem);
});

deleteButton.addEventListener("click", function () {
  let lastItem = list.lastElementChild;
  if (lastItem) {
    lastItem.remove();
  }
});
