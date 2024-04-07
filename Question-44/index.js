"use strict";
function createCar(manufacturer, model, ...details) {
    let car = { manufacturer, model };
    for (let [key, value] of details) {
        car[key] = value;
    }
    return car;
}
let car = createCar("Toyota", "Corolla", ["color", "red"], ["feature", "sunroof"]);
console.log(car);
