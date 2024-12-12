document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      alert("Пароли не совпадают!");
      return;
    }

    // Здесь можно добавить логику для регистрации пользователя
    alert(`Регистрация завершена! Добро пожаловать, ${username}!`);
  });
