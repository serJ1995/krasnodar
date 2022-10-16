'use strict';

const box = document.getElementById('box');
console.log(box);


const btns = document.getElementsByTagName('button');//ПОЛУЧАЕМ ТОЛЬКО ВТОРУЮ КНОПКУ  [1] после button
console.log(btns[1]);//ВТОРОЙ ВАРИАНТ ТАКОГО ЖЕ ДЕЙСТВИЯ^

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart');
hearts.forEach(item=>{
  console.log(item);
});//ПОЛУЧАЕМ ЭЛЕМЕНТЫ С УКАЗАННЫМ КЛАССОМ

const oneHeart = document.querySelector('.heart');// СЕЛЕКТОР ПОЗВОЛЯЕТ ПОЛУЧИТЬ ПЕРВЫЙ ЭЛЕМЕНТ НА СТРАНИЦЕ ПО ДЕРЕВУ
console.log(oneHeart);







































