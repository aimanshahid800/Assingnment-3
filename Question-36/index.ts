function make_shirt(size: string = "L", message: string = "I love TypeScript") {
  console.log(
    `The size of the shirt is ${size} and the message printed on it is '${message}'.`
  );
}

// Make a large shirt with the default message
make_shirt();

// Make a medium shirt with the default message
make_shirt("M");

// Make a shirt of any size with a different message
make_shirt("S", "TypeScript is cool!");
