function createTitle(title: string, className: string) {
  const titlePage = document.createElement('h3')
  titlePage.className = className
  titlePage.innerText = title
  titlePage.style.fontSize = '40px'

  return titlePage
}

// =================================================================================================
// Задача 1. Компонент діаграма. Значення від 0 до 100. 
// Область розділено на 3 частини (значення у першій частині – червоне заповнення, 
// значення у другій частині – синій колір, значення у третій – зелений.
// =================================================================================================
const titleTask1 = createTitle('Task 1', 'title-1') as HTMLElement
const boxTask1 = document.querySelector(`.task-1`) as HTMLElement
if (boxTask1) {
  boxTask1?.before(titleTask1)
}

interface Student {
  name: string,
  score: number,
}

function generateRange(title: string, className: string, value: number) {

  const validValue = Math.max(0, Math.min(100, value))

  const wrap = document.createElement('div')
  wrap.className = `${className}__wrap`
  wrap.style.display = 'flex'
  wrap.style.justifyContent = 'space-between'
  wrap.style.width = '100%'
  wrap.style.alignItems = 'center'
  wrap.style.gap = '20px'

  const titleRange = document.createElement('h3')
  titleRange.className = `${className}__title`
  titleRange.innerText = title
  titleRange.style.margin = '0'

  const rangeEl = document.createElement('div')
  rangeEl.className = `${className}__element`
  rangeEl.style.position = 'relative'
  rangeEl.style.backgroundColor = 'lightgrey'
  rangeEl.style.border = '1px solid #000'
  rangeEl.style.width = '500px'
  rangeEl.style.height = '30px'

  const fillEl = document.createElement('div')
  fillEl.style.position = 'absolute'
  fillEl.style.left = '0'
  fillEl.style.top = '0'
  fillEl.style.width = `${validValue}%`
  fillEl.style.height = '100%'
  fillEl.style.backgroundColor = getColor(validValue)

  wrap?.append(titleRange)
  wrap?.append(rangeEl)
  rangeEl.append(fillEl)

  return wrap
}

function getColor(value: number) {
  const red = '#A60000'
  const blue = '#0000AA'
  const green = '#008000'

  if (value >= 0 && value <= 33)
    return red
  if (value >= 34 && value <= 66)
    return blue
  else
    return green
}

const studentsList: Student[] = [
  { name: 'Ivanov', score: 80 },
  { name: 'Petrov', score: 33 },
  { name: 'Sidorov', score: 55 },
  { name: 'Smirnov', score: 67 },
]

function generateStudentDashboard(students: Student[]) {
  const container = document.createElement('article')
  container.style.width = '650px'
  container.style.border = '2px solid #000'
  container.style.padding = '20px'
  container.style.display = 'flex'
  container.style.flexDirection = 'column'
  container.style.alignItems = 'flex-start'
  container.style.gap = '15px'

  students.forEach(student => {
    const studentRange = generateRange(student.name, 'range', student.score)

    container.append(studentRange)
  });

  return container
}

function renderStudentsList() {
  const dashboard = generateStudentDashboard(studentsList)
  boxTask1?.append(dashboard)
}
renderStudentsList()


// =================================================================================================
// Задача 2. Розробити Loader (задається title, value). Зімітувати завантаження за допомогою таймера.
// =================================================================================================
const titlePage2 = createTitle('Task 2', 'title-2') as HTMLElement
const boxTask2 = document.querySelector(`.task-2`) as HTMLElement
if (boxTask2) {
  boxTask2?.before(titlePage2)
}

interface LoaderComponent {
  wrap: HTMLDivElement;
  fillLoader: HTMLDivElement;
  textPercentLoader: HTMLParagraphElement;
}

function createLoader(title: string, className: string) {
  const wrap = document.createElement('div')
  wrap.className = `${className}__wrap`
  wrap.style.display = 'flex'
  wrap.style.alignItems = 'flex-end'
  wrap.style.gap = '20px'

  const titleLoader = document.createElement('h3')
  titleLoader.className = `${className}__title`
  titleLoader.innerText = title
  titleLoader.style.margin = '0'
  titleLoader.style.fontSize = '22px'

  const lineLoader = document.createElement('div')
  lineLoader.className = `${className}__line`
  lineLoader.style.width = '100%'
  lineLoader.style.height = '40px'
  lineLoader.style.position = 'relative'
  lineLoader.style.backgroundColor = 'lightgrey'
  lineLoader.style.border = '1px solid #000'
  lineLoader.style.border = '2px solid red'

  const fillLoader = document.createElement('div')
  fillLoader.style.position = 'absolute'
  fillLoader.style.left = '0'
  fillLoader.style.top = '0'
  fillLoader.style.width = '0%'
  fillLoader.style.height = '100%'
  fillLoader.style.transition = 'width 0.1s linear, background-color 0.2s ease'

  const textPercentLoader = document.createElement('p')
  textPercentLoader.className = `${className}__percent`
  textPercentLoader.innerText = `${0}%`
  textPercentLoader.style.margin = '0'
  textPercentLoader.style.position = 'absolute'
  textPercentLoader.style.top = '0'
  textPercentLoader.style.left = '50%'
  textPercentLoader.style.translate = '-50% 20%'
  textPercentLoader.style.fontSize = '20px'
  textPercentLoader.style.fontWeight = '600'

  wrap.append(titleLoader)
  wrap.append(lineLoader)
  lineLoader.append(fillLoader)
  lineLoader.append(textPercentLoader)

  return { wrap, fillLoader, textPercentLoader }
}

