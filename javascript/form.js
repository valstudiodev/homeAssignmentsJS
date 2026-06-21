"use strict";
const form = document.querySelector(`.form`);
// ========= input.value ==========
const inputUsername = document.querySelector(`.username`);
const outputUsername = document.querySelector(`.output`);
inputUsername.addEventListener('input', () => {
    outputUsername.textContent = inputUsername.value;
});
// ================= textarea.value==================
const textarea = document.querySelector(`.message`);
const counter = document.querySelector(`.counter`);
textarea.addEventListener('input', () => {
    counter.textContent = `${textarea.value.length} chars`;
});
// ============== checkbox.checked ===============
const checkbox = document.querySelector(`.toggle`);
const state = document.querySelector(`.state`);
checkbox.addEventListener('change', () => {
    state.textContent = checkbox.checked ? 'ON' : 'OFF';
});
// ================ radio.value ================
const radios = document.querySelectorAll(`input[name='theme']`);
const result = document.querySelector(`.result`);
radios.forEach(radio => {
    radio.addEventListener('change', () => {
        if (radio.checked) {
            result.textContent = radio.value;
        }
        if (radio.value === 'dark') {
            document.body.style.backgroundColor = '#000';
            document.body.style.color = '#fff';
        }
        if (radio.value === 'light') {
            document.body.style.backgroundColor = 'lightgrey';
            document.body.style.color = '#000';
        }
    });
});
// ============== select.value ===============
const select = document.querySelector(`.country`);
const outputCountry = document.querySelector(`.output-country`);
select.addEventListener('change', () => {
    outputCountry.textContent = select.value;
    if (select.value === 'ua') {
        document.body.style.backgroundColor = 'blue';
    }
    if (select.value === 'ca') {
        document.body.style.backgroundColor = 'red';
    }
});
//  =============== focus ===============
const inputSearch = document.querySelector(`.search`);
inputSearch.addEventListener('focus', () => {
    inputSearch.style.border = '1px solid red';
    inputSearch.style.backgroundColor = 'lightgreyS';
});
inputSearch.addEventListener('blur', () => {
    inputSearch.style.border = '1px solid green';
    inputSearch.style.backgroundColor = 'coral';
});
inputSearch.addEventListener('input', () => {
    console.log('typing', inputSearch.value);
});
inputSearch.addEventListener('change', () => {
    console.log('final value:', inputSearch.value);
});
// =================== submit + preventDefault ================
const formEmail = document.querySelector(`.form2`);
formEmail.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submitted');
});
// ====== FormData ======
formEmail.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(formEmail);
    console.log(data.get('email'));
});
// ====== Object.fromEntries() =======
formEmail.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(formEmail);
    const obj = Object.fromEntries(data.entries());
    console.log(obj);
});
//  ============ form.reset() ===========
formEmail.addEventListener('submit', (e) => {
    e.preventDefault();
    formEmail.reset();
});
// =============================== dynamic-form ====================================
function createDynamicField(id, labelText, type = 'text', className) {
    const wrapper = document.createElement('div');
    wrapper.className = className;
    const label = document.createElement('label');
    label.className = `${className}__label`;
    label.htmlFor = id;
    label.textContent = labelText;
    const input = document.createElement('input');
    input.className = `${className}__input`;
    input.type = type;
    input.id = id;
    input.name = id;
    wrapper.append(label, input);
    return wrapper;
}
const parentContainer = document.querySelector(`.parent-container`);
if (parentContainer) {
    parentContainer.style.display = 'flex';
    parentContainer.style.flexDirection = 'column';
    parentContainer.style.alignItems = 'flex-end';
    parentContainer.style.gap = '10px';
    parentContainer.append(createDynamicField('username', 'Username', 'text', 'form-username'), createDynamicField('email', 'Email', 'email', 'form-email'), createDynamicField('password', 'Password', 'password', 'form-rassword'));
}
// ========================
