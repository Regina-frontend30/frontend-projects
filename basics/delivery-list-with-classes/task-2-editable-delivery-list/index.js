import EditDelivery from "./EditDelivery.js";

const deliveryArr = [
  new EditDelivery("Ольга", "ул. Вымыслов, д. 12", 8, "delivery"),
  new EditDelivery("Дмитрий", "ул. Задачная, д. 7", 3, "delivered"),
  new EditDelivery("Оля", "ул. Ткачей, д. 43", 11, "canceled"),
];

const listEl = document.querySelector("#delivery-list");

deliveryArr.forEach((delivery) => {
  const cardEl = delivery.createCardElement();
  listEl.append(cardEl);
});
