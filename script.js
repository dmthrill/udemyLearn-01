"use strict";

let money = prompt("Ваш бюджет на месяц","00000"),
    time = prompt ("Введите дату в формате","YYYY-MM-DD"),
    appData = {
        budget: money,
        timeData: time,
        expenses: { 
            firstAnsw: prompt("Введите обязательную статью расходов в этом месяце","..."),
            secondAnsw: prompt("Во сколько обойдется?","..."),
        },
        optionalExpenses: undefined,
        income: [],
        savings: false
    };

alert(appData.budget)


console.log(appData.budget);
console.log(appData.timeData);
console.log(appData.expenses.firstAnsw);
console.log(appData.expenses.secondAnsw)