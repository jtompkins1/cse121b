/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");

let templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
    reset();
    

    temples.forEach((temple) => {

        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent = temple.templeName;
        const img = document.createElement("img");
        img.setAttribute("src", temple.imageUrl);
        //img.src = temple.imageUrl;
        //img.alt = temple.location;
        img.setAttribute("alt", temple.location);

        article.appendChild(h3);
        article.appendChild(img);

        templesElement.appendChild(article);

    });


};


/* async getTemples Function using fetch()*/

const getTemples = async () => {

    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

    // templeList = await response.json();
    // displayTemples(templeList)

    if (response.ok) {
    //     // the API will send us JSON...but we have to convert the response before we can use it
    //     // .json() also returns a promise...so we await it as well.
        templeList = await response.json();
        displayTemples(templeList)
    };

};


/* reset Function */
function reset() {
    templesElement.innerHTML = "";
};

// const reset = () => {
//     templesElement.innerHTML = "";
// };


/* sortBy Function */

function sortBy(temples) {

    reset();
    switch (document.querySelector("#sortBy").value) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "notutah":
            const nonUtahTemples = temples.filter(temple => !temple.location.includes("Utah"))
            displayTemples(nonUtahTemples);
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date (1950, 0,1)))
            break;
        case "all":
            displayTemples(temples);
            break;
    }
};

/* Event Listener */

document.querySelector("#sortBy").addEventListener("change", () => {
    sortBy(templeList)
});

getTemples();


