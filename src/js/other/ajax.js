

// const url = "http://192.168.0.106:3030/js/BD/bd.json";
// let xhttp = new XMLHttpRequest();
// xhttp.open("get", url);
// xhttp.setRequestHeader("Content-type", "aplication/json; charset=utf-8");
// xhttp.onload = () => {
//     let res = JSON.parse(xhttp.response)
//     console.log(res)
// };
// xhttp.send();



//---------------- еще один пример с this и замыканием -------------------------------------------------

// const url = 'https://jsonplaceholder.typicode.com/users';
// //
// loadDoc(url, myFunction1);
// loadDoc(url, myFunction2);
//
// function loadDoc(url, someFunction) {
//     var xhttp;
//     xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             someFunction(this);
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
    // действие идет здесь
// }


////================= пример с input и db ========================

// let url = "http://localhost:3000/users";
// let form = document.getElementById("form")
//
// function myRequest() {
//
//     let formData = new FormData(form) //// => будет передавать все данные с формы
//     let obj = {}
//     formData.forEach((el, key)=>{     // => можно через форЕач
//         obj[key] = el                 //=> ключи указаны в форме || ел через  forEach уже является value ключом
//     })
//      for(let i=0; i<formData.length; i++){ // => можно через for
//         obj[i] = formData[i]
//      }

//     let user = JSON.stringify(obj)
//     let xhttp = new XMLHttpRequest();
//     xhttp.open("post", url);
//     xhttp.setRequestHeader("Content-type", "application/json; charset=utf-8");
//     xhttp.send(user); // => при POST нужно указать что мы собираемся отправить
//
//     xhttp.onload = () => {
//         let res = JSON.parse(xhttp.response)
//         console.log(res)
//     };
// }
//
// let btn = document.getElementById("btn");
// form.addEventListener("submit", (e) => {
//     e.preventDefault()
//     myRequest()
// }, {"once": true})

//// !!!!!!! ============== передача через new formData =======
//// в форме в импутах должны быть name = ""
//// имена бывают email | text | file - для передачи файлов
//     let form = document.getElementById("form")
//
//     let formData = new FormData(form) //// => будет передавать все данные с формы
//     let obj = {}
//     formData.forEach((el, key)=>{
//         obj[key] = el //=> ел через  forEach уже является value ключом
//     })
//     let user = JSON.stringify(obj)


// ============== Пример отправки POST запроса:

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




///----------------  чтение - проверка - запись в db -----------------

// const url = "https://jsonplaceholder.typicode.com/photos";
// const url2 = "https://jsonplaceholder.typicode.com/users";
// const url3 = "http://localhost:3000/users"
//
// let form = document.getElementById("form");
// async function f() {
//     let dataHost = {};
//     let formData = new FormData(form);
//     await formData.forEach((el, key) => { // => создаю объект
//         dataHost[key] = el;
//     });
//     let request = await fetch(url3)// => обращаемся к база данных на сервере
//         .then(dataReq => dataReq.json()) // => получаем данные
//         .then((dataReq) => {
//             let result = dataReq.filter(el=> el.name == dataHost.name || el.email == dataHost.email); // => находим совпадения в базе с нашим обьектом
//             (result.length == 0)? result = true : result = false;
//             return  result
//         }).then((result)=>{ // передаем результат совпадения в след then
//             if (result == false) {
//                 console.log("sorry we have alredy exist")
//             } else {   // записываем в базу dataHost
//                  fetch(url3, {
//                     method: "post",
//                     headers : {"Content-type":"application/json"},
//                     mode: "cors",
//                     body: JSON.stringify(dataHost)
//                 } )
//             }
//         })
// }
//
// let btn = document.getElementById("btn").addEventListener("click", (e) => {
//     e.preventDefault();
//     f()
// })

///==============
const url = "https://jsonplaceholder.typicode.com/photos";
const url2 = "https://jsonplaceholder.typicode.com/users";


