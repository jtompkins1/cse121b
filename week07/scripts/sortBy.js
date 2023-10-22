//sortBy.js


import { displayHolidays}  from "./displayHolidays.js";
import reset from "./reset.js";

export function sortBy(holidays, holidaysElement) {

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
};

