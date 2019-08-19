let num = 50;

if (num < 49) {
    console.log("Неверно")
} else if (num > 100) {
    console.log("Многовато")
} else {
    console.log("Верно")
}

//Тернарный оператор
(num == 50) ? console.log("Верно") : console.log("Неверно")

switch (num) {
    case num < 49:
        console.log("Неверно");
        break;
    case num > 100:
        console.log("Много");
        break;
    case num > 80:
        console.log("Все ещё много");
        break;
    case num = 50: // !!!!!!! num == 50 – это ошибка
        console.log("Верно");
        break; 
    default:
        console.log("Ошибка");
        break;
}