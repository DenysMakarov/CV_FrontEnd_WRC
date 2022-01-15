///// рекурсия - вызов функции самой себя

///// --------------- пример 1 -------------- ///

// let a = 0;
// function rec() {
//     a++;
//     console.log(a)
//     if (a>3) return a;
//     rec()
// }
//
// rec()


//// замыкания
///// --------------- пример 2 -------------- ///
// function t1() {
//     let a = 0;
//     return function open() {
//         a = a + 1;
//         return a
//     };
//     open();
//     open();
//     console.log(a)
// }
//
// let b = t1(); // => создаем свой блок видимости для в
// let c = t1(); // => создаем свой блок видимости для с
// console.log(b()); // =>
// console.log(b()); // =>
// console.log(b()); // =>
// console.log(c());

///// --------------- пример 3 -------------- ///
// function a() {
//     let x = 1;
//     return () => {
//         x+=5;
//         console.log(x);
//         return () => {
//             x+=10;
//             console.log(x)
//         }
//     }
// }
// let x = a()(); //// => вызываем подфункцию  // 6
// x(); // 16
// x(); // 26

///// --------------- пример 4 -------------- ///
// // function address(domain) {
// //     return function (url) {
// //         return console.log(`https://${url}.${domain}`)
// //     }
// // }
// // let direct = address("com");
// // direct("google"); // https://www.google.com/
// // direct("netflix") //https://www.netflix.com/ua/


// // -------------  еще один пример с this и замыканием

// const url = 'https://jsonplaceholder.typicode.com/users';
//
// loadDoc(url, myFunction1);
// loadDoc(url, myFunction2);
//
// function loadDoc(url, cFunction) {
//     var xhttp;
//     xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             cFunction(this);
//         }
//     };
//     xhttp.open("GET", url, true);
//     xhttp.send();
// }
//
// function myFunction1(xhttp) {
//     console.log(xhttp.response)
// }
// function myFunction2(xhttp) {
//     // действие идет здесь
// }
