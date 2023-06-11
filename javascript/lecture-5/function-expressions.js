// function declaration
function sayHi(){
    console.log('hi');

  }
  sayHi();

  //function expressions
  const greet = function (){
    console.log('Good evenong');
  };
  greet();

  fun1(); // can call a function before declaring it
  function fun1(){
    console.log('fun1');

  }

  //fun2() ;  // erroe , cannot access fun2 before  initilization
  let fun2 = function(){
    console.log('fun2');

  };

  let age = prompt('Enter your age?');

  let Welcome;
  if ( age < 18) {
    Welcome = function(){
        console.log('Hello');

    }
  }  else {
     Welcome = function(){
        console.log('Greetings!..');

    } 
  }
  Welcome();