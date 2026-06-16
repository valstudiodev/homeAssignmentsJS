// =====================================================================================================
// Задача 1. Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази).
// =====================================================================================================
document.write(`<h2>Задача 1</h2>`);
const strings: string[] = [
  "hello",
  "user123",
  "test",
  "a1b2c3",
  "frontend",
  "2026 is here",
  "no digits here"
];

function regexIncludeNumber(arr: string[]): string[] {
  const regex: RegExp = /\d/
  const result: string[] = []

  for (const str of arr) {
    if (regex.test(str)) {
      result.push(str)
    }
  }
  return result
}
const strWithNums = regexIncludeNumber(strings)
document.write(`${strWithNums}`);

// =====================================================================================================
// Задача 2. Дано масив рядків. Вивести ті, у яких немає цифр.
// =====================================================================================================
document.write(`<h2>Задача 2</h2>`);
function regexStrWitthoutNumbers(arr: string[]): string[] {
  const regex: RegExp = /\d/
  const result: string[] = arr.filter(str => !regex.test(str))

  return result
}
const strWithoutNumbers = regexStrWitthoutNumbers(strings)
document.write(`${strWithoutNumbers}`);

// =====================================================================================================
// Задача 3. Дано масив рядків. Вивести ті, у яких є голосні літери.
// =====================================================================================================
document.write(`<h2>Задача 3</h2>`);
const strings2: string[] = [
  'sky',
  'APPLE',
  'rhythm',
  'developer',
  'css',
  'javascript',
  'gym'
];

function getVowelsWords(arr: string[]): string[] {
  const regex = /[aeiou]/i

  return arr.filter(str => regex.test(str))
}
document.write(`${getVowelsWords(strings2)}`);


// =====================================================================================================
// Задача 4. Дано масив рядків. Вивести ті, у яких немає голосних літер.
// =====================================================================================================
document.write(`<h2>Задача 4</h2>`);
function getWordsWithoutVowels(arr: string[]): string[] {
  const regex = /[aeiou]/i

  return arr.filter(str => !regex.test(str))
}
document.write(`${getWordsWithoutVowels(strings2)}`);



// =====================================================================================================
// Задача 5. Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.
// =====================================================================================================
document.write(`<h2>Задача 5</h2>`);
const strings3: string[] = [
  'hello',
  '123',
  '555',
  'frontend1',
  'test',
  '333',
  'abc7',
  'user13'
];

function getStringsIncludes1or3(arr: string[]): string[] {
  const regex = /[13]/

  return arr.filter(str => regex.test(str))
}
document.write(`${getStringsIncludes1or3(strings3)}`);


// =====================================================================================================
// Задача 6. Дано рядок тексту, вивести усі числа, які є у тексті.
// =====================================================================================================
document.write(`<h2>Задача 6</h2>`);
const text1: string = 'I bought 15 apples, 7 bananas and 125 oranges in 2026'

function showAllNumbersInTheString(str: string): string[] {
  const regex: RegExp = /\d+/g

  return str.match(regex) ?? []
}
document.write(`${showAllNumbersInTheString(text1)}`);


// =====================================================================================================
// Задача 7. Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.
// =====================================================================================================
document.write(`<h2>Задача 7</h2>`);
const text2: string = "Hello, world! How are you? I am fine... really; thanks."