function updateLoader(loaderObject: LoaderComponent, speed: number) {

  let currentProgress: number = 0

  const timerId = setInterval(() => {
    currentProgress += Math.floor(Math.random() * 3)

    if (currentProgress >= 100) {
      currentProgress = 100
      clearInterval(timerId)
      console.log("Завантаження завершено!");
    }

    loaderObject.fillLoader.style.width = currentProgress + '%'
    loaderObject.textPercentLoader.innerText = currentProgress + '%'

    loaderObject.fillLoader.style.backgroundColor = getColor(currentProgress);

  }, speed);
}

function renderLoader() {
  const loader = createLoader('Loading...', 'loader')
  boxTask2?.append(loader.wrap)

  const startWithDelay = () => {
    setTimeout(() => {
      updateLoader(loader, 50)
    }, 2000);
  }
  if (document.readyState === 'complete') {
    startWithDelay()
  } else
    window.addEventListener('load', startWithDelay)
}
renderLoader()



// =================================================================================================
// Задача 3. Розробити форму для введення логіна і пароля.
// Кнопка буде активною тільки тоді, коли буде задано логін і пароль.
// =================================================================================================
const titlePage3 = createTitle('Task 3', 'title-3') as HTMLElement
const boxTask3 = document.querySelector(`.task-3`) as HTMLElement
if (boxTask3) {
  boxTask3.before(titlePage3)
}

class LoginForm {
  #formElement!: HTMLFormElement;
  #loginInput!: HTMLInputElement;
  #passwordInput!: HTMLInputElement;
  #submitButton!: HTMLButtonElement;

  container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container

    this.#render()
    this.#initEvents()

    this.#validateForm()
  }

  #createInputField(labelText: string, inputType: string, placeholderText: string) {
    const wrap = document.createElement('div')
    wrap.style.display = 'flex'
    wrap.style.alignItems = 'center'
    wrap.style.gap = '10px'

    const label = document.createElement('label')
    label.innerText = labelText

    const input = document.createElement('input')
    input.type = inputType
    input.placeholder = placeholderText
    input.style.padding = '5px'
    input.style.border = '1px solid grey'

    wrap.append(label)
    wrap.append(input)

    return { wrap, input }
  }

  #createSubmitButton(title: string) {
    const button = document.createElement('button')
    button.innerText = title
    button.type = 'submit'
    button.style.padding = '5px 20px'
    button.style.color = '#000'
    button.style.borderRadius = '6px'
    button.style.border = '1px solid #000'


    return button
  }

  #initEvents() {
    this.#loginInput.addEventListener('input', () => this.#validateForm());

    this.#passwordInput.addEventListener('input', () => this.#validateForm());

    this.#formElement.addEventListener('submit', (e) => {
      e.preventDefault()

      if (this.#submitButton.disabled) {
        console.log("Спроба відправки заблокована: форма не валідна!");
        return
      }

      console.log("Форму успішно відправлено!");
      console.log("Логін: " + this.#loginInput.value);
      console.log("Пароль: " + this.#passwordInput.value);
    });
  }

  #validateForm() {
    const updateLogin = this.#loginInput.value.trim()
    const updatePassword = this.#passwordInput.value.trim()

    const loginValidate = updateLogin.includes('@') && updateLogin.length >= 6
    const passwordValidate = updatePassword.length >= 6

    if (loginValidate && passwordValidate) {
      this.#submitButton.style.backgroundColor = 'coral'
      this.#submitButton.style.opacity = '1'
      this.#submitButton.disabled = false
      this.#submitButton.style.cursor = 'pointer';
    } else {
      this.#submitButton.style.backgroundColor = 'lightgrey'
      this.#submitButton.style.opacity = '0.5'
      this.#submitButton.disabled = true
      this.#submitButton.style.cursor = 'pointer';
      this.#submitButton.style.cursor = 'not-allowed'
    }
  }

  #render() {
    this.#formElement = document.createElement('form')
    this.#formElement.style.backgroundColor = 'lightgrey'
    this.#formElement.style.maxWidth = '400px'
    this.#formElement.style.padding = '20px'
    this.#formElement.style.border = '2px solid grey'
    this.#formElement.style.display = 'flex'
    this.#formElement.style.flexDirection = 'column'
    this.#formElement.style.alignItems = 'flex-start'
    this.#formElement.style.gap = '5px'

    const loginField = this.#createInputField('Логін:', 'text', 'Введіть логін')
    this.#loginInput = loginField.input

    const passwordField = this.#createInputField('Пароль:', 'password', 'Введіть пароль')
    this.#passwordInput = passwordField.input

    this.#submitButton = this.#createSubmitButton('Увійти')

    this.#formElement.append(loginField.wrap, passwordField.wrap, this.#submitButton)

    this.container.append(this.#formElement)
  }
}

function renderForm() {
  const boxTask3 = document.querySelector(`.task-3`) as HTMLElement
  if (boxTask3) {
    const loginForm = new LoginForm(boxTask3)
  } else
    console.error("Контейнер boxTask3 не знайдено на сторінці!");
}

renderForm()


