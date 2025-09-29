document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", () => {
    alert("Спасибо! Ваше сообщение отправлено.");
  });
});