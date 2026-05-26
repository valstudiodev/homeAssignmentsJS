const pageContainer = document.querySelector(`.page-lesson__container`);
if (pageContainer) {
  pageContainer.classList.add('page-lesson__container--layout')
}

// function generateTaskSection(title: string, className: string) {
//   const section = document.createElement('section')
//   section.className = className

//   const h2 = document.createElement('h2')
//   h2.className = `${className}__title`
//   h2.style.fontSize = '40px'
//   h2.style.margin = '0'
//   h2.style.fontWeight = '600'
//   h2.innerText = title

//   const container = document.createElement('div')
//   container.className = `${className}__container`
//   container.style.display = 'flex'
//   container.style.flexDirection = 'column'
//   container.style.padding = '20px'
//   container.style.border = '1px solid #000'
//   container.style.gap = '20px'

//   // const wrap = document.createElement('div')
//   // wrap.className = `${className}__wrap`
//   // container.append(wrap)

//   section.append(h2, container)
//   pageContainer?.append(section)

//   return { section, container }
// }

function createSection(title: string, className: string) {
  const section = document.createElement('section')
  section.className = className

  const h2 = document.createElement('h2')
  h2.className = `${className}__title`
  h2.style.fontSize = '40px'
  h2.style.margin = '0'
  h2.style.fontWeight = '600'
  h2.innerText = title

  section.append(h2)
  pageContainer?.append(section)

  return section
}

function createElement(tag: string, className: string) {
  const element = document.createElement(`${tag}`);
  element.className = className;
  element.style.display = 'inline-flex';
  element.style.flexDirection = 'column';
  element.style.gap = '20px';
  return element;
}
// =======================================================================
const calculatorSection = createSection('Task 1', 'calculator-section')
pageContainer?.append(calculatorSection)


// =======================================================================
// Задача 1. Розробити калькулятор
// =======================================================================
const wrapper = createElement('div', 'calculator-wrapper')
calculatorSection.append(wrapper)
wrapper.style.border = '1px solid #000'
wrapper.style.padding = '20px'
wrapper.style.backgroundColor = 'lightgrey'

function createField(label: string, idInput: string, container: HTMLElement) {
  const wrapperBoxInput = document.createElement('div');
  wrapperBoxInput.className = 'wrapperBoxInput';
  wrapperBoxInput.style.display = 'flex';
  wrapperBoxInput.style.justifyContent = 'space-between';
  wrapperBoxInput.style.alignItems = 'center';
  wrapperBoxInput.style.gap = '10px';

  const labelInput = document.createElement('label');
  labelInput.innerText = `${label}`;
  labelInput.htmlFor = idInput;

  const inputField = document.createElement('input');
  inputField.id = idInput;
  inputField.type = 'number';
  inputField.placeholder = '0';
  inputField.style.padding = '10px';
  inputField.style.backgroundColor = '#ffff99'

  wrapperBoxInput.append(labelInput);
  wrapperBoxInput.append(inputField);

  wrapper.append(wrapperBoxInput)
  return { wrapperBoxInput, inputField };
}
const firstField = createField('First number:', 'firstNumber', wrapper);
const secondField = createField('Second number:', 'secondNumber', wrapper)
// ===============================================================
function createResultField(label: string, idInput: string) {
  const wrapperBoxResult = document.createElement('div');
  wrapperBoxResult.className = 'wrapperBoxResult';
  wrapperBoxResult.style.display = 'flex';
  wrapperBoxResult.style.justifyContent = 'space-between'
  wrapperBoxResult.style.alignItems = 'center';
  wrapperBoxResult.style.gap = '10px';

  const labelInput = document.createElement('label')
  labelInput.innerText = `${label}`;
  labelInput.htmlFor = idInput;

  const inputResult = document.createElement('input');
  inputResult.id = idInput;
  inputResult.placeholder = '0';
  inputResult.readOnly = true;
  inputResult.disabled = true;
  inputResult.style.padding = '10px';

  wrapperBoxResult.append(labelInput);
  wrapperBoxResult.append(inputResult);

  return { wrapperBoxResult, inputResult };
}

