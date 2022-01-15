// //
// //// Part one  ----------------------- CLASS
// class Animal {
//     constructor(name, kind, age) {
//         this.name = name;
//         this.kind = kind
//         this.age = age
//     }
//     aboutAnimal() {
//         console.log(`my ${this.kind} called ${this.name}. He is ${this.age} years old`)
//     }
// }
// let animal = new Animal("Sam", "dog", 3);
// console.log(animal);
// animal.aboutAnimal();
//
// class Animal2 extends Animal {      ///-------------- => наследуем класс
//     constructor(name, kind, age, weight) {
//         super(name, kind, age);     ///-------------- => super - наследуем параметры класса через super
//         this.weight = weight
//     }
// }
// let animal2 = new Animal2("Mila", "cat", 2, "7 lb");
// console.log(animal2);

/////// => ------------------------------ КОПИРОВАНИЕ ОБЪЕКТА
//  const obj = {
//     server: "aws",
//     port: "3030",
//     status: "working"
// };
// //
// let newOgj = {};

//// => --------------- 1 способ
// newOgj = Object.assign({}, obj); //// => копируем объект Object.assign ( {}, obj)
// newOgj.port = "9000";                  //// => можем изменять новый объект
// console.log(obj, newOgj)

//// => --------------- 2 способ
// for (props in obj ) {
//     newOgj[props] = obj[props]
// }
// newOgj.port = "9000"
// console.log(newOgj, obj)


/////// => ------------------------------ GET SET ???
//  // Part two
// let user = {
//     firstName: 'Denys',
//     secondName: "Mac",
//     _password: 'qwerty', // => _ - означает приватность
//     set password(pass) {
//         this._password = pass.trim() // => удаляет с начала и с конца пробелы
//     },
//     get password() {
//         return this._password
//     },
//     set password(value) { // => изменять приватные свойства только так
//         this._password = value
//     }
// };
// user.password = " Hello ";
//
//
// let user2 = {};
// user2.__proto__ = user; // => наследуем значения у user / прототип
//
// console.log(user);
// console.log(user2);
// console.log(user2.firstName); // будет "Denys"


//// => ------------------------------ ПРОТОТИПНОЕ НАСЛЕДОВАНИЕ

// let a = {
//     "text" : "Hello",
//     "color" : "red",
//     "show" : function () {
//         console.log(this.color)
//     }
//
// };
// //--------------------------
// let b = {
//     "color" : "green",
//     __proto__ : a // => наследуем свойсва от а
// };
// //--------------------------
// let c = {
//     __proto__: b
// };
//--------------------------
// a.show();
// b.show();
// c.show();
// console.log(b.hasOwnProperty("color")); // => проверка на действительность (принадлежит ли свойство обьекту)
// console.log(c.hasOwnProperty("color"));
//--------------------------

// for (key in c){        // => ----------- перебор свойств объекта
//     console.log(key);
// }
//
// -----------------------------

// let user = {
//     "login": "",
//     "password": "",
//     "validatePassword": function () {
//         // (this.password.length > 6) ? true : false
//         if (this.password.length > 6){
//             return true
//         }
//         else {
//             return false
//         }
//     }
// };
// user.password = "1324452345";
// console.log(user.validatePassword())

// ----------------------------- GET SET ---------------------------
// приватные (#)
// защищенные (_) protected
// Public

// class User {
//     constructor() {}
//
//     set name(name){
//         this._name = name.trim().toUpperCase()
//     }
//     get name(){
//         return this._name
//     }
//     // b = "bbb"
// }
//
// let stu = new User();
// stu.name = " Denys";
// console.log(stu.name);