// =================================================================================================
// Задача 4. Блукаючий об’єкт. Випадковим чином рухається деякий об’єкт в межах контейнера. 
// При зустрічі з краєм контейнера він відбивається.
// =================================================================================================
const titlePage4 = createTitle('Task 4', 'title-4') as HTMLElement
const boxTask4 = document.querySelector(`.task-4`) as HTMLElement
boxTask4.style.position = 'relative'
boxTask4.style.width = '100%'
boxTask4.style.height = '700px'
boxTask4.style.border = '5px solid #121212'
boxTask4.style.overflow = 'hidden';
boxTask4.style.backgroundColor = 'lightgrey'
if (boxTask4) {
  boxTask4.before(titlePage4)
}

class BouncingObject {
  x!: number;
  y!: number;
  z!: number;
  dx!: number;
  dy!: number;
  dz!: number;

  ball!: HTMLElement;
  container: HTMLElement;
  shadow!: HTMLElement;
  title: string;

  constructor(container: HTMLElement, title: string) {
    this.container = container
    this.title = title

    this.createBall()
    this.setRandomStart()
    this.animate()
  }

  createBall() {
    this.ball = document.createElement('div')
    this.ball.style.position = 'absolute'
    this.ball.style.width = '50px'
    this.ball.style.aspectRatio = '1'
    this.ball.style.background = 'radial-gradient(circle at 30% 30%, #ff9e79, #ff6f43 40%, #b83b14 90%)';
    this.ball.style.borderRadius = '50%'

    this.shadow = document.createElement('div');
    this.shadow.style.position = 'absolute';
    this.shadow.style.width = '50px';
    this.shadow.style.height = '8px';
    this.shadow.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    this.shadow.style.borderRadius = '50%';
    this.shadow.style.filter = 'blur(4px)';

    // this.container.style.perspective = '1200px';
    // this.container.style.transformStyle = 'preserve-3d';
    this.container.append(this.ball)
    this.container.append(this.shadow);
  }

  setRandomStart() {
    // Встановлюємо максимальні зони для старту з урахуванням підлоги
    const maxW = this.container.clientWidth - this.ball.clientWidth;
    const maxH = this.container.clientHeight - this.ball.clientHeight;


    // ВИПРАВЛЕНО: Тут ТІЛЬКИ задаємо початкові випадкові координати та швидкість
    this.x = Math.random() * maxW;
    this.y = Math.random() * maxH;
    this.z = 0;

    this.dx = (Math.random() - 0.5) * 8 || 2;
    this.dy = (Math.random() - 0.5) * 8 || 2;
    this.dz = (Math.random() - 0.5) * 6 || 2;
  }

  animate() {
    this.x += this.dx
    this.y += this.dy
    this.z += this.dz

    const maxW = this.container.clientWidth - this.ball.clientWidth
    if (this.x <= 0) {
      this.x = 0;        // Жорстко повертаємо на лівий край
      this.dx = -this.dx; // Відбиваємо
    } else if (this.x >= maxW) {
      this.x = maxW;     // Жорстко повертаємо на правий край
      this.dx = -this.dx; // Відбиваємо
    }

    const maxH = this.container.clientHeight - this.ball.clientHeight
    if (this.y <= 0) {
      this.y = 0;        // Жорстко повертаємо на стелю
      this.dy = -this.dy; // Відбиваємо
    } else if (this.y >= maxH) {
      this.y = maxH; // Жорстко повертаємо на підлогу
      this.dy = -this.dy;  // Відбиваємо
    }

    if (this.z <= -200) {
      this.z = -200;     // Жорстко фіксуємо на задній стіні
      this.dz = -this.dz; // Відбиваємо
    } else if (this.z >= 100) {
      this.z = 100;      // Жорстко фіксуємо на передній стіні
      this.dz = -this.dz; // Відбиваємо
    }


    const scaleShadow = 1 + (this.z / 400);

    this.ball.style.transform = `translate3d(${this.x}px, ${this.y}px,${this.z}px`

    const shadowY = this.container.clientHeight - this.shadow.clientHeight;
    this.shadow.style.transform = `translate3d(${this.x}px, ${shadowY}px, 0px) scale(${scaleShadow})`;

    requestAnimationFrame(() => this.animate())
  }
}
function renderBouncingObject(amount: number, title: string) {
  const mainContainer = boxTask4

  if (mainContainer) {
    mainContainer.innerHTML = ''

    for (let i = 0; i < amount; i++) {
      const nameBall = `${title} ${i + 1}`

      const myBall = new BouncingObject(mainContainer, nameBall)
    }
  } else
    throw new Error("Error! Контейнер не знайдено.");
}
renderBouncingObject(5, 'ball')



// =================================================================================================
// Задача 5. Розробити елемент для вводу кількості вибраного товару за зразком
//  (мінімальна кількість 1, максимальна кількість 10, при перевищенні блокувати кнопку)
// =================================================================================================
const titlePage5 = createTitle('Task 5', 'title-5') as HTMLElement
const boxTask5 = document.querySelector(`.task-5`) as HTMLElement
if (boxTask5) {
  boxTask5.style.display = 'flex'
  boxTask5.style.alignItems = 'center'
  boxTask5.style.justifyContent = 'space-between'
  boxTask5.style.gap = '20px'
  boxTask5.style.padding = '20px'
  boxTask5.style.maxWidth = '700px'
  boxTask5.style.border = '1px solid #000'
  boxTask5.before(titlePage5)
}