// ===============================================================
function createButtonElement(className: string, name: string) {
  const btnAction = document.createElement('button');
  btnAction.className = className;
  btnAction.type = 'submit';
  btnAction.innerText = name;
  btnAction.style.padding = '10px';
  btnAction.style.cursor = 'pointer';
  btnAction.style.backgroundColor = 'coral'
  btnAction.style.color = 'white'
  btnAction.style.fontWeight = '600'

  return btnAction;
}
const calculatorActions = document.createElement('div')
if (calculatorActions) {
  calculatorActions.className = 'calculator__actions'
  wrapper.append(calculatorActions)
  calculatorActions.style.display = 'flex'
  calculatorActions.style.justifyContent = 'space-between'
}
const btnActionAdd = createButtonElement('btnActionAdd', 'Add');
if (btnActionAdd) {
  calculatorActions.append(btnActionAdd);
}
const btnActionSubtract = createButtonElement('btnActionSubtract', 'Subtract');
if (btnActionSubtract) {
  calculatorActions.append(btnActionSubtract);
}
const btnActionMultiply = createButtonElement('btnActionMultiply', 'Multiply');
if (btnActionMultiply) {
  calculatorActions.append(btnActionMultiply);
}
const btnActionDivide = createButtonElement('btnActionDivide', 'Divide');
if (btnActionDivide) {
  calculatorActions.append(btnActionDivide);
}
const resultInput = createResultField('Result:', 'result');
wrapper.append(resultInput.wrapperBoxResult);

// ==============================================================
function calculate(a: number, b: number, operation: string) {

  switch (operation) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return b !== 0 ? a / b : 'Error';
    default:
      return 0;
  }
}

type OperationType = 'add' | 'subtract' | 'multiply' | 'divide';

function handleClick(operation: OperationType) {

  const a = Number(firstField.inputField.value);
  const b = Number(secondField.inputField.value);

  if (isNaN(a) || isNaN(b)) return

  const result = calculate(a, b, operation);

  resultInput.inputResult.value = String(result);

}
// ================================ EVENTS ==================================
btnActionAdd.addEventListener('click', () => {
  handleClick('add');
});
btnActionSubtract.addEventListener('click', () => {
  handleClick('subtract');
});
btnActionMultiply.addEventListener('click', () => {
  handleClick('multiply');
});
btnActionDivide.addEventListener('click', () => {
  handleClick('divide');
});


// =======================================================================
// Задача 2. Зробити конвертер валют (курси валют – константи у скрипті)
// =======================================================================
const converterSection = createSection('Task 2', 'converter-section')
pageContainer?.append(converterSection)

const convertBox = document.createElement('article')
converterSection?.append(convertBox)
convertBox.className = 'converter'

class CurrencyConverter {
  container: HTMLElement;

  #uaInput!: HTMLInputElement;
  euroResult!: HTMLInputElement;
  dollarResult!: HTMLInputElement;

  convertBtn!: HTMLButtonElement;

  constructor(container: HTMLElement) {
    this.container = container;

    this.createUi();
    this.bindEvents();
    this.applyStyles();
  }

  createUi(): void {
    const uahField = this.createField('UAH', 'uahinput')
    this.#uaInput = uahField.input

    const euroField = this.createField('EURO', 'euroinput')
    this.euroResult = euroField.input
    this.euroResult.disabled = true

    const dollarField = this.createField('USD', 'usdinput')
    this.dollarResult = dollarField.input
    this.dollarResult.disabled = true

    this.convertBtn = this.createButton('Convert', 'convert-btn')

    this.container.append(
      uahField.wrapper,
      this.convertBtn,
      euroField.wrapper,
      dollarField.wrapper
    )
  }

  createField(labelText: string, id: string) {
    const wrapper = document.createElement('div')
    wrapper.className = 'field'
    wrapper.style.display = 'flex'
    wrapper.style.gap = '10px'
    wrapper.style.alignItems = 'center'
    wrapper.style.justifyContent = 'space-between'

    const input = document.createElement('input')
    input.className = 'field__input'
    input.style.padding = '5px'
    input.type = 'number'
    input.placeholder = '0'
    input.id = id

    const label = document.createElement('label')
    label.className = 'field__label'
    label.htmlFor = id
    label.innerText = labelText
    wrapper.append(label)
    wrapper.append(input)
    return { wrapper, input }
  }

