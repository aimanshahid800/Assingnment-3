"use strict";
let car = "subaru";
console.log(car); // subaru
console.log("Is car == 'subaru'? I predict True.");
console.log(car == "subaru"); // This will be true because car is indeed 'subaru'
console.log("Is car == 'toyota'? I predict False.");
console.log(car == "toyota"); // This will be false because car is not 'toyota'
console.log("Is car != 'toyota'? I predict True.");
console.log(car != "toyota"); // This will be true because car is not 'toyota'
console.log("Is car.toUpperCase() == 'SUBARU'? I predict True.");
console.log(car.toUpperCase() == "SUBARU"); // This will be true because 'subaru' in uppercase is 'SUBARU'
console.log("Is car.length > 3? I predict True.");
console.log(car.length > 3); // This will be true because the length of 'subaru' is 6, which is more than 3
console.log("Is car.length < 3? I predict False.");
console.log(car.length < 3); // This will be false because the length of 'subaru' is 6, which is not less than 3
console.log("Is car.length >= 6? I predict True.");
console.log(car.length >= 6); // This will be true because the length of 'subaru' is 6
console.log("Is car.length <= 5? I predict False.");
console.log(car.length <= 5); // This will be false because the length of 'subaru' is 6, which is not less than or equal to 5
console.log("Is car in ['subaru', 'toyota', 'honda']? I predict True.");
console.log(["subaru", "toyota", "honda"].includes(car)); // This will be true because 'subaru' is in the array
console.log("Is car in ['ford', 'chevrolet', 'dodge']? I predict False.");
console.log(["ford", "chevrolet", "dodge"].includes(car)); // This will be false because 'subaru' is not in the array
