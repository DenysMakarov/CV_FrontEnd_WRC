
// ------------------- API FETCH ---------------------
// let obj = {
//     name: "Jack",
//     email: "J@gmail.com",
//     job: 'actor'
// };
//
// function connect(url) {
//     function get(route) {
//         return fetch(url + route).then((data => data.json())).then(data => console.log(data))
//     }
//     function postUserToDb(route, data) {
//         return fetch(url+route, {
//             method: "postUserToDb",
//             body: JSON.stringify(data),
//             headers: {'Content-type': 'application/json'}
//         })
//     }
//     return {get, postUserToDb}
// }
//
// let connection = connect("http://localhost:3000/")
// connection.get("users")
// connection.postUserToDb("workers", obj);