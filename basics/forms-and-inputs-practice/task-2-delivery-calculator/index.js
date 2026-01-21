const formEL = document.querySelector("form");
const productNameInput = document.getElementById("productName");
const productWeightInput = document.getElementById("productWeight");
const deliveryDistanceInput = document.getElementById("deliveryDistance");
const resultEl = document.getElementById("tbody");
const errorEl = document.getElementById("error");

formEL.addEventListener("submit", function (e) {
  e.preventDefault();
  errorEl.textContent = "";

  const name = productNameInput.value;
  const weight = productWeightInput.value;
  const distance = deliveryDistanceInput.value;

  if (name.trim() === "") {
    return;
  }

  if (weight === "" || weight <= 0) {
    errorEl.textContent =
      "Пожалуйста, введите корректные значения для веса и расстояния";
    return;
  }

  if (distance === "" || distance <= 0) {
    errorEl.textContent =
      "Пожалуйста, введите корректные значения для веса и расстояния";
    return;
  }

  const price = (weight * distance) / 10;

  const row = document.createElement("tr");
  const nameCell = document.createElement("td");
  const weightCell = document.createElement("td");
  const distanceCell = document.createElement("td");
  const priceCell = document.createElement("td");

  nameCell.textContent = name;
  weightCell.textContent = weight;
  distanceCell.textContent = distance;
  priceCell.textContent = `${price.toFixed(2)} руб.`;
  row.append(nameCell, weightCell, distanceCell, priceCell);
  resultEl.append(row);
  formEL.reset();
});



