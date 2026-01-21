const formEL = document.querySelector("form");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const genderInputs = document.querySelectorAll('input[type="radio"]');
const sliderInput = document.getElementById("rating");
const checkboxInputs = document.querySelectorAll('input[type="checkbox"]');
const commentInput = document.getElementById("comments");
const resultEl = document.getElementById("result");

formEL.addEventListener("submit", function (e) {
  e.preventDefault();

  const result = {
    userNameValue: {
      label: "Имя пользователя:",
      value: usernameInput.value,
    },
    emailInputValue: {
      label: "Email:",
      value: emailInput.value,
    },
    genderValue: {
      label: "Пол:",
      value: null,
    },
    sliderInputValue: {
      label: "Оценка сервиса:",
      value: sliderInput.value,
    },
    checkboxValues: {
      label: "Интересы пользователя:",
      value: [],
    },
    commentInputValue: {
      label: "Дополнительные комментарии:",
      value: commentInput.value,
    },
  };

  resultEl.innerHTML = "";

  genderInputs.forEach((genderInput) => {
    if (genderInput.checked) {
      result.genderValue.value = genderInput.value;
    }
  });

  checkboxInputs.forEach((checkboxInput) => {
    if (checkboxInput.checked) {
      result.checkboxValues.value.push(checkboxInput.value);
    }
  });

  const resultContent = document.createElement("div");

  Object.keys(result).forEach((key) => {
    const item = document.createElement("div");
    item.innerHTML = result[key].label + " " + result[key].value;
    resultContent.append(item);
  });

  resultEl.append(resultContent);
});
