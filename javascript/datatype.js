
// dynamic type language
let message = " Hello world";
message = 10;

//number 
let n = 10;  // integer
n = 12.234;
n = Infinity;
console.log(n);
console.log(1/ 0);  // infinity
n = -Infinity;
console.log(n);
console.log (-1/ 0);

a = NaN;  //Not a number
console.log(n);
console.log("same the number"/2);


console.log('1',2);
console.log(1 + '2');
console.log(1+ 1+ '2'); // -> 2 + '2' -> '22
console.log('1' + 1 +2); // -> '11'  + 2 -> '112'

let x = '10';
console.log(x + 20); // 1020
console.log(+x + 20); // 30
console.log(Number(x) + 20); //30
console.log(Number(x)); //10

console.log(+'Hello'); //NaN
console.log(Number('Hello'));  //NaN

console.log(NaN+1);  //NaN

console.log(0.1 + 0.2);
//Range of number is -(12*5-1) to (2*5) -1)
let n1 = 10n;  //bigint
console.log(typeof n1);


//template strings
const str3 = `
<div>
    Hello ${username}
    ${4+5}
    ${Math.random}

   </div>
  `;

   
  console.log(str3);


