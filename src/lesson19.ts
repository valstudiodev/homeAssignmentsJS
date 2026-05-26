// =========================================================================
function createTitle(titleText: string, className: string) {
  const title = document.createElement('h2')
  title.className = className
  title.innerText = titleText

  return title
}
// =========================================================================

// =========================================================================
// Задача 1. Дано 10 рядків тексту «Hello!» у окремих div. 
// При кліку на якийсь із них усі наступні повинні бути зафарбовані у червоний колір.
// =========================================================================
const title1 = createTitle('Задача 1', 'title-1')
const container1 = document.querySelector(`.task-1`) as HTMLElement
container1?.before(title1)

class GenerateDivs {
  amount: number;
  container: HTMLElement;

  constructor(amount: number, container: HTMLElement) {
    this.amount = amount;
    this.container = container;
  }

  initMain() {
    this.createItems('item', 'Hello!')
    this.addEvents()
    this.styles()
  }

  styles() {
    this.container.style.backgroundColor = 'lightgrey'
    this.container.style.display = 'flex'
    this.container.style.flexDirection = 'column'
    this.container.style.gap = '10px'
    this.container.style.alignItems = 'center'
    this.container.style.padding = '20px'
    this.container.style.border = '2px solid #000'
    this.container.style.maxWidth = '100px'
  }

  createItems(className: string, text: string) {
    for (let i = 0; i < this.amount; i++) {
      const div = document.createElement('div')
      div.className = className
      div.innerText = text
      div.style.fontSize = '20px'
      this.container.append(div)
    }
  }

  addEvents() {
    const divs = Array.from(this.container.children)

    divs.forEach((item, index) => {
      item.addEventListener('click', () => {
        this.paintItems(index)
      })
    })
  }

  paintItems(index) {
    const divs = Array.from(this.container.children)

    divs.forEach((div, i) => {
      if (i > index) {
        div.style.color = 'red'
      }
    });
  }
}
const itemsDiv = new GenerateDivs(10, container1)
itemsDiv.initMain()


// =========================================================================
// Задача 2. Дано 5 елементів input. При введенні значення у якийсь із них необхідно 
// автоматично заповнювати інші (усі попередні у спадному порядку(кожен попередній 
// має значення на 1 менше за наступний), усі наступні на 1 більше (кожен наступне на 1 більше за попереднього)
const title2 = createTitle('Задача 2', 'title-2')
const container2 = document.querySelector(`.task-2`) as HTMLElement
container2?.before(title2)

class GenerateInputs {
  amount: number;
  container: HTMLElement;
  inputs: HTMLInputElement[] = [];

  constructor(amount: number, container: HTMLElement) {
    this.amount = amount;
    this.container = container;
  }

  createInputs() {
    for (let i = 0; i < this.amount; i++) {
      const wrap = document.createElement('div')
      wrap.className = 'wrap'
      wrap.style.maxWidth = '300px'

      const label = document.createElement('label')
      label.className = 'label'
      label.style.marginRight = '10px'
      label.innerText = `Value ${i + 1}`
      label.htmlFor = `value-input-${i + 1}`

      const input = document.createElement('input')
      input.className = 'input-field'
      input.type = 'number'
      input.id = `value-input-${i + 1}`

      wrap.append(label)
      wrap.append(input)
      this.inputs.push(input)

      this.container.append(wrap)
    }
  }

  updateValues(currentIndex: number, currentValue: number) {
    // for (let i = 0; i < this.inputs.length; i++) {
    //   const difference = i - currentIndex
    //   const newValue = currentValue + difference
    //   const input = this.inputs[i]
    //   input.value = String(newValue)
    // }

    this.inputs.forEach((input, index) => {
      const difference = index - currentIndex
      const newValue = currentValue + difference
      input.value = String(newValue)
    });
  }

  addEvents() {
    this.inputs.forEach((item, index) => {
      item.addEventListener('input', () => {
        const value = Number(item.value)

        if (isNaN(value)) return

        this.updateValues(index, value)

      });
    })
  }

  render() {
    this.createInputs()
    this.addEvents()
  }
}
const input = new GenerateInputs(5, container2)
input.render()


