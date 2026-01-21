const userNameEl = document.getElementById("userName");
const colorNameEl = document.getElementById("colorName");
const resultEl = document.getElementById("card");

userNameEl.addEventListener("input", function () {
  resultEl.textContent = userNameEl.value;
});

colorNameEl.addEventListener("change", function () {
  resultEl.style.backgroundColor = colorNameEl.value;
});

userNameEl.addEventListener("focus", function () {
  userNameEl.style.border = "2px solid blue";
});

userNameEl.addEventListener("blur", function () {
  userNameEl.style.border = "";
});
