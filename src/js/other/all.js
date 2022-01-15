// LocalStorage

// setItem(key, value) – сохранить пару ключ/значение.
// getItem(key) – получить данные по ключу key.
// removeItem(key) – удалить данные с ключом key.
// clear() – удалить всё.
// key(index) – получить ключ на заданной позиции.
// length – количество элементов в хранилище.

// const a = [1, 3, 5, 6, 7, 8];
// localStorage.setItem('key', JSON.stringify(a));  // => преобразуем в строку json
// let b = localStorage.getItem('key');        // => получили обычную строку json
// let c = JSON.parse(b)                            // => преобразовали строку json обратно в массив
//
// console.log(b);
// console.log(c);


// POST GET AJAX

// let xhttp = new XMLHttpRequest(); // => создаем обьект для запросов
// onreadystatechange => определяет функцию, которая будет выполняться, когда запрос получит ответ.
// readyState	Содержит статус XMLHttpRequest.
//              0: запрос не инициализирован
//              1: установленное соединение сервера
//              2: запрос получен
//              3: обработка запроса
//              4: запрос готов и ответ готов

// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         let ajax = document.getElementById('ajax').innerHTML = xhttp.status
//     }
// };
// xhttp.open("GET", "https://1985makarovdenis1985.github.io/New_CV_public/dist/index.html", true);
// xhttp.send();

// http://192.168.0.105:3030/?one=jhkhj&two=bmbn

// POST
// let xhttp2 = new XMLHttpRequest;
// xhttp2.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200){
//         myFunction(this.status)
//     }
// };
// xhttp2.open("POST", "http://getpost.itgid.info/", true);
// xhttp2.setRequestHeader("Content-type", "aplication/x-www-form-urlencoded"); //=> for POST
// xhttp2.send("http://getpost.itgid.info/") // => for Post
//
// function myFunction(data) {
//     console.log(data)
// }

//// FETCH
// fetch("https://1985makarovdenis1985.github.io/New_CV_public/dist/index.html")
//     .then(data => {
//         // console.log(data);
//         return data
//     })
//     .then(data =>{
//         console.log(data)
//     });


// Пример отправки POST запроса:
// async function postData(url = '', data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//         method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         mode: 'cors', // no-cors, *cors, same-origin
//         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: 'same-origin', // include, *same-origin, omit
//         headers: {
//             'Content-Type': 'application/json'
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         redirect: 'follow', // manual, *follow, error
//         referrerPolicy: 'no-referrer', // no-referrer, *client
//         body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
//     return await response.json(); // parses JSON response into native JavaScript objects
// }
// //
// postData('https://example.com/answer', { answer: 42 })
//     .then((data) => {
//         console.log(data); // JSON data parsed by `response.json()` call
//     });


/////// ====================================== PROMISES
// let a = 7;
// console.log(a);
//
// let b = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(a += 8);
//     },2000)
// })
// b.then(function () {
//     console.log(a)
// })

// let a = 1;
// let prom = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve(a = 99)
//     }, 1500)
// })
//     .then(function (data) {
//         console.log(a)
//         console.log(data)
//     })


// function trening(count) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve()
//         },count + 1000)
//     })
// }
// console.log("начать отжимания");
// trening(10)
//     .then(()=>{
//     console.log("Закончил")
// })
//     .then(()=>{
//     console.log("начал приседать")
//
// })


///// ========================================= ...SPREAD, ...REST
// let c = [0];
// let y = [1,2];
// let d = [3,4];
// let x = [1, 2, 3, [4, 5, 6], 7, [5,7], [8,9]];

// let log = function(a,b, c, ...rest){
//     console.log(a,b,rest)
// }
// log("asd", "ad",  d,x,)

// for(let i=0; i<x.length; i++){
//     if (x[i].length >1){
//         // c = [...c, ...x[i]]
//         c = c.concat(x[i])
//     }
// }

// x.map((el)=>{
//     el.length > 1 ? c = c.concat(el): c = c
// })

// x.map(el => el.length>1? c=c.concat(el):c=c);

// x.filter((el) => {
//     if (el.length > 1){
//         c = c.concat(el)
//     }
//     return c
// });

// console.log(c)


//// ======================== New Lesson !!!!!!!!!!!

// const requestURL = "https://jsonplaceholder.typicode.com/users";

// function sendRequst(method, url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(method, url);
//         xhr.responseType = 'json';
//
//         xhr.onload = () => {
//             if (xhr.status >= 400) {
//                 reject(xhr.response)
//             } else {
//                 resolve(xhr.response)
//             }
//         };
//         xhr.onerror = () => {
//             reject(xhr.response)
//         };
//         xhr.send();
//     })
// }
//
// sendRequst("GET", requestURL)
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log(err)
//     });

// const requestURL = "https://jsonplaceholder.typicode.com/users";
// fetch(requestURL)
//     .then(response => {
//         return response.json()
//     })
//     .then(data => console.log(data));


