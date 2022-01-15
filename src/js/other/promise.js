// let obj = {};
// let p = new Promise((resolve, reject) => {
//     console.log("preparing ...");
//     setTimeout(() => {
//         const backEndData = {
//             server: "aws",
//             port: "3030",
//             status: "working",
//         };
//         obj = {
//             server: "Tiphon",
//             port: 9000,
//         };
//         resolve([backEndData, obj]) // => для передачи неск. ел => []
//     }, 1000)
// })
//     .then(([backEndData, obj]) => { // => для приема неск. ел => []
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log("------------------ 1");
//                 console.log(backEndData);
//                 console.log(obj);
//                 resolve([backEndData, obj]);
//             }, 1000);
//         })
//     })
//     .then(([backEndData, obj]) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 obj.port = 8000;
//                 console.log("------------------ 2");
//                 console.log(backEndData)
//                 console.log(obj)
//                 resolve(backEndData)
//             }, 500)
//         })
//     })
//     .catch((err) => {  //-------------- перехватываем ошибки
//         console.error("ошибка", err)
//     })
//     .finally(()=>{ // --------- финальные действия в итоге
//         console.log("Finaly")
//     })

//
// // ------------------------ ФУНКЦИИ ЧЕРЕЗ ПРОМИСЫ | .ALL  .RACE -----------------------
//
// const sleep = function (ms) {
//     return new Promise((res, rej) =>{
//         setTimeout(()=>{
//             res()
//         }, ms)
//     })
// };

// let p = new Promise((resolve, reject)=>{ // => новый промис
//     setTimeout(()=>{
//         console.log("--- start ---")
//         resolve()
//     },1000)
// })
//     .then(()=>{
//         return  sleep(1000) // => готовые промисы через return
//     })
//     .then(()=>{
//         return  sleep(500)
//     })
//     .then(()=>{
//         return sleep(100)
//     })

// let prom = new Promise((res, rej) => {
//     return res(timeout(1500))
// })
//     .then(() => {
//         return timeout(1000)
//     })
//     .then(() => {
//         return timeout(400)
//     })
//     .then(() => {
//         return timeout(300)
//     })

//
// sleep(2000).then(() => {console.log("еще рано")});
// sleep(3000).then(() => {console.log("пора вставать")});
//
// /*
// .all =>  then выполняется после всех выполненных промисов
//  */
// Promise.all([
//     sleep(3000).then(()=>console.log("3000")),
//     sleep(2000).then(()=>console.log("2000"))
// ])
//     .then(()=>{ // => после выполнения всех промисов выполняется then
//         console.log("completed All")
//     });
//
// /*
// .race =>  then выполняется после первого выполненного промиса
//  */
// Promise.race([
//     sleep(3000).then(()=>console.log("3000")),
//     sleep(2000).then(()=>console.log("2000"))
// ])
//     .then(()=>{
//         console.log("completed Race")
//     })

// polifyll
// <script src="https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js"></script>
