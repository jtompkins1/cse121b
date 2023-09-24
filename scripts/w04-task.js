/* LESSON 3 - Programming Tasks */

/* Profile Object  */
const myProfile = {
    name: "Jennifer Tompkins",
    photo: "images/portrait.jpg",
    favoriteFoods: [
        "Diet Coke", 
        "Taco Salad", 
        "Ice Cream", 
        "Chocolate Covered Pretzels"
    ],
    hobbies: [
        "Roller Skating",
        "Watercolor Painting",
        "Reading",
        "Puzzles"
    ],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Maryland",
        length: "19 years"
    }
);
myProfile.placesLived.push(
    {
        place: "Northwest Arkansas",
        length: "20 years"
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
const imageElement = document.querySelector("#photo");
imageElement.setAttribute("src", myProfile.photo);

const altElement = document.querySelector("#photo");
altElement.setAttribute("alt", myProfile.name);
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});


/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let ul = document.createElement("ul");
    ul.textContent = hobby;
    
    document.querySelector("#hobbies").appendChild(ul);
});

/* Places Lived DataList */

myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;

    let dd = document.createElement("dd");
    dd.textContent = place.length;

    document.querySelector("#places-lived").appendChild(dt);

    document.querySelector("#places-lived").appendChild(dd);
});

