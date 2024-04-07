"use strict";
let guests = ["Kim Teayoung", "Khalfan", "Grandma"];
// Informing people that you found a bigger dinner table
console.log("Good news, everyone! I've found a bigger dinner table.");
console.log("______________________________________________________");
// Adding more guests
guests.unshift("Mama"); // Adding to the beginning
guests.splice(guests.length / 2, 0, "Afshan"); // Adding to the middle
guests.push("Mahnoor"); // Adding to the end
// Printing new set of invitation messages
guests.forEach((guest) => {
    console.log(`Dear ${guest}, I would be honored if you could join me for dinner.`);
});
