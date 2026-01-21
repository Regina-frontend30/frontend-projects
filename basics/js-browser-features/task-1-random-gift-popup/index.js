const giftArr = [
  {
    title: "Скидка 20% на первую покупку в нашем магазине!",
    icon: "/img/discount.svg",
  },
  {
    title: "Скидка 25% на всё!",
    icon: "/img/discount_2.svg",
  },
  {
    title: "Подарок при первой покупке в нашем магазине!",
    icon: "/img/gift.svg",
  },
  {
    title: "Бесплатная доставка для вас!",
    icon: "/img/delivery.svg",
  },
  {
    title: "Сегодня день больших скидок!",
    icon: "/img/discount_3.svg",
  },
];

function showGiftCard() {
  const randomIndex = Math.floor(Math.random() * giftArr.length);

  const div = document.createElement("div");
  const img = document.createElement("img");
  const text = document.createElement("p");
  const button = document.createElement("button");

  img.src = giftArr[randomIndex].icon;
  text.textContent = giftArr[randomIndex].title;
  button.textContent = "Отлично!";

  div.appendChild(img);
  div.appendChild(text);
  div.appendChild(button);

  document.body.appendChild(div);

  button.addEventListener("click", () => div.remove());
}
setTimeout(showGiftCard, 3000);
