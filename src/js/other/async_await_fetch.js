//
// const url = 'https://jsonplaceholder.typicode.com/users';
// const delay = function (ms) {
//     return new Promise((resolve => {
//         setTimeout(() => {
//             console.log("-------" + ms + "-------")
//             resolve()
//         }, ms)
//     }))
// };
// async function asyncTodo() {

//     //// try {                //// => try обертка для асинхонных функций
//     ////                              где надо найти ошибку
//     //// } catch (err) { }            перехватываем ошибку
//
//     console.log("started ...");
//     try {
//         await delay(1000);
//         await delay(500);
//         let response = await fetch(url); //// => Запихиваем в переменные данные с сервера
//         let data = await response.json() //// => конверимруем с json
//         await console.log(data)
//     } catch (err) {
//         console.error(err)
//     } finally {
//         console.log("-- finally --")
//     }
// }
// asyncTodo(2000).then(()=>{console.log("-- comleted --")});
// /// => ^  then выполнит функцию после полного вполнения всех



//// ================ await после загрузки картинок==================== ////
///
// let urlI = "https://jpegshare.net/images/da/3f/da3f6469e2bc0b634fc480f9bebd4809.jpg"
// let urlJ = "https://jpegshare.net/images/fd/62/fd6229b90295fea63a266a017fd3e3fb.jpg"
// let urlA = "https://jpegshare.net/images/da/3f/da3f6469e2bc0b634fc480f9bebd4809.jpg"
//
// function loadImg(url, num) {
//     return new Promise((response, reject)=>{
//         let img = new  Image();
//         img.height = 500;
//         img.width = 500;
//         img.src = url
//         document.body.append(img);
//         img.addEventListener("load", () => {
//             console.log(`----${num}---`)
//             response()
//         })
// img.addEventListener("error", () => {
//             console.log(`--rejected--${num}--rejected--`)
//             reject()
//         })
//     })
// }
// async function fun() {
//     await loadImg(urlI, 1);
//     await new Promise((res, rej)=>{
//         setTimeout(()=>{
//             console.log("---- time out ----")
//             res()
//         }, 1500)
//     })
//     await loadImg(urlJ, 2);
//     await loadImg(urlA, 3);
//
// }
// fun().then(()=> console.log("=== compl ==="))

// // .ALL
// Promise.all([fun()]).then(()=>{
//     console.log("+++++ END +++++")
// })



//// ======================== await with fetch ==========================

// async function f() {
//     try {
//         await fetch(url).then(data => data.json()).then(data=>console.log(data)).then(()=> console.log("==============="));
//         await fetch(url2).then(data => data.json()).then(data => console.log(data))
//     }
//     catch (e) {
//         console.error(e)
//     }
//  }
// f().then(()=>{console.log("--- completed ---")})

//// ======================== fetch options post ==========================
//// 1)
// let urJSON = "https://jsonplaceholder.typicode.com/posts";
// // fetch(urJSON)
// // .then(data => data.json())
// // .then((data) => {return console.log(data)})

//// 2)
// let url = "http://localhost:3000/users";
// let form = document.getElementById("form")
//
// function myRequest() {
//
//     let formData = new FormData(form) //// => будет передавать все данные с формы
//     let obj = {}
//     formData.forEach((el, key) => { // el => это значение из формы
//         obj[key] = el               // ключи записаны в name в формме
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

