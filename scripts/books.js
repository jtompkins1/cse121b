/* W05: Programming Tasks */

/* Declare and initialize global variables */
const booksElement = document.querySelector("#books");

let bookList = [];

/* async displayTemples Function */

const displayBooks = (books) => {
    reset();
    

    books.forEach((book) => {

        const container = document.createElement("div");

        const h3 = document.createElement("h3");
        h3.textContent = book.title;

        const h4 = document.createElement("h4");
        h4.textContent = book.author_names;

        const h5 = document.createElement("h5");
        h5.textContent = book.first_publish_year;

        // const img = document.createElement("img");
        // img.setAttribute("src", book.imageUrl);
        //img.src = temple.imageUrl;
        //img.alt = temple.location;
        // img.setAttribute("alt", temple.location);

        container.appendChild(h3);
        //container.appendChild(img);
        container.appendChild(h4);
        container.appendChild(h5);

        booksElement.appendChild(container);

    });


};


/* async getTemples Function using fetch()*/

const getBooks = async () => {
    try {
        const response = await fetch("https://openlibrary.org/people/jmtompkins/books/want-to-read.json");

        if (response.ok) {
            bookList = await response.json();
            if (Array.isArray(response.reading_log_entries)) {
                bookList = response.reading_log_entries;
                displayBooks(bookList);
            } else {
                console.error("API response is not an array:", bookList);
            }
        } else {
            console.error("API request failed with status:", response.status);
        }
    } catch (error) {
        console.error("An error occurred while fetching data:", error);
    }
};


/* reset Function */
function reset() {
    booksElement.innerHTML = "";
};



/* sortBy Function */

function sortBy(books) {

    reset();
    switch (document.querySelector("#sortBy").value) {
        case "title":
            //sort books alphabetically by title and displayBooks function
            bookList.sort((a,b) => a.title.localeCompare(b.title, "en", {sensitivity: "base"}));
            displayBooks(books);
            break;
        case "author":
            //sort books alphabetically by author and displayBooks function
            break;
        case "published-date":
            //sort books by ascending published date and displayBooks function
            break;
        case "random":
            displayBooks(books);
            break;
    }
};

/* Event Listener */

document.querySelector("#sortBy").addEventListener("change", () => {
    sortBy(bookList)
});

getBooks();


