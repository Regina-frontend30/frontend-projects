function greeting() {
  const username = prompt("Введите имя пользователя");

  if (!username) {
    throw new Error("Имя обязательно для заполнения");
  }

  console.log(`Привет, ${username}!`);
}

try { 
  greeting();
} catch (error) { 
  alert(error.message);
}
