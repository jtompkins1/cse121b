//displayHolidays.js

import reset from "./reset.js";

export const displayHolidays = (holidays, holidaysElement) => {
    
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
};

