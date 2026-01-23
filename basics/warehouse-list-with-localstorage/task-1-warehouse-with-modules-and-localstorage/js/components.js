export function getCardEl() {
  const cardEl = document.createElement("div");
  cardEl.classList.add("card");
  return cardEl;
}

export function getTitleEl(text) {
  const titleEl = document.createElement("h1");
  titleEl.classList.add("title");
  titleEl.textContent = text;
  return titleEl;
}

export function getLoaderEl() {
  const loaderEl = document.createElement("div");
  loaderEl.classList.add("loader");
  return loaderEl;
}

export function getButtonEl(text, additionalClass) {
  const buttonEl = document.createElement("button");
  buttonEl.classList.add("btn");

  if (additionalClass) {
    buttonEl.classList.add(additionalClass);
  }

  buttonEl.textContent = text;
  return buttonEl;
}
