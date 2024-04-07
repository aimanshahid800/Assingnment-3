interface Car {
  manufacturer: string;
  model: string;
  [key: string]: string;
}

function createCar(
  manufacturer: string,
  model: string,
  ...details: [string, string][]
): Car {
  let car: Car = { manufacturer, model };

  for (let [key, value] of details) {
    car[key] = value;
  }

  return car;
}

let car = createCar(
  "Toyota",
  "Corolla",
  ["color", "red"],
  ["feature", "sunroof"]
);
console.log(car);
