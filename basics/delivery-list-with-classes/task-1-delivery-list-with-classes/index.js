import Delivery from "./Delivery.js";

const deliveryArr = [
  new Delivery("Ольга", "ул. Вымыслов, д. 12", 8),
  new Delivery("Дмитрий", "ул. Задачная, д. 7", 3),
  new Delivery("Оля", "ул. Ткачей, д. 43", 11),
];

const listEl = document.querySelector("#delivery-list");

deliveryArr.forEach((delivery) => {
  const cardEl = delivery.createCardElement();
  listEl.append(cardEl);
});
