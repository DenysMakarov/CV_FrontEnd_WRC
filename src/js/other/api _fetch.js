
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
//     function post(route, data) {
//         return fetch(url+route, {
//             method: "post",
//             body: JSON.stringify(data),
//             headers: {'Content-type': 'application/json'}
//         })
//     }
//     return {get, post}
// }
//
// let connection = connect("http://localhost:3000/")
// connection.get("users")
// connection.post("workers", obj);