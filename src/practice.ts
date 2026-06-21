// ========================= 1 =======================
const btn = document.querySelector(`.btn`) as HTMLButtonElement
const originalParent = btn.parentElement
console.log(originalParent);

const originalPrevSibiling = btn.previousElementSibling
console.log(originalPrevSibiling);

const placeholder = document.createComment('btn-placeholder')
btn.before(placeholder)
console.log(placeholder)

const element1 = document.querySelector(`.el1`) as HTMLDivElement
const element2 = document.querySelector(`.el2`) as HTMLDivElement

const moveBox = document.querySelector(`.move`) as HTMLDivElement

const parentEl = document.querySelector(`.box`) as HTMLDivElement

const MOBILE = 768

interface MoveElementOptions {
  target: HTMLElement;
  destination: HTMLElement;
  breakpoint?: number;
}

function initResponsiveMove({
  target,
  destination,
  breakpoint = 768
}: MoveElementOptions): void {

  const originalParent = target.parentElement;
  if (!originalParent) return;

  const handleResize = (): void => {
    if (window.innerWidth <= breakpoint) {
      if (destination.lastElementChild !== target) {
        destination.append(target);
      }
    } else {
      if (originalParent.lastElementChild !== target) {
        originalParent.append(target);
      }
    }
  };

  window.addEventListener('resize', handleResize);
  handleResize();
}

const targetElement = document.querySelector<HTMLElement>('[data-move-target]');
const destinationElement = document.querySelector<HTMLElement>('[data-mobile-destination]');
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

function changeBgColorOnElement2(): void {
  parentEl.addEventListener('click', (e) => {
    const target = e.target as HTMLElement

    const btn = target.closest('.btn')
    if (!btn) return

    element2.style.backgroundColor = 'red'

  });
}
changeBgColorOnElement2()

function addToggleOnElement1(): void {
  parentEl.addEventListener('click', (e) => {
    const target = e.target as HTMLElement

    const btn = target.closest('.btn')
    if (!btn) return

    element1.classList.toggle('active')

  });
}
addToggleOnElement1()

btn.addEventListener('click', () => {

  element1.classList.toggle('active')

});

parentEl.addEventListener('click', (e) => {
  const btn = (e.target as HTMLElement).closest('.btn')

  if (!btn) return

  element1.classList.toggle('active')

});

// ======================= 2 ==========================
const btnWrapper = document.querySelector(`.box2`) as HTMLElement
const buttons = document.querySelectorAll(`.button`) as NodeList

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    console.log('Clicked');
  });
});

btnWrapper.addEventListener('click', (e) => {
  const target = e.target as HTMLElement

  if (target.matches('.button')) {
    console.log('Click');
  }
});




//  ====================== tasks ========================
// ====== task 1 =====
const cards = document.querySelector(`.cards`) as HTMLDivElement
if (!cards) {
  console.log('There is not cards');
} else {
  getTextCard(cards);
}

function getTextCard(cards: HTMLElement): void {
  cards.addEventListener('click', (e) => {
    const card = (e.target as HTMLElement).closest('.card')
    if (!card) return

    console.log(`${card.textContent.trim()}`);

  });
}
getTextCard(cards)

// ====== task 2 =====
function addClassActive(cards: HTMLElement): void {
  const allCards = cards.querySelectorAll(`.card`)

  cards.addEventListener('click', (e) => {
    const card = (e.target as HTMLElement).closest('.card')
    if (!card) return

    allCards.forEach(item => {
      item.classList.remove('active')
    });
    card.classList.add('active')
  });
}
addClassActive(cards)
// ====== task 3 =====
function deleteCard(cards: HTMLElement): void {
  cards.addEventListener('click', (e) => {
    const deleteBtn = (e.target as HTMLElement).closest(`.delete-btn`)
    if (!deleteBtn) return

    const card = deleteBtn.closest('.card')
    if (!card) return

    console.log(card.textContent?.trim());
    card.remove()

  });
}
deleteCard(cards)

// ====== task 4 =====
const todoList = document.querySelector(`.todo-list`) as HTMLElement | null

function addClassToDo(list: HTMLElement): void {
  list.addEventListener('click', (e) => {
    const clickedEl = (e.target as HTMLElement).closest('.todo-item')
    if (!clickedEl) return

    clickedEl.classList.toggle('done')
  });
}
if (todoList) {
  addClassToDo(todoList)
}

// ====== task 5 =====
const menu = document.querySelector(`.menu`) as HTMLElement

function getItemOfMenu(menu: HTMLElement): void {
  menu.addEventListener('click', (e) => {
    const itemMenu = (e.target as HTMLElement).closest('.menu__item')
    if (!itemMenu) return

    console.log(`${itemMenu.textContent}`);
    console.log(itemMenu);

  });
}
if (menu) {
  getItemOfMenu(menu)
}


// ====== task 6 =====
const productsItems = document.querySelector(`.products`) as HTMLElement

function getDataProducts(prodList: HTMLElement): void {
  prodList.addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement).closest('.add-btn')
    if (!btn) return

    const product = btn.closest('.product') as HTMLElement | null
    if (!product) return

    const productId = product.dataset.id

    console.log(productId);

  });
}
if (productsItems) {
  getDataProducts(productsItems)
}











// =========================================================================
// ========================= Data-attribures ===============================
// =========================================================================
const page = document.querySelector(`.page`) as HTMLElement
const someBtn = document.querySelector(`.some-btn`) as HTMLButtonElement
if (someBtn) {
  const btnAction = someBtn.dataset.action

  delete someBtn.dataset.action

  someBtn.dataset.action = 'submit'
}


