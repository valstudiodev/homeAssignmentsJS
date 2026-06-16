// const now: Date = new Date()
// console.log(now);

// // Отримання частин дати
// const year: number = now.getFullYear()
// console.log(year);

// const month: number = now.getMonth()
// console.log(month);

// const day: number = now.getDate()
// console.log(day);

// const hours: number = now.getHours()
// console.log(hours);

// const minutes: number = now.getMinutes()
// console.log(minutes);

// const seconds: number = now.getSeconds()
// console.log(seconds);

// console.log(`Date: ${day}. Month: ${month}. Year: ${year}`);
// console.log(`Time ${hours} : ${minutes} : ${seconds} `);

// Створення конкретної дати
// const customDate: Date = new Date(2026, 5, 9, 12, 30)
// console.log(customDate);


// // Timestamp (ms from 1970)
// const timestamp: number = Date.now();
// console.log(timestamp);

// // Різниця між датами
// const start: Date = new Date()
// const end: Date = new Date(start.getTime() + 1000 * 60 * 60)

// const diffMs: number = end.getTime() - start.getTime()
// const diffMin: number = diffMs / 1000 / 60

// console.log(`Diff in minutes: ${diffMin}`);

// task 1
// const customDate = new Date(2020, 6, 6, 9, 30)
// const nowTime = new Date()

// function formateDate(date: Date): string {
//   const dd = String(date.getDate()).padStart(2, '0')
//   const mm = String(date.getMonth()).padStart(2, '0')
//   const yyyy = date.getFullYear()

//   const hh = String(date.getHours()).padStart(2, '0')
//   const min = String(date.getMinutes()).padStart(2, '0')
//   const sec = String(date.getSeconds()).padStart(2, '0')

//   return `${dd}.${mm}.${yyyy}  ${hh}:${min}:${sec}`
// }
// console.log(formateDate(nowTime));

// task 2
// const date1 = new Date(2026, 5, 6, 15, 30)
// const date2 = new Date(2026, 6, 6, 15, 30)

// function getDaysBetween(a: Date, b: Date): number {
//   const timeA = a.getTime()
//   const timeB = b.getTime()

//   const diffMs = timeB - timeA
//   if (diffMs < 0) throw new Error("Negative number");

//   const msInOneDay = 1000 * 60 * 60 * 24
//   const days = diffMs / msInOneDay

//   const result = Math.floor(days)

//   return result
// }
// const diffDays = getDaysBetween(date1, date2)
// console.log(diffDays);

// task 3
// function isFuture(date: Date): boolean {
//   const now = (Date.now())

//   const target = date.getTime()

//   return target > now ? true : false

// }
// const someTime = new Date(2028, 3, 5, 12, 20)
// console.log(`Task 3: ${isFuture(someTime)}`);



// ====================================================================================================
// Задача 1. Виводити на екран скільки хвилин користувач вже на сайті
// ====================================================================================================
const timer = document.querySelector(`.timer`) as HTMLTimeElement | null
const startTime = new Date()

function getMinutes(): number {
  const currentTime = new Date()
  const MINUTE_IN_MS = 60000
  const difference: number = currentTime.getTime() - startTime.getTime()

  return Math.floor(difference / MINUTE_IN_MS)
}
function renderTimer() {
  if (!timer) return

  const minutes: number = getMinutes()

  timer.textContent = `${minutes} хв`

  timer.setAttribute('datetime', `PT${minutes}M`)
}
renderTimer()
setInterval(renderTimer, 2000);


// ====================================================================================================
// Задача 2. Вводимо час початку процедури (процедура триває 30хв). Визначити, чи процедура ще триває. 
// ====================================================================================================
const DURATION_MS = 30 * 60 * 1000
const startProcedure = new Date()

function checkingStatusProcedure(startTime: Date): boolean {
  const currentTime = new Date()

  const difference: number = currentTime.getTime() - startTime.getTime()

  return difference >= 0 && difference < DURATION_MS
}

const pastDate = new Date()
pastDate.setMinutes(pastDate.getMinutes() - 10)
console.log('Почалася 10 хв тому:', checkingStatusProcedure(pastDate));

const futureDate = new Date();
futureDate.setMinutes(futureDate.getMinutes() + 15);
console.log('Почнеться через 15 хв:', checkingStatusProcedure(futureDate));

const oldDate = new Date();
oldDate.setMinutes(oldDate.getMinutes() - 60);
console.log('Закінчилася годину тому:', checkingStatusProcedure(oldDate));


// =================================================================================
// Задача 3. Визначити скільки залишилось до кінця робочого дня (до 17.00)
// =================================================================================
const endOfDay = new Date()
endOfDay.setHours(17, 0, 0, 0)
console.log(endOfDay);

