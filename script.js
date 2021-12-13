
' use strict ';

const arr = [1, 12, 42, 6, 18];
arr.sort(compareNum);//СОРТИРУЕМ ПО ВОЗРАСТАНИЮ ПЕРВОГО ЧИСЛА
console.log(arr);

function compareNum(a, b) { // СОРТИРУЕМ ЧИСЛА ПРАВИЛЬНО 
    return a - b;
}

// arr[99] = 0; //НАРУШАЕМ ПОРЯДОК ЭЛЕМЕНТОВ В МАССИВЕ
// console.log(arr.length); //ПОЛУЧАЕМ 100 ЭЛЕМЕНТОВ
// console.log(arr); //+94 ПУСТЫЕ ЯЧЕЙКИ

// arr.forEach(function (item, i, arr){
//     console.log(`${i}: ${item} внутри массива ${arr}`); //ИНТЕРЕСНЫЙ ПЕРЕБОР С МЕТОДОМ FOREACH? В ОСНОВНОМ ИСПОЛЬЗОВАТЬ ЕГО
// });

//arr.pop();//УБИРАЕМ ПОСЛЕДНИЙ ЭЛЕМЕНТ МАССИВА
// arr.push(10);//ДОБАВЛЯЕМ ЭЛЕМЕНТ В КОНЕЦ
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {//ПЕРЕБИРАЕМ ЭЛЕМЕНТЫ МАССИВА С ПОМОЩЬЮ ПРОСТОГО ЦИКЛА
//     console.log(arr[i]);
// }

// for (let value of arr){//ПЕРЕБОР С ПОМОЩЬЮ ЦИКЛА FOR OFF
//     console.log(value);
// }

// const str = prompt("", "");
// const product = str.split(", ");// МЕТОД СПЛИТ. ИЗ СТРОКИ ПОЛУЧАЕМ МАССИВ
// product.sort();//МЕТОД СОРТИРОВКИ ПО АЛФАВИТУ
// console.log(product.join('; '));//ИЗ МАССИВА СКЛЕИВАЕМ В СТРОКУ