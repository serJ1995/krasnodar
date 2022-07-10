'use strict';

//To string
// 1)]
 console.log(typeof(String(null)));
 console.log(typeof(String(4)));

 //2) конкатенация
 console.log(typeof(5 + ''));



 const num = 5;
 console.log("https://vk.com/catalog/" + num);

 const fontSize = 26 + 'px';


 //TO NUMBER
 //1)
 console.log(typeof(Number('4')));
 
 //2)
console.log(typeof(+ '5'));

// 3)
console.log(typeof(parseInt("15 px", 10)));

let answ = +prompt("Hello", "");

//TO BOOLEAN

0, '', null, NaN, undefined; //FALSE
// ВСЕ ОСТАЛЬНОЕ БУДЕТ true

// 1)
let switcher = null;
if (switcher){
    console.log("Working");
}

switcher = 1;
if (switcher){
    console.log("Working");
}


// 2)
console.log(typeof(Boolean('4')));

// 3)
console.log(typeof(Boolean(!!"3536253")));









































