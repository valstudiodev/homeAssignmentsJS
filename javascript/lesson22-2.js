"use strict";
// =======================================================================================
// Задача 18. Користувач може змінювати колір фону, що вибирає користувач з використанням
// <input type="color">.
// Зберігати цей колір і відновлювати при наступному відкритті.
// Також зберігати і відображати кількість змін протягом одного сеансу.
// =======================================================================================
function colorChange() {
    const colorInput = document.querySelector(`#colorSelector`);
    if (!colorInput)
        return;
    localStorage.setItem('fontColor', colorInput.value);
    document.body.style.backgroundColor = colorInput.value;
}
function countChange() {
    let changeNum = Number(sessionStorage.getItem('changeNum')) || 0;
    changeNum++;
    sessionStorage.setItem('changeNum', String(changeNum));
    const box = document.querySelector(`.box`);
    if (box) {
        box.textContent = String(changeNum);
    }
}
function startColorChange() {
    const color = localStorage.getItem('fontColor');
    const colorInput = document.querySelector('#colorSelector');
    const box = document.querySelector('.box');
    if (color && colorInput) {
        colorInput.value = color;
        document.body.style.backgroundColor = color;
    }
    sessionStorage.setItem('changeNum', '0');
    if (box) {
        box.textContent = sessionStorage.getItem('changeNum') ?? '0';
    }
}
document.addEventListener('DOMContentLoaded', () => {
    startColorChange();
    const colorInput = document.querySelector(`#colorSelector `);
    if (!colorInput)
        return;
    colorInput.addEventListener('input', () => {
        colorChange();
        countChange();
    });
});
// Початковий масив справ, якщо localStorage порожній
const DEFAULT_TODOS = [
    { id: 1, text: "Купити молоко" },
    { id: 2, text: "Повторити TypeScript" },
    { id: 3, text: "Прибрати в кімнаті" },
    { id: 4, text: "Зробити зарядку" }
];
const STORAGE_KEY = 'todoList';
// 1. Отримання справ зі сховища
function getTasks() {
    const todoListString = localStorage.getItem(STORAGE_KEY);
    if (!todoListString) {
        // Якщо порожньо, записуємо дефолтні справи та повертаємо їх
        saveTasks(DEFAULT_TODOS);
        return DEFAULT_TODOS;
    }
    return JSON.parse(todoListString);
}
// 2. Збереження справ у сховище
function saveTasks(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}
// 3. Вибір випадкового індексу
function getRandomIndex(tasks) {
    return Math.floor(Math.random() * tasks.length);
}
// 4. Видалення справи за індексом
function removeTaskByIndex(index) {
    const currentTasks = getTasks();
    // Видаляємо 1 елемент за вказаним індексом
    currentTasks.splice(index, 1);
    // Оновлюємо localStorage
    saveTasks(currentTasks);
}
// 5. Перевірка випадкової справи (викликається по інтервалу)
function checkRandomTask(intervalId) {
    const currentTasks = getTasks();
    // Якщо справ більше немає — зупиняємо інтервал
    if (currentTasks.length === 0) {
        console.log("Усі справи виконано!");
        clearInterval(intervalId);
        return;
    }
    const randomIndex = getRandomIndex(currentTasks);
    const randomTask = currentTasks[randomIndex];
    // Показуємо вікно підтвердження
    const isConfirmed = confirm(`Бажаєте видалити виконану справу: "${randomTask.text}"?`);
    if (isConfirmed) {
        removeTaskByIndex(randomIndex);
        console.log(`Справу "${randomTask.text}" видалено.`);
    }
}
// 6. Ініціалізація та запуск додатка
function initApp() {
    console.log("Додаток запущено. Очікуйте вибору справи...");
    // Створюємо змінну для ID інтервалу, щоб передати її всередину функції
    let intervalId;
    // Запуск перевірки кожні 5 секунд (5000 мс)
    intervalId = window.setInterval(() => {
        checkRandomTask(intervalId);
    }, 5000);
}
// Запуск програми
initApp();
