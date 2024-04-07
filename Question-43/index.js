"use strict";
function make_sandwich(...items) {
    console.log(`Making a sandwich with the following items: ${items.join(", ")}`);
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("peanut butter", "jelly", "banana", "honey");
