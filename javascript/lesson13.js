"use strict";
// ========================================================================================
// Задача 2.  Дано масив імен спортсменів. Розробити програму для виведення усіх 
// можливих результатів змагань (списки імен у відповідності до місць, які вони займуть).
// ========================================================================================
// const athletesCompetition: string[] = ["Олександр", "Марія", "Дмитро", "Анна"];
// function getAthletesListCompetition(list: string[]): string[][] {
//   if (list.length === 1)
//     return [list]
//   const allResult: string[][] = []
//   for (let i = 0; i < list.length; i++) {
//     const currentAthlete = list[i]
//     const leftAthletes = list.filter((_, index) => index !== i)
//     const subResults = getAthletesListCompetition(leftAthletes)
//     for (const combination of subResults) {
//       const newVariation = [currentAthlete, ...combination]
//       allResult.push(newVariation)
//     }
//   }
//   return allResult
// }
// const athletesList = getAthletesListCompetition(athletesCompetition)
// console.log(athletesList);
// ========================================================================================
// Задача 8. При старті питаємо у користувача чи хоче він читати новини. Якщо так, то одразу 
// переходимо до сайту Ukr.Net, якщо ні, то через 20 секунд самі переходимо на сайт ukr.net. 
// Для цього через 20 секунд після відкриття треба виконати команду
// ========================================================================================
function visitWebsite() {
    const isUserAgreed = confirm('Would you like to visit a web-site?');
    if (isUserAgreed) {
        window.location.href = 'https://www.ukr.net/';
    }
    else {
        setTimeout(() => {
            window.location.href = 'https://www.ukr.net/';
        }, 20000);
    }
}
// visitWebsite()
function countDown(num) {
    if (num === 0) {
        console.log('Finished');
        return;
    }
    console.log(num);
    countDown(num - 1);
}
countDown(5);
function printNumber(num) {
    if (num === 0) {
        return;
    }
    console.log(num);
    printNumber(num - 1);
}
printNumber(5);
function repeatWord(word, count) {
    if (count === 0)
        return;
    console.log(word);
    repeatWord(word, count - 1);
}
repeatWord('JS', 5);
function sum(n) {
    if (n === 0) {
        return console.log('Finish');
    }
    console.log(n);
    return n + sum(n - 1);
}
sum(4);
// const arr = [1, 2, [3, 4], [5, [6]]];
// ================================
// const company = [
//   {
//     name: "Олександр (CEO)",
//     subordinates: [
//       {
//         name: "Марія (CTO)",
//         subordinates: [
//           { name: "Денис (Dev)", subordinates: [] },
//           { name: "Анна (Dev)", subordinates: [] }
//         ]
//       },
//       {
//         name: "Ігор (COO)",
//         subordinates: [
//           { name: "Олена (HR)", subordinates: [] }
//         ]
//       },
//     ]
//   },
//   {
//     name: "Alex",
//     subordinates: [
//       {
//         name: "John",
//         subordinates: [
//           { name: "Mike", subordinates: [] },
//           { name: "Sara", subordinates: [] }
//         ]
//       },
//       {
//         name: "Emma",
//         subordinates: []
//       }
//     ]
//   },
// ];
// function getAllNames(employees): void {
//   for (const worker of employees) {
//     console.log(worker.name);
//     if (worker.subordinates && worker.subordinates.length > 0) {
//       getAllNames(worker.subordinates)
//     }
//   }
// }
// const mainResult = getAllNames(company);
// ================================
// const box = {
//   content: {
//     content: {
//       content: 500 // Скарб тут!
//     }
//   }
// };
// function findTreasure(obj: any) {
//   // 1. Якщо всередині число — поверни його (Базовий випадок)
//   if (typeof obj === 'number') return obj
//   // 2. Інакше — викликай findTreasure для того, що всередині (Рекурсія)
//   return findTreasure(obj)
// }
// const treasure = findTreasure(box)
// console.log(treasure);
// type MenuItem = {
//   title: string
//   link: string
//   children?: MenuItem[]
// }
// const menuItems = [
//   {
//     title: 'Головна',
//     link: '/',
//   },
//   {
//     title: 'Про нас',
//     link: '/about',
//     children: [
//       { title: 'Команда', link: '/about/team' },
//       { title: 'Історія', link: '/about/history' },
//     ],
//   },
//   {
//     title: 'Послуги',
//     link: '/services',
//     children: [
//       {
//         title: 'Розробка',
//         link: '/services/dev',
//         children: [
//           { title: 'Web', link: '/services/dev/web' },
//           { title: 'Mobile', link: '/services/dev/mobile' },
//         ],
//       },
//       { title: 'Консалтинг', link: '/services/consulting' },
//     ],
//   },
// ]
// function printMenuItems(items: MenuItem[], indent: string): void {
//   for (const item of items) {
//     document.write(`${indent} ${item.title}<br>`)
//     if (item.children)
//       printMenuItems(item.children, indent + '-----')
//   }
// }
// printMenuItems(menuItems, '')
