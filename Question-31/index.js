"use strict";
let current_users = ["admin", "Ali", "Warisha", "Amna", "Hina"];
let new_users = ["ali", "Zara", "admin", "Sara", "Hina"];
for (let new_user of new_users) {
    let isUsernameTaken = false;
    for (let current_user of current_users) {
        if (current_user.toLowerCase() === new_user.toLowerCase()) {
            isUsernameTaken = true;
            break;
        }
    }
    if (isUsernameTaken) {
        console.log(`${new_user} will need to enter a new username.`);
    }
    else {
        console.log(`${new_user} is available.`);
    }
}