function createProductCard(className: string, text: string) {
  const cardWrap = document.createElement('div')
  cardWrap.className = `${className}__wrap`
  cardWrap.style.display = 'flex'
  cardWrap.style.alignItems = 'center'
  cardWrap.style.gap = '20px'

  const cardImage = document.createElement('img')
  cardImage.className = `${className}__image`
  cardImage.src = '../lesson_20/img/product-img-apple.webp'
  cardImage.style.width = '100px'
  cardImage.style.aspectRatio = '1'

  const cardText = document.createElement('p')
  cardText.className = `${className}__text`
  cardText.innerText = text
  cardText.style.fontSize = '22px'
  cardText.style.fontWeight = '600'
  cardText.style.margin = '0'

  cardWrap.append(cardImage)
  cardWrap.append(cardText)

  return cardWrap
}

function createQuantityInput(className: string) {
  const wrap = document.createElement('div')
  wrap.style.display = 'flex'
  wrap.style.alignItems = 'center'
  wrap.style.gap = '5px'
  wrap.className = `${className}__wrap-actions`

  const btnMinus = document.createElement('button')
  btnMinus.className = `${className}__btn-minus`
  btnMinus.innerText = '-'
  btnMinus.style.fontSize = '30px'
  btnMinus.style.width = '40px'
  btnMinus.style.aspectRatio = '1'
  btnMinus.style.display = 'flex'
  btnMinus.style.alignItems = 'center'
  btnMinus.style.justifyContent = 'center'
  btnMinus.style.border = '1px solid #000'
  btnMinus.style.borderRadius = '50%'
  btnMinus.style.cursor = 'pointer'

  const btnPlus = document.createElement('button')
  btnPlus.className = `${className}__btn-plus`
  btnPlus.innerText = '+'
  btnPlus.style.fontSize = '30px'
  btnPlus.style.width = '40px'
  btnPlus.style.aspectRatio = '1'
  btnPlus.style.display = 'flex'
  btnPlus.style.alignItems = 'center'
  btnPlus.style.justifyContent = 'center'
  btnPlus.style.border = '1px solid #000'
  btnPlus.style.borderRadius = '50%'
  btnPlus.style.cursor = 'pointer'

  const input = document.createElement('input')
  input.className = `${className}__input`
  input.type = 'number'
  input.style.height = '30px'
  input.style.textAlign = 'center'
  input.value = '1'
  input.style.width = '50px'

  wrap.append(btnMinus)
  wrap.append(input)
  wrap.append(btnPlus)

  return { wrap, btnMinus, btnPlus, input }
}

function renderTotalCartPrice(inputField: HTMLInputElement, basePrice: number = 45) {
  if (!boxTask5) return

  let totalCartBlock = boxTask5.querySelector('.cart-price') as HTMLElement

  if (!totalCartBlock) {
    totalCartBlock = document.createElement('div')
    totalCartBlock.className = 'cart-price'
    totalCartBlock.style.marginTop = '20px'
    totalCartBlock.style.fontSize = '22px'
    totalCartBlock.style.margin = '0'
    totalCartBlock.style.textTransform = 'capitalize'
    totalCartBlock.style.fontWeight = 'bold'
    boxTask5.append(totalCartBlock)
  }

  const currentCount = inputField ? parseInt(inputField.value) : 1
  const totalPriceCard = currentCount * basePrice

  totalCartBlock.innerText = `до сплати: ${totalPriceCard} грн`
}

function updateTotalPrice(
  inputField: HTMLInputElement,
  basePrice: number,
  btnMinus: HTMLButtonElement,
  btnPlus: HTMLButtonElement
) {
  let minCount = 1
  let maxCount = 10

  let currentCount = parseInt(inputField.value)

  if (isNaN(currentCount) || currentCount < minCount) {
    currentCount = minCount
    inputField.value = String(minCount)
  } else if (currentCount > maxCount) {
    currentCount = maxCount
    inputField.value = String(maxCount)
  }

  if (currentCount <= minCount) {
    btnMinus.disabled = true
    btnMinus.style.opacity = '0.5'
    btnMinus.style.cursor = 'not-allowed'
  } else {
    btnMinus.disabled = false
    btnMinus.style.opacity = '1'
    btnMinus.style.cursor = 'pointer'
  }

  if (currentCount >= maxCount) {
    btnPlus.disabled = true
    btnPlus.style.opacity = '0.5'
    btnPlus.style.cursor = 'not-allowed'
  } else {
    btnPlus.disabled = false
    btnPlus.style.opacity = '1'
    btnPlus.style.cursor = 'pointer'
  }

  renderTotalCartPrice(inputField, basePrice)
}

function renderProduct() {
  if (!boxTask5) return

  const basePrice = 40

  const product = createProductCard('product-card', 'Green apple')
  boxTask5.append(product)

  const actionsCounter = createQuantityInput('actions')
  product.append(actionsCounter.wrap)

  actionsCounter.btnMinus.addEventListener('click', () => {
    let val = parseInt(actionsCounter.input.value) - 1;
    actionsCounter.input.value = String(val);
    updateTotalPrice(actionsCounter.input, basePrice, actionsCounter.btnMinus, actionsCounter.btnPlus)
  });

  actionsCounter.btnPlus.addEventListener('click', () => {
    let val = parseInt(actionsCounter.input.value) + 1;
    actionsCounter.input.value = String(val);
    updateTotalPrice(actionsCounter.input, basePrice, actionsCounter.btnMinus, actionsCounter.btnPlus)
  });

  actionsCounter.input.addEventListener('input', () => {
    updateTotalPrice(actionsCounter.input, basePrice, actionsCounter.btnMinus, actionsCounter.btnPlus)
  });

  updateTotalPrice(actionsCounter.input, basePrice, actionsCounter.btnMinus, actionsCounter.btnPlus)
}

