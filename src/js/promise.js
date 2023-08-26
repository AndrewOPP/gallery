// setTimeout(() => console.log(1), 0);

// console.log(2);

// new Promise((res) => {
//   console.log(3);
//   res();
// }).then(() => console.log(4));

// console.log(5);

// Перероби функцію на проміс таким чином, щоб проміс повертав значення
// через 2 секунди після виклику функції

// function greet() {
//   return "hello world";
// }

// new Promise((resolve) => {
//   setTimeout(() => resolve("Hello World"), 2000);
// }).then((result) => console.log(result));

// - Використовуй prompt та повертай значення звідти.
// - Створи функцію, яка буде набувати значення з prompt і всередині якої буде проміс.
// Якщо значення не є числом, відхиляй проміс та логіруй "error".
// Якщо значення парне, вирішуй проміс та повертай "even" через 1 секунду.
// Якщо значення не парне, вирішуй проміс та повертай "odd" через 2 секунди.

// const answer = Number(prompt("Enter something"))

// function answerFunc(answer) {
//    return new Promise((resolve, reject) => {
//         if (Number.isNaN(answer)) reject("Error")

//         if (answer % 2 === 0) setTimeout(() => resolve("even"), 1000)
//         if(answer % 2 !== 0) setTimeout(() => resolve("odd"), 2000)

//     })

// }

// answerFunc(answer)
//     .then((response) => console.log(response))
//     .catch((error) => console.log(error))
