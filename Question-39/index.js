"use strict";
function make_album(artist, title, tracks) {
    let album = { artist, title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
// Make three albums
let album1 = make_album("Atif Aslam", "Jal Pari", 12);
let album2 = make_album("Ali Zafar", "Masty", 10);
let album3 = make_album("Strings", "Dhaani", 9);
// Print each album
console.log(album1);
console.log(album2);
console.log(album3);