renderProduct()


// =================================================================================================
// Задача 6. Дано перелік товарів у кошику. При зміні кількості одиниць товару збільшувати загальну
// вартість. Створити клас Product, що призначений для маніпуляцій товаром та клас ProductManager
// що оперує з усіма товарами (через подію передвати ідентифікатор товару та операцію, що зроблена
// =================================================================================================
const titlePage6 = createTitle('Task 6', 'title-6') as HTMLElement
const boxTask6 = document.querySelector(`.task-6`) as HTMLElement
if (boxTask6) {
  boxTask6.style.display = 'flex'
  boxTask6.style.flexDirection = 'column'
  boxTask6.style.gap = '20px'
  boxTask6.before(titlePage6)
}

interface IdProductData {
  id: string;
  title: string;
  basePrice: number;
  imgSrc: string;
}

interface IProductElements {
  mainContainer: HTMLElement;
  btnMinus: HTMLButtonElement;
  input: HTMLInputElement;
  btnPlus: HTMLButtonElement;
  btnRemove: HTMLButtonElement;
  totalPriceElement: HTMLElement;
}

class Product {
  id: string;
  title: string;
  basePrice: number;
  imgSrc: string;

  cardElement: HTMLElement;
  input!: HTMLInputElement;
  btnMinus!: HTMLButtonElement;
  btnPlus!: HTMLButtonElement;
  btnRemove!: HTMLButtonElement;
  totalPriceElement!: HTMLElement;

  constructor(data: IdProductData) {
    this.id = data.id
    this.title = data.title
    this.basePrice = data.basePrice
    this.imgSrc = data.imgSrc

    const elements = this.createCardElement('product', this.title);

    this.cardElement = elements.mainContainer
    this.input = elements.input
    this.btnPlus = elements.btnPlus
    this.btnMinus = elements.btnMinus
    this.btnRemove = elements.btnRemove
    this.totalPriceElement = elements.totalPriceElement

    this.initEvents();
    this.updateButtonsState();
  }

  createCardElement(className: string, title: string): IProductElements {
    const mainContainer = document.createElement('article')
    mainContainer.className = className
    mainContainer.style.display = 'flex'
    mainContainer.style.alignItems = 'center'
    mainContainer.style.justifyContent = 'space-between'
    mainContainer.style.gap = '20px'
    mainContainer.style.padding = '20px'
    mainContainer.style.maxWidth = '700px'
    mainContainer.style.border = '1px solid #000'

    // ========== Info block =========
    const wrapInfo = document.createElement('div')
    wrapInfo.className = `${className}__info`
    wrapInfo.style.display = 'flex'
    wrapInfo.style.alignItems = 'center'
    wrapInfo.style.gap = '10px'
    wrapInfo.style.width = '33.333%'

    const imgInfo = document.createElement('img')
    imgInfo.className = `${className}__img`
    imgInfo.style.width = '100px'
    imgInfo.style.height = '100px'
    imgInfo.src = this.imgSrc

    const textInfo = document.createElement('p')
    textInfo.className = `${className}__text`
    textInfo.innerText = title
    textInfo.style.fontSize = '20px'
    textInfo.style.fontWeight = '600'
    textInfo.style.margin = '0'

    wrapInfo.append(imgInfo)
    wrapInfo.append(textInfo)

    // ========== Actions block =========
    const wrapActions = document.createElement('div')
    wrapActions.className = `${className}__actions`
    wrapActions.style.display = 'flex'
    wrapActions.style.alignItems = 'center'
    wrapActions.style.justifyContent = 'center'
    wrapActions.style.gap = '10px'

    const btnMinus = document.createElement('button')
    btnMinus.className = `${className}__btn-minus`
    btnMinus.type = 'button'
    btnMinus.style.margin = '0'
    btnMinus.innerText = '-'
    btnMinus.style.cursor = 'pointer'
    btnMinus.style.width = '40px'
    btnMinus.style.height = '40px'
    btnMinus.style.display = 'flex'
    btnMinus.style.alignItems = 'center'
    btnMinus.style.justifyContent = 'center'
    btnMinus.style.border = '1px solid #000'
    btnMinus.style.borderRadius = '50%'

    const input = document.createElement('input')
    input.className = `${className}__input`
    input.style.width = '50px'
    input.type = 'number'
    input.style.height = '30px'
    input.style.textAlign = 'center'
    input.value = '1'

    const btnPlus = document.createElement('button')
    btnPlus.className = `${className}__btn-plus`
    btnPlus.type = 'button'
    btnPlus.style.margin = '0'
    btnPlus.innerText = '+'
    btnPlus.style.cursor = 'pointer'
    btnPlus.style.width = '40px'
    btnPlus.style.height = '40px'
    btnPlus.style.display = 'flex'
    btnPlus.style.alignItems = 'center'
    btnPlus.style.justifyContent = 'center'
    btnPlus.style.border = '1px solid #000'
    btnPlus.style.borderRadius = '50%'

    wrapActions.append(btnMinus)
    wrapActions.append(input)
    wrapActions.append(btnPlus)

    // ========== Total block ========
    const wrapTotalInfo = document.createElement('div')
    wrapTotalInfo.className = `${className}__total`
    wrapTotalInfo.style.display = 'flex'
    wrapTotalInfo.style.alignItems = 'center'
    wrapTotalInfo.style.justifyContent = 'space-between'
    wrapTotalInfo.style.gap = '20px'
    wrapTotalInfo.style.width = '33.333%'

    const totalInfoText = document.createElement('p')
    totalInfoText.className = `${className}__total-text`
    totalInfoText.innerText = 'Total price:'
    totalInfoText.style.fontSize = '20px'
    totalInfoText.style.fontWeight = '500'
    totalInfoText.style.margin = '0'

    const totalInfoPrice = document.createElement('span')
    totalInfoPrice.className = `${className}__total-price`
    totalInfoPrice.style.color = 'red'
    totalInfoPrice.style.fontSize = '20px'
    totalInfoPrice.style.fontWeight = '700'
    totalInfoPrice.innerText = `${this.basePrice}$`

    const btnRemove = document.createElement('button')
    btnRemove.className = `${className}__btn-remove`
    btnRemove.type = 'button'
    btnRemove.innerText = '+'
    btnRemove.style.cursor = 'pointer'
    btnRemove.style.width = '40px'
    btnRemove.style.height = '40px'
    btnRemove.style.rotate = '45deg'
    btnRemove.style.display = 'flex'
    btnRemove.style.alignItems = 'center'
    btnRemove.style.justifyContent = 'center'
    btnRemove.style.border = '1px solid #000'
    btnRemove.style.borderRadius = '50%'

    wrapTotalInfo.append(totalInfoText)
    wrapTotalInfo.append(totalInfoPrice)
    wrapTotalInfo.append(btnRemove)

    mainContainer.append(wrapInfo)
    mainContainer.append(wrapActions)
    mainContainer.append(wrapTotalInfo)

    if (typeof boxTask6 !== 'undefined' && boxTask6) {
      boxTask6.append(mainContainer)
    }

    return { mainContainer, btnMinus, input, btnPlus, btnRemove, totalPriceElement: totalInfoPrice }
  }