// ---------------------- обычные get ------------------- //
// const xhttp = new XMLHttpRequest();
// xhttp.open("get", url);
// xhttp.responseType = "json"         // => можно так преобразовать вместо JSON.parse(xhttp)
// xhttp.onload = () => {              // => загружаем данные
//     if (xhttp.status >= 400){       // можно так выводить ошибку
//         console.error(xhttp.response)
//     } else {
//         console.log(xhttp.response)
//         // console.log(JSON.parse(xhttp.response)) // => можно так преобразовывать
//     }
// };
// xhttp.onerror = (err) => {
//     console.log(xhttp.response)
// };
// xhttp.send()


// ---------------------- POST ------------------- //

// let url = "http://localhost:3000/users";
// let form = document.getElementById("form")
//
// function myRequest() {
//
//     let formData = new FormData(form) //// => будет передавать все данные с формы
//     let obj = {}
//     formData.forEach((el, key) => {
//         obj[key] = el
//     });
//     getReq(url, obj) // => obj это data
// }
//
// async function getReq(urJSON, data) {
//     const res = await fetch(urJSON, {
//         method: "POST",
//         headers: {
//             "Content-type": "application/json; charset=utf-8"
//         },
//         body: JSON.stringify(data)
//     })
// }
//
// form.addEventListener("submit", (e) => {
//     e.preventDefault()
//     myRequest()
// }, {"once": true})

//// ----------  -----------  -------------  -------------



// ---------------------- через промис ------------------- //
// ----- GET -----
// function sendRequestGET(method, url) {
//     return new Promise((resolve, reject) => {
//         const xhttp = new XMLHttpRequest();
//         xhttp.open(method, url);
//         xhttp.responseType = "json";
//         xhttp.onload = () => {
//             if (xhttp.status >= 400) {
//                 reject(console.error(xhttp.response))
//             } else {
//                 resolve(xhttp.response)
//             }
//         };
//         xhttp.send()
//     })
// }
//
// sendRequestGET("get", url)
//     .then(data =>
//         console.log(data)
//     )
//     .catch(data =>
//         console.error(data)
//     )

// ----- POST -----
// let user = {
//     name: "Denys",
//     age: 34
// }
//
// function sendRequestPOST(method, url, body = null) {
//     return new Promise((resolve, reject) => {
//         const xhttpPOST = new XMLHttpRequest();
//         xhttpPOST.open(method, url);
//         xhttpPOST.responseType = "json";
//         xhttpPOST.setRequestHeader('Content-type', 'application/json')
//         xhttpPOST.onload = () => {
//             if (xhttpPOST.status >= 400) {
//                 reject(xhttpPOST.response)
//             } else {
//                 resolve(xhttpPOST.response)
//             }
//         }
//         xhttpPOST.onerror =() => {
//             reject(xhttpPOST.response)
//         }
//         xhttpPOST.send(JSON.stringify(body))
//
//     })
// }
//     sendRequestPOST("post", url, user).then((data)=>{console.log(data)});
//

// const url_1 = "https://jsonplaceholder.typicode.com/users";
// const url_2 = "https://jsonplaceholder.typicode.com/photos";
// let urlI = "https://jpegshare.net/images/da/3f/da3f6469e2bc0b634fc480f9bebd4809.jpg"
// let urlJ = "https://jpegshare.net/images/fd/62/fd6229b90295fea63a266a017fd3e3fb.jpg"
// let urlA = "https://jpegshare.net/images/da/3f/da3f6469e2bc0b634fc480f9bebd4809.jpg"

// function loadImg(url, num) {
//     return new Promise((res, rej)=>{
//         let img = new  Image();
//         img.height = 500;
//         img.width = 500;
//         img.src = url
//         document.body.append(img);
//         img.addEventListener("load", () => {
//             console.log(`----${num}---`)
//             res()
//         })
//     })
// }
//
// async function f() {
//     let xml = new XMLHttpRequest();
//     xml.open("get", url_1);
//     xml.onreadystatechange = () => {
//         (xml.status <= 400 && xml.readyState == 4) ? console.log(xml.response) : console.log(xml.onerror)
//     }
//     xml.send()
//  }
// f()

