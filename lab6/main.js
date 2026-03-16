// Завдання 1: Змінні та математичні операції
const a = 12;
const b = 4;

console.log("Сума:", a + b);
console.log("Різниця:", a - b);
console.log("Множення:", a * b);
console.log("Ділення:", a / b);

// Завдання 2: Робота з рядками
const firstName = "Іван";
const lastName = "Іванов";
const fullName = `${firstName} ${lastName}`;

console.log(`Привіт, ${fullName}!`);

// Завдання 3: Умовний оператор (if/else)
const age = 20;

if (age >= 18) {
    console.log("Доступ дозволено");
} else {
    console.log("Доступ заборонено");
}

// Завдання 4: Цикл for
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Завдання 5: Функції
function square(number) {
    return number * number;
}

console.log("Квадрат числа 5:", square(5));

// Завдання 6: Робота з масивами
const fruits = ["гранат", "банан", "мандарин"];
fruits.push("манго");
console.log(fruits);