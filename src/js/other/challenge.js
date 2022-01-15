//// ================ найти все совпадения в массиве и добавить в новый массив

// let arr = [1, 1, 4, 5, 7, 7, 8, 1, 3, 4, 1];
// let newArr = [];
//
// function f() {
//     for (let i = 0; i < arr.length; i++) {
//         // console.log(`--------- ${i+1} ---------`);
//         // console.log("start arr: "+arr);
//         let temp = [];
//         for (let j = 0; j < arr.length; j++) {
//             (arr[j] == arr[0])? temp.push(arr[j]) : temp = temp
//         }
//         // console.log("temp after push: " + temp);
//         (temp.length > 1) ? newArr.push(temp) : newArr = newArr
//         // console.log("new Arrey: "+newArr);
//         arr = arr.filter((el) => {
//             return el != arr[0]
//         })
//     }
//     // console.log("arr: "+arr)
// }
// f();
// console.log(newArr)

/// ---------- и еще ----------

// test = test.filter(function (elem, pos, arr) {
//     return pos !== arr.indexOf(elem) || pos !== arr.lastIndexOf(elem);
// }).sort((a,b)=>{
//     return a-b
// });



//// =================== найти максимальное число в массиве =======================
// function getMaxOfArray(numArray) {
//     return Math.max.apply(null, numArray);
// }
//// ------------------ или через ...spread -------------------

// let x = [2,4,6,8,7,3,4,8];
// console.log(Math.max(...x))



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



//// ===================== совпадения обьектов в массиве =====================
// var a = [{"id":1, "item": 213}];
// var b = [{"id":1, "item":  213}, {"id":78, "item":  21}, {"id":19, "item":  13}];
//
// var result = a.filter(function(v) {
//     return b.some(function(v2) {
//         return v.id == v2.id && v.item == v2.item;
//     })
// });
// console.log(result);



// ===================== деструктуризация =====================
// const obj = {
//     name: 'Joe',
//     food: 'cake'
// }
//
// const { name: myName, food: myFood } = obj;
// console.log(myName, myFood);

//// ----------
//
// const numbers = [1,2,3,4,5]
// const [a, b] = numbers;
// console.log(a,b)



// ===================== слова полиндром =====================
// let pol = ["adda", "uhy", "Gttg", "kjkl"]
// let newArr = [];
//
// pol.map((el) => {
//     return ((el = el.toLocaleLowerCase()) == el.split("").reverse().join("")) ? newArr.push(el) : console.log("sory")
// })
// console.log(newArr)



//// =====================  анограма  =====================
// let x = "Mary";
// let y ="Army";
// (x.toLocaleLowerCase().split("").sort().join("") == y.toLocaleLowerCase().split("").sort().join(""))? console.log("yes") : console.log("no")
// console.log(x)



//===================== FizzBuzz кратность чисел =====================
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

//// ===================== найити гласные буквы в строке =====================
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



//// ===================== чем являются объекты =====================
// Object.prototype.toString.call(arr)
// if ( Object.prototype.toString.call(arr) === '[object Array]' ){
//     console.log('True')
// }

// function foo(param) {
//     if (typeof param == ['string']) {
//     console.log('True')
//     }
// }



//// ===================== удалить все совпадения из массива =====================
//// ---------------- 1 спсоб ----------------
// let x = [2, 4, 7, 10, 2, 2, 5, 6, 8, 15, 7, 9, 10, 11];
// let y = Array.from(new Set(x))

//// ---------------- 2 спсоб ----------------
// let arr = [1, 1, 2, 2, 4, 5, 7, 7, 8, 7];
// let newArr = [];
// for(let i=0; i<arr.length; i++){
//     if (newArr.indexOf(arr[i]) == -1){
//         newArr.push(arr[i])
//     }
// }


