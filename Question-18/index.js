"use strict";
let guests = [
    "Mama",
    "Kim Teayoung",
    "Afshan",
    "Khalfan",
    "Grandma",
    "Mahnoor",
];
// Informing people that you can invite only two people for dinner
console.log("I'm sorry, but I can only invite two people for dinner.");
// Removing guests until only two remain
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Dear ${removedGuest}, I'm sorry to inform you that I can't invite you to dinner.`);
}
// Printing invitations for the remaining guests
guests.forEach((guest) => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});
console.log(`I am inviting ${guests.length} people to dinner.`);
