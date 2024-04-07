"use strict";
let usernames = ["admin", "ali", "Warisha", "Amna", "Hina"];
// Check if the list is empty
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (let username of usernames) {
        if (username == "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}
// Remove all of the usernames from the array
usernames = [];
// Check again if the list is empty
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (let username of usernames) {
        if (username == "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}