///// => ================   options  =================== //////
// fetch(requestURL, {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//         'Content-Type': 'application/json'
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *client
//     body: JSON.stringify("https://jsonplaceholder.typicode.com/users") // body data type must match "Content-Type" header
// });


//  => можно так
// console.log(   Math.floor(Math.random()*10)   )  //=> генератор числа

// // => так правильней
// function anyNumber(min, max) {
//    console.log(Math.floor(Math.random() * (max - min) + min))
// }
// anyNumber(0,10)


// let a = [2,3,4,5,6]
// a = a.reduce(function (sum, current) {
//     return sum + current
// })
// let a ="3";
// let b = 4;
// let c = a/b
// console.log(c)
// console.log(typeof null)

// let a = [
//     [1, 4, 8, 9],
//     [6, 2, 11, 1],
//     [8, 0, 3, -5],
//     [-2, 10, 8, -1]
// ];
// for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);
//     for (let j = 0; j < i; j++) {
//         console.log(a[i][j])
//     }
// }
// console.log(a)

// let a = [-2,10,8,-1];
// for(let i=a.length-1; i>=0; i--){
//     a.push(a[i])
// }
// a.splice(0,4)
// console.log(a)

// const o = {s:"hello"};
// const G = obj => {
//     obj.s = "Uraaaaa"
// };
// G(o)
//
// console.log(o.s)

// let x = [111,3,2,11,4,6,5,7,8,5,9,8];
// let c = 0;
// let max =0;
//
// for(let i=0; i<x.length; i++){
//     (x[i]>max) ? max = x[i] : max =max
// }
// console.log(max)
// console.log(Math.max(...x))
// // console.log(Math.max.apply(null, x)

// for (let i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i)
//     }, 0)
// }
// let temp;
// let arr2 =[];
// let str = ["sdf", "ada", "kkj", "lkl"];
// for(let i=0; i<str.length; i++){
//
//     temp = str[i].split("").reverse().join("");
//     // if (temp == str[i]){
//     //     console.log(str[i])
//     //     arr2.push(str[i])
//     // }
//     (str[i] == temp) ? arr2.push(str[i]) : arr2 = arr2
//     // console.log(str[i])
//     // console.log(temp)
// }
// console.log(arr2)

// ============== ФИБОНАЧИ РЕКУРСИЯ =====================
// function fib(num) {
//     if (num <=1) {
//         return num;
//     } else {
//         return fib(num - 1) + fib(num - 2)
//     }
// }
// console.log(fib(6));
//-------------------------------------
// function fib2(n) {
//     var a = 0, b = 1;  // если с 0 то а=0 и i=2 || если с 1 то а=1 и i=3
//     for (var i = 2; i <= n; i++) { // начинаем с i=2 так как 0 и 1 считать уже не надо
//         var c = a + b;
//         a = b;
//         b = c;
//         console.log(a,b)
//     }
//     return b;
// }
// console.log(fib2(6));
// 1+1 1+2 2+3 3+5
// -------------------------------------
// const fib3 = n => {
//     let a = 0, b = 1;
//     for(let i = 0; i < n; i++){
//         b = a + b;
//         a = b - a;
//     }
//     return a;
// }
// console.log(fib3(6))

/// =-----------------------
// let x = 5;
// console.log((x + 5).toString())
// console.log(String(true))

//// ---------- совпадения обьектов в массиве
// var a = [{"id":1, "item": 213}];
// var b = [{"id":1, "item":  213}, {"id":78, "item":  21}, {"id":19, "item":  13}];
//
// var result = a.filter(function(v) {
//     return b.some(function(v2) {
//         return v.id == v2.id && v.item == v2.item;
//     })
// });
// console.log(result);


// ---------- деструктуризация ----------------

// const obj = {
//     name: 'Joe',
//     food: 'cake'
// }
//
// const { name: myName, food: myFood } = obj;
// console.log(myName, myFood);


// --------------- слова полиндром --------------------

// let pol = ["adda", "uhy", "Gttg", "kjkl"]
// let newArr = [];
//
// pol.map((el) => {
//     return ((el = el.toLocaleLowerCase()) == el.split("").reverse().join("")) ? newArr.push(el) : console.log("sory")
// })
// console.log(newArr)

//----------------- FizzBuzz кратность чисел ---------------
// function f() {
//     for(let i=0; i<10; i++){
//         if (i%3 == 0) {
//             console.log("fizz")
//         }else if (i%5 == 0) {
//             console.log("buzz")
//         }else if (i%5 == 0 && i%3 == 0) {
//             console.log(fizzBuzz)
//         }
//         else {
//             console.log(i)
//         }
//     }
// }

//// ------------------ найити гласные буквы в строке -------------
// function f(str, arr) {
//     let count = 0;
//     let words = arr;
//     for (let i = 0; i < str.length; i++) {
//         if (words.indexOf(str[i]) != -1){
//             console.log(i)
//             count +=1
//         }
//     }
//     console.log(`amount: ${count}`)
// }
// f("Helle Emilly", ['e', 'i']);