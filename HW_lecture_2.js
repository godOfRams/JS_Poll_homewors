/* 
 HomeWork 
 Ще варіант відео по Git Кроки: 
 1) створіть репозиторій GitHub для зберігання всіх ваших завдань; 
 2) створіть файл у форматі .js, де потрібно використовувати всі оператори, що згадуються в презентації
*/

/* 
Оператори присвоєння
*/
let x = 1;
console.log("x = ", x);
console.log("x += 1, x =", (x += 1));
console.log("x -= 1, x =", (x -= 1));
console.log("x = 2", " x *= 2, x =", (x = 2), (x *= 2));
console.log("x /= 2, x =", (x /= 2));
console.log("x %= 2, x = ", (x %= 2));
console.log("x **= 2, x=", (x **= 2));

/* 
    Оператори порівняння
*/
x = 5;
let y = 5;
console.log("x == y", x == y);
console.log("x == y", x === y);
console.log("x == y", x != y);
console.log("x == y", x !== y);
console.log("x == y", x > y);
console.log("x == y", x < y);
console.log("x == y", x >= y);
console.log("x == y", x <= y);

/* 
    Логічні та оператори типів
*/
x = 1;
y = 1;
console.log("x && y", x && y);
console.log("x || y", x || y);
console.log("!x", !x);

/* 
    Побітові оператори
*/
console.log("x & y", x & y);
console.log("x | y", x | y);
console.log("~x", ~x);
console.log("x ^ y", x ^ y);
console.log("x << y", x << y);
console.log("x >> y", x >> y);
console.log("x >>> y", x >>> y);
/* 
    умовні конструкції
*/
let shop_state = "open";
if (shop == "open") {
  console.log(`shop is open`);
} else {
  console.log("shop is close");
}
/* 
    ? тернарний оператор
*/
shop_state = "close";
let result = shop_state == "open" ? "Come in" : "Come in tomorrow!";
console.log(result);
/* 
    switch... case
    switch()
*/
const today_day = "Monday";
switch (day) {
  case "Monday":
    {
      console.log("Hi there! How can I help you?");
    }
    break;

  case "Tuesday":
    {
      console.log("We work only at Mondays!");
    }
    break;

  default: {
    console.log("Enter day of the week");
  }
}