// =========================================================================
// Задача 3. Дано 5 випадковим чином згенерованих нумерованих списків з рандомними
// числами (кількість елементів у списку випадкова від 1 до 10, елементи випадкові – від 1 до 100).
// При натисненні на кнопку нумеровані списки з парною кількістю елементів зафарбувати у зелений колір, інші у червоний.
// =========================================================================
const title3 = createTitle('Задача 3', 'title-3')
const container3 = document.querySelector(`.task-3`) as HTMLElement
container3?.before(title3)

class GenerateNumberedLists {
  listAmount: number;
  container: HTMLElement;
  lists: HTMLOListElement[] = [];
  button!: HTMLButtonElement;

  constructor(listAmount: number, container: HTMLElement) {
    this.listAmount = listAmount;
    this.container = container;
  }

  createList() {
    for (let i = 0; i < this.listAmount; i++) {

      const ol = document.createElement('ol')
      ol.style.maxWidth = '200px'
      ol.style.display = 'flex'
      ol.style.flexDirection = 'column'
      ol.style.gap = '5px'

      const countLi = 1 + Math.floor(Math.random() * 10)

      for (let i = 0; i < countLi; i++) {
        const li = document.createElement('li')
        const value = 1 + Math.floor(Math.random() * 100)
        li.innerText = String(value)
        ol.append(li)
      }

      this.lists.push(ol)
      this.container.append(ol)
    }
  }

  generateRandomNumber() {
    1 + Math.floor(Math.random() * 100)
  }

  paintList() {
    this.lists.forEach((list) => {
      let listLength = list.children.length

      if (listLength % 2 === 0) {
        list.style.backgroundColor = 'lightgreen'
      } else
        list.style.backgroundColor = 'lightcoral'
    })
  }

  createButton(title: string) {
    this.button = document.createElement('button')
    this.button.type = 'submit'
    this.button.innerText = title
    this.button.style.padding = '10px'
    this.button.style.cursor = 'pointer'

    this.container.append(this.button)
  }

  addEvents() {
    this.button.addEventListener('click', () => {
      this.paintList()
    });
  }

  render() {
    this.createList()
    this.createButton('Paint')
    this.addEvents()
  }
}
const list1 = new GenerateNumberedLists(5, container3)
list1.render()


// =========================================================================
// Задача 4. Дано 3 таблиці розмірності 3*3 з випадковими числами. Якщо відбувається клік 
// на якійсь із клітинок, то до відповідної таблиці додається червона рамка 
// (спробуйте додати можливість відображення кількості кліків біля назви таблиці з використанням 
// відповідно доданого для цього атрибута).
// =========================================================================
const title4 = createTitle('Задача 4', 'title-4')
const container4 = document.querySelector(`.task-4`) as HTMLElement
container4?.before(title4)

class TableManager {
  amountTables: number;
  container: HTMLElement;
  wrappers: HTMLElement[] = [];

  constructor(amountTables: number, container: HTMLElement) {
    this.amountTables = amountTables;
    this.container = container;
  }

  createTables(className: string, amountRows: number, amountColumns: number): void {

    for (let i = 0; i < this.amountTables; i++) {
      const title = this.createTitle(i + 1, 0)

      const wrapper = document.createElement('div')
      wrapper.dataset.clicks = '0'
      wrapper.style.maxWidth = '200px'
      wrapper.style.marginTop = '-1px'
      wrapper.className = className
      wrapper.append(title)

      const table = document.createElement('table')
      table.className = `${className}`
      wrapper.append(table)
      table.style.border = '2px solid #000'
      table.style.width = '100%'
      table.style.textAlign = 'center'

      for (let r = 0; r < amountRows; r++) {
        const tr = document.createElement('tr')
        tr.className = `${className}__row`
        tr.style.textAlign = 'center'
        tr.style.backgroundColor = 'lightgrey'
        table.append(tr)

        for (let c = 0; c < amountColumns; c++) {
          const td = document.createElement('td')
          td.className = `${className}__cell`
          tr.append(td)
          td.style.width = `${100 / amountColumns}%`
          td.style.cursor = 'pointer'

          const randNum = 1 + Math.floor(Math.random() * 100)
          td.innerText = String(randNum)
        }
      }
      this.container.append(wrapper)
      this.wrappers.push(wrapper)
    }
  }