interface TimeLeft {
  hours: number;
  minutes: number;
}

function checkEndingOfWorkingDay(): TimeLeft | null {
  const now = new Date()
  const difference: number = endOfDay.getTime() - now.getTime()

  if (difference <= 0) {
    console.log('End of the working day!');
    return null
  }

  const totalMinutes: number = Math.floor(difference / 60000)
  const hours: number = Math.floor(totalMinutes / 60)
  const minutes: number = totalMinutes % 60

  return { hours, minutes }
}
const timeLeft = checkEndingOfWorkingDay();

if (timeLeft === null) {
  console.log("Робочий день уже закінчився! Відпочивайте.");
} else {
  console.log(`До кінця робочого дня залишилось: ${timeLeft.hours} год і ${timeLeft.minutes} хв.`);
}


// =================================================================================
// Задача 4. Створити функцію, яка дозволяє визначити, чи знаходиться вказана дата і 
// час у межах поточного тижня (від понеділка 0 год, 0хв, до неділі 23год.59хв)
// =================================================================================
function isDateInCurrentWeek(inputDate: Date): boolean {
  const now = new Date()

  // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const day = now.getDay()

  // convert to Monday-based week
  const diffToMonday = day === 0 ? 6 : day - 1

  // start of week (Monday 00:00:00)
  const startOfWeek = new Date(now)
  startOfWeek.setDate(now.getDate() - diffToMonday)
  startOfWeek.setHours(0, 0, 0, 0)

  // end of week (Sunday 23:59:59.999)
  const endOfWeek = new Date(startOfWeek)
  endOfWeek.setDate(startOfWeek.getDate() + 6)
  endOfWeek.setHours(23, 59, 59, 999)

  const time = inputDate.getTime()

  return time >= startOfWeek.getTime() && time <= endOfWeek.getTime()
}
const testDate = new Date('2026-06-09')
console.log(isDateInCurrentWeek(testDate))


// =================================================================================
// Задача 5. При заході на сайт вітати користувача або відображати повідомлення про те,  
// скільки хвилин залишилось до початку робочого дня (початок о 8.00).
// =================================================================================
function greetUser(): void {
  const now: Date = new Date()

  const startOfWorkingDay: Date = new Date(now)
  startOfWorkingDay.setHours(8, 0, 0, 0)

  const difference = startOfWorkingDay.getTime() - now.getTime()
  const minutesLeft = Math.ceil(difference / 1000 / 60)

  try {
    if (now.getTime() >= startOfWorkingDay.getTime()) {
      throw new Error("Error");
    }
  } catch (error) {
    return alert('Welcome on website!')
  } finally {
    console.log('Function finished');
  }

  // if (now.getTime() >= startOfWorkingDay.getTime()) {
  //   alert("Welcome on website!")
  //   return
  // }

  alert(`До початку робочого дня залишилось ${minutesLeft} хв.`)
}
// const user1 = greetUser()


// =================================================================================
// Задача 6. Вивести скільки зараз годин у Лондоні, Парижі, Сіднеї.
// =================================================================================
const LONDON_TIME = new Date().toLocaleTimeString('en-GB', {
  timeZone: 'Europe/London',
})
const PARIS_TIME = new Date().toLocaleTimeString('en-GB', {
  timeZone: 'Europe/Paris',
})
const SYDNEY_TIME = new Date().toLocaleTimeString('en-GB', {
  timeZone: 'Australia/Sydney'
})

//====================================
const cities = [
  {
    city: 'London',
    timeZone: 'Europe/London',
  },
  {
    city: 'Paris',
    timeZone: 'Europe/Paris',
  },
  {
    city: 'Sydney',
    timeZone: 'Australia/Sydney',
  }
]
type City = {
  city: string
  timeZone: string
}
type CityTime = {
  city: string
  time: string
}

function getCityTime(cities: City[], locale: string): CityTime[] {
  return cities.map((item) => {
    const time = new Date().toLocaleTimeString(locale, {
      timeZone: item.timeZone,
      hour: '2-digit',
      minute: '2-digit',
    });

    return {
      city: item.city,
      time
    }
  })
}
const citiesArr = getCityTime(cities, 'en-GB')

function renderCities(cities: CityTime[]): void {
  const container = document.querySelector(`.task-6`)
  if (!container) return

  cities.forEach(item => {
    const p = document.createElement('p')
    p.textContent = `${item.city}: ${item.time}`
    container.append(p)
  });
}
renderCities(citiesArr)


