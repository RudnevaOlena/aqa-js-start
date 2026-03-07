function demoRecursion(num) {
    if (num <= 0) {
        return;
    }
    console.log(num);
    demoRecursion(num - 1);
}

demoRecursion(5);
console.log("Recursion demo1 is finished");
demoRecursion(1);
console.log("Recursion demo2 is finished");
demoRecursion(0);
console.log("Recursion demo3 is finished");

