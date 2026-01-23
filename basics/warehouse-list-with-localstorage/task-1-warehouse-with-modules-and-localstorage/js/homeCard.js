import { getItems, deleteItem } from "./storage.js";
import { getCardEl, getTitleEl, getButtonEl } from "./components.js";
import navigate from "./navigate.js";

export default function createHomeCard(containerEl) {
  const cardEl = getCardEl();
  const titleEl = getTitleEl("Склад");

  const topRowEl = document.createElement("div");
  topRowEl.classList.add("top-row");

  const addButtonEl = getButtonEl("Добавить запись", "btn-primary");
  addButtonEl.addEventListener("click", () => navigate("add"));

  topRowEl.append(addButtonEl);

  // таблица
  const tableWrapperEl = document.createElement("div");
  tableWrapperEl.classList.add("table-wrapper");

  const tableEl = document.createElement("table");
  tableEl.classList.add("table");

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  const columns = [
    { key: "title", label: "Название" },
    { key: "shelf", label: "Полка" },
    { key: "weight", label: "Вес" },
    { key: "storageTime", label: "Время хранения" },
    { key: "actions", label: "Действие", sortable: false },
  ];

  columns.forEach((col) => {
    const th = document.createElement("th");
    th.textContent = col.label;
    if (col.sortable !== false && col.key !== "actions") {
      th.classList.add("sortable");
      th.addEventListener("click", () => sortBy(col.key));
    }
    headerRow.append(th);
  });

  thead.append(headerRow);
  tableEl.append(thead);

  const tbody = document.createElement("tbody");
  tableEl.append(tbody);
  tableWrapperEl.append(tableEl);

  cardEl.append(titleEl, topRowEl, tableWrapperEl);
  containerEl.append(cardEl);

  let items = getItems();

  function renderRows() {
    tbody.innerHTML = "";
    items.forEach((item, index) => {
      const tr = document.createElement("tr");

      const tdTitle = document.createElement("td");
      tdTitle.textContent = item.title;

      const tdShelf = document.createElement("td");
      tdShelf.textContent = item.shelf;

      const tdWeight = document.createElement("td");
      tdWeight.textContent = item.weight;

      const tdTime = document.createElement("td");
      tdTime.textContent = item.storageTime;

      const tdActions = document.createElement("td");
      const delBtn = getButtonEl("Удалить", "btn-danger");
      delBtn.addEventListener("click", () => {
        deleteItem(index);
        items = getItems();
        renderRows();
      });

      tdActions.append(delBtn);
      tr.append(tdTitle, tdShelf, tdWeight, tdTime, tdActions);
      tbody.append(tr);
    });
  }

  function sortBy(fieldName) {
    items = [...items].sort((firstItem, secondItem) => {
      const firstValue = firstItem[fieldName];
      const secondValue = secondItem[fieldName];

      if (!isNaN(firstValue) && !isNaN(secondValue)) {
        return Number(firstValue) - Number(secondValue);
      }

      return String(firstValue).localeCompare(String(secondValue), "ru");
    });

    renderRows();
  }

  renderRows();
}
