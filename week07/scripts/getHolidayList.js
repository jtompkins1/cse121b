//getHolidayList.js

const getHolidayList = async () => {
    const response = await fetch ("https://date.nager.at/api/v3/publicholidays/2023/US")

    if (response.ok) {
        const holidayList = await response.json();
        return holidayList;
    }
};

export default getHolidayList;



