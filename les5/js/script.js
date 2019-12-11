let 
list = document.querySelector('.menu'),
title = document.getElementById('title'),
feedBack = document.getElementById('prompt'),
adv = document.querySelector('.adv');

list.innerHTML = `<li class="menu-item">Первый пункт</li>
                   <li class="menu-item">Второй пункт</li>
                   <li class="menu-item">Третий пункт</li>
                   <li class="menu-item">Четвёртый пункт</li>
                   <li class="menu-item">Пятый пункт</li>`

document.body.style.background= "url(img/apple_true.jpg)";

title.textContent = 'Мы продаём только подлинную технику Apple';

adv.remove();

question=prompt('Вопрос');
if (typeof feedBack.innerText !== 'undefined') {
    feedBack.textContent=question;
} else {
    feedBack.textContent='Неопределено';
};
