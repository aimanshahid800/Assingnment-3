// Tests for equality and inequality with strings
let str1 = "Hello";
let str2 = "World";
console.log("Str1='Hello' & Str2='World'.");
console.log("Is str1 == 'Hello'? ");
console.log(str1 == "Hello");
console.log("Is str1 != 'Hello'? ");
console.log(str1 != "Hello");
console.log("Is str1 == str2? ");
console.log(str1 == str2);
console.log("Is str1 != str2? ");
console.log(str1 != str2);

// Tests using the lower case function
console.log("Is str1.toLowerCase() == 'hello'?");
console.log(str1.toLowerCase() == "hello");
console.log("Is str2.toLowerCase() == 'world'? ");
console.log(str2.toLowerCase() == "world");

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 10;
let num2 = 20;
console.log("Num1=10, Num2=20");
console.log("Is num1 == 10?");
console.log(num1 == 10);
console.log("Is num1 != 10?");
console.log(num1 != 10);
console.log("Is num1 > num2?");
console.log(num1 > num2);
console.log("Is num1 < num2?");
console.log(num1 < num2);
console.log("Is num1 >= num2? ");
console.log(num1 >= num2);
console.log("Is num1 <= num2? ");
console.log(num1 <= num2);

// Tests using "and" and "or" operators
console.log("Is num1 > 5 and num1 < 15? ");
console.log(num1 > 5 && num1 < 15);
console.log("Is num1 > 15 or num1 < 15? ");
console.log(num1 > 15 || num1 < 15);

// Test whether an item is in a array
let arr = [1, 2, 3];
console.log("items in an array are:[1, 2, 3]");
console.log("Is 1 in arr? ");
console.log(arr.includes(1));
console.log("Is 4 in arr?");
console.log(arr.includes(4));

// Test whether an item is not in a array
console.log("Is 1 not in arr? ");
console.log(!arr.includes(1));
console.log("Is 4 not in arr?");
console.log(!arr.includes(4));
