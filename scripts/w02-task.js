/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Jennifer Tompkins";
let currentYear = "2023";
let profilePicture = "images/portrait.jpg";




/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("#home picture img");





/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent = currentYear;

imageElement.setAttribute("src", profilePicture);


/* Step 5 - Array */

let favFoods = ["Diet Coke", "Taco Salad", "Ice Cream", "Chocolate Covered Pretzels"];

foodElement.textContent = favFoods;

let newFood = "blueberries";

favFoods.push(newFood);

foodElement.innerHTML += `<br>${favFoods}`;

favFoods.shift();

foodElement.innerHTML += `<br>${favFoods}`;

favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;






