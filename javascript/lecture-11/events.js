
function sayHi(){
    alert('Hi');
}

const btn1 = document.getElementById('elem');
btn1.onclick =function(){
    alert('Hi from button 2');
};

btn1.onclick = function(){
    alert('Hi from button 3111111');

};

btn1.addEventListener('click',function (event){
    console.log('onclick 1', event);
    console.log('click 1');

});

btn1.addEventListener('click' , function (event){
    console.log('click 2' , event);
    console.log('click 2');

});

document.addEventListener('DOMContentLoaded', function() {
    const btn2 = document.getElementById('btn2');
    console.log(btn2);
    btn2.onclick = sayHi;


});
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
div1.onclick = function(){
    alert('div1');

};
div2.onclick = function(event){
    event.stopPropagation();
    alert('div2');

};

function callEvent(event){
    event.preventDefault();
    alert(event.target)
}

