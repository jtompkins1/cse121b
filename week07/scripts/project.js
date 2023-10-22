//project.js
import getHolidayList from "./getHolidayList.js";
import reset from "./reset.js"


const holidaysElement = document.querySelector("#holidays");

let holidayList = [];

const displayHolidays = (holidays) => {
    
    reset(holidaysElement);

    for (const index in holidays) {
        if (holidays.hasOwnProperty(index)) {
            const holiday = holidays[index];

            const article = document.createElement("article");

            const h3 = document.createElement("h3");
            h3.textContent = holiday.date;

            const h4 = document.createElement("h4");
            h4.textContent = holiday.localName;

            article.appendChild(h3);
            article.appendChild(h4);

            holidaysElement.appendChild(article);
        }
    }
}

function sortBy(holidays) {

    reset(holidaysElement);

    switch (document.querySelector("#sortBy").value) {
        case "January":
            displayHolidays(holidays.filter(holiday => holiday.date.includes("2023-01")));
            break;
        case "February":
            displayHolidays(holidays.filter(holiday => holiday.date.includes("2023-02")));
            break;
        case "March":
            alert("No Holidays listed for March 2023.");
            break;
        case "April":
            displayHolidays(holidays.filter(holiday => holiday.date.includes("2023-04")));
            break;
        case "May":
            displayHolidays(holidays.filter(holiday => holiday.date.includes("2023-05")));
            break;
        case "June":
            displayHolidays(holidays.filter(holiday => holiday.date.includes("2023-06")));
            break;
        case "July":
            displayHolidays(holidays.filter(holiday => holiday.date.includes("2023-07")));
            break;
        case "August":
            alert("No Holidays listed for August 2023.");
            break;
        case "September":
            displayHolidays(holidays.filter(holiday => holiday.date.includes("2023-09")));
            break;
        case "October":
            displayHolidays(holidays.filter(holiday => holiday.date.includes("2023-10")));
            break; 
        case "November":
            displayHolidays(holidays.filter(holiday => holiday.date.includes("2023-11")));
            break; 
        case "December":
            displayHolidays(holidays.filter(holiday => holiday.date.includes("2023-12")));
            break;              
        case "all":
            displayHolidays(holidays);
            break;

    }
}

const getHolidays = async () => {
    const data = await getHolidayList();
    if (data) {
        holidayList = data;
        displayHolidays(holidayList);
    }
};

document.querySelector("#sortBy").addEventListener("change", () => {
    sortBy(holidayList)
});


getHolidays();