  initEvents() {
    this.btnMinus.addEventListener('click', () => {
      this.changeQuantity(-1, 'decrement')
    });

    this.btnPlus.addEventListener('click', () => {
      this.changeQuantity(+1, 'increment')
    });

    this.input.addEventListener('input', () => {
      this.validateAndDispatch('manual')
    });

    this.btnRemove.addEventListener('click', () => {
      const removeEvent = new CustomEvent('productRemoved', {
        bubbles: true,
        detail: {
          productId: this.id
        }
      });

      this.cardElement.dispatchEvent(removeEvent)
    });
  }

  changeQuantity(step: number, operation: string) {
    const currentVal = parseInt(this.input.value) || 0

    const newVal = currentVal + step

    this.input.value = String(newVal)

    this.validateAndDispatch(operation)
  }

  validateAndDispatch(operation: string) {
    let currentNumber = parseInt(this.input.value)

    if (isNaN(currentNumber) || currentNumber < 1) {
      currentNumber = 1
      this.input.value = String(currentNumber)
    } else if (currentNumber > 10) {
      currentNumber = 10
      this.input.value = String(currentNumber)
    }

    this.updateButtonsState()

    let currentPriceItem = currentNumber * this.basePrice
    this.totalPriceElement.innerText = `${currentPriceItem}$`

    const newEvent = new CustomEvent('productQuantityChanged', {
      bubbles: true,
      detail: {
        productId: this.id,
        operation: operation,
      }
    })

    this.cardElement.dispatchEvent(newEvent)
  }

  updateButtonsState() {
    let currentNumber = parseInt(this.input.value) || 1

    if (currentNumber <= 1) {
      this.btnMinus.disabled = true
      this.btnMinus.style.opacity = '0.5'
      this.btnMinus.style.cursor = 'not-allowed'
    } else {
      this.btnMinus.disabled = false
      this.btnMinus.style.opacity = '1'
      this.btnMinus.style.cursor = 'pointer'
    }

    if (currentNumber >= 10) {
      this.btnPlus.disabled = true
      this.btnPlus.style.opacity = '0.5'
      this.btnPlus.style.cursor = 'not-allowed'
    } else {
      this.btnPlus.disabled = false
      this.btnPlus.style.opacity = '1'
      this.btnPlus.style.cursor = 'pointer'
    }
  }

  getTotalPrice(): number {
    let currentNumber = parseInt(this.input.value) || 0

    return currentNumber * this.basePrice
  }
}

class ProductManager {
  productsList: Product[] = []

  container: HTMLElement;
  productsData: IdProductData[];
  totalSumElement!: HTMLElement;

  constructor(container: HTMLElement, productsData: IdProductData[]) {
    this.container = container;
    this.productsData = productsData;

    this.productsData.forEach(data => {
      const productItem = new Product(data)

      this.productsList.push(productItem)
    });

    this.createTotalBlock('total-container')
    this.initManagerEvents()
    this.calculateCartTotal()
  }

