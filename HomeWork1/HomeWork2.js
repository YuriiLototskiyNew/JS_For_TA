//Task1
let x = 1;
let y = 2;

let res1 = String(x) + y;

console.log(res1); // "12"
console.log(typeof res1); //"string"

let res2 = Boolean(x) + String(y);

console.log(res2); // "true2"
console.log(typeof res2); //"string"

let res3 = Boolean(x < y);

console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = parseInt(Boolean(x) + String(y));
console.log(res4); // NaN
console.log(typeof res4); // "number"

//Task2
let number = +prompt("Enter your number");

result1 = (number%2===0 && number>0) ? `The number ${number} is even` : `The number ${number} is not even`;
result2 = (number%7===0) ? `The number ${number} is divisible by 7` : `The number ${number} is not divisible by 7`;
console.log(result1);
console.log(result2);

//Task3
let myArray = [];
myArray[0] = 2;
myArray[1] = "New string";
myArray[2] = myArray[0] > myArray[1];
myArray.push(null);

console.log(myArray);
alert(`The length of my array: ${myArray.length}`)

let newValue = prompt("Enter any value", "value")
myArray.push(newValue);
alert(`Fifth element of my array is: ${myArray[4]}`);

myArray.shift();
alert(`All elements of mny array: ${myArray}`);

//Task4
let cities = ["Rome", "Lviv", "Warsaw"];
console.log(cities.join("*")); //кращий варіант
console.log(`${cities[0]}*${cities[1]}*${cities[2]}`); // інший варіант

//Task5
let isAdult = +prompt("How old are you?", "your age")
if (isNaN(isAdult))
{
    isAdult = +prompt("Enter correct age", "your age"); // In case of string value
    if (isNaN(isAdult))
    {
        console.log("Incorrect age");
    }
    else if(isAdult < 18)
    {
    console.log("You are young");
    }
    else
    {
    console.log("You are adult"); 
    }
}
else if(isAdult < 18)
{
    console.log("You are young");
}
else
{
    console.log("You are adult"); 
};

//Task6
let side1 = +prompt("Введіть довжину першої сторони трикутника");
if(isNaN(side1))
{
    alert("Некоректні дані");
    side1 = +prompt("Введіть коректну довжину сторони трикутника");
};

let side2 = +prompt("Введіть довжину другої сторони трикутника:");
if(isNaN(side2))
{
    alert("Некоректні дані");
    side2 = +prompt("Введіть коректну довжину сторони трикутника");
};

let side3 = +prompt("Введіть довжину третьої сторони трикутника:");
if(isNaN(side3))
{
    alert("Некоректні дані");
    side3 = +prompt("Введіть коректну довжину сторони трикутника");
};

if (isNaN(side1) || isNaN(side2) || isNaN(side3) || side1 === 0 || side2 === 0 || side3 === 0)
{
    console.log('Incorrect data');
}
else
{
    // Обчислення півпериметра
    let s = (side1 + side2 + side3) / 2;
    // Обчислення площі за формулою Герона
    let area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3)).toFixed(3);
    console.log(`Площа трикутника: ${area}`);


    isRightTriangle = 
        (side1 ** 2 + side2 ** 2 === side3 ** 2 ||
        side1 ** 2 + side3 ** 2 === side2 ** 2 ||
        side2 ** 2 + side3 ** 2 === side1 ** 2) ? "Цей трикутник є прямокутним." : "Цей трикутник не є прямокутним."

    console.log(isRightTriangle);
};


//Task7
const now = new Date();
const currentHour = now.getHours();

switch (true) {
    case (currentHour >= 23 || currentHour < 5):
        console.log("Доброї ночі");
        break;
    case (currentHour >= 5 && currentHour < 11):
        console.log("Доброго ранку");
        break;
    case (currentHour >= 11 && currentHour < 17):
        console.log("Доброго дня");
        break;
    default:
        console.log("Доброго вечора");
}


