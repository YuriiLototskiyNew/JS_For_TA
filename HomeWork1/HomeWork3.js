//Task1

let numbers = [2, 3, 4, 5];
//while
let product = 1;
let i = 0;

while (i < numbers.length)
{
    product *= numbers[i];
    i++;
};

console.log(`Добуток елементів масиву: ${product}`);

//for
let productFor = 1;
for (let i = 0; i < numbers.length; i++) {
    productFor *= numbers[i];
}
console.log(`Добуток елементів масиву: ${productFor}`);


//Task2

for (i = 0; i <= 15; i++)
{
    if (i % 2 === 0)
    {
        console.log(`Number ${i} is even`);
    }
    else{
        console.log(`Number ${i} is odd`);
    }
}

//Task3
function randArray(k) {
    const result = [];
    for (let i = 0; i < k; i++) {
        result.push(Math.floor(Math.random() * 500) + 1);
    }

    console.log("randArray(" + k + ") =", result);
    return result;
}

randArray(5);

//Task4
function raiseToDegree(a, b) {
    return Math.pow(a, b);
}

const a = parseInt(prompt("Enter number a:"));
const b = parseInt(prompt("Enter degree b:"));

if (!isNaN(a) && !isNaN(b)) {
    console.log("raiseToDegree(" + a + ", " + b + ") =", raiseToDegree(a, b));
} else {
    console.log("incorrect number");
}

//Task5
function randomArray(k) {
    const result = [];
    for (let i = 0; i < k; i++) {
        const randomNumber = Math.floor(Math.random() * 201) - 100;
        result.push(randomNumber);
    }
    return result;
}

function findMin(arr) {
    if (arr.length === 0) {
        return undefined;
    }

    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

const array = randomArray(5);
console.log(`Згенерований масив: ${array.join(", ")}, Мінімальне значення в масиві: ${findMin(array)}`);

//Task6
function findUnique(arr) 
{
    const frequencyCounter = {};

    for (let val of arr) {
        if (frequencyCounter[val]) {
            return false; 
        }
        frequencyCounter[val] = true;
    }

    return true; 
}

const newArray = randomArray(7);
console.log(`Згенерований масив: ${newArray.join(", ")}, Всі елементи масиву унікальні: ${findUnique(newArray)}`);

//Task7
function lastElem(arr, n = 1) 
{
    if (n <= 0) {
        n = 1;
    }
    
    if (n >= arr.length) {
        return arr;
    } else {
        return arr.slice(-n);
    }
}

const myArray = randomArray(6);
let n = Math.floor(Math.random() * (myArray.length + 1));

console.log(`Згенерований масив: ${myArray.join(", ")}, Останні ${n} елементи масиву: ${lastElem(myArray, n)}`);

//Task8
function capitalizeFirstLetter(str) 
{
    let words = str.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }

    return words.join(" ");
}

const inputString = 'i love java script';
const outputString = capitalizeFirstLetter(inputString);
console.log(`Input string: "${inputString}", Output string: "${outputString}"`);