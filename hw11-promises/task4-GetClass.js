class GetInfo {
    constructor(url) {
        this.url = url;
    }

    async getInfo() {
    try {
        const getUser = await fetch(this.url);
        const responseGetUser = await getUser.json();
        return responseGetUser;
    }
    catch(error) {
        console.log(error);
        throw error;}
    }
}
export default GetInfo;

//creating class entities and check the method
// const toDo = new GetInfo('https://jsonplaceholder.typicode.com/todos/1');
// toDo.getInfo().then(data => console.log(data));
// console.log("=================")
// const getUsers = new GetInfo('https://jsonplaceholder.typicode.com/users/1');
// getUsers.getInfo().then(data => console.log(data));