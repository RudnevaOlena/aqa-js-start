async function getToDo() {
    try {
        const resGetToDo = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const response = await resGetToDo.json();
        return response;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}
// const res1 = getToDo();
// getToDo().then(data => console.log(data));

async function getInfoUsers() {
    try {
        const getUser = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const responseGetUser = await getUser.json();
        return responseGetUser;
    }
    catch(error) {
        console.log(error);
        throw error;
    }
}
// const res2 = getInfoUsers();
// getInfoUsers().then(data => console.log(data))

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