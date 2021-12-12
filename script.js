
' use strict ';

const arr = [1, 2, 4, 6, 8];

// arr[99] = 0; //НАРУШАЕМ ПОРЯДОК ЭЛЕМЕНТОВ В МАССИВЕ
// console.log(arr.length); //ПОЛУЧАЕМ 100 ЭЛЕМЕНТОВ
// console.log(arr); //+94 ПУСТЫЕ ЯЧЕЙКИ

arr.forEach(function (item, i, arr){
    console.log(`${i}: ${item} внутри массива ${arr}`); //ИНТЕРЕСНЫЙ ПЕРЕБОР
});

//arr.pop();//УБИРАЕМ ПОСЛЕДНИЙ ЭЛЕМЕНТ МАССИВА
// arr.push(10);//ДОБАВЛЯЕМ ЭЛЕМЕНТ В КОНЕЦ
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {//ПЕРЕБИРАЕМ ЭЛЕМЕНТЫ МАССИВА С ПОМОЩЬЮ ПРОСТОГО ЦИКЛА
//     console.log(arr[i]);
// }

for (let value of arr){//ПЕРЕБОР С ПОМОЩЬЮ ЦИКЛА FOR OFF
    console.log(value);
}