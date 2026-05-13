"use strict";
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
// const box = {
//   content: {
//     content: {
//       content: 500 // Скарб тут!
//     }
//   }
// };
// function findTreasure(obj: any): number {
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
