export default class Delivery {
  constructor(name, address, distance) {
    this.name = name;
    this.address = address;
    this._distance = distance;
    this._distanceEl = null;
  }

  get distance() {
    return this._distance + " км";
  }

  set distance(value) {
    if (value < 0) {
      return;
    }

    this._distance = value;

    if (this._distanceEl) {
      this._distanceEl.textContent = this.distance;
    }
  }

  createCardElement() {
    const card = document.createElement("div");
    card.classList.add("delivery-card");

    const nameTitle = document.createElement("div");
    nameTitle.textContent = "Имя";
    const nameValue = document.createElement("div");
    nameValue.textContent = this.name;

    const addressTitle = document.createElement("div");
    addressTitle.textContent = "Адрес";
    const addressValue = document.createElement("div");
    addressValue.textContent = this.address;

    const distanceTitle = document.createElement("div");
    distanceTitle.textContent = "Расстояние";
    const distanceValue = document.createElement("div");
    distanceValue.textContent = this.distance;

    this._distanceEl = distanceValue;

    card.append(
      nameTitle,
      nameValue,
      addressTitle,
      addressValue,
      distanceTitle,
      distanceValue
    );

    return card;
  }
}
