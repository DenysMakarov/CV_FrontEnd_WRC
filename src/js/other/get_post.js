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

