"use strict";
// ==========================================================================
// ======================= Події (Event Handling) ===========================
// ==========================================================================
const button = document.querySelector(`.button`);
if (button) {
    button.addEventListener('click', (e) => {
        const box = document.querySelector(`.box`);
        if (box) {
            box.style.backgroundColor = 'red';
            box.dataset.id = 'box';
        }
    });
}
document.addEventListener('click', (e) => {
    const target = e.target;
    const action = target.dataset.action;
    if (action === 'save') {
        console.log('Save');
    }
    if (action === 'delete') {
        console.log('Delete');
    }
});