// =================================================================================
// Задача 7. Дано список студентів (ім’я і дата народження: у формі тексту (день.місяць.рік). 
// Знайти найстаршого студента
// =================================================================================
const listOfStudents = [
  {
    name: 'Jonh',
    birthdate: '22.05.1990'
  },
  {
    name: 'Vsevolod',
    birthdate: '12.11.2005'
  },
  {
    name: 'Alex',
    birthdate: '30.07.2007'
  },
]
function parseDate(dateStr: string): Date {
  const [day, month, year] = dateStr.split('.')

  return new Date(Number(year), Number(month) - 1, Number(day))
}
function findOldestStudent(students: typeof listOfStudents) {
  let oldest = students[0]

  for (let i = 0; i < students.length; i++) {
    const current = students[i]

    if (parseDate(current.birthdate) < parseDate(oldest.birthdate)) {
      oldest = current
    }
  }

  return oldest
}
function renderOldestStudent(result: string): void {
  const p = document.querySelector(`.paragraph`) as HTMLElement
  if (!p) return

  p.textContent = result
}
const oldest = findOldestStudent(listOfStudents)
renderOldestStudent(oldest.name)


// =================================================================================
// Задача 8. Визначити скільки пройшло секунд після заходу на сайт перш ніж користувач зробив рух мишкою.
// =================================================================================
const pageLoadTime = new Date()
let hasMoved = false

function handleMouseMove(): void {

  if (hasMoved) return
  hasMoved = true

  const mouseMoveTime = new Date()

  const difference = mouseMoveTime.getTime() - pageLoadTime.getTime()

  const seconds = difference / 1000

  renderMouseMove(seconds)

  window.removeEventListener('mousemove', handleMouseMove)

}
function renderMouseMove(seconds: number): void {
  const container = document.querySelector(`.task-8`) as HTMLElement
  const p = document.createElement('p') as HTMLElement

  if (container) {
    container.append(p)
    p.textContent = `
      User moved mouse after ${seconds.toFixed(2)} seconds
    `
  }
}
window.addEventListener('mousemove', handleMouseMove)


// =================================================================================
// Задача  9. Користувачка планувала оформила дектретну відпустку на 200 днів (дата 
// початку відпустки вводиться). Визначити чи відпустка вже триває і чи не закінчилась.
// =================================================================================
function getStartVacationDate(): Date | null {
  const input = document.querySelector(`.input`) as HTMLInputElement

  if (!input.value) return null

  return new Date(input.value)
}
function checkVacation(startDate: Date): string {
  const endDate = new Date(startDate)
  endDate.setDate(startDate.getDate() + 200)

  const now = new Date()

  if (now < startDate) return 'Not started'

  if (now >= startDate && now <= endDate) return 'In progress'

  return 'finished'
}
function renderVacation(result: string): void {
  const p = document.querySelector(`.text`) as HTMLElement
  if (!p) return

  p.textContent = result
}
function showResultVacation(): void {
  const startDate = getStartVacationDate()

  if (!startDate || isNaN(startDate.getTime())) {
    renderVacation('Invalid date')
    return
  }

  const result = checkVacation(startDate)

  renderVacation(result)
}
function resultSubmit() {
  const btnCheck = document.querySelector(`.btn-check`) as HTMLButtonElement
  if (btnCheck) {
    btnCheck.addEventListener('click', showResultVacation);
  }
}
resultSubmit()



// =================================================================================
// Задача 10 . Дано дата виробництва йогурта (вводимо рік, місяць, день) та кількість днів придатності. 
// Визначити чи є він придатним на даний момент.
// =================================================================================
function getProductionDate(): Date {
  const inputYear = document.querySelector(`.year`) as HTMLInputElement
  const inputMonth = document.querySelector(`.month`) as HTMLInputElement
  const inputDay = document.querySelector(`.day`) as HTMLInputElement

  const year = Number(inputYear.value)
  const month = Number(inputMonth.value)
  const day = Number(inputDay.value)

  return new Date(year, month - 1, day)
}
function checkYogurt(productionDate: Date, shelfLifeDays: number): string {

  const expirationDate = new Date(productionDate)

  expirationDate.setDate(expirationDate.getDate() + shelfLifeDays)

  const today = new Date()

  if (today <= expirationDate) return 'Valid'

  return 'Expired'

}
function getShelfLifeDays(): number {
  const input = document.querySelector(`.shelf-life`) as HTMLInputElement

  return Number(input.value)
}
function renderResult(result: string): void {
  const p = document.querySelector(`.text-2`) as HTMLParagraphElement
  if (!p) return

  p.textContent = result
}
function onClickProduction(): void {
  const productionDate = getProductionDate()

  if (isNaN(productionDate.getTime())) {
    renderResult('Invalid date')
    return
  }

  const shelfLifeDays = getShelfLifeDays()
  if (isNaN(shelfLifeDays) || shelfLifeDays < 0) {
    renderResult('Invalid shelf life')
    return
  }

  const result = checkYogurt(productionDate, shelfLifeDays)

  renderResult(result)
}
function showResult(): void {
  const btnResult = document.querySelector(`.btn-sub`) as HTMLButtonElement
  if (btnResult) {
    btnResult.addEventListener('click', onClickProduction);
  }
}
showResult()



