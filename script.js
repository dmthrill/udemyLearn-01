"use strict";

let money, time;

function start() {
	money = +prompt("Ваш бюджет на месяц","");
	time = prompt ("Введите дату в формате YYYY-MM-DD","");
	
	while (isNaN(money) || money == "" || money == null ) {
		money = +prompt("Ваш бюджет на месяц","");
	}
}
start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true,
};

function chooseExpenses() {
	for (let i = 0; i < 2; i++) {
		let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
			b = prompt("Во сколько обойдется?", '');
	
		if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null 
			&& a != '' && b != ""	)  {
			appData.expenses[a] = b // пара: ключ – значение!
			console.log("Done "+i);
		}  else {
			console.log('"Error '+ i +'" – повторяем цикл')
			i--;
		}
	};
}

chooseExpenses();

function detectDayBudget() {
	appData.moneyPerDay = (appData.budget / 30).toFixed(2);
	alert("Буджет на 1 день составляет " + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
	if (appData.moneyPerDay < 300 ) {
		console.log ("Низкий уровень достатка")
	} else if (appData.moneyPerDay > 300 && appData.moneyPerDay < 1000) {
		console.log ("Средний уровень достатка")	
	} else if (appData.moneyPerDay > 1000) {
		console.log("Высокий уровень достатка")
	}
}

detectLevel();

function checkSavings() {
	if (appData.savings == true) {
		let save = +prompt("Какова сумма накоплений", ""),
			percent = +prompt("Под какой процент?");

			appData.monthIncome = (save/100/12*percent).toFixed(2);
			alert("Доход в месяц " + appData.monthIncome);
	}
}

checkSavings();
