"use strict";
// const now = new Date()
// console.log(now);
// const epoch = new Date(0)
// console.log(epoch);
// const stringDate = new Date('1991-05-06T15:00:00')
// console.log(stringDate);
// const specificDate = new Date(1991, 4, 6, 30, 0)
// console.log(specificDate);
const startTime = new Date();
function updateTimer() {
}
// ==================================================
// ================= magnetic button ================
// ==================================================
function magneticButton() {
    const myBtn = document.querySelector(`.btn`);
    if (!myBtn)
        return;
    myBtn.addEventListener('mousemove', (e) => {
        const posBtn = myBtn.getBoundingClientRect();
        const centerX = posBtn.left + posBtn.width / 2;
        const centerY = posBtn.top + posBtn.height / 2;
        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;
        const moveX = deltaX / 5;
        const moveY = deltaY / 5;
        myBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
    myBtn.addEventListener('mouseleave', () => {
        myBtn.style.transform = 'translate(0,0)';
    });
}
magneticButton();
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
    const card = document.querySelector(`.card`);
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;
    card.addEventListener('mousedown', (e) => {
        isDragging = true;
        const rect = card.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
    });
    window.addEventListener('mousemove', (e) => {
        if (!isDragging)
            return;
        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;
        card.style.position = 'absolute';
        card.style.left = `${x}px`;
        card.style.top = `${y}px`;
    });
    window.addEventListener('mouseup', () => {
        isDragging = false;
    });
}
// draggableCard()
