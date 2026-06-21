"use strict";
// ========================= 1 =======================
const btn = document.querySelector(`.btn`);
const originalParent = btn.parentElement;
console.log(originalParent);
const originalPrevSibiling = btn.previousElementSibling;
console.log(originalPrevSibiling);
const placeholder = document.createComment('btn-placeholder');
btn.before(placeholder);
console.log(placeholder);
const element1 = document.querySelector(`.el1`);
const element2 = document.querySelector(`.el2`);
const moveBox = document.querySelector(`.move`);
const parentEl = document.querySelector(`.box`);
const MOBILE = 768;
function initResponsiveMove({ target, destination, breakpoint = 768 }) {
    const originalParent = target.parentElement;
    if (!originalParent)
        return;
    const handleResize = () => {
        if (window.innerWidth <= breakpoint) {
            if (destination.lastElementChild !== target) {
                destination.append(target);
            }
        }
        else {
            if (originalParent.lastElementChild !== target) {
                originalParent.append(target);
            }
        }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
}
const targetElement = document.querySelector('[data-move-target]');
const destinationElement = document.querySelector('[data-mobile-destination]');
if (targetElement && destinationElement) {
    initResponsiveMove({
        target: targetElement,
        destination: destinationElement,
        breakpoint: 768
    });
}
// function moveElement(target: HTMLElement): HTMLElement {
//   window.addEventListener('resize', () => {
//     if (!moveBox) return
//     if (window.innerWidth <= MOBILE) {
//       moveBox.append(btn)
//     } else
//       originalParent?.append(btn)
//   });
//   return target
// }
// moveElement(moveBox)
function changeBgColorOnElement2() {
    parentEl.addEventListener('click', (e) => {
        const target = e.target;
        const btn = target.closest('.btn');
        if (!btn)
            return;
        element2.style.backgroundColor = 'red';
    });
}
changeBgColorOnElement2();
function addToggleOnElement1() {
    parentEl.addEventListener('click', (e) => {
        const target = e.target;
        const btn = target.closest('.btn');
        if (!btn)
            return;
        element1.classList.toggle('active');
    });
}
addToggleOnElement1();
btn.addEventListener('click', () => {
    element1.classList.toggle('active');
});
parentEl.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn');
    if (!btn)
        return;
    element1.classList.toggle('active');
});
// ======================= 2 ==========================
const btnWrapper = document.querySelector(`.box2`);
const buttons = document.querySelectorAll(`.button`);
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('Clicked');
    });
});
btnWrapper.addEventListener('click', (e) => {
    const target = e.target;
    if (target.matches('.button')) {
        console.log('Click');
    }
});
//  ====================== tasks ========================
// ====== task 1 =====
const cards = document.querySelector(`.cards`);
if (!cards) {
    console.log('There is not cards');
}
else {
    getTextCard(cards);
}
function getTextCard(cards) {
    cards.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        if (!card)
            return;
        console.log(`${card.textContent.trim()}`);
    });
}
getTextCard(cards);
// ====== task 2 =====
function addClassActive(cards) {
    const allCards = cards.querySelectorAll(`.card`);
    cards.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        if (!card)
            return;
        allCards.forEach(item => {
            item.classList.remove('active');
        });
        card.classList.add('active');
    });
}
addClassActive(cards);
// ====== task 3 =====
function deleteCard(cards) {
    cards.addEventListener('click', (e) => {
        const deleteBtn = e.target.closest(`.delete-btn`);
        if (!deleteBtn)
            return;
        const card = deleteBtn.closest('.card');
        if (!card)
            return;
        console.log(card.textContent?.trim());
        card.remove();
    });
}
deleteCard(cards);
// ====== task 4 =====
const todoList = document.querySelector(`.todo-list`);
function addClassToDo(list) {
    list.addEventListener('click', (e) => {
        const clickedEl = e.target.closest('.todo-item');
        if (!clickedEl)
            return;
        clickedEl.classList.toggle('done');
    });
}
if (todoList) {
    addClassToDo(todoList);
}
// ====== task 5 =====
const menu = document.querySelector(`.menu`);
function getItemOfMenu(menu) {
    menu.addEventListener('click', (e) => {
        const itemMenu = e.target.closest('.menu__item');
        if (!itemMenu)
            return;
        console.log(`${itemMenu.textContent}`);
        console.log(itemMenu);
    });
}
if (menu) {
    getItemOfMenu(menu);
}
// ====== task 6 =====
const productsItems = document.querySelector(`.products`);
function getDataProducts(prodList) {
    prodList.addEventListener('click', (e) => {
        const btn = e.target.closest('.add-btn');
        if (!btn)
            return;
        const product = btn.closest('.product');
        if (!product)
            return;
        const productId = product.dataset.id;
        console.log(productId);
    });
}
if (productsItems) {
    getDataProducts(productsItems);
}
// =========================================================================
// ========================= Data-attribures ===============================
// =========================================================================
const page = document.querySelector(`.page`);
const someBtn = document.querySelector(`.some-btn`);
if (someBtn) {
    const btnAction = someBtn.dataset.action;
    delete someBtn.dataset.action;
    someBtn.dataset.action = 'submit';
}
function getInfoDiv() {
    const someBox = document.querySelector(`.some-box`);
    page.addEventListener('click', (e) => {
        const someBtn = e.target.closest('.some-btn');
        if (someBtn) {
            const id = someBox.dataset.id;
            console.log(id);
            const dataName = someBox.dataset.userName;
            console.log(dataName);
        }
    });
}
getInfoDiv();
const someCards = document.querySelectorAll(`.card`);
if (someCards) {
    someCards.forEach(card => {
        const category = card.dataset.category;
        console.log(category);
    });
}
const bodyEl = document.body;
const wrapButtons = document.querySelector(`.wrap-buttons`);
if (wrapButtons) {
    wrapButtons.addEventListener('click', (e) => {
        const target = e.target;
        const btn = target.closest('button');
        if (!btn)
            return;
        const color = btn.dataset.color;
        if (!color)
            return;
        bodyEl.style.backgroundColor = color;
    });
}
// =========== filter ===========
const filterContainer = document.querySelector(`.wrap-filter`);
function onClick(element) {
    element.addEventListener('click', (e) => {
        const target = e.target;
        const btn = target.closest('button');
        if (!btn)
            return;
        const category = btn.dataset.category;
        if (!category)
            return;
        const cards = document.querySelectorAll(`.card-f`);
        cards.forEach(item => {
            const cardCategory = item.dataset.category;
            // if (category === 'all') {
            //   item.style.display = 'block'
            // } else if (cardCategory === category) {
            //   item.style.display = 'block'
            // } else {
            //   item.style.display = 'none'
            // }
            const showList = category === 'all' || cardCategory === category;
            item.style.display = showList ? 'block' : 'none';
        });
    });
}
onClick(filterContainer);
// ========================= dropdown ==========================
const dropdown = document.querySelector(`.dropdown`);
const dropdownBtn = document.querySelector(`.dropdown__trigger`);
document.addEventListener('click', (e) => {
    const target = e.target;
    const openedContents = document.querySelectorAll(`[data-dropdown-content].active`);
    const btn = target.closest('[data-dropdown-trigger]');
    if (!btn) {
        const isInsideContent = target.closest('[data-dropdown-content]');
        if (!isInsideContent) {
            openedContents.forEach((openContent) => {
                openContent.classList.remove('active');
            });
        }
        return;
    }
    const dropdown = btn.closest('[data-dropdown]');
    if (!dropdown)
        return;
    const content = dropdown.querySelector('[data-dropdown-content]');
    if (!content)
        return;
    openedContents.forEach((openContent) => {
        if (openContent !== content) {
            openContent.classList.remove('active');
        }
    });
    content?.classList.toggle('active');
});
document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape')
        return;
    document
        .querySelectorAll('[data-dropdown-content].active')
        .forEach((content) => {
        content.classList.remove('active');
    });
});
class Popup {
    activePopup = null;
    constructor() {
        this.init();
    }
    init() {
        document.addEventListener("click", (e) => {
            const target = e.target;
            const openBtn = target.closest("[data-popup-open]");
            const closeBtn = target.closest("[data-popup-close]");
            if (openBtn) {
                const name = openBtn.dataset.popupOpen;
                this.open(name);
            }
            if (closeBtn) {
                this.close();
            }
        });
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                this.close();
            }
        });
    }
    open(name) {
        const popup = document.querySelector(`[data-popup="${name}"]`);
        if (!popup)
            return;
        this.activePopup = popup;
        popup.classList.add("is-open");
        popup.setAttribute("aria-hidden", "false");
        document.body.classList.add("lock");
    }
    close() {
        if (!this.activePopup)
            return;
        this.activePopup.classList.remove("is-open");
        this.activePopup.setAttribute("aria-hidden", "true");
        document.body.classList.remove("lock");
        this.activePopup = null;
    }
}
new Popup();
