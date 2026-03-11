const car1 = {
    brand: "brand",
    model: "model",
    year: 2000
}   

const car2 = {
    brand: "brand2",
    model: "model2",
    owner: 2020
}

const car3 = {...car1, ...car2};
console.log(car3)

