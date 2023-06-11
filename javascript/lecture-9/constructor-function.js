// constructor
//1. a new empty object is created and assigned ti this
//2. add properties to this
//3. the value this is returned
function User(name) {
    // this = {}  (implicity)
    // addd properties to this 
     this.name = name; 
    this.sayHi = function() {
     console.log('Hi' + this.name);
 
    }
 }
 
 const user = new User('Pranit');
 console.log(user.name);
 user.sayHi();
 
 let user1 = {
    name: 'swapnal',
    sayHi:function(){
       console.log('Hi' + this.name);
 
    }
 };
 console.log(user1);
 user1sayHi();
 
 
 function MyUser(){
    name: 'MyName'
    return { age:21}; // if you return value, then this object will be returned 
 }
 
 let myUser = new MyUser();
 console.log('myUser', myUser);
 
 function MyUser1(){
    this.name = 'MyName1';
    return  1;
 }
 let myUser1 = new MyUser1();
 console.log('myUser1',myUser1);
 