const user = new Object();
user.name = 'swapnal';
console.log(user);

// object literal 
const user1 = {
    name: 'Ajay'
};
user1.age = 20
console.log(user1);

delete user1.age;
console.log('after deleting age', user1);

const mystery = "answer";

const user2 = {
    name: 'swapnal',
    age: 23,
    0: 'hello',
    let:10,
    "likes apples": true,
    [mystery] : 10,
    [mystery + "gift"]: 20
};

console.log(user2.name);
console.log(user2.age);
console.log(user2.let);
console.log(user2["likes apples"]);
console.log(user2[0]);
console.log(user2["0"]);


delete user2["likes apples"];
console.log(user2);

const key = prompt ("what do you want to know about the user?", "name")
console.log(user2[key]); // -> user2['name']



function makeuser(name,age) {
    return {
        name,  // name: name ->  
        age
    };

// "in " operator to check wheteher key/property exists in the object or not 

}

/*const user3 = makeUser("swapnal" , 21);
console.log('user')*/

for ( let key in user2) {
    console.log(key, user2[key]);

}