"use strict";
// =========================================================================
function createTitle(titleText, className) {
    const title = document.createElement('h2');
    title.className = className;
    title.innerText = titleText;
    return title;
}
// =========================================================================
// =========================================================================
// Задача 1. Дано 10 рядків тексту «Hello!» у окремих div. 
// При кліку на якийсь із них усі наступні повинні бути зафарбовані у червоний колір.
// =========================================================================
const title1 = createTitle('Задача 1', 'title-1');
title1.style.fontSize = '40px';
const container1 = document.querySelector(`.task-1`);
container1?.before(title1);
class GenerateDivs {
    amount;
    container;
    constructor(amount, container) {
        this.amount = amount;
        this.container = container;
    }
    initMain() {
        this.createItems('item', 'Hello!');
        this.addEvents();
        this.styles();
    }
    styles() {
        this.container.style.backgroundColor = 'lightgrey';
        this.container.style.display = 'flex';
        this.container.style.flexDirection = 'column';
        this.container.style.gap = '10px';
        this.container.style.alignItems = 'center';
        this.container.style.padding = '20px';
        this.container.style.border = '2px solid #000';
        this.container.style.maxWidth = '100px';
    }
    createItems(className, text) {
        for (let i = 0; i < this.amount; i++) {
            const div = document.createElement('div');
            div.className = className;
            div.innerText = text;
            div.style.fontSize = '20px';
            this.container.append(div);
        }
    }
    addEvents() {
        const divs = Array.from(this.container.children);
        divs.forEach((item, index) => {
            item.addEventListener('click', () => {
                this.paintItems(index);
            });
        });
    }
    paintItems(index) {
        const divs = Array.from(this.container.children);
        divs.forEach((div, i) => {
            if (i > index) {
                div.style.color = 'red';
            }
        });
    }
}
const itemsDiv = new GenerateDivs(10, container1);
itemsDiv.initMain();
// =========================================================================
// Задача 2. Дано 5 елементів input. При введенні значення у якийсь із них необхідно 
// автоматично заповнювати інші (усі попередні у спадному порядку(кожен попередній 
// має значення на 1 менше за наступний), усі наступні на 1 більше (кожен наступне на 1 більше за попереднього)
const title2 = createTitle('Задача 2', 'title-2');
title2.style.fontSize = '40px';
const container2 = document.querySelector(`.task-2`);
container2?.before(title2);
class GenerateInputs {
    amount;
    container;
    inputs = [];
    constructor(amount, container) {
        this.amount = amount;
        this.container = container;
    }
    createInputs() {
        for (let i = 0; i < this.amount; i++) {
            const wrap = document.createElement('div');
            wrap.className = 'wrap';
            wrap.style.maxWidth = '300px';
            const label = document.createElement('label');
            label.className = 'label';
            label.style.marginRight = '10px';
            label.innerText = `Value ${i + 1}`;
            label.htmlFor = `value-input-${i + 1}`;
            const input = document.createElement('input');
            input.className = 'input-field';
            input.type = 'number';
            input.id = `value-input-${i + 1}`;
            wrap.append(label);
            wrap.append(input);
            this.inputs.push(input);
            this.container.append(wrap);
        }
    }
    updateValues(currentIndex, currentValue) {
        // for (let i = 0; i < this.inputs.length; i++) {
        //   const difference = i - currentIndex
        //   const newValue = currentValue + difference
        //   const input = this.inputs[i]
        //   input.value = String(newValue)
        // }
        this.inputs.forEach((input, index) => {
            const difference = index - currentIndex;
            const newValue = currentValue + difference;
            input.value = String(newValue);
        });
    }
    addEvents() {
        this.inputs.forEach((item, index) => {
            item.addEventListener('input', () => {
                const value = Number(item.value);
                if (isNaN(value))
                    return;
                this.updateValues(index, value);
            });
        });
    }
    render() {
        this.createInputs();
        this.addEvents();
    }
}
const input = new GenerateInputs(5, container2);
input.render();
// =========================================================================
// Задача 3. Дано 5 випадковим чином згенерованих нумерованих списків з рандомними
// числами (кількість елементів у списку випадкова від 1 до 10, елементи випадкові – від 1 до 100).
// При натисненні на кнопку нумеровані списки з парною кількістю елементів зафарбувати у зелений колір, інші у червоний.
// =========================================================================
const title3 = createTitle('Задача 3', 'title-3');
title3.style.fontSize = '40px';
const container3 = document.querySelector(`.task-3`);
container3?.before(title3);
class GenerateNumberedLists {
    listAmount;
    container;
    lists = [];
    button;
    constructor(listAmount, container) {
        this.listAmount = listAmount;
        this.container = container;
    }
    createList() {
        for (let i = 0; i < this.listAmount; i++) {
            const ol = document.createElement('ol');
            ol.style.maxWidth = '200px';
            ol.style.display = 'flex';
            ol.style.flexDirection = 'column';
            ol.style.gap = '5px';
            const countLi = 1 + Math.floor(Math.random() * 10);
            for (let i = 0; i < countLi; i++) {
                const li = document.createElement('li');
                const value = 1 + Math.floor(Math.random() * 100);
                li.innerText = String(value);
                ol.append(li);
            }
            this.lists.push(ol);
            this.container.append(ol);
        }
    }
    generateRandomNumber() {
        1 + Math.floor(Math.random() * 100);
    }
    paintList() {
        this.lists.forEach((list) => {
            let listLength = list.children.length;
            if (listLength % 2 === 0) {
                list.style.backgroundColor = 'lightgreen';
            }
            else
                list.style.backgroundColor = 'lightcoral';
        });
    }
    createButton(title) {
        this.button = document.createElement('button');
        this.button.type = 'submit';
        this.button.innerText = title;
        this.button.style.padding = '10px';
        this.button.style.cursor = 'pointer';
        this.container.append(this.button);
    }
    addEvents() {
        this.button.addEventListener('click', () => {
            this.paintList();
        });
    }
    render() {
        this.createList();
        this.createButton('Paint');
        this.addEvents();
    }
}
const list1 = new GenerateNumberedLists(5, container3);
list1.render();
// =========================================================================
// Задача 4. Дано 3 таблиці розмірності 3*3 з випадковими числами. Якщо відбувається клік 
// на якійсь із клітинок, то до відповідної таблиці додається червона рамка 
// (спробуйте додати можливість відображення кількості кліків біля назви таблиці з використанням 
// відповідно доданого для цього атрибута).
// =========================================================================
const title4 = createTitle('Задача 4', 'title-4');
title4.style.fontSize = '40px';
const container4 = document.querySelector(`.task-4`);
container4?.before(title4);
class TableManager {
    amountTables;
    container;
    wrappers = [];
    constructor(amountTables, container) {
        this.amountTables = amountTables;
        this.container = container;
    }
    createTables(className, amountRows, amountColumns) {
        for (let i = 0; i < this.amountTables; i++) {
            const title = this.createTitle(i + 1, 0);
            const wrapper = document.createElement('div');
            wrapper.dataset.clicks = '0';
            wrapper.style.maxWidth = '200px';
            wrapper.style.marginTop = '-1px';
            wrapper.className = className;
            wrapper.append(title);
            const table = document.createElement('table');
            table.className = `${className}`;
            wrapper.append(table);
            table.style.border = '2px solid #000';
            table.style.width = '100%';
            table.style.textAlign = 'center';
            for (let r = 0; r < amountRows; r++) {
                const tr = document.createElement('tr');
                tr.className = `${className}__row`;
                tr.style.textAlign = 'center';
                tr.style.backgroundColor = 'lightgrey';
                table.append(tr);
                for (let c = 0; c < amountColumns; c++) {
                    const td = document.createElement('td');
                    td.className = `${className}__cell`;
                    tr.append(td);
                    td.style.width = `${100 / amountColumns}%`;
                    td.style.cursor = 'pointer';
                    const randNum = 1 + Math.floor(Math.random() * 100);
                    td.innerText = String(randNum);
                }
            }
            this.container.append(wrapper);
            this.wrappers.push(wrapper);
        }
    }
    createTitle(tableNumber, clicks) {
        const title = document.createElement('h3');
        title.dataset.tableNum = String(tableNumber);
        title.innerText = `Table ${tableNumber} (${clicks} clicks)`;
        return title;
    }
    handleTableClick(wrapper) {
        const current = Number(wrapper.dataset.clicks || 0);
        const updated = current + 1;
        wrapper.dataset.clicks = String(updated);
        // wrapper.style.border = '2px solid red'
        const table = wrapper.querySelector(`table`);
        if (table) {
            table.style.border = '2px solid red';
        }
        const title = wrapper.querySelector('h3');
        if (title) {
            title.innerText = `Table (${updated} clicks)`;
        }
    }
    addEvents() {
        this.wrappers.forEach(wrapper => {
            wrapper.addEventListener('click', (e) => {
                const td = e.target.closest('td');
                if (!td)
                    return;
                this.handleTableClick(wrapper);
            });
        });
    }
    render(className, rows = 3, cols = 3) {
        this.createTables(className, rows, cols);
        this.addEvents();
    }
}
const tableUser = new TableManager(3, container4);
tableUser.render('my-custom-table', 3, 3);
// =========================================================================
// Задача 5. Відображаємо картки товарів, які користувач може вибирати.
//  Вибраний товар має зелену рамку (при кліку робити toogle з класом вибраного елемента)
// =========================================================================
const title5 = createTitle('Задача 5', 'title-5');
title5.style.textAlign = 'center';
title5.style.fontSize = '40px';
const container5 = document.querySelector(`.task-5`);
if (container5) {
    container5?.before(title5);
    container5.style.display = 'flex';
    container5.style.alignItems = 'center';
    container5.style.gap = '20px';
    container5.style.justifyContent = 'center';
    container5.style.flexWrap = 'wrap';
}
const myProducts = [
    {
        id: 232323,
        title: 'Apple',
        price: 25,
        image: `../lesson_19/img/product-img-apple.webp`
    },
    {
        id: 54546,
        title: 'Cabbage',
        price: 30,
        image: `../lesson_19/img/product-img-cabbage.webp`
    },
    {
        id: 345424,
        title: 'Capsicum',
        price: 40,
        image: `../lesson_19/img/product-img-capsicum.webp`,
    },
    {
        id: 674523,
        title: 'Cauliflower',
        price: 35,
        image: `../lesson_19/img/product-img-cauliflower.webp`,
    }
];
class ProductList {
    title = '';
    productList;
    wrappers = [];
    container;
    constructor(productList, container) {
        this.productList = productList;
        this.container = container;
    }
    createProductCard(product, className) {
        const wrapCard = document.createElement('article');
        wrapCard.className = className;
        wrapCard.style.cursor = 'pointer';
        wrapCard.style.borderRadius = '4px';
        wrapCard.style.padding = '20px';
        wrapCard.style.maxWidth = '300px';
        wrapCard.style.maxHeight = '300px';
        const image = document.createElement('img');
        image.className = `${className}__img`;
        // image.style.aspectRatio = '1'
        image.style.objectFit = 'cover';
        image.style.width = '100%';
        image.style.height = '100%';
        image.src = product.image;
        const contentWrap = document.createElement('div');
        contentWrap.className = `${className}__content`;
        contentWrap.style.display = 'flex';
        contentWrap.style.alignItems = 'center';
        contentWrap.style.justifyContent = 'space-between';
        contentWrap.style.gap = '10px';
        contentWrap.style.flexWrap = 'wrap';
        const title = document.createElement('h3');
        title.className = `${className}__title`;
        title.style.margin = '0';
        title.innerText = product.title;
        const price = document.createElement('span');
        price.className = `${className}__price`;
        price.innerText = `${product.price}$`;
        contentWrap.append(title);
        contentWrap.append(price);
        wrapCard.append(image);
        wrapCard.append(contentWrap);
        return wrapCard;
    }
    handleClickCard(card) {
        if (card) {
            card.classList.toggle('active');
        }
    }
    addEvents() {
        this.wrappers.forEach(card => {
            card.addEventListener('click', () => {
                this.handleClickCard(card);
            });
        });
    }
    render() {
        this.productList.forEach(item => {
            const card = this.createProductCard(item, 'product-card');
            this.container.append(card);
            this.wrappers.push(card);
        });
        this.addEvents();
    }
}
const productCard1 = new ProductList(myProducts, container5);
productCard1.render();
// ======================================================================================================
// Задача 6. Дано список спортсменів. Потрібно сформувати список тих, які будуть брати участь у змаганні. 
// При цьому є два стовпці. В одному відображені всі спортсмени, в іншому – список тих, хто був вибраний. 
// При натисканні на зелену стрілку спортсмен переміщається у список для змагань. 
// При натисканні на червону стрілку спортсмен переміщається у загальний список.
// ======================================================================================================
const title6 = createTitle('Задача 6', 'title-6');
title6.style.textAlign = 'center';
title6.style.fontSize = '40px';
const container6 = document.querySelector(`.task-6`);
if (container6) {
    container6?.before(title6);
}
const athletes = [
    {
        id: 1,
        name: 'Michael Jordan',
        kindOfSport: 'Basketball',
        hasInjured: false,
    },
    {
        id: 2,
        name: 'Cristiano Ronaldo',
        kindOfSport: 'Football',
        hasInjured: true,
    },
    {
        id: 3,
        name: 'Usain Bolt',
        kindOfSport: 'Sprint',
        hasInjured: false,
    },
    {
        id: 4,
        name: 'Novak Djokovic',
        kindOfSport: 'Tennis',
        hasInjured: true,
    },
    {
        id: 5,
        name: 'Lionel Messi',
        kindOfSport: 'Football',
        hasInjured: false,
    },
    {
        id: 6,
        name: 'LeBron James',
        kindOfSport: 'Basketball',
        hasInjured: true,
    },
];
class AthletesManager {
    athletesList;
    container;
    generateContainerList;
    competitionContainerList;
    generateInnerBox;
    competitionInnerBox;
    constructor(athletesList, container) {
        this.athletesList = athletesList;
        this.container = container;
    }
    createLayouts(className = 'athletes') {
        const mainContainer = document.createElement('article');
        mainContainer.className = className;
        mainContainer.style.display = 'flex';
        mainContainer.style.alignItems = 'flex-start';
        mainContainer.style.justifyContent = 'center';
        mainContainer.style.gap = '30px';
        this.generateContainerList = document.createElement('div');
        this.generateContainerList.className = `${className}__all`;
        this.generateInnerBox = document.createElement('div');
        this.generateInnerBox.className = `${className}__wrap`;
        this.generateInnerBox.style.width = '300px';
        this.generateInnerBox.style.height = '280px';
        this.generateInnerBox.style.border = '1px solid #000';
        this.generateInnerBox.style.padding = '20px';
        this.generateInnerBox.style.backgroundColor = 'coral';
        this.generateInnerBox.style.display = 'flex';
        this.generateInnerBox.style.flexDirection = 'column';
        this.generateInnerBox.style.gap = '5px';
        this.competitionContainerList = document.createElement('div');
        this.competitionContainerList.className = `${className}__selected`;
        this.competitionInnerBox = document.createElement('div');
        this.competitionInnerBox.className = `${className}__wrap`;
        this.competitionInnerBox.style.width = '300px';
        this.competitionInnerBox.style.height = '280px';
        this.competitionInnerBox.style.border = '1px solid #000';
        this.competitionInnerBox.style.padding = '20px';
        this.competitionInnerBox.style.backgroundColor = 'lightgreen';
        this.competitionInnerBox.style.display = 'flex';
        this.competitionInnerBox.style.flexDirection = 'column';
        this.competitionInnerBox.style.gap = '5px';
        const titleLeft = document.createElement('h3');
        titleLeft.innerText = 'Усі спортсмени';
        titleLeft.style.textAlign = 'center';
        titleLeft.style.fontSize = '22px';
        this.generateContainerList.append(titleLeft);
        const titleRight = document.createElement('h3');
        titleRight.innerText = 'Обрані для змагань';
        titleRight.style.textAlign = 'center';
        titleRight.style.fontSize = '22px';
        this.competitionContainerList.append(titleRight);
        this.generateContainerList.append(this.generateInnerBox);
        this.competitionContainerList.append(this.competitionInnerBox);
        mainContainer.append(this.generateContainerList);
        mainContainer.append(this.competitionContainerList);
        this.container.append(mainContainer);
        return mainContainer;
    }
    createAthleteCard(athlete, isSelected) {
        const card = document.createElement('div');
        card.innerText = `${athlete.name} - ${athlete.kindOfSport}`;
        card.dataset.id = String(athlete.id);
        card.style.display = 'flex';
        card.style.justifyContent = 'space-between';
        card.style.alignItems = 'center';
        card.style.gap = '20px';
        card.style.border = '1px solid #000';
        card.style.padding = '10px';
        // card.style.marginTop = '-1px'
        card.style.backgroundColor = 'lightgrey';
        const btn = document.createElement('button');
        btn.style.borderColor = 'brown';
        btn.style.borderRadius = '6px';
        if (isSelected) {
            btn.innerText = '←';
            btn.style.color = 'red';
        }
        else {
            btn.innerText = '→';
            btn.style.color = 'green';
        }
        card.append(btn);
        return card;
    }
    moveAthlete(card, toCompetition) {
        const btn = card.querySelector(`button`);
        if (!btn)
            return;
        if (toCompetition) {
            this.competitionInnerBox.append(card);
            btn.innerText = '←';
            btn.style.color = 'red';
        }
        else {
            this.generateInnerBox.append(card);
            btn.innerText = '→';
            btn.style.color = 'green';
        }
    }
    addEvents(mainContainer) {
        mainContainer.addEventListener('click', (e) => {
            const btn = e.target;
            if (btn.tagName !== 'BUTTON')
                return;
            const card = btn.closest('div');
            if (!card)
                return;
            if (btn.innerText === '→') {
                this.moveAthlete(card, true);
            }
            else if (btn.innerText === '←') {
                this.moveAthlete(card, false);
            }
        });
    }
    render() {
        const layout = this.createLayouts();
        this.athletesList.forEach(athlete => {
            const card = this.createAthleteCard(athlete, false);
            this.generateInnerBox.append(card);
        });
        this.addEvents(layout);
    }
}
const manager = new AthletesManager(athletes, container6);
manager.render();
// =====================================================================================================
// Задача 7. Відобразити падаючий сніг. Сніжинка з’являється у верхній частині екрану (top =0)
// і з випадковою швидкістю рухається вниз (у setInterval викликати метод, у якому додавати крок до top).
// Як тільки сніжинка досягає нижньої частини екрану (top>maxTop) вона знову повинна з’явитись у
// верхній частині екрану (top=0).
// =====================================================================================================
// const title7 = createTitle('Задача 7', 'title-7')
// title7.style.textAlign = 'center'
// title7.style.fontSize = '40px'
// const container7 = document.querySelector(`.task-7`)
// if (container7) {
//   container7?.before(title7)
// }
// type TypeSnowflakeState = {
//   element: HTMLElement,
//   x: number,
//   y: number,
//   step: number,
// }
// function createSnowfallContainer(className: string) {
//   const snowfallContainer = document.createElement('article')
//   snowfallContainer.className = className
//   snowfallContainer.style.position = 'relative'
//   snowfallContainer.style.overflow = 'hidden'
//   snowfallContainer.style.background = '#121212'
//   snowfallContainer.style.width = '100%'
//   snowfallContainer.style.height = '500px'
//   const maxWidth = snowfallContainer.clientWidth
//   const maxHeight = snowfallContainer.clientHeight
//   return { snowfallContainer, maxWidth, maxHeight }
// }
// function getRandomNumber(min: number, max: number) {
//   const randNum = min + Math.random() * (max - min)
//   return randNum
// }
// function initSnowflakes(count: number, maxWidth: number, maxHeight: number, container: HTMLElement) {
//   const snowFlakes = []
//   for (let i = 0; i < count; i++) {
//     const randomX = Math.floor(Math.random() * maxWidth)
//     const randomY = Math.floor(Math.random() * maxHeight)
//     const randomStep = 1 + Math.floor(Math.random() * 4)
//     const snowflake = document.createElement('div')
//     snowflake.className = 'snowflake'
//     snowflake.style.backgroundColor = 'white'
//     snowflake.style.width = '20px'
//     snowflake.style.height = '20px'
//     snowflake.style.position = 'absolute'
//     snowflake.style.left = `${randomX}px`
//     snowflake.style.top = `${randomY}px`
//     container.append(snowflake)
//     const snowflakeState: TypeSnowflakeState = {
//       element: snowflake,
//       x: randomX,
//       y: randomY,
//       step: randomStep,
//     }
//     snowFlakes.push(snowflakeState)
//   }
//   return snowFlakes
// }
// function updateSnowflakes(snowFlakes: TypeSnowflakeState[], maxHeight: number, maxWidth: number) {
//   snowFlakes.forEach((snowflake) => {
//     snowflake.y += snowflake.step
//     if (snowflake.y > maxHeight) {
//       snowflake.y = 0
//       snowflake.x = Math.floor(Math.random() * maxWidth)
//     }
//   });
// }
// function renderSnowflakes(snowFlakes: TypeSnowflakeState[]) {
//   snowFlakes.forEach(snowflake => {
//     snowflake.element.style.left = `${snowflake.x}px`
//     snowflake.element.style.top = `${snowflake.y}px`
//   });
// }
// function startSnowFall(count: number) {
//   const snowfallEl = createSnowfallContainer('snowfall-container')
//   container7?.append(snowfallEl.snowfallContainer)
//   const snowflakesArray = initSnowflakes(
//     count,
//     snowfallEl.maxWidth,
//     snowfallEl.maxHeight,
//     snowfallEl.snowfallContainer
//   )
//   setInterval(() => {
//     updateSnowflakes(snowflakesArray, snowfallEl.maxHeight, snowfallEl.maxWidth)
//     renderSnowflakes(snowflakesArray)
//   }, 3000);
// }
// startSnowFall(10)
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
//===========
// task 1
//===========
// card.addEventListener('mouseenter', () => {
//   card.classList.add('active')
// });
// card.addEventListener('mouseleave', () => {
//   card.classList.remove('active')
// });
//===========
// task 2
//===========
// card.addEventListener('mousemove', (e) => {
//   console.log(e.clientX);
//   console.log(e.clientY);
// });
//===========
// task 3
//===========
// const circle = generateElement('circle')
// container?.append(circle)
// circle.addEventListener('mousemove', (e) => {
//   circle.style.left = `${e.clientX - 15}px`
//   circle.style.top = `${e.clientY - 15}px`
// });
//===========
// task 4
//===========
// const btn = document.querySelectorAll(`.delete-btn`)
// btn.forEach(item => {
//   item.addEventListener('click', (e) => {
//     const card = (e.target as HTMLElement).closest('.card')
//     if (!card) return
//     card.remove()
//     console.log('Card deleted');
//   });
// });
//===========
// task 5
//===========
// const cardsBox = document.querySelector(`.cards`)
// cardsBox?.addEventListener('click', (e) => {
//   const btn = (e.target as HTMLElement).closest('.delete-btn')
//   if (!btn) return
//   const card = btn.closest(`.card`)
//   if (card) {
//     card.remove()
//   }
// });
//===========
// task 6
//===========
// const wrapCards = document.querySelector(`.cards`) as HTMLElement
// if (wrapCards) {
//   wrapCards.style.display = 'flex'
//   wrapCards.style.gap = '20px'
//   wrapCards.style.marginTop = '20px'
//   wrapCards.style.textAlign = 'center'
// }
// wrapCards?.addEventListener('click', (e) => {
//   const card = (e.target as HTMLElement).closest('.card')
//   if (!card) return
//   const cards = document.querySelectorAll(`.card`)
//   cards.forEach(item => {
//     item.classList.remove('active')
//   });
//   card.classList.add('active')
// });