function getPunctuationMarks(str: string): string[] {
  const regex: RegExp = /[.,!?;:'"()\-\[\]]/g

  return str.match(regex) ?? []
}
document.write(`${getPunctuationMarks(text2).join(' _ ')}`);


// =====================================================================================================
// Задача 8. Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.
// =====================================================================================================
document.write(`<h2>Задача 8</h2>`);
function showWords(text: string): string[] {
  const regex: RegExp = /[.,!?;:'"()\-\[\]]/g

  return text
    .split(regex)
    .map(word => word.trim())
    .filter(Boolean)
}
document.write(`${showWords(text2)}`);


// =====================================================================================================
// Задача 9. Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd- день, mm- місяць, yyyy- рік).
// =====================================================================================================
document.write(`<h2>Задача 9</h2>`);
const text3: string = "My birthday is 12.05.2001";
const text4: string = "Today is 2026-06-15";
const text5: string = "No date here";

function containsDate(text: string): boolean {
  const regex: RegExp = /\d{2}\.\d{2}\.\d{4}/

  return regex.test(text)
}
document.write(`${containsDate(text3)}<br>`);
document.write(`${containsDate(text4)}<br>`);
document.write(`${containsDate(text5)}`);

// =====================================================================================================
// Задача 10. Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.
// =====================================================================================================
document.write(`<h2>Задача 10</h2>`);
const text6: string = "I have 12 apples, 7 bananas, 45 oranges and 100 grapes";
const text7: string = "No numbers here";
const text8: string = "10 20 3 456 78";

function getTwoDigitNumbers(text: string): number {
  const regex: RegExp = /\b\d{2}\b/g

  return text.match(regex)?.length ?? 0
}
document.write(`${getTwoDigitNumbers(text6)}<br>`);
document.write(`${getTwoDigitNumbers(text7)}<br>`);
document.write(`${getTwoDigitNumbers(text8)}`);




// =====================================================================================================
// Задача 11. Визначити чи може бути рядок тексту номером банківської картки (приклад: «4142-3433-2323-3434» ). 
// Знайти усі такі номери (при цьому символи “-” можуть бути, а можуть і не бути, тобто так «4142343323233434».
// =====================================================================================================
document.write(`<h2>Задача 11</h2>`);
const text9: string = ` My cards: 4142-3433-2323-3434 5555444433332222 1234-5678 999999999999999 `;

function getNumberOfBankCard(str: string): string[] {
  const regex: RegExp = /\b\d{4}-\d{4}-\d{4}-\d{4}\b|\b\d{16}\b/g

  return str.match(regex) ?? []
}

document.write(`${getNumberOfBankCard(text9)}`);


// =====================================================================================================
// Задача 12. Дано адресу сайту. Визначити, чи є він урядовим (містить домен “gov”, але не обов”язково у кінці). 
// Наприклад: “https://company.gov.ua”
// =====================================================================================================
document.write(`<h2>Задача 12</h2>`);

const url1 = 'https://company.gov.ua';
const url2 = 'https://gov.uk';
const url3 = 'https://my-gov-service.com';
const url4 = 'https://google.com';
const url5 = 'https://goverment.com'


function getDomenGov(str: string): boolean {
  const regex: RegExp = /\.gov(\.|\/|$)\b/

  return regex.test(str)

}
document.write(`${getDomenGov(url1)}<br>`);
document.write(`${getDomenGov(url2)}<br>`);
document.write(`${getDomenGov(url3)}<br>`);
document.write(`${getDomenGov(url4)}<br>`);
document.write(`${getDomenGov(url5)}<br>`);



// =====================================================================================================
// Задача 13. Вибрати усі роки між 2020 та 2049 з отриманого повідомлення
// =====================================================================================================
document.write(`<h2>Задача 13</h2>`);
const text10: string = "Events happened in 2019, 2020, 2023, 2049, 2050 and 1999 and 2035";

function getYearsBetween2020And2049(str: string): number[] {
  const years = str.match(/\d{4}/g) ?? []

  return years
    .map(Number)
    .filter(year => year >= 2020 && year <= 2049)
    .sort((a, b) => a - b)
}
document.write(`${getYearsBetween2020And2049(text10)}<br>`);


// =====================================================================================================
// Задача 14. Дано номер телефону. Перевірити, чи є цей телефон телефоном оператора Киїівстар
// =====================================================================================================
document.write(`<h2>Задача 14</h2>`);

const phone1 = '+38067 123 45 67';
const phone2 = '+380501112233';
const phone3 = '+380991234567';
const phone4 = '+380931234567';
const phone5 = '+380961234567';

function getNumberOfKyivstar(phone: string): boolean {
  const regex: RegExp = /^\+380(67|68|96|97|98)/

  return regex.test(phone)
}
document.write(`${getNumberOfKyivstar(phone1)}<br>`);
document.write(`${getNumberOfKyivstar(phone2)}<br>`);
document.write(`${getNumberOfKyivstar(phone3)}<br>`);
document.write(`${getNumberOfKyivstar(phone4)}<br>`);
document.write(`${getNumberOfKyivstar(phone5)}<br>`);


// =====================================================================================================
// Задача 15. Користувач вводить прізвище та ім’я в одному рядку через пробіл.  Замінити пробіл на дефіс.
// =====================================================================================================
document.write(`<h2>Задача 15</h2>`);

const fullName1 = "Ivan Petrenko";
const fullName2 = "John Doe";
const fullName3 = "   Anna   Smith   ";

function getFullName(name: string): string {
  return name.trim().replace(/\s+/g, '-')
}
document.write(`${getFullName(fullName1)}<br>`);
document.write(`${getFullName(fullName2)}<br>`);
document.write(`${getFullName(fullName3)}<br>`);


// =====================================================================================================
// Задача 16. Користувач вводить дату у форматі «день.місяць.рік». Отримати рядкове представлення дати у форматі «місяць/рік»
// =====================================================================================================
document.write(`<h2>Задача 16</h2>`);

const date1 = "12.5.2026";
const date2 = "01.11.2024";
const date3 = "9.3.2020";


function getDateInFormatMonthAndYear(date: string): string {
  const parts = date.split('.')

  const month = parts[1].padStart(2, '0')
  const year = parts[2]

  return `${month}/${year}`
}
document.write(`${getDateInFormatMonthAndYear(date1)}<br>`);
document.write(`${getDateInFormatMonthAndYear(date2)}<br>`);
document.write(`${getDateInFormatMonthAndYear(date3)}<br>`);

































//  task 1
// const nameUser = 'Val'

// localStorage.setItem('nameUser', JSON.stringify(nameUser))

// const dataUser = localStorage.getItem('nameUser')

// const resultUser = dataUser ? JSON.parse(dataUser) : null

// console.log(resultUser);


// // task 2
// const product = {
//   title: "iPhone",
//   price: 1200,
//   inStock: true
// };

// localStorage.setItem('product', JSON.stringify(product))

// const dataProduct = localStorage.getItem('product')

// const resultProduct: {
//   title: string;
//   price: number;
//   inStock: boolean;
// } | null = dataProduct ? JSON.parse(dataProduct) : null;

// if (resultProduct) {
//   console.log(`${resultProduct.title}: ${resultProduct.price}`);
// }



// ========================================================================
// =========================== регулярні вирази ===========================
// ========================================================================
const str = 'My School'
const patt1 = /school/i
const n = str.search(/school/i)
// console.log(n);

const resultP = str.match(patt1) ?? []
// console.log(resultP);

const text = 'I have 12 apples and 45 oranges and  30 watermelon';
// =======
// const resultT = text.match(/\d/g) ?? []
// const resultT1 = text.match(/[0-9]/g)
// =======
// const resultT = text.match(/\D/g) ?? []
// const resultT1 = text.match(/[^0-9]/g)
// =======
// const resultT = text.match(/[aeiou]/g) ?? []
// const resultT1 = text.match(/[^a-z]/gi)
// ======
// const resultT = text.match(/\s/g) ?? []
// const resultT1 = text.match(/\S/g)

// const resultT2 = text.match(/^I/gi)

// console.log(resultT);
// console.log(resultT1);
// console.log(resultT2);


// const date = 'Date: 12-05-2025, 03-10-2024'
// const resultDate = date.replace(/(\d{2})-(\d{2})-(\d{4})/g, '$3/$2/$1')
// console.log(resultDate);




// const regex = /javascript/i;

// console.log(regex.test('Javascript'));
// console.log(regex.test('typescript'));



// const regex = /\d+/

// console.log(regex.exec('Age: 34'));




// const text = 'JS TS React';
// console.log(text.match(/TS/));

// const text2 = 'I love JS'
// console.log(text2.replace(/JS/, 'TS'));

// console.log(text2.search(/JS/));

// const text3 = 'JS,TS,React'

// const textSplit = text3.split(/,/)
// textSplit.forEach(item => {
//   console.log(item.replace(/React/, 'Love'));
// });





// ================================================================
// ========================== strings =============================
// ================================================================
// const message = "Ваш промокод на знижку: SALE20";
// console.log(message.includes('SALE'));

// const text = "Стилі CSS та мова JS";
// const indexText = text.indexOf('CSS')
// console.log(indexText);

// const file = "document.pdf.old";
// console.log(file.lastIndexOf('.'));

// const url = "https://google.com";
// console.log(url.startsWith('https://'));

// const file2 = "avatar.png";
// console.log(file2.endsWith('.png'));

// const namesArray = ["Ярослав", "Андрій", "Ігор"];
// const sortArray = [...namesArray].sort((a, b) => a.localeCompare(b))

// console.log(namesArray);
// console.log(sortArray);

// const price = "100 USD";
// const uahPrice = price.replace("USD", 'UAH')
// console.log(uahPrice);

// const date = "2026-06-15";
// const cleanDate = date.replaceAll('-', '.')
// console.log(cleanDate);

// const someInput = "   user@mail.com   ";
// const cleanInput = someInput.trim()
// console.log(someInput);
// console.log(someInput.length);
// console.log(cleanInput);
// console.log(cleanInput.length);

// const text2 = "   Текст";
// console.log(text2);
// console.log(text2.trimStart());

// const text3 = "Текст   ";
// console.log(text3.trimEnd());

// const tags = "js,ts,css";
// const tagsArray = tags.split(',')
// console.log(tagsArray);

// const words = ["Слава", "Україні"];
// const sentence = words.join(' ')
// console.log(sentence);

// const title = "Довгий заголовок новини";
// const preview = title.slice(0, 6)
// console.log(preview);
// const lastFour = title.slice(-6)
// console.log(lastFour);

// const text4 = "JavaScript";
// console.log(text4.substring(4, 0));

// const star = "*";
// console.log(star.repeat(5));

// const rawMonth = "12";
// const rawDate = '20'
// const formattedMonth = rawMonth.padStart(2, '0')
// const formattedDate = rawDate.padStart(2, '0')
// const dateMonth = formattedMonth + ':' + formattedDate
// console.log(dateMonth);


// // task 1
// const taskEmail = 'tkachenko@gmail.com'
// function isValidEmail(email: string): boolean {
//   return email.includes('@')
// }
// console.log(isValidEmail(taskEmail));

// // task 2
// const taskUrl = 'https://dffteggd.ffg'
// function isSecureUrl(url: string): boolean {
//   return url.startsWith('https://')
// }
// console.log(isSecureUrl(taskUrl));

// // task 3
// const taskStr1 = ' Hello word.I love codding'

// function firstSpaceIndex(str: string): number {
//   return str.indexOf(' ')
// }
// console.log(firstSpaceIndex(taskStr1));

// // task 4
// const taskStr2 = 'Bad mood'
// function fixSentence(str: string): string {
//   return str.replace('Bad', 'Good')
// }
// console.log(fixSentence(taskStr2));


// // task 5
// const taskStr3 = '  The  word   is   so   beuatiful    '
// function removeSpaces(str: string): string {
//   return str.trim()
// }
// console.log(removeSpaces(taskStr3));

// // task 6
// const taskStr4 = '   My name is Val   '
// function normalizeInput(str: string): string {
//   return str.trim()
// }
// console.log(normalizeInput(taskStr4));

// // task 7
// const taskStr5 = 'SCC,Js,html,TS'
// function parseCSV(str: string): string[] {
//   return str.split(',')
// }
// console.log(parseCSV(taskStr5));

// // task 8
// const taskArr = ['HTML', 'SCSS', 'CSS', 'JS', 'TS']
// function joinWords(arr: string[]): string {
//   return arr.join('-')
// }
// console.log(joinWords(taskArr));

// // task 9
// const taskStr6 = 'Fix the computer'
// function getPrefix(str: string): string {
//   return str.slice(0, 3)
// }
// console.log(getPrefix(taskStr6));

// // task 10
// const taskStr7 = 'The longer sentence to get some part of word'
// function getMiddle(str: string, start: number, end: number): string {
//   return str.substring(start, end)
// }
// console.log(getMiddle(taskStr7, 4, 10));

// // task 11
// const taskStr8 = 'The longer sentence to get some part of word'
// function countVowels(str: string): number {
//   const vowels = "aeiouAEIOU";
//   let count: number = 0

//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str.charAt(i))) {
//       count++
//     }
//   }

//   return count
// }
// console.log(countVowels(taskStr8));

// // task 12
// const taskStr9 = '  This STRING for search   '
// console.log(taskStr9.length);

// function normalizeSearch(str: string): string {
//   return str.toLowerCase().trim()
// }
// console.log(normalizeSearch(taskStr9));

// // task 13
// const taskStrId = 5
// function formatId(id: number): string {
//   return String(id).padStart(3, '0')
// }
// console.log(formatId(taskStrId));

// // task 14
// function loadingStr(count: number): string {
//   return '.'.repeat(count)
// }
// console.log(loadingStr(3));

// // task 15
// const taskStr10 = 'hello-world-test'
// function formatTitle(str: string): string {
//   return str
//     .replaceAll('-', ' ')
//     .toLowerCase()
//     .split(' ')
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(' ')
// }
// console.log(formatTitle(taskStr10));

// ==================================================================
// ========================== Web storage ===========================
// ==================================================================
// function onLoad(): void {
//   let locale = localStorage.getItem('lang')

//   if (!locale) {
//     locale = 'ua'
//     localStorage.setItem('lang', locale)
//   }
//   document.getElementById('lang')!.innerText = locale
// }
// function onChangeStorage(event: string) {
//   console.log('event')
//   console.log(event)
//   document.getElementById('lang').innerText = localStorage.getItem('lang')
//   document.getElementById('localeSelector')!.value = localStorage.getItem('lang')
// }
// function onSelectorChange() {
//   const locale = document.getElementById('localeSelector').value
//   localStorage.setItem('lang', locale)
//   // потрібно для деяких браузерів
//   // window.dispatchEvent(
//   //   new StorageEvent('storage', {
//   //     key: 'lang',
//   //     newValue: locale,
//   //   })
//   // )
// }
// window.onload = function () {
//   onLoad()
//   document.getElementById('localeSelector')!.onchange = onSelectorChange
//   window.addEventListener('storage', onChangeStorage)
// }





// const btnTheme = document.querySelector(`.btn-theme`) as HTMLButtonElement
// if (btnTheme) {
//   btnTheme.style.backgroundColor = 'coral'
//   btnTheme.style.paddingBlock = '10px'
//   btnTheme.style.paddingInline = '20px'
//   btnTheme.style.borderRadius = '10px'
//   btnTheme.style.color = 'white'
//   btnTheme.style.cursor = 'pointer'
// }

// function switchTheme(button: HTMLButtonElement): void {
//   button.addEventListener('click', () => {
//     document.body.classList.toggle('active')

//     const isDark = document.body.classList.contains('active')

//     localStorage.setItem(
//       'theme',
//       isDark ? 'dark' : 'light'
//     )

//   });
// }

// const savedTheme = localStorage.getItem('theme')

// if (savedTheme === 'dark') {
//   document.body.classList.add('active')
// }
// switchTheme(btnTheme)