"use strict";
let guests = ["Kim Teayoung", "Khalfan", "Grandma"];
console.log(`${guests[0]} can't make it to the dinner.`);
guests[0] = "David";
guests.forEach((guest) => console.log(`Dear ${guest}, you are invited to dinner.`));
