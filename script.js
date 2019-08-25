"use strict";

let money, time;
function start() {
	money = +prompt("Ваш бюджет на месяц","");
	time = prompt ("Введите дату в формате YYYY-MM-DD","");
	while (isNaN(money) || money == "" || money == null ) {
		money = +prompt("Ваш бюджет на месяц","");
	}
}
//start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: ["абра", "кадабра", "парампапам", "кабла" ],
	timeData: time,
	savings: true,
	chooseExpenses: function () {
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
	}},
	detectDayBudget: function () {
		appData.moneyPerDay = (appData.budget / 30).toFixed(2);
		alert("Буджет на 1 день составляет " + appData.moneyPerDay);
	},
	detectLevel: function () {
		if (appData.moneyPerDay < 300 ) {
			console.log ("Низкий уровень достатка")
		} else if (appData.moneyPerDay > 300 && appData.moneyPerDay < 1000) {
			console.log ("Средний уровень достатка")	
		} else if (appData.moneyPerDay > 1000) {
			console.log("Высокий уровень достатка")
		}
	},
	checkSavings: function () {
		if (appData.savings == true) {
			let save = +prompt("Какова сумма накоплений", ""),
				percent = +prompt("Под какой процент?");
				appData.monthIncome = (save/100/12*percent).toFixed(2);
				alert("Доход в месяц " + appData.monthIncome);
		}
	},
	chooseIncome: function () {
		let items = prompt("Введиете дополнительный доход через запятую", "");
		if ( (typeof(items) != null) && (typeof(items) ==='string') && (items != '') ) {
		appData.income = items.split(", ");
		appData.income.push(prompt("Может что-то еще?", ""))
		appData.income.sort();

		// Вывод результатов
		console.log("Способы доп. заработка:")
			appData.income.forEach(function(item, i , income){
			console.log( (i + 1) +  ". " + item )
			});
		} else {
			console.log("ошибка")
		}
	},showData: function() {
		console.log('Наша программа включает в себя данные: ')
		for (let key in appData ) {
			console.log(key)
		}
	},


};