  createTotalBlock(className: string) {
    const totalContainer = document.createElement('div')
    totalContainer.className = className
    totalContainer.style.display = 'flex'
    totalContainer.style.alignItems = 'center'
    totalContainer.style.gap = '20px'

    const totalText = document.createElement('p')
    totalText.className = `${className}__text`
    totalText.innerText = 'Total sum:'
    totalText.style.margin = '0'
    totalText.style.fontSize = '22px'
    totalText.style.fontWeight = '600'

    const totalPrice = document.createElement('span')
    totalPrice.className = `${className}__price`
    totalPrice.style.margin = '0'
    totalPrice.style.fontSize = '24px'
    totalPrice.style.fontWeight = '700'
    totalPrice.style.color = 'red'
    totalPrice.innerText = '0'

    this.totalSumElement = totalPrice

    totalContainer.append(totalText)
    totalContainer.append(totalPrice)
    this.container.append(totalContainer)

    return totalContainer
  }

  initManagerEvents() {
    this.container.addEventListener('productQuantityChanged', (e: Event) => {
      const customEvent = e as CustomEvent

      const { productId, operation } = customEvent.detail

      console.log(`Менеджер зафіксував зміну! Товар ID: ${productId}, Операція: ${operation}`);

      this.calculateCartTotal()
    });

    this.container.addEventListener('productRemoved', (e: Event) => {
      const customEvent = e as CustomEvent
      const { productId } = customEvent.detail

      console.log(`Менеджер отримав сигнал на видалення товару з ID: ${productId}`);

      const targetProduct = this.productsList.find(p => p.id === productId)

      if (targetProduct) {
        targetProduct.cardElement.remove()

        this.productsList = this.productsList.filter(item => item.id !== productId)

        this.calculateCartTotal()
      }
    });
  }

  calculateCartTotal() {
    const totalPrice = this.productsList.reduce((sum, product) => {
      return sum + product.getTotalPrice()
    }, 0);

    this.totalSumElement.innerText = `${totalPrice}$`
  }
}

const products = [
  {
    id: '345465',
    title: 'Green apple',
    basePrice: 20,
    imgSrc: '../lesson_20/img/product-img-apple.webp',
  },
  {
    id: '337465',
    title: 'Cabbage',
    basePrice: 12,
    imgSrc: '../lesson_20/img/product-img-cabbage.webp',
  },
  {
    id: '3454222',
    title: 'Capsicum',
    basePrice: 25,
    imgSrc: '../lesson_20/img/product-img-capsicum.webp',
  },
  {
    id: '3451125',
    title: 'Cauliflower',
    basePrice: 35,
    imgSrc: '../lesson_20/img/product-img-cauliflower.webp',
  }
]

document.addEventListener('DOMContentLoaded', () => {
  if (boxTask6) {
    const manager = new ProductManager(boxTask6, products);
  }
});











// ===============================================================================
// ================================== custom-event ===============================
// ===============================================================================
// ===== task 1 =====
// const buttonCustom = document.querySelector(`.my-btn`) as HTMLButtonElement
// if (buttonCustom) {
//   buttonCustom.addEventListener('click', () => {
//     const eventBtn = new CustomEvent('cart:add-item', {
//       bubbles: true,
//       detail: {
//         id: buttonCustom.id,
//         title: 'Button',
//       }
//     })
//     buttonCustom.dispatchEvent(eventBtn)
//   });
//   document.addEventListener('cart:add-item', (e: Event) => {
//     const customEvent = e as CustomEvent

//     console.log(buttonCustom.type);
//     console.log(customEvent.type);
//     console.log(customEvent.detail);

//   });
// }

// ===== task 2 =====
// const myBtn = document.querySelector(`.my-btn`) as HTMLButtonElement
// if (myBtn) {
//   myBtn.addEventListener('click', () => {
//     const btnAddItem = new CustomEvent('productAdded', {
//       bubbles: true,
//       detail: {
//         id: 1,
//         title: 'Phone',
//       }
//     })
//     myBtn.dispatchEvent(btnAddItem)
//   });
//   document.addEventListener('productAdded', (e) => {
//     const customEvent = e as CustomEvent
//     const { id, title } = customEvent.detail

//     console.log(id);
//     console.log(title);
//     console.log(customEvent.detail);
//     console.log(e.target);
//   });
// }

// ===== task 3 =====
// const btnAdd = document.querySelector(`.my-btn`) as HTMLButtonElement
// if (btnAdd) {
//   type TypeProduct = {
//     id: number,
//     title: string,
//     price: number
//   }
//   class ProductManager {
//     buttonAdd!: HTMLButtonElement;
//     product: TypeProduct[];
//     btnAdd: HTMLButtonElement

//     constructor(product: TypeProduct[], btnAdd: HTMLButtonElement) {
//       this.product = product
//       this.btnAdd = btnAdd

//       this.initEvents()
//     }

//     addProduct() {
//       const btnAddItem = new CustomEvent('productAdded', {
//         bubbles: true,
//         detail: this.product
//       })

//       document.body.dispatchEvent(btnAddItem)
//     }

//     initEvents() {
//       this.btnAdd.addEventListener('click', () => {
//         this.addProduct()
//       });
//     }
//   }
//   class CartManager {
//     productsList: Product[] = [];

//     constructor() {

//       document.body.addEventListener('productAdded', (e: Event) => {
//         const customEvent = e as CustomEvent

//         const { id, title, price } = customEvent.detail as TypeProduct

//         // console.log(customEvent);
//         // console.log(id);
//         // console.log(title);
//         // console.log(price);
//         // console.log('Added: Phone - $1000');
//         console.log(customEvent.detail);

