const arr = [1,2,3,4,5];
console.log(arr);
console.log(arr[2]);
arr[3]=40;
console.log(arr);

const arr1 = [1, 'Hello',true, [2,3]]
console.log(arr1);

console.log('arr,length', arr.length);
console.log ('!toString',arr);
console.log('toString',arr.toString());
console.log('join',arr.join(' +=+ '));

const arr2 = [1,2,3,4,,5];
console.log('arr2' , arr2 );

arr2.push(6); // add element at the end 
console.log('after push',arr2);

arr2.push(7,8);
console.log('after push', arr2);

arr2.pop(); // remove elememt from the end
console.log('after pop', arr2);

arr2.shift(); // remove element from the start
console.log('after shift', arr2);

arr2.unshift(-1,0); //add element at the the start
console.log('after unshift' , arr2);

const fruits =['apple','banana', 'orange','chikoo'];
console.log('fruits',fruits);

fruits.splice(2, 0,'orange'); // add orange at index 2,  not removing anything

console.log('after splice add',fruits);
fruits.splice(3,1); // remove 
// fruits.splice(3,2); //remove 2 elements from index 3

console.log('after splice delete',fruits);


console.log('slice method' , fruits.slice(1,2));
console.log('after slice',fruits);


// merge arrays
const a = [1,2,3];
const b = [4,5];
let  newArr =a.concat(b);
console.log(newArr);

const c = [6, 7];
newArr = a.concat(b.c);
console.log(newArr);

const multiDArr = [
    [1,2],
    [3,4],
    [5,6]
];

console.log('flat', multiDArr.flat());  // flatten the array



