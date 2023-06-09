console.log(this); // window

function sayHi(){
    console.log('sayHi'), this  // say hi
}
sayHi();

const sayHello = () => {
    console.log('sayHello', this);  // say hi in user

} 
 sayHello();

 const user = {
    name:'swapnal',
    age:20,
    sayHi: function(){
        console.log('sayHi in user', this);  // this will print the object who is calling sayHi function


    },
    sayHello: () => {
        console.log( 'sayHello in user', this);  // this will print the object in the context in the contact in which
    }
 };
 user.sayHi();
user.sayHello();

const group = {
    title:'Mrs',
    usernames: ["pranit", "swapnal"],

    showUsers : function(){
        this.usernames.forEach(function(name) {
            console.log(this.title + '' + name);

        } );
        this.usernames.forEach((name) => {

        });
        this.usernames.forEach((name) => {
            console.log(this.title + '' + name);
        });
    }
};
group.showUsers();
 
 
