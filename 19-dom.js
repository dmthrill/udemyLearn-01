let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    firstHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'orange';
circle[2].style.backgroundColor = 'green';

/*
for (let i = 0; i < heart.length; i++) {
    heart[i].style.backgroundColor = 'blue'
}
*/


// метод forEach работает только с 
heart.forEach(function(item, i) {
    heart[i].style.backgroundColor = 'blue'
});


let div = document.createElement('div'),
    text = document.createTextNode('Тут был я');
    
div.classList.add('black');
 

//div.innerHTML = '<h1>Hello World!</h1>'
div.textContent = '<h1>Hello World!</h1>';


//document.body.appendChild(div); // ДОБАВЛЕНИЕ В КОНЕЦ ДОКУМЕНТА
//wrapper.appendChild(div); // ДОБАВЛЕНИЕ В КОНЕЦ ЭЛЕМЕНТА
document.body.insertBefore(div, circle[0]) // ДОБАВЛЕНИЕ ПЕРЕД ЭЛЕМЕНТОМ
document.body.removeChild(circle[2]);
wrapper.removeChild(heart[1]);

document.body.replaceChild(btn[1], circle[1]);



console.log(heart)