// // --------------------------- static method -----------------------
// // ----  статические методы доступны из класса
// class User {
//
//     constructor(name) {
//         this.name = name;
//     }
//
//     static getRole() {
//         /**
//          * реализация какого то кода
//          */
//         return "student"
//     }
// }
//
// const person = new User("Denys");
// console.log(person);
// // console.log(person.getRole());       //=> работает при обычной функции из нового екзмпляра
// // console.log(User.getRole());            //=> работает из класса если static
// // console.log(User.test)
//
// class User2 extends User {
//     constructor(name) {
//         super(name);
//     }
// }
//
// console.log(User2.getRole())

// ------------------- this -----------------------

// document.querySelector('.btn').onclick = function () {
//     //* => this - указывает на елимент на котором произошло событие
//     //* при стрелочных функциях this не сохраняет контекст
//     console.log(this);
//     let x = getComputedStyle(this);
//     console.log(x.backgroundColor);
//     (x.backgroundColor == "rgb(0, 0, 255)") ? this.style.backgroundColor = "orange" : this.style.backgroundColor = "blue"
// };
//
// class U2 {
//     constructor(model) {
//         this.model = model
//     }
//     showMe() {
//         console.log(this)
//     }
// }
// let boat = new U2("751");
// // console.log(boat);
// // boat.showMe()

// -------------- call apply bind --------------------


// let btn = document.querySelectorAll('.btn');
// let btn2 = document.querySelector('.btn_2');
// let btn1 = document.querySelector('.btn_1');
// let btn3 = document.querySelector('.btn_3');
//
// btn.onclick = test;
//
// function test(color, num) {
//     console.log(this);
//     console.log(color);
//     console.log(num)
//     this.style.backgroundColor = color
// }

// test.call(btn) // => с помощью call мы указываем над каким обьектом (this) - будет действие / без call будет ошибка так как он ее не находит
// test.call(btn1, "orange", 7778)
// test.apply(btn1, ["orange", 7778 ]) // => apply тоже что и call но аргументы передаются масством

// ---- call ----
// btn2.addEventListener("click", function (e) {
//     test.call(btn1, "orange", 7778)  // =>  call
// });

// ---- apply ----
// btn2.addEventListener("click", function (e) {
//     test.apply(btn1, ["orange", 7778]) // =>  apply
// });

// ---- bind ----
//// => привязывает контекст с call apply - функция самовызывается | с bind - только при нажатии
// let a = test.bind(btn1, "orange", 7778);
// let b = test.bind(btn2, "red", 7778);
// btn2.onclick = a;
// btn1.addEventListener("click", b);

//////////////////


/// ==========  lessson 1 ======== /// => разобраться с наследованием функции и добавлением в нее нового style
// class Button {
//     constructor(width, height, background, value) {
//         this.width = width;
//         this.height = height;
//         this.background = background;
//         this.value = value;
//     }
//
//     render() {
//         let btn = document.createElement("button");
//         btn.style.width = this.width + "px";
//         btn.style.height = this.height + "px";
//         btn.style.background = this.background;
//         btn.style.value = this.value;
//         btn.classList.add("bt");
//         document.body.appendChild(btn);
//         return btn
//     };
//
//     // add() {
//     //     document.body.appendChild(this.render());
//     // }
// }
//
// let btn1 = new Button(100, 100, "red", "");
// btn1.render();
// btn1.add();
//
// class ModernButton extends Button {
//     constructor(width, height, background, value, borderRadius = 0) {
//         super(width, height, background, value);
//         this.borderRadius = borderRadius
//     }
//     render() {
//         return super.render();
//     }
// }
//
// let btn2 = new ModernButton(150, 100, "red", "", "5");
// btn2.render();

/// ==========  Object ======== ///
// let obj = {
//     name: "Jack",
//     email: "J@gmail.com",
//     job: 'actor'
// };
//
// let x={};
// x.__proto__ = obj
// x.company = "VW"
// console.log(x.hasOwnProperty('company'))  // true
// console.log(x.hasOwnProperty('name'))     // false
// delete x.name // останется от прототипа || удалить свойство которое унаследованно прототипом просто так нельзя




