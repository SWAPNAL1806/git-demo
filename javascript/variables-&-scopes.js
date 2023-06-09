

//console.log('variables-&-scopes');

//let a= 10;
//var b =30;
//const c =12;

//console.log(a,b,c);
//console.log(b);
//console.log(c);
var a= 10;
console.log('a',a);
{
    var b = 20; // variables declared with var keyword are not bord scope
   // let c = 30; // variables declared with let/const are block scoped

}
console.log('b', b);
//console.log('c',c);    // error here -> c is not defined

if(true){
    // block scope
}

for (var i = 0; i < 5; i++) {
    // block space
    //console.log(i);
}
console.log(i)
function fun1(){
    // function/local scope
    var result = 10 + 20 ; // variables are declared with var/let/const keyword function

  console.log(result);

}
fun1();

// console.log(result);  // error here -> result is not defined
