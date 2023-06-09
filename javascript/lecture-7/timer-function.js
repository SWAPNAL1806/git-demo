/*const timerId = setTimeout( () => {
    console.log('hello');

}, 0);
console.log ('done');*/

const id = setInterval(() => {
    console.log('hello');
},1000);

setTimeout( () => {
    clearTimeout(id);

},500);
