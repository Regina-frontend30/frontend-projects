import { addItem } from "./storage.js";
import { getCardEl, getTitleEl, getButtonEl } from "./components.js";
import navigate from "./navigate.js";

export default function renderAddCard(containerEl) {
  const cardEl = getCardEl();
  const titleEl = getTitleEl("Добавить запись");

  const formEl = document.createElement("form");
  formEl.classList.add("add-form");

  const nameLabel = document.createElement("label");
  nameLabel.textContent = "Название";
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "title";
  nameInput.required = true;

  const shelfLabel = document.createElement("label");
  shelfLabel.textContent = "Полка";
  const shelfInput = document.createElement("input");
  shelfInput.type = "text";
  shelfInput.name = "shelf";
  shelfInput.required = true;

  const weightLabel = document.createElement("label");
  weightLabel.textContent = "Вес";
  const weightInput = document.createElement("input");
  weightInput.type = "number";
  weightInput.name = "weight";
  weightInput.min = "0";
  weightInput.required = true;

  const timeLabel = document.createElement("label");
  timeLabel.textContent = "Время хранения";
  const timeInput = document.createElement("input");
  timeInput.type = "date";
  timeInput.name = "storageTime";
  timeInput.required = true;

  const actions = document.createElement("div");
  actions.classList.add("actions");

  const submitBtn = getButtonEl("Добавить запись", "btn-primary");
  actions.append(submitBtn);

  formEl.append(
    nameLabel,
    nameInput,
    shelfLabel,
    shelfInput,
    weightLabel,
    weightInput,
    timeLabel,
    timeInput,
    actions
  );

  formEl.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = nameInput.value.trim();
    const shelf = shelfInput.value.trim();
    const weight = weightInput.value.trim();
    const storageTime = timeInput.value.trim();

    if (!title || !shelf || !weight || !storageTime) {
      alert("Заполните все поля");
      return;
    }

    if (Number(weight) <= 0 || Number.isNaN(Number(weight))) {
      alert("Вес должен быть положительным числом");
      return;
    }

    addItem({
      title,
      shelf,
      weight: Number(weight),
      storageTime,
    });

    navigate("home");
  });

  cardEl.append(titleEl, formEl);
  containerEl.append(cardEl);
}
