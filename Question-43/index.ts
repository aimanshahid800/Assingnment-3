function make_sandwich(...items: string[]): void {
  console.log(
    `Making a sandwich with the following items: ${items.join(", ")}`
  );
}

make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("peanut butter", "jelly", "banana", "honey");
