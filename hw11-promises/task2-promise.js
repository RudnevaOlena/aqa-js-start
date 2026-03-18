function getToDo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .catch(error => {
            console.log(error);
            throw error;
        });
}
// const res1 = getToDo();
// getToDo().then(data => console.log(data));

function getInfoUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .catch(error => {
            console.log(error);
            throw error;
        });
}
// const res2 = getInfoUsers();
// getInfoUsers().then(data => console.log(data));

//Promise.all
Promise.all([getToDo(), getInfoUsers()])
    .then(([toDo, users]) => {
        console.log("All results:", toDo, users)
    })
    .catch(error => console.log("Error is in some promises-response:", error));

//Promise.race
Promise.race([getToDo(), getInfoUsers()])
    .then((first) => {
        console.log("Race result:", first)
    })
    .catch(error => console.log("All promises are with errors", error));