  createTitle(tableNumber: number, clicks: number): HTMLHeadingElement {
    const title = document.createElement('h3')

    title.dataset.tableNum = String(tableNumber)
    title.innerText = `Table ${tableNumber} (${clicks} clicks)`

    return title
  }

  handleTableClick(wrapper: HTMLElement): void {

    const current = Number(wrapper.dataset.clicks || 0)
    const updated = current + 1

    wrapper.dataset.clicks = String(updated)

    // wrapper.style.border = '2px solid red'

    const table = wrapper.querySelector(`table`)
    if (table) {
      table.style.border = '2px solid red'
    }

    const title = wrapper.querySelector('h3')
    if (title) {
      title.innerText = `Table (${updated} clicks)`
    }
  }

  addEvents(): void {
    this.wrappers.forEach(wrapper => {
      wrapper.addEventListener('click', (e) => {
        const td = (e.target as HTMLElement).closest('td')
        if (!td) return

        this.handleTableClick(wrapper)
      });
    })
  }

  render(className: string, rows: number = 3, cols: number = 3): void {
    this.createTables(className, rows, cols)
    this.addEvents()
  }
}
const tableUser = new TableManager(3, container4)
tableUser.render('my-custom-table', 3, 3)











// =======================================================================================
// class Roulette {
//   fieldsNumber: number
//   minScore: number
//   maxScore: number
//   totalScore: number
//   gameTable: number[]
//   constructor(
//     initialFieldsNumber: number,
//     initialMinScore: number,
//     initialMaxScore: number,
//   ) {
//     // ----- дані
//     this.fieldsNumber = initialFieldsNumber
//     this.minScore = initialMinScore
//     this.maxScore = initialMaxScore
//     this.totalScore = 0
//     this.gameTable = this.generateGameTable()
//   }
//   // -------------------- методи
//   // генерування полів рулетки
//   generateGameTable() {
//     return Array.from(
//       { length: this.fieldsNumber },
//       () =>
//         this.minScore +
//         Math.floor(Math.random() * (this.maxScore - this.minScore + 1)),
//     )
//   }
//   // виведення списку згенерованих значень
//   print() {
//     document.write(`${this.gameTable}`)
//   }
//   // приведення до рядка
//   toString() {
//     return `Rouletter : ${this.gameTable}`
//   }
//   // крутити рулетку (отримання випадкового балу)
//   getRandomScore() {
//     const randomIndex = Math.floor(Math.random() * this.gameTable.length)
//     return this.gameTable[randomIndex]
//   }
//   // метод гри (користувач крутить рулетку поки не відмовиться)
//   play() {
//     while (confirm('Хочеш крутити?')) {
//       const currentScore = this.getRandomScore()
//       this.totalScore += currentScore
//       alert(`Score = ${currentScore},   Total = ${this.totalScore}`)
//     }
//   }
// }
// // ----
// const game = new Roulette(5, -100, 100)
// game.play()
// const game2 = new Roulette(15, -1300, 1070)











// ==============================================================================
// const container = document.querySelector(`.container`)

// function generateElement(className: string) {
//   const element = document.createElement('article')
//   element.className = className

//   return element
// }
// const card = generateElement('card')
// container?.append(card)


// task 1
// card.addEventListener('mouseenter', () => {
//   card.classList.add('active')
// });
// card.addEventListener('mouseleave', () => {
//   card.classList.remove('active')
// });

// task 2
// card.addEventListener('mousemove', (e) => {
//   console.log(e.clientX);
//   console.log(e.clientY);
// });


// task 3
// const circle = generateElement('circle')
// container?.append(circle)

// circle.addEventListener('mousemove', (e) => {
//   circle.style.left = `${e.clientX - 15}px`
//   circle.style.top = `${e.clientY - 15}px`
// });




// const btn = document.querySelectorAll(`.delete-btn`)

// btn.forEach(item => {
//   item.addEventListener('click', () => {
//     const card = document.querySelectorAll(`.card`)
//     card.forEach(i => {
//       i.remove()
//     });
//   });
// });







