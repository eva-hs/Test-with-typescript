// Uppgift 1
function max(number1: number, number2: number): number {
  return number1 > number2 ? number1 : number2;
}

console.log(max(10, 12));

// Uppgift 2
function landscape(width: number, height: number): boolean {
  return width > height;
}

console.log(landscape(3215, 3215));

// Uppgift 3
function rectangleArea(length: number, width: number): number {
  return length * width;
}

console.log(`Rektangelns area är ${rectangleArea(10, 12)}`);

// Uppgift 3 Extra - triangleArea
function triangleArea(height: number, width: number): number {
  return (height * width) / 2;
}

console.log(`Triangelns area är ${triangleArea(12, 10)}`);

// Uppgift 3 Extra - circleArea
function circleArea(radius: number): number {
  return Math.PI * radius ** 2;
}

console.log(`Cirkelns area är ${circleArea(3)}`);

// Uppgift 4
function tellFortune(
  numberOfChildren: number,
  partnersName: string,
  city: string,
  occupation: string
) {
  return console.log(
    `Du kommer att vara en ${occupation} i ${city}, gift med ${partnersName} och ha ${numberOfChildren} barn.`
  );
}

tellFortune(2, "Bo", "Helsingborg", "IT-projektledare");

// Uppgift 5
function calculateDogAge(humanAge: number): number {
  return humanAge * 7;
}

console.log(calculateDogAge(3));

// Uppgift 5 - Extra
function dogAgeWithGivenFactor(humanAge: number, conversionFactor = 7): number {
  return humanAge * conversionFactor;
}

console.log(dogAgeWithGivenFactor(3, 10));

// Uppgift 6
function daysOfSupplies(totalSupplies: number, suppliesPerDay: number): number {
  return totalSupplies / suppliesPerDay;
}

console.log(daysOfSupplies(100, 10));

// Uppgift 7
function toFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

// Uppgift 7 - Extra
function toCelsius(fahrenheit: number): number {
  return ((fahrenheit - 32) * 5) / 9;
}

console.log(`${toCelsius(23)} grader celsius`);

// Uppgift 8
function ageInSeconds(ageInYears: number): number {
  const daysInYear = 365;
  const hoursInDay = 24;
  const minutesInHour = 60;
  const secondsInMinute = 60;
  return ageInYears * daysInYear * hoursInDay * minutesInHour * secondsInMinute;
}

console.log(ageInSeconds(44));

function area(shape: string, length: number, height?: number): number | string {
  if (height) {
    if (shape === "rectangle") return rectangleArea(length, height);
    if (shape === "triangle") return triangleArea(length, height);
  }
  if (shape === "circle") return circleArea(length / 2);
  return "Invalid shape";
}

console.log(`Arean av din rektangel är ${area("rectangle", 12, 10)} cm2`);
console.log(`Arean av din triangel är ${area("triangle", 10, 10)} cm2`);
console.log(`Arean av din cirkel är ${area("circle", 3)} cm2`);
console.log(area("square", 3));

function checkSpeed(speed: number): string | number {
  let speedPoint = 0;
  for (let speedLimit = 75; speedLimit <= speed; speedLimit += 5) {
    speedPoint = speedPoint + 1;
  }
  if (speedPoint === 0) return "Ok";
  if (speedPoint >= 12) return "Indraget körkort!";
  return speedPoint;
}

console.log(checkSpeed(59));
console.log(checkSpeed(73));
console.log(checkSpeed(103));
console.log(checkSpeed(140));

const functions = {
  max,
  landscape,
  rectangleArea,
  triangleArea,
  circleArea,
  tellFortune,
  calculateDogAge,
  dogAgeWithGivenFactor,
  daysOfSupplies,
  toCelsius,
  toFahrenheit,
  ageInSeconds,
  area,
  checkSpeed,
};

export default functions;
