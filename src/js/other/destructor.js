
// ===================== деструктуризация =====================

//// ============ Object ===========
// const obj = {
//     login: 'Joe',
//     job: 'baker',
//     adress: {
//         country: "USA",
//         city: "New York",
//         street: "Baker str."
//     }
// }

// const { login: myName, job: myJob } = obj; // myName и myJob => переменные в которые мы помещаем ключи
// // тоже самое что и:
// // let myName = obj.login
// // let myJob = obj.job
// console.log(myName, myJob);

//// -------- или так --------
// const {
//     login: myName,
//     job : myJob,
//     car = "BWM", //// => по дефолту если нет такого ключа
//     adress: {city: homeTown, country} // => city присваеваем в переменную
// } = obj;
// console.log(myName, myJob, car, homeTown, country);

//// ----------- или через ...rest
// const {login, ...other} = obj;
// console.log(login, other)
// console.log(other.adress)

//// ----------
// const numbers = [1,2,3,4,5]
// const [a, b] = numbers;
// console.log(a,b)

//// ----------- или так ----------
// function logPerson( { login: myName, job, car = "VW" } ) {
//     console.log(myName +" "+ job)
// }
// logPerson(obj);


//// ============== Array ===========

// function calc(a, b) {
//     return [
//         a + b,
//         a - b,
//         undefined,
//         a - b,
//         (a * b) / a
//     ]
// }
// const sum = calc(10,15);
// console.log(sum)
//
// // const first = sum[0];
// // const second = sum[1];
// // console.log(first, second)
//
// /// ------ либо десруктурировать -----
// const [sum1, sum2] = calc(10,15);
// console.log(sum1, sum2);
//
// /// ------ либо так -----
// const [first, second, third = "умножение", ...rest] = calc(10,15); // если undefined то по дефолту
// console.log(first, second, third, rest); // rest = новый массив из остатка
