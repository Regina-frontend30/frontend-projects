const contentEl = document.querySelector(".products");

const products = ["Мышка", "Клавиатура", "Наушники"];
products.push("Монитор", "Принтер", "Флешка");

for (let i = 0; i < products.length; i++) {
  const liEL = document.createElement("li");
  liEL.textContent = products[i];
  contentEl.appendChild(liEL);
}
