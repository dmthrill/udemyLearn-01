let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

console.log("Имя объекта – " + options.name);

console.log(options);

// // Перебор обьекта
// // МЕТОДЫ И СВОЙСТВА
for (let key in options) {
    console.log("Cвойство " + key + " имеет значение " + options[key])
};

let arr = ["first", 2, 3, 'four', 5];
//arr[99] = 99; 
//console.log(arr.length)
console.log(arr);

arr.pop(); // удаляет с конца
arr.push("5"); // добавлеяет в конец
arr.shift(); //  - 1-й элемент с начала
arr.unshift("1"); // + к началу

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


// //МЕТОД ПЕРЕБОРА МАСИВА forEach
arr.forEach(function(item, i , mass) {
    console.log(i + ": " + item + " (Массив: " + mass + ")")
});

// Перебор с помощью for in/off
let mass = [1,3,4,6,7];
for (let key of mass) {
     console.log(key)
}

//Переврдит строку в массивс помощью метода split()
let ans = "arr,ttt,ooo,www"
     arr = [];
 arr = ans.split(',');
 console.log(arr);


//Переврдит массив в строку с помощью метода join()
let arr = ["asdf", "teee", "ftree", "fggtr"]
    i = arr.join(", ")
    console.log(arr)

//Сортировка элементов массива с помощью метода sort()
let arr = ["asdf", "teee", "ftree", "fggtr"]
    arrA = ["1", "15", "4", "8"]
    x = arrA.sort(compareNum)
    
    function compareNum(a,b) {
        return a-b;
    }

    console.log(arr)