'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';
box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//       hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
      item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');//СОЗДАЕМ ДИВ
const text = document.createTextNode('Тут был я');

div.classList.add('black');//ДОБАВЛЯЕМ КЛАСС К ЭЛЕМЕНТУ

document.body.append(div);//ДОБАВЛЯЕМ ЭЛЕМЕНТ В КОНЕЦ СТРАНИЦЫ
// wrapper.append(div);//ВТОРОЙ СПОСОБ (В КОНЕЦ РОДИТЕЛЯ)
//wrapper.appendChild(div);//СТАРЫЙ МЕТОД
// wrapper.prepend(div);//ВТОРОЙ СПОСОБ (В НАЧАЛО РОДИТЕЛЯ)

//hearts[0].after(div);//ДОБАВЛЯЕМ ПОСЛЕ ОПР. ЭЛЕМЕНТА. ЕСТЬ ЕЩЕ BEFORE СООТВЕТСТВЕННО

//circles[0].remove();//УДАЛЯЕМ ЭЛЕМЕНТ
//hearts[0].replaceWith(circles[0]);//ЗАМЕНА ОДНОГО ЭЛЕМЕНТА НА ДРУГОЙ

div.innerHTML = "<h1>Hello World!</h1>"; //ЧДОБАВЛЯЕМ КОД В HTML

//div.textContent = "Hello";//СООТВЕТСТВЕННО ДОБАВЛЕНИЕ ТЕКСТА

div.insertAdjacentHTML("afterend", "<h2>Hello</h2>");// ЗДЕСЬ 4 СПОСОБА ДОБАВЛЕНИЯ













































