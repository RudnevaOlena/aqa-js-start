import GetInfo from "./task4-GetClass.js";

class PromisesClass {
    //Promise.all
    static promiseAll(promises) { 
        return Promise.all(promises)
        .then(([toDo, users]) => {
            console.log("All results:", toDo, users)
            return [toDo, users];
        })
        .catch(error => {
            console.log("Error is in some promises-response:", error);
            throw error;
        });
    }

    //Promise.race
    static promiseRace(promises) {
        return Promise.race(promises)
        .then(first => {
            console.log("First resolved:", first);
            return first;
        })
        .catch(error => {
            console.log("Error is in some promises-response:", error);
            throw error;
        });
    }
}

// creating class entities and check the method getInfo
const toDo = new GetInfo('https://jsonplaceholder.typicode.com/todos/1');
// toDo.getInfo().then(data => console.log(data));
const getUsers = new GetInfo('https://jsonplaceholder.typicode.com/users/1');
// getUsers.getInfo().then(data => console.log(data));

//check if the promises methods work correctly
const promises = [toDo.getInfo(), getUsers.getInfo()];
PromisesClass.promiseAll(promises);
PromisesClass.promiseRace(promises);




