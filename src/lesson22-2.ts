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
localStorage.setItem('tasks', JSON.stringify([
  'Learn React',
  'Go to gym',
  'Read a book',
  'Learn JS',
  'Cook a dinner'
]))


function getTasks(): string[] {
  const tasksList = localStorage.getItem('tasks')
  if (!tasksList) return []

  return JSON.parse(tasksList) as string[]
}

function saveTasks(tasks: string[]): void {
  const tasksArr = JSON.stringify(tasks)

  localStorage.setItem('tasks', tasksArr)
}

function getRandomIndex(): number | null {
  const tasks = getTasks()
  if (tasks.length === 0) return null

  const randomIndex = Math.floor(Math.random() * tasks.length)

  return randomIndex
}

function removeTask(index: number): void {
  const tasks = getTasks()

  if (index < 0 || index >= tasks.length) return

  tasks.splice(index, 1)

  saveTasks(tasks)
}

function showRandomTask() {
  const index = getRandomIndex()
  if (index === null) return

  const tasks = getTasks()
  const task = tasks[index]

  const userAnswer = confirm(`Would you like to complete: ${task}`)

  if (userAnswer)
    removeTask(index)
}

const userInput = showRandomTask()