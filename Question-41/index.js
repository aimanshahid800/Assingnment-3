"use strict";
let magicians = ["Harry", "Ron", "Hermione"];
function make_great(magicians) {
    return magicians.map((magician) => `${magician} the Great`); //use map fnction to apply the function on every elememt.
}
function show_magicians(magicians) {
    magicians.forEach((magician) => console.log(magician));
}
magicians = make_great(magicians);
show_magicians(magicians);
