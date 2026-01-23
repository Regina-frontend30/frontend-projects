import { getLoaderEl } from "./components.js";

export default async function navigate(cardName = "home") {
  const appEl = document.getElementById("app");
  appEl.innerHTML = "";

  const loader = getLoaderEl();
  appEl.append(loader);

  switch (cardName) {
    case "add": {
      const module = await import("./addCard.js");
      appEl.innerHTML = "";
      module.default(appEl);
      break;
    }
    case "home":
    default: {
      const module = await import("./homeCard.js");
      appEl.innerHTML = "";
      module.default(appEl);
      break;
    }
  }
}
