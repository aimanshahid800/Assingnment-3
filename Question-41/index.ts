let magicians: string[] = ["Harry", "Ron", "Hermione"];

function make_great(magicians: string[]): string[] {
  return magicians.map((magician) => `${magician} the Great`); //use map fnction to apply the function on every elememt.
}

function show_magicians(magicians: string[]): void {
  magicians.forEach((magician) => console.log(magician));
}

magicians = make_great(magicians);
show_magicians(magicians);
