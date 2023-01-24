// Задание 1
let a = 10;
alert(a);
a = 20;
alert(a);
// Задание 2
let yearFirstIphone = 2007;
alert(`Год выпуска первого iPhone - ${yearFirstIphone}`);
// Задание 3
const userName = "Брендан Айк (Brandan Eich)";
alert(`Имя создателя языка JavaScript - ${userName}`)
// Задание 4
let x = 10;
let y = 2;
alert(`${x + y}, ${x - y}, ${x * y}, ${x / y}`)
// Задание 5
let count = 2;
let result = count ** 5;
alert(result);
// Задание 6
let b = 9;
let c = 2;
alert(`${b % c}`);
// Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
++num;
--num;
alert(num);
// Задание 8
let age = prompt("Сколько Вам лет?");
alert(age);
// Задание 9
let user = {
    name: "Nikita",
    age: 31,
    isAdmin: true
};
user['city of residence'] = "Moscow";
user.age = 15;
delete user['city of residence'];
let info = prompt("Какую информацию хотите узнать о пользователе? (name, age or isAdmin?)");
alert(user[info]);
// Задание 10
let name = prompt("Как Вас зовут?");
alert(`Привет, ${name}!`);