  createButton(text: string, className: string): HTMLButtonElement {
    const convertBtn = document.createElement('button')
    convertBtn.className = className
    convertBtn.innerText = text
    convertBtn.style.backgroundColor = 'tomato'
    convertBtn.style.color = 'white'
    convertBtn.style.fontSize = '18px'
    convertBtn.style.fontWeight = '600'
    convertBtn.style.paddingBlock = '10px'
    convertBtn.style.paddingInline = '30px'
    convertBtn.style.alignSelf = 'flex-start'
    return convertBtn
  }

  convertCurrency(): void {
    const USD_RATE = 40;
    const EUR_RATE = 50;

    const value = Number(this.#uaInput.value);

    if (isNaN(value) || value <= 0) {
      alert('Введіть коректне число');
      return;
    }

    const resultDollars = value / USD_RATE
    const resultEuro = value / EUR_RATE

    this.euroResult.value = resultEuro.toFixed(2)
    this.dollarResult.value = resultDollars.toFixed(2)
  }

  bindEvents(): void {
    this.convertBtn.addEventListener('click', this.convertCurrency.bind(this));
  }

  applyStyles(): void {
    this.container.style.border = '1px solid blue'
    this.container.style.padding = '30px'
    this.container.style.display = 'flex'
    this.container.style.flexDirection = 'column'
    this.container.style.gap = '10px'
    this.container.style.maxWidth = '400px'
    this.container.style.backgroundColor = 'lightgrey'
  }
}
const convereter = new CurrencyConverter(convertBox)


// =======================================================================
// Задача 3. Користувач задає рік народження. Визначити кількість років користувача.
// =======================================================================
const getAgeUser = createSection('Task 3', 'user-age-section')
pageContainer?.append(getAgeUser)

const calculateAgeContainer = createElement('div', 'calculate-age__container');
calculateAgeContainer.style.border = '2px solid #000';
calculateAgeContainer.style.padding = '20px';
calculateAgeContainer.style.backgroundColor = '#923412'
getAgeUser?.append(calculateAgeContainer);
// =================================================
function generateInputField(label: string, idInput: string, disabled: boolean) {
  const wrapperField = document.createElement('div');
  wrapperField.className = 'calculate-age__wrap';
  wrapperField.style.display = 'flex';
  wrapperField.style.alignItems = 'center';
  wrapperField.style.gap = '10px';
  wrapperField.style.justifyContent = 'space-between';
  // wrapperField.style.maxWidth = '400px';

  const labelField = document.createElement('label');
  labelField.className = 'calculate-age__label';
  labelField.htmlFor = idInput;
  labelField.innerText = label;
  labelField.style.fontSize = '18px';
  labelField.style.color = 'white'
  labelField.style.fontWeight = '600';
  wrapperField.append(labelField);

  const inputField = document.createElement('input');
  inputField.className = 'calculate-age__input';
  inputField.id = idInput;
  inputField.type = 'number';
  inputField.disabled = disabled;
  inputField.placeholder = '0';
  inputField.style.padding = '10px';
  wrapperField.append(inputField);

  return { wrapperField, inputField };
}
const fieldInputUser = generateInputField('Enter your birth year:', 'valueAge', false);
calculateAgeContainer?.append(fieldInputUser.wrapperField);

// ==================================================
function generateButtonCalculateAge(title: string, className: string) {
  const buttonCalculateAge = document.createElement('button');
  buttonCalculateAge.className = className;
  buttonCalculateAge.innerText = title;
  buttonCalculateAge.type = 'submit'
  buttonCalculateAge.style.cursor = 'pointer';
  buttonCalculateAge.style.paddingBlock = '10px';
  buttonCalculateAge.style.paddingInline = '30px';
  buttonCalculateAge.style.border = '1px solid #000';
  buttonCalculateAge.style.width = '100%';
  buttonCalculateAge.style.fontSize = '18px';
  buttonCalculateAge.style.backgroundColor = '#456'
  buttonCalculateAge.style.color = 'yellow'

  return buttonCalculateAge;
}
const buttonCalculateAge = generateButtonCalculateAge('Calculate age', 'calculate-age__btn');
calculateAgeContainer?.append(buttonCalculateAge);

// ==================================================
const fieldResultAgeCalculate = generateInputField('Your age:', 'calculate-age__result', true);
calculateAgeContainer?.append(fieldResultAgeCalculate.wrapperField);

// ==================================================
const CURRENT_YEAR = 2026;

function getAge(birthYear: number): number {
  return CURRENT_YEAR - birthYear;
}

function handleClickManage(): void {
  const value = Number(fieldInputUser.inputField.value);

  // Валідація використовує ту саму константу
  if (isNaN(value) || value > CURRENT_YEAR || value < 1900) {
    alert('Error. incorrect age!');
    return;
  }

  const age = getAge(value);
  fieldResultAgeCalculate.inputField.value = String(age);
}

buttonCalculateAge.addEventListener('click', handleClickManage);

// =======================================================================
// Задача 4. Наперед задано у скрипті масив зі списком бажань.
//  Після завантаження сторінки випадковим чином вибираються 3 і 
// відображаються у окремих div (їх треба створити і додати на сторінку)
// =======================================================================
const whishSection = createSection('Task 4', 'whish-section')
pageContainer?.append(whishSection)

const array = [
  'Car',
  'House',
  'Trip',
  'Laptop',
  'Dog',
  'Phone',
  'PSP',
  'Cat'
]

function createHtmlElement(tag: string) {
  const app = document.createElement(`${tag}`)
  app.className = 'whish-container'
  pageContainer?.append(app)
  app.style.display = 'flex'
  app.style.alignItems = 'center'
  app.style.gap = '20px'
  return app
}
const appContainer = createHtmlElement('div')
whishSection?.append(appContainer)

class WishGenerator {
  wishes: string[] = [];
  container: HTMLElement

