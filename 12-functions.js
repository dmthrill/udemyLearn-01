// Function Expression
let calc = function(a,b) {
    return (a + b);
}

//стрелочныя функции
let anotherCalc = (a,b) => a+b
console.log(calc(3,4));
console.log(anotherCalc(8,4));

// Function Declaration
function retVar() {
    let num = 50;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);

//Вспомогательные МЕТОДЫ И СВОЙСТВА
//_________________________________
let str = "test";
console.log(str.length); // - Вызов свойства (без скобок)
console.log(str.toUpperCase()); // - Вызов метода (со скобками)
console.log(str.toLowerCase());

let twelve = "12.2px";
//console.log(Math.round(twelve))
console.log(parseInt(twelve));
console.log(parseFloat(twelve));
