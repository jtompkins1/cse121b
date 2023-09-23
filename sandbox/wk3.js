let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

let namesB = names.filter(name => name.charAt(0)=== "B");
console.log(namesB);
let namesLength = names.map((name) => name.length);
console.log(namesLength);

// let average = names.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / names.length;
let reduced = names.reduce((total, name) => total + name.length, 0);
let arrayLength = names.length;
console.log(reduced);
console.log(arrayLength);
let average = reduced / arrayLength;
console.log(average);