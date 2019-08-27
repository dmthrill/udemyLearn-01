// - to String
// 1 - String()
console.log(typeof(String(4)))
// 2 - Контактинация
console.log("ww"+"err")

// - to Number
// 1 - Number()
console.log(typeof(Number("5")))
// 2 - Унарный плюс
console.log(typeof(+"5"))
// 3 - 
console.log(typeof(parseInt('15px', 10)))

// - to False
// 0, "", null, undefined, NaN - false
// все остальное – true


// 1.
let switcher = null
if (switcher) {
    console.log("Working...")
} else {console.log("Not working")}
switcher = 1;
if (switcher) {
    console.log("Working...")
} 

// 2. Boolean()
console.log(typeof(Boolean("5")));

// 2. !!x
console.log(typeof(!!"5"));