  constructor(wishes: string[], container: HTMLElement) {
    this.wishes = wishes;
    this.container = container;
  }

  getRandomWhishes() {
    const randomWishes = [...this.wishes].sort(() => Math.random() - 0.5).slice(0, 3)
    return randomWishes
  }

  render() {
    this.getRandomWhishes().forEach((item) => {
      const divBox = document.createElement('div')
      this.container.append(divBox)
      divBox.innerText = `${item}`
      divBox.style.width = '70px'
      divBox.style.backgroundColor = '#245232'
      divBox.style.color = 'white'
      divBox.style.fontWeight = '600'
      divBox.style.fontSize = '20px'
      divBox.style.padding = '30px'
      divBox.style.border = '2px solid red'
      divBox.style.textAlign = 'center'
    })
  }
}
const wishlist = new WishGenerator(array, appContainer)

document.addEventListener('DOMContentLoaded', () => {
  wishlist.render()
});



// =======================================================================
// Задача 5. Відобразити таблицю 3*4 з випадковими числами 
// (її треба динамічно створити і вставити на сторінку)
// =======================================================================
const tableContainer = createSection('Task 5', 'table-container')
class TableGenerator {
  rows: number;
  cols: number;
  container: HTMLElement;

  table!: HTMLTableElement;

  constructor(rows: number, cols: number, container: HTMLElement) {
    this.rows = rows;
    this.cols = cols;
    this.container = container;

    this.createTable();
  }

  private createTable(): void {
    this.table = document.createElement('table')

    this.generateRows()
    this.mount()
    this.styleTable()
  }

  private generateRows(): void {
    for (let r = 0; r < this.rows; r++) {
      const row = this.createRow()
      for (let c = 0; c < this.cols; c++) {
        const cell = this.createCell()
        row.append(cell)
      }

      this.table.append(row)
    }
  }

  private createRow(): HTMLTableRowElement {
    return document.createElement('tr')
  }

  private createCell(): HTMLTableCellElement {
    const rand = 1 + Math.floor(Math.random() * 10)

    const cell = document.createElement('td')
    this.styleCell(cell)
    cell.innerText = `${rand}`

    return cell
  }

  private mount(): void {
    this.container.append(this.table)
  }

  private styleCell(cell: HTMLTableCellElement): void {
    cell.style.width = '40px'
    cell.style.height = '40px'
    cell.style.backgroundColor = 'lightgrey'
    cell.style.border = '1px solid red'
    cell.style.textAlign = 'center'
  }

  private styleTable(): void {
    this.table.style.border = '2px solid red'
    this.table.style.padding = '20px'
    this.table.style.backgroundColor = '#123476'
  }
}
const table1 = new TableGenerator(3, 4, tableContainer)




// =======================================================================
// Задача 6. Користувач задає кількість оцінок і натискає на кнопку «get table».
// В результаті формується таблиця з input, куди користувач вводить оцінки.
// Після цього натискає на кнопку “get sum” і знаходить середнє значення.
// =======================================================================
// const gradeAppSection = createSection('Task 6', 'grade-app-section')
// pageContainer?.append(gradeAppSection)


// const gradeContainer = document.createElement('article')
// gradeContainer.className = 'grade-app'
// gradeAppSection.append(gradeContainer)


// function generateInputGradeField(className: string, id: string, labelText: string) {
//   const wrapper = document.createElement(`div`)
//   wrapper.className = `${className}__wrapper`
//   // container.append(wrapper)

//   const label = document.createElement('label')
//   label.className = `${className}__label`
//   label.htmlFor = id
//   wrapper.append(label)
//   label.innerText = labelText

//   const input = document.createElement('input')
//   input.className = `${className}__input`
//   input.id = id
//   input.type = 'number'
//   wrapper.append(input)

//   return { wrapper, input }
// }
// const gradesWrap = generateInputGradeField('grade-container', 'gradevalue', 'Grades:')
// gradeContainer.append(gradesWrap.wrapper)


// function generateButtonResult(textBtn: string, className: string) {
//   const gradeBtn = document.createElement('button')
//   gradeBtn.className = className
//   gradeBtn.innerText = textBtn
//   gradeBtn.style.fontWeight = '700'
//   gradeBtn.style.paddingInline = '20px'
//   gradeBtn.style.paddingBlock = '10px'
//   gradeBtn.style.color = 'blue'
//   gradeBtn.style.backgroundColor = 'orange'
//   gradeBtn.style.border = '1px solid blue'

//   return gradeBtn
// }
// const getBtnTable = generateButtonResult('Get Table', 'get-table')
// gradeContainer.append(getBtnTable)


// function generateGradeTable(rows: number) {
//   const gradeTable = document.createElement('table')
//   gradeTable.style.maxWidth = '400px'
//   gradeTable.style.display = 'flex'
//   gradeTable.style.justifyContent = 'space-between'
//   gradeTable.className = 'grade-table'

//   for (let r = 0; r < rows; r++) {
//     const tr = document.createElement('tr')

//     const td = document.createElement('td')

//     const input = document.createElement('input')
//     input.type = 'number'
//     input.className = 'table-input'
//     input.placeholder = `Оцінка №${r + 1}`;
//     input.min = '1'
//     input.max = '12'

//     td.append(input)
//     tr.append(td)
//     gradeTable.append(tr)
//   }

//   return gradeTable
// }

// let currentTable: HTMLTableElement | null = null;

// getBtnTable.addEventListener('click', () => {

//   const rows = Number(gradesWrap.input.value)

//   if (isNaN(rows) || rows <= 0) return

//   if (currentTable) currentTable.remove()

//   currentTable = generateGradeTable(rows)

//   gradeContainer.append(currentTable)
// });

// const getBtnSum = generateButtonResult('Get Sum', 'get-sum')
// gradeContainer.append(getBtnSum)

// const resultDisplay = document.createElement('p');
// resultDisplay.style.fontWeight = 'bold';
// gradeContainer.append(resultDisplay);

// getBtnSum.addEventListener('click', () => {
//   if (!currentTable) return

//   const result = calculateSum(currentTable)

//   console.log(result);

// });

// function calculateAverage(): number {
//   const inputs = document.querySelectorAll('.table-input') as NodeListOf<HTMLInputElement>;

//   let sum = 0;
//   let filledInputsCount = 0;

//   inputs.forEach(input => {
//     const value = Number(input.value); // Читаємо значення КОРЕКТНОГО інпуту

//     // Якщо користувач нічого не ввів або ввів некоректно — ігноруємо цей інпут
//     if (!isNaN(value) && input.value.trim() !== '') {
//       sum += value;
//       filledInputsCount++;
//     }
//   });

//   // Запобігаємо діленню на нуль, якщо всі інпути порожні
//   return filledInputsCount > 0 ? sum / filledInputsCount : 0;
// }










// document.addEventListener('DOMContentLoaded', () => {
//   document.body.style.backgroundColor = '#126745'
// });


// function hidePreloader() {
//   const preloader = document.getElementById('preloader');
//   if (preloader) {
//     preloader.classList.add('fade-out');

//     // Повністю видаляємо елемент з DOM через 500мс (після завершення CSS-анімації),
//     // щоб він не заважав клікам і не займав пам'ять
//     setTimeout(() => {
//       preloader.remove();
//     }, 500);
//   }
// }

// // Найнадійніший запуск
// if (document.readyState === 'complete') {
//   hidePreloader();
// } else {
//   window.addEventListener('load', hidePreloader);
// }



// ======================= offset / client ================================
// const box = document.querySelector(`.box`) as HTMLDivElement
// box.style.backgroundColor = 'grey';
// box.style.width = '200px';
// box.style.height = '100px';
// box.style.padding = '20px';
// box.style.border = '10px solid black';
// box.style.marginTop = '300px';
// // box.style.position = 'absolute';
// // box.style.top = '100px';
// // box.style.left = '50px';


// const wrapper = document.querySelector(`.wrapper`) as HTMLDivElement
// wrapper.style.position = 'relative';
// wrapper.style.marginTop = '200px';
// wrapper.style.marginLeft = '100px';

// console.log(box.offsetParent);
// console.log(box.offsetTop);
// console.log(box.offsetLeft);


// console.log(box.clientWidth);
// console.log(box.clientHeight);




// ============================= scroll =================================
// const header = document.querySelector(`.header`) as HTMLHtmlElement
// if (header) {
//   header.style.position = 'fixed';
//   header.style.top = '0';
//   header.style.left = '0';
//   header.style.width = '100%';
//   header.style.transition = 'translate 0.5s easy';
//   // header.style.backgroundColor = 'grey';
// }

// window.addEventListener('scroll', () => {
//   if (window.scrollY > 50) {
//     // header.classList.add('scrolled')
//     // header.style.backgroundColor = 'lightgrey'
//     header.style.translate = '0 -100%';

//   } else
//     // header.classList.remove('scrolled')
//     // header.style.backgroundColor = 'grey'
//     header.style.translate = '0 0'
// });

// const menu = document.querySelector(`.header__nav`) as HTMLUListElement
// if (menu) {
//   menu.style.paddingBlock = '25px';
//   menu.style.display = 'flex';
//   menu.style.alignItems = 'center';
//   menu.style.gap = '30px';
//   menu.style.flexWrap = 'wrap';
// }


// const scrollValue = document.querySelector(`.scroll-value`) as HTMLDivElement

// window.addEventListener('scroll', () => {
//   scrollValue.textContent = Math.round(window.scrollY)
// });







// ============================ progress bar =====================================

// window.addEventListener(`scroll`, progressBar);
// window.addEventListener(`click`, scrollToTop);

// function progressBar() {

//   const progress = document.querySelector('.progress') as HTMLDivElement
//   const scrollTop = window.scrollY;

//   const pageHeight =
//     document.documentElement.scrollHeight - window.innerHeight;

//   const percent = (scrollTop / pageHeight) * 100;

//   progress.style.width = `${percent}%`;
// }

// function scrollToTop() {
//   const btnScrollTop = document.querySelector(`.scroll-to-top`) as HTMLButtonElement

//   window.scrollTo({
//     top: box.clientTop,
//     bahavior: 'smooth'
//   });
//   return btnScrollTop
// }