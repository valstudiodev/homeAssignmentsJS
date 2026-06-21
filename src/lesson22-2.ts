// =======================================================================================
// Задача 18. Користувач може змінювати колір фону, що вибирає користувач з використанням
// <input type="color">.
// Зберігати цей колір і відновлювати при наступному відкритті.
// Також зберігати і відображати кількість змін протягом одного сеансу.
// =======================================================================================
function colorChange(): void {
  const colorInput = document.querySelector<HTMLInputElement>(`#colorSelector`)
  if (!colorInput) return

  localStorage.setItem('fontColor', colorInput.value)
  document.body.style.backgroundColor = colorInput.value
}

function countChange(): void {
  let changeNum = Number(sessionStorage.getItem('changeNum')) || 0
  changeNum++
  sessionStorage.setItem('changeNum', String(changeNum))
  const box = document.querySelector(`.box`) as HTMLElement
  if (box) {
    box.textContent = String(changeNum)
  }
}

function startColorChange(): void {
  const color = localStorage.getItem('fontColor')

  const colorInput = document.querySelector<HTMLInputElement>('#colorSelector');

  const box = document.querySelector<HTMLElement>('.box');

  if (color && colorInput) {
    colorInput.value = color
    document.body.style.backgroundColor = color
  }
  sessionStorage.setItem('changeNum', '0');

  if (box) {
    box.textContent = sessionStorage.getItem('changeNum') ?? '0';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  startColorChange()
  const colorInput = document.querySelector<HTMLInputElement>(`#colorSelector `)
  if (!colorInput) return

  colorInput.addEventListener('input', () => {
    colorChange()
    countChange()
  });
});


// =======================================================================================
// Задача 19. Зберігати у пам’яті список справ, які користувачу треба виконати (зберігати у localStorage).
// Періодично випадковим чином вибирати якусь з справ і виводити користувачу (з використанням confirm).
// Якщо користувач натискає на «Ок», то видаляти цю задачу.
// =======================================================================================
interface Todo {
  id: number;
  text: string;
}

// Початковий масив справ, якщо localStorage порожній
const DEFAULT_TODOS: Todo[] = [
  { id: 1, text: "Купити молоко" },
  { id: 2, text: "Повторити TypeScript" },
  { id: 3, text: "Прибрати в кімнаті" },
  { id: 4, text: "Зробити зарядку" }
];

const STORAGE_KEY = 'todoList';

// 1. Отримання справ зі сховища
function getTasks(): Todo[] {
  const todoListString = localStorage.getItem(STORAGE_KEY);

  if (!todoListString) {
    // Якщо порожньо, записуємо дефолтні справи та повертаємо їх
    saveTasks(DEFAULT_TODOS);
    return DEFAULT_TODOS;
  }

  return JSON.parse(todoListString) as Todo[];
}

// 2. Збереження справ у сховище
function saveTasks(todos: Todo[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

// 3. Вибір випадкового індексу
function getRandomIndex(tasks: Todo[]): number {
  return Math.floor(Math.random() * tasks.length);
}

// 4. Видалення справи за індексом
function removeTaskByIndex(index: number): void {
  const currentTasks = getTasks();

  // Видаляємо 1 елемент за вказаним індексом
  currentTasks.splice(index, 1);

  // Оновлюємо localStorage
  saveTasks(currentTasks);
}

// 5. Перевірка випадкової справи (викликається по інтервалу)
function checkRandomTask(intervalId: number): void {
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
function initApp(): void {
  console.log("Додаток запущено. Очікуйте вибору справи...");

  // Створюємо змінну для ID інтервалу, щоб передати її всередину функції
  let intervalId: number;

  // Запуск перевірки кожні 5 секунд (5000 мс)
  intervalId = window.setInterval(() => {
    checkRandomTask(intervalId);
  }, 5000);
}

// Запуск програми
initApp();