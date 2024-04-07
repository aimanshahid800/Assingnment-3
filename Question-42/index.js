"use strict";
let magicians = ["Harry", "Ron", "Hermione"];
function make_great(magicians) {
    return [...magicians].map((magician) => `${magician} the Great`);
}
function show_magicians(magicians) {
    magicians.forEach((magician) => console.log(magician));
}
let greatMagicians = make_great(magicians);
show_magicians(magicians);
show_magicians(greatMagicians);
