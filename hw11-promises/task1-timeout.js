function greetings(text, time) {
    setTimeout(() => {
        console.log(text);
    }, time); 
}
greetings("We glad to see you", 1000);
console.log("Test that setTimeout works");