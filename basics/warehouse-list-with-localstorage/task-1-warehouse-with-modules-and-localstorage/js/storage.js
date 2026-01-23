const storageKey = "warehouse-items";

function loadItems() {
  const raw = localStorage.getItem(storageKey);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveItems(items) {
  localStorage.setItem(storageKey, JSON.stringify(items));
}

export function getItems() {
  return loadItems();
}

export function addItem(item) {
  const items = loadItems();
  items.push(item);
  saveItems(items);
}

export function deleteItem(index) {
  const items = loadItems();
  items.splice(index, 1);
  saveItems(items);
}