//         this.productsList.push(customEvent.detail)
//       });
//     }
//   }
//   const cart = new CartManager()
//   const phoneData: TypeProduct[] = [
//     {
//       id: 1,
//       title: 'iPhone 17',
//       price: 1200
//     },
//     {
//       id: 2,
//       title: 'iPhone 14 Pro Max',
//       price: 1000
//     },
//   ]
//   const productManager = new ProductManager(phoneData, btnAdd)
// }

//  ===== task 4 =====
// const btnAdd = document.querySelector(`.my-btn`) as HTMLButtonElement
// if (btnAdd) {
//   btnAdd.addEventListener('click', () => {
//     const eventBtn = new CustomEvent('cart:add-item', {
//       bubbles: true,
//       detail: {
//         id: btnAdd.id,
//         title: btnAdd.dataset.title || 'Unknown Product',
//         price: Number(btnAdd.dataset.price) || 0
//       }
//     });
//     btnAdd.dispatchEvent(eventBtn)
//   });
//   document.addEventListener('cart:add-item', (e) => {
//     const customEvent = e as CustomEvent

//     const { id, title, price } = customEvent.detail

//     console.log(customEvent);
//     console.log(customEvent.detail);
//     console.log(typeof id);
//     console.log(typeof title);
//     console.log(typeof price);
//   });
// }












// ===================================================================
// ========================= components ==============================
// ===================================================================
// type ButtonProps = {
//   text: string
//   backgroundColor?: string
//   color?: string
//   borderRadius?: string
//   onClick?: () => void
// }

// function createButton({
//   text,
//   backgroundColor = '#222',
//   color = '#fff',
//   borderRadius = '12px',
//   onClick,
// }: ButtonProps): HTMLButtonElement {

//   const button = document.createElement('button')

//   button.className = 'button'
//   button.textContent = text

//   // Dynamic styles
//   button.style.backgroundColor = backgroundColor
//   button.style.color = color
//   button.style.borderRadius = borderRadius

//   // Event
//   button.addEventListener('click', () => {
//     onClick?.()
//   })

//   return button
// }

// const app = document.querySelector<HTMLDivElement>('.app')

// if (app) {

//   const primaryButton = createButton({
//     text: 'Primary',
//     backgroundColor: '#6c5ce7',
//     onClick: () => {
//       console.log('Primary button clicked')
//     },
//   })

//   const dangerButton = createButton({
//     text: 'Delete',
//     backgroundColor: '#d63031',
//     borderRadius: '50px',
//     onClick: () => {
//       console.log('Delete button clicked')
//     },
//   })

//   const secondaryButton = createButton({
//     text: 'Click me',
//     backgroundColor: '#fff',
//     color: '#121212',
//     borderRadius: '40px',
//     onClick: () => {
//       console.log('Secondary button clicked');
//     }
//   })
//   app.append(primaryButton, dangerButton, secondaryButton)
// }


// 1. Компонент Кнопки (повертає готовий HTML-рядок)
// function Button(text: string, colorClass: string) {
//   return `<button class="btn ${colorClass}">${text}</button>`;
// }

// // 2. Компонент Картки Товару (всередині викликає компонент Кнопки!)
// function ProductCard(title: string, price: number) {
//   return `
//     <div class="product-card">
//       <h3>${title}</h3>
//       <p>Ціна: ${price} грн</p>
//       ${Button('Купити', 'btn-primary')}
//     </div>
//   `;
// }

// // 3. Головна функція, яка збирає весь інтерфейс до купи
// function render() {
//   const root = document.getElementById('root');

//   root!.innerHTML = `
//     <header><h1>Мій Магазин</h1></header>
//     <main class="products-grid">
//       ${ProductCard('Ноутбук Apple MacBook', 45000)}
//       ${ProductCard('Навушники AirPods', 8000)}
//     </main>
//   `;
// }

// // Запускаємо рендер при завантаженні сторінки
// render();


// ====================== moving element =========================
// const wrapperContainer = document.querySelector(`.wrapper`)

// const obj = document.querySelector(`.obj`)
// const parentPos = obj?.parentElement
// const nextSibiling = obj?.nextElementSibling

// // ================
// const containerBox = document.querySelector(`.container-box`)
// const containerParent = document.querySelector(`.container-parent`)
// // ================
// const btnSave = document.querySelector(`.btn-save`)
// if (btnSave) {
//   btnSave.dataset.action = 'save'
// }
// const btnDelete = document.querySelector(`.btn-delete`)
// if (btnDelete) {
//   btnDelete.dataset.action = 'delete'
// }
// // ================
// document.addEventListener('click', (e) => {
//   const target = e.target as HTMLElement

//   const action = target.dataset.action

//   if (action === 'save') {
//     parentPos?.insertBefore(obj, nextSibiling)
//   }
//   if (action === 'delete') {
//     containerParent?.after(obj!)
//   }
// });




// ==============================
// const filterButtons = document.querySelectorAll<HTMLButtonElement>('.filter__btn');
// const filterItems = document.querySelectorAll<HTMLElement>('.filter__window');

// filterButtons.forEach(button => {
//   button.addEventListener('click', () => {

//     const filterValue = button.dataset.filter;

//     filterButtons.forEach(btn => btn.classList.remove('active'));
//     button.classList.add('active');

//     filterItems.forEach(item => {
//       const category = item.dataset.category;

//       const isMatch = filterValue === category;

//       if (isMatch) {
//         item.classList.add('active');
//       } else {
//         item.classList.remove('active');
//       }
//     });
//   });
// });
