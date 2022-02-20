' use strict ';

let a = 5,
    b = a;
b = b + 5;
console.log(b);
console.log(a);

// const obj = {
//     a : 5,
//     b : 1
// };

// const copy = obj; //ссылка на уже существующий объект
// copy.a = 10;

// console.log(copy);
// console.log(obj);



function copy(mainObj) {
    let objCopy = {};

    let key;
    for ( key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy (numbers); //КЛОНИРУЕМ ОБЪЕКТ

newNumbers.a = 10;
newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);
 //ЗАПОМНИТЬ. БЫВАЮТ ГЛУБОКИЕ И ПОВЕРХНОСТНЫЕ КОПИИ ОБЪЕКТОВ


 const add = {
     d : 17,
     e : 20
 };

 console.log(Object.assign(numbers, add)); //СОЕДИНЯЕМ 2 МАССИВА 

 const clone = Object.assign({}, add);
 clone.d = 20;

//  console.log(add);
//  console.log(clone);


const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();  //КОПИРУЕМ МАССИВ

newArray[1] = 'sadlkfjjksd';
console.log(oldArray);
console.log(newArray);


const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook']; //СПРЕД МЕТОД РАЗВОРАЧИВАНИЯ И СКЛАДИРОВАНИЯ МАССИВОВ

console.log(internet);




function log (a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);




const array = ['a', 'b'];
const newAaray = [...array];

console.log(array);
console.log(newAaray);



const q = {
    one: 1,
    two: 2
};
const newObJ = {...q};
console.log(newObJ);







