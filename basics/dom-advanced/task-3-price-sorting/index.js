const prices = [100, 200, 345, 120, 550];
const priceList = document.querySelector("#price-list");
const sortAscending = document.querySelector("#ascending");
const sortDescending = document.querySelector("#descending");
function renderPrices() {
  priceList.innerHTML = "";
  prices.forEach((newPrices) => {
    const priceItem = document.createElement("li");
    priceItem.textContent = newPrices;
    priceList.appendChild(priceItem);
  });
}
renderPrices();

sortAscending.addEventListener("click", function () {
  prices.sort((a, b) => a - b);
  renderPrices();
});

sortDescending.addEventListener("click", function () {
  prices.sort((a, b) => b - a);
  renderPrices();
});
