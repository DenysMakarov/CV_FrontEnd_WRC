
////===================== SPREAD =======================////

// const obj = {
//     server: "aws",
//     port: "3030",
//     status: "working",
//     type: "200"
// };
// const obj2 = {
//     server: "Apach",
//     port: "8000",
//     status: "panding..."
// };
// let USA = ["Nwe York", "Colarado", "Washington"];
// let Europe = ["Paris", "Vien", "Prague", "Warszawa"]
//
// let allSities = [...USA, "VANCOUVER", ...Europe];
// let allServers = {...obj, ...obj2}; //// => совмещение объектов | переписывает последние ключи
// // console.log(allSities);
// console.log(allServers);
//
// ////----------- из колекции и node list сразу делает массив ------------
//
// let dives = document.querySelectorAll("div");
// let node = [...dives];
//
// //// ---------  найти максимальное число через  spread  ----------------
// let numArray = [2,4,6,8,7,3,4,8];
// console.log(Math.max(...numArray))
// //// - - - до этого было:
// Math.max.apply(null, numArray);

////===================== REST =======================////

// const numbers = [1,2,3,4,5,6,7,8,9]
// function sum(a, b, ...rest) { // => будут все кроме первых двух
//     console.log(rest)
// }
//// --------------
// function sum(a, b, ...rest) { // => a+b - сумма остальных
//     return a + b - rest.reduce((acu, el) => acu + el )
// }
//// --------------
// const numbers = [1,2,3,4,5]
// const [a, b, ...rest] = numbers;
// console.log(a,b, rest)
