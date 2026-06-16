// =======================================================================================
// Задача 18. Користувач може змінювати колір фону, що вибирає користувач з використанням
// <input type="color">.
// Зберігати цей колір і відновлювати при наступному відкритті.
// Також зберігати і відображати кількість змін протягом одного сеансу.
// =======================================================================================
document.addEventListener('DOMContentLoaded', () => {
  const inputColor = document.querySelector(`.input`) as HTMLInputElement
  if (!inputColor) return

  const savedColor = localStorage.getItem('inputColor')
  if (savedColor) {
    document.body.style.backgroundColor = savedColor
    inputColor.value = savedColor
  }

  inputColor.addEventListener('input', () => {
    const inputValue = inputColor.value

    document.body.style.backgroundColor = inputValue;
    localStorage.setItem('inputColor', inputValue);
  });
});