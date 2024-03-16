//task2
alert("Прізвище: Lototskiy");

//task3
let age;
let car;

age = 34;

car = "Honda";

console.log(age);
console.log(car);

age = car;

console.log("Значення змінних після копіювання:", "\nВік:", age, "\nАвтомобіль:", car);

//task4
let children;
const employee = {
    firstName : "Jhon",
    age : 23,
    isMarried : true,
    howManyChildren : children,
    workHours : null
};

console.log(employee);

//task5
let isAdult= confirm("Are you already 18?");
console.log("User is already 18:", isAdult);

//task6
let firstName;
let lastName;
let group;
let dateOfBirth;

firstName = "James";
lastName = "Bond";
group = 1;
dateOfBirth = "11 січня 1973";
let isMarried = true;

console.log(`
Тип змінної group: ${typeof group}, Значення group: ${group}
Тип змінної isMarried: ${typeof isMarried}, Значення isMarried: ${isMarried}
Тип змінної firstName: ${typeof firstName}, Значення firstName: ${firstName}
Тип змінної lastName: ${typeof lastName}, Значення lastName: ${lastName}
Тип змінної birthYear: ${typeof dateOfBirth}, Значення birthYear: ${dateOfBirth}
`);

let nullVariable = null;
let undefinedVariable;

console.log("Тип змінної nullVariable:", typeof nullVariable);
console.log("Тип змінної undefinedVariable:", typeof undefinedVariable);

//task7
let login = prompt("What is your login?", "login");
let email = prompt("What is your email?", "email");
let password = prompt("What is your password?", "password");

console.log(`Dear ${login}, your email is ${email}, your password is ${password}`);

//task8
let secondInHour = 60*60;
let secondInDay = secondInHour*24;
let secondInMonth = secondInDay*31;

alert(`Hour has ${secondInHour} seconds, \nDay has ${secondInDay} seconds, \nMonth has ${secondInMonth} seconds.`);





