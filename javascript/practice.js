"use strict";
// ========================= 1 =======================
// const btn = document.querySelector(`.btn`) as HTMLButtonElement
// const originalParent = btn.parentElement
// console.log(originalParent);
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
// =========================================================================
// ========================= Data-attribures ===============================
// =========================================================================
// const page = document.querySelector(`.page`) as HTMLElement
// const someBtn = document.querySelector(`.some-btn`) as HTMLButtonElement
// if (someBtn) {
//   const btnAction = someBtn.dataset.action
//   delete someBtn.dataset.action
//   someBtn.dataset.action = 'submit'
// }
// function getInfoDiv(): void {
//   const someBox = document.querySelector(`.some-box`) as HTMLElement
//   page.addEventListener('click', (e) => {
//     const someBtn = (e.target as HTMLElement).closest('.some-btn')
//     if (someBtn) {
//       const id = someBox.dataset.id
//       console.log(id);
//       const dataName = someBox.dataset.userName
//       console.log(dataName);
//     }
//   });
// }
// getInfoDiv()
// const someCards = document.querySelectorAll(`.card`)
// if (someCards) {
//   someCards.forEach(card => {
//     const category = (card as HTMLElement).dataset.category
//     console.log(category);
//   });
// }
// const bodyEl = document.body
// const wrapButtons = document.querySelector(`.wrap-buttons`) as HTMLElement
// if (wrapButtons) {
//   wrapButtons.addEventListener('click', (e: MouseEvent) => {
//     const target = e.target as HTMLElement
//     const btn = target.closest<HTMLButtonElement>('button')
//     if (!btn) return
//     const color = btn.dataset.color
//     if (!color) return
//     bodyEl.style.backgroundColor = color
//   });
// }
// =========== filter ===========
// const filterContainer = document.querySelector(`.wrap-filter`) as HTMLElement
// function onClick(element: HTMLElement): void {
//   element.addEventListener('click', (e) => {
//     const target = e.target as HTMLElement
//     const btn = target.closest<HTMLButtonElement>('button')
//     if (!btn) return
//     const category = btn.dataset.category
//     if (!category) return
//     const cards = document.querySelectorAll<HTMLElement>(`.card-f`)
//     cards.forEach(item => {
//       const cardCategory = item.dataset.category
//       // if (category === 'all') {
//       //   item.style.display = 'block'
//       // } else if (cardCategory === category) {
//       //   item.style.display = 'block'
//       // } else {
//       //   item.style.display = 'none'
//       // }
//       const showList = category === 'all' || cardCategory === category
//       item.style.display = showList ? 'block' : 'none'
//     });
//   });
// }
// onClick(filterContainer)
// ========================= dropdown ==========================
// const dropdown = document.querySelector(`.dropdown`) as HTMLDivElement
// const dropdownBtn = document.querySelector(`.dropdown__trigger`) as HTMLButtonElement
// document.addEventListener('click', (e: MouseEvent) => {
//   const target = e.target as HTMLElement;
//   const openedContents = document.querySelectorAll(`[data-dropdown-content].active`)
//   const btn = target.closest<HTMLButtonElement>('[data-dropdown-trigger]');
//   if (!btn) {
//     const isInsideContent = target.closest<HTMLElement>('[data-dropdown-content]')
//     if (!isInsideContent) {
//       openedContents.forEach((openContent) => {
//         openContent.classList.remove('active')
//       })
//     }
//     return
//   }
//   const dropdown = btn.closest<HTMLElement>('[data-dropdown]');
//   if (!dropdown) return;
//   const content = dropdown.querySelector<HTMLElement>('[data-dropdown-content]');
//   if (!content) return
//   openedContents.forEach((openContent) => {
//     if (openContent !== content) {
//       openContent.classList.remove('active')
//     }
//   })
//   content?.classList.toggle('active');
// });
// document.addEventListener('keydown', (e: KeyboardEvent) => {
//   if (e.key !== 'Escape') return;
//   document
//     .querySelectorAll<HTMLElement>('[data-dropdown-content].active')
//     .forEach((content) => {
//       content.classList.remove('active');
//     });
// });
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
