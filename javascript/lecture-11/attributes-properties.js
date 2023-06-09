
// <body id="page1">  id -> attribute
// body.id = "page1"; id -> property

document.body.myData = {
    name : 'abc'
};
console.log(document.body.myData);

document.body.sayHi =() => {
    console.log('hi');
}
console.log(document.body.id);
// non-standard attributs does not yield any property in dcument  // undefined
console.log(document.body.something);


// has Attributes(name) - checks whether attributes exists or not
// get attributes(name) - get the value attributes name
// setAttributes(namw, value) - set the value of attributes name
// removeAttributes(name) - remove 

console.log(document.body.hasAttribute('id'));  // true
console.log(document.body.hasAttribute('something'));  // true
console.log(document.body.getAttribute('something'));  // non-standard

 const myDiv = document.getElementById('my-div');
 console.log(myDiv.style);
 console.log(myDiv.getAttribute('style'));

 const myInput = document.getElementById('my-input');
 console.log(myInput.checked);
 