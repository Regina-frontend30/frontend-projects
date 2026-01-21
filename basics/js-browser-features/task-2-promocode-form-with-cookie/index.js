const promocodeObj = {
  promocode: "PROM50",
  gift: "Скидка 50%",
};

const formEL = document.querySelector("form");
const promocodeInput = document.getElementById("promocodeName");
const resultEl = document.getElementById("result");
const messageEl = document.getElementById("message");

formEL.addEventListener("submit", function (e) {
  e.preventDefault();

  if (promocodeInput.value === promocodeObj.promocode) {
    messageEl.textContent = `Промокод применен. ${promocodeObj.gift}`;
    promocodeInput.style.color = "green";
    document.cookie = `promocode=${promocodeObj.promocode}`;
  } else {
    promocodeInput.value = "";
    promocodeInput.style.color = null;
    messageEl.textContent = "";
  }
});

function getCookie() {
  return document.cookie.split(";").reduce((acc, item) => {
    const [name, value] = item.split("=");
    acc[name] = value;
    return acc;
  }, {});
}

const cookie = getCookie();

if (cookie.promocode === promocodeObj.promocode) {
  promocodeInput.value = cookie.promocode;
  messageEl.textContent = `Промокод применен. ${promocodeObj.gift}`;
  promocodeInput.style.color = "green";
}
