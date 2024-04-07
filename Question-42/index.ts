let magicians: string[] = ["Harry", "Ron", "Hermione"];

function make_great(magicians: string[]): string[] {
  return [...magicians].map((magician) => `${magician} the Great`);
}

function show_magicians(magicians: string[]): void {
  magicians.forEach((magician) => console.log(magician));
}

let greatMagicians = make_great(magicians);
show_magicians(magicians);
show_magicians(greatMagicians);
