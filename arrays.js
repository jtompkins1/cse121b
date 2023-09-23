const arr = ["one", "two", "three"];
const arrHtml = arr.map(function(arr) {
    return `<li>${arr}</li>`;
});
document.getElementById("myList").innerHTML = arrHtml.join();

const grades = ["A", "B", "A"];

function getPoints(grade) {
    let points = 0;
    if (grade === "A"){
        points = 4;
    }
    else if (grade === "B"){
        points = 3;
    }
    return points;

    }
const gpaPoints = grades.map(getPoints);

const gpa = gpaPoints.reduce((total, grade) => total + grade, 0) / gpaPoints.length;

const fruits = ["watermelon", "peach", "apple", "tomato", "grape"];

const filterFruits = fruits.filter((fruit) => fruit.length < 6);

const numbers = [12, 34, 21, 54];
const luckNumber = 21;

let luckIndex = numbers.indexOf(luckNumber);


