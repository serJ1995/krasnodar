'use strict';

//  Какое будет выведено значение: 
let x = 5; 
alert( x++ ); 
//ответ 5

//  Чему равно такое выражение: 
[ ] + false - null + true
console.log([] + false);//false
console.log(typeof([] + false));//string
console.log([] + false - null);//NaN
console.log([] + false - null + true);//NaN




//  Что выведет этот код:
 let y = 1;
  let x = y = 2; 
  alert(x); 
  //ответ 2

//  Чему равна сумма
 [ ] + 1 + 2
 console.log([] + 1 + 2);
 //12

//  Что выведет этот код:
 alert( '1'[0] );
 //1

//  Чему равно 
console.log(2 && 1 && null && 0 && undefined);
//null     & ЗАПИНАЕТСЯ НА ЛЖИ
//         || ЗАПИНАЕТСЯ НА ПРАВДЕ

//  Есть ли разница между выражениями?
 console.log(!!( 1 && 2 ) === (1 && 2));
 //false 
 // !! переводит в булиновое значение


//  Что выведет этот код: 
                  3
alert( null || 2 && 3 || 4 ); 
// 3


const a = [1, 2, 3];
const b = [1, 2, 3];
console.log(a == b);
//  Правда ли что a == b ?
// false ДВА РАЗНЫХ ХРАНИЛИЩА С ОДИНАКОВЫМИ ДАННЫМИ


//  Что выведет этот код:
 alert( +"Infinity" ); 
 // Infinity

//  Верно ли сравнение:
"Ёжик" > "яблоко";
console.log("Ёжик" > "яблоко");
//false НУЖНО СМОТРЕТЬ ЮНИКОД

//  Чему равно
console.log(0 || "" || 2 || undefined || true || falsе);
//2 
// || ЗАПИНАЕТСЯ НА ПРАВДЕ? И ДАЛЬШЕ КОД НЕ ПОЙДЕТ








































