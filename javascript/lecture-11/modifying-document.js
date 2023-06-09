// create element
// crete textNode

const liEl = document.createElement('li');
liEl.innerHTML = 'Hi';
liEl.style.color = 'red';


console.log(liEl);

const messageContainer = document.getElementById('message-container');
messageContainer.append(liEl);

const liEl= document.createElement('li');
liEl.innerHTML = 'hello';
liEl.style.color = 'red';
messageContainer.prepend(liEl);


const  divEl1 = document.createElement('li');
divEll.innerHTML = 'before';
messageContainer.before(divEl);

const divEl = document.createElement('div');
divEll.innerHTML = 'after';
messageContainer.after(divEl1);

setTimeout{ () => {
    divEl1.remove();
},2000

};

const menuDiv =document.getElementById('menu');
console.log(menuDiv.className);  // class name gives you classes in string
console.log(menuDiv.classList);  // 

menuDiv.classList.add('menu-item');
menuDiv.classList.remove('active');
