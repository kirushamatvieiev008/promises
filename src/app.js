// // const promise1 = new Promise((res, rej) => {

// // // })
// // const makeOrder = (dish, onSuccess, onError) => {
// //   const passed = Math.random() > 0.5;

// //   setTimeout(() => {
// //     if (passed) {
// //       // якщо пройшло — викликаємо onSuccess
// //     //   if (typeof onSuccess === 'function') {
// //         onSuccess(`Ось ваше блюдо: ${dish}`);
// //     //   }
// //     } else {
// //       // якщо не пройшло — викликаємо onError
// //     //   if (typeof onError === 'function') {
// //         onError("Продукти скінчились");
// //     //   }
// //     }
// //   }, 1000);
// // };

// // makeOrder("borsch", (text) => console.log(text), (text) => console.log(text));

// const order = (dish) => {
//     return new Promise((res, rej) => {
//         const passed = Math.random() > 0.5;
//         setTimeout(() => {
//             if (passed) {
//                 res('here is your dish');
//             } else {
//                 rej('no components for this dish :(')
//             }
//         }, 2000)
//     });
// }

// // console.log(fetch('https://jsonplaceholder.typicode.com/todos/1'));


// order('borsch').then((text) => console.log(text)).catch((err) => console.log(err));

// const getValues = () => {
//     return fetch('https://jsonplaceholder.typicode.com/todos/1').then((res) => res.json());
// }

// getValues().then(res => console.log(res))


// const delay = ms => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             if (ms) {
//                 res(ms);

//             } else {
//                 rej(`qwertyuio`);
//             }
//         }, ms);
//     })
// };

// const logger = time => console.log(`Resolved after ${time}ms`);

// // Виклич функції для перевірки
// console.log(delay(1000));

// delay(2000).then(logger); // Resolved after 2000ms
// delay(1000).then(logger); // Resolved after 1000ms
// delay().then(logger).catch(err => console.log(err)); // Resolved after 1500ms

// // delay(2000).then(() => {}).catch(() => ()).finally(() => {})





const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
];

let isTrueMango = users[0].active;
let isTruePoly = users[1].active;
let isTrueAjax = users[2].active;
let isTrueLux = users[3].active;

let is = true;
const toggleUserState = (allUsers, userName) => {
    return new Promise(res => {
        const updatedUsers = allUsers.map(user => {
            // user.name === userName ? { ...user, active: !user.active } : user
            if (user.name === userName) {
                if (is === user.active) {
                    is = false;
                    return { ...user, active: false }
                } else {
                    is = true;
                    return { ...user, active: true }
                }
            } else {
                return user
            }

        }
        );
        res(updatedUsers);
    })
};

const logger = updatedUsers => console.table(updatedUsers);

/*
 * Зараз працює так
 */
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Mango').then(logger);
// toggleUserState(users, 'Mango', logger);
// toggleUserState(users, 'Mango', logger);

// toggleUserState(users, 'Lux', logger);

/*
 * Повинно працювати так
 */
// toggleUserState(users, 'Mango').then(logger);
// toggleUserState(users, 'Lux').then(logger);