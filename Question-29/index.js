"use strict";
let usernames = ["admin", "ali", "Warisha", "Amna", "Hina"];
for (let username of usernames) {
    if (username == "ali") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