// =================================================================================
// Задача 11. Сформувати масив з 1000 елементів від 1 до 800. Порівняти час сортування бульбашкою і  вставкою.
// =================================================================================
function generateArray(size: number, min: number, max: number): number[] {
  const numArray: number[] = []

  for (let i = 0; i < size; i++) {
    const randNum = min + Math.floor(Math.random() * (max - min + 1))
    numArray.push(randNum)
  }
  return numArray
}
const randArrNums = generateArray(1000, 1, 800)

function bubbleSort(array: number[]): number[] {

  const newArr: number[] = [...array]
  let changed
  let rightIndex = newArr.length - 1

  do {
    changed = false
    for (let i = 1; i <= newArr.length; i++) {
      if (newArr[i - 1] > newArr[i]) {
        let current = newArr[i - 1]
        newArr[i - 1] = newArr[i]
        newArr[i] = current
        changed = true
      }
    }
    rightIndex--
  } while (changed);
  return newArr
}

function insertetionSort(array: number[]): number[] {
  const newArr: number[] = [...array]

  for (let i = 0; i < newArr.length; i++) {
    let current = newArr[i]
    let f = i - 1
    while (f >= 0 && newArr[f] > current) {
      newArr[f + 1] = newArr[f]
      f--
    }
    newArr[f + 1] = current
  }
  return newArr
}

function measureTime<T>(callback: () => T): number {
  const startTime = new Date()

  callback()

  const endTime = new Date()

  const startMs: number = startTime.getTime()
  const endMS: number = endTime.getTime()

  const executionTime: number = endMS - startMs

  return executionTime
}

function renderSortedArray(result: string): void {
  const p = document.querySelector(`.sort`) as HTMLParagraphElement

  if (!p) return

  p.textContent = result

}

const bubbleTime = measureTime(() => {
  bubbleSort(randArrNums)
})

const insertetionTime = measureTime(() => {
  insertetionSort(randArrNums)
})

renderSortedArray(
  `Bubble: ${bubbleTime} ms, Insertion: ${insertetionTime} ms`
)




















// ==================================================
// ================= magnetic button ================
// ==================================================
function magneticButton() {
  const myBtn = document.querySelector<HTMLButtonElement>(`.btn`)
  if (!myBtn) return

  myBtn.addEventListener('mousemove', (e) => {
    const posBtn = myBtn.getBoundingClientRect()

    const centerX = posBtn.left + posBtn.width / 2
    const centerY = posBtn.top + posBtn.height / 2

    const deltaX = e.clientX - centerX
    const deltaY = e.clientY - centerY

    const moveX = deltaX / 5
    const moveY = deltaY / 5

    myBtn.style.transform = `translate(${moveX}px, ${moveY}px)`

  });

  myBtn.addEventListener('mouseleave', () => {
    myBtn.style.transform = 'translate(0,0)'
  });
}
magneticButton()

// myBtn.addEventListener('mousemove', (e) => {
//   const target = e

//   // const halfX =

//   // console.log(e.clientX);
//   // console.log(e.clientY);

//   // console.log(target);

// });

// myBtn.addEventListener('mouseenter', () => {
//   console.log('mouse on it');
//   // myBtn.style.backgroundColor = 'lightblue'
// });

// myBtn.addEventListener('mouseleave', () => {
//   console.log('Mouse leave');
// });

// myBtn.addEventListener('mousedown', () => {
//   console.log('Mouse down');
// });

// myBtn.addEventListener('mouseup', () => {
//   console.log('Mouse Up');
// });

// myBtn.addEventListener('contextmenu', () => {
//   console.log('menu open');
// });

// myBtn.addEventListener('dblclick', () => {
//   console.log('Double click');
// });

// ==================================================
// ================= Draggable Card ================
// ==================================================
function draggableCard() {
  const card = document.querySelector(`.card`) as HTMLElement

  let isDragging = false
  let offsetX = 0
  let offsetY = 0

  card.addEventListener('mousedown', (e: MouseEvent) => {
    isDragging = true

    const rect = card.getBoundingClientRect()
    offsetX = e.clientX - rect.left
    offsetY = e.clientY - rect.top

  });

  window.addEventListener('mousemove', (e: MouseEvent) => {
    if (!isDragging) return

    const x = e.clientX - offsetX
    const y = e.clientY - offsetY

    card.style.position = 'absolute'
    card.style.left = `${x}px`
    card.style.top = `${y}px`
  });
  window.addEventListener('mouseup', () => {
    isDragging = false
  });
}

// draggableCard()