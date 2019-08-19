"use strict";

let money = +prompt("Ваш бюджет на месяц",""),
    time = prompt ("Введите дату в формате YYYY-MM-DD","");

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

/*
for (let i = 0; i < 2; i++) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется?", '');

	if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null 
		&& a != '' && b != ""	)  {
		appData.expenses[a] = b // пара: ключ – значение!
		console.log("Done "+i);
	}  else {
		console.log('"Error '+ i +'" – повторяем цикл')
		i--
	}
}
*/


let i = 0;
while (i < 2) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется?", '');
	if ((typeof(a)) != null && (typeof (b)) != null && a != '' && b != "") {
		i++
		appData.expenses[a] = b;
		console.log("Done")
	} else {
		console.log('"Error '+ i +'" – повторяем цикл')
		i-- 
		}
	}
}
		
appData.moneyPerDay = appData.budget / 30;

alert("Буджет на месяц " + appData.moneyPerDay);

if (appData.moneyPerDay < 300 ) {
	console.log ("Низкий уровень достатка")
} else if (appData.moneyPerDay > 300 && appData.moneyPerDay < 1000) {
	console.log ("Средний уровень достатка")	
} else if (appData.moneyPerDay > 1000) {
	console.log("Высокий уровень достатка")
}