interface Album {
  artist: string;
  title: string;
  tracks?: number;
}

function make_album(artist: string, title: string, tracks?: number): Album {
  let album: Album = { artist, title };
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