function getInfoDiv(): void {
  const someBox = document.querySelector(`.some-box`) as HTMLElement

  page.addEventListener('click', (e) => {
    const someBtn = (e.target as HTMLElement).closest('.some-btn')
    if (someBtn) {
      const id = someBox.dataset.id
      console.log(id);

      const dataName = someBox.dataset.userName
      console.log(dataName);
    }
  });
}
getInfoDiv()



const someCards = document.querySelectorAll(`.card`)
if (someCards) {
  someCards.forEach(card => {
    const category = (card as HTMLElement).dataset.category
    console.log(category);
  });
}

const bodyEl = document.body
const wrapButtons = document.querySelector(`.wrap-buttons`) as HTMLElement
if (wrapButtons) {
  wrapButtons.addEventListener('click', (e: MouseEvent) => {
    const target = e.target as HTMLElement
    const btn = target.closest<HTMLButtonElement>('button')
    if (!btn) return

    const color = btn.dataset.color
    if (!color) return

    bodyEl.style.backgroundColor = color
  });
}



// =========== filter ===========
const filterContainer = document.querySelector(`.wrap-filter`) as HTMLElement

function onClick(element: HTMLElement): void {
  element.addEventListener('click', (e) => {
    const target = e.target as HTMLElement

    const btn = target.closest<HTMLButtonElement>('button')
    if (!btn) return

    const category = btn.dataset.category
    if (!category) return

    const cards = document.querySelectorAll<HTMLElement>(`.card-f`)
    cards.forEach(item => {
      const cardCategory = item.dataset.category

      // if (category === 'all') {
      //   item.style.display = 'block'
      // } else if (cardCategory === category) {
      //   item.style.display = 'block'
      // } else {
      //   item.style.display = 'none'
      // }

      const showList = category === 'all' || cardCategory === category

      item.style.display = showList ? 'block' : 'none'
    });
  });
}
onClick(filterContainer)



// ========================= dropdown ==========================
const dropdown = document.querySelector(`.dropdown`) as HTMLDivElement
const dropdownBtn = document.querySelector(`.dropdown__trigger`) as HTMLButtonElement


document.addEventListener('click', (e: MouseEvent) => {
  const target = e.target as HTMLElement;

  const openedContents = document.querySelectorAll(`[data-dropdown-content].active`)

  const btn = target.closest<HTMLButtonElement>('[data-dropdown-trigger]');
  if (!btn) {
    const isInsideContent = target.closest<HTMLElement>('[data-dropdown-content]')
    if (!isInsideContent) {
      openedContents.forEach((openContent) => {
        openContent.classList.remove('active')
      })
    }
    return
  }

  const dropdown = btn.closest<HTMLElement>('[data-dropdown]');
  if (!dropdown) return;

  const content = dropdown.querySelector<HTMLElement>('[data-dropdown-content]');
  if (!content) return

  openedContents.forEach((openContent) => {
    if (openContent !== content) {
      openContent.classList.remove('active')
    }
  })

  content?.classList.toggle('active');
});

document.addEventListener('keydown', (e: KeyboardEvent) => {
  if (e.key !== 'Escape') return;

  document
    .querySelectorAll<HTMLElement>('[data-dropdown-content].active')
    .forEach((content) => {
      content.classList.remove('active');
    });
});


// document.addEventListener('click', (e: MouseEvent) => {
//   const target = e.target as HTMLElement;

//   const btn = target.closest<HTMLButtonElement>('[data-dropdown-trigger]');

//   if (!btn) {
//     const isInsideContent = target.closest('[data-dropdown-content]');
//     if (!isInsideContent) {
//       document.querySelectorAll('[data-dropdown-content].active').forEach((openContent) => {
//         openContent.classList.remove('active');
//       });
//     }
//     return;
//   }

//   const dropdown = btn.closest<HTMLElement>('[data-dropdown]');
//   if (!dropdown) return;

//   const content = dropdown.querySelector<HTMLElement>('[data-dropdown-content]');
//   if (!content) return;

//   document.querySelectorAll('[data-dropdown-content].active').forEach((openContent) => {
//     if (openContent !== content) {
//       openContent.classList.remove('active');
//     }
//   });

//   content.classList.toggle('active');
// });



// =============================================================================
// ================================ popup ======================================
// =============================================================================
type PopupName = string;

class Popup {
  private activePopup: HTMLElement | null = null;

  constructor() {
    this.init();
  }

  private init(): void {
    document.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;

      const openBtn = target.closest("[data-popup-open]") as HTMLElement | null;
      const closeBtn = target.closest("[data-popup-close]") as HTMLElement | null;

      if (openBtn) {
        const name = openBtn.dataset.popupOpen as PopupName;
        this.open(name);
      }

      if (closeBtn) {
        this.close();
      }

    });
    document.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        this.close();
      }
    });
  }

  private open(name: PopupName): void {
    const popup = document.querySelector<HTMLElement>(`[data-popup="${name}"]`);
    if (!popup) return;

    this.activePopup = popup;

    popup.classList.add("is-open");
    popup.setAttribute("aria-hidden", "false");
    document.body.classList.add("lock");
  }

  private close(): void {
    if (!this.activePopup) return;

    this.activePopup.classList.remove("is-open");
    this.activePopup.setAttribute("aria-hidden", "true");

    document.body.classList.remove("lock");
    this.activePopup = null;
  }
}

new Popup();