// ==========================================================================
// ======================= Події (Event Handling) ===========================
// ==========================================================================
const button = document.querySelector(`.button`) as HTMLButtonElement
if (button) {
  button.addEventListener('click', (e) => {
    const box = document.querySelector(`.box`) as HTMLDivElement
    if (box) {
      box.style.backgroundColor = 'red'
      box.dataset.id = 'box'
    }
  });
}



document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement

  const action = target.dataset.action

  if (action === 'save') {
    console.log('Save');
  }

  if (action === 'delete') {
    console.log('Delete');
  }
});