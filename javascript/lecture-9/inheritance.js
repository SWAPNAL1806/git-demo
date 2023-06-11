class Person {
    constructor(name){
        this.name = name;


    }
    sayHi(){
        console.log('Hi' + this.name);
        
     }
}
 
class Student extends Person {
    constructor(name, rollNo) {
        super(name);
        this.rollNo = rollNo;
    }
    sayHi(){
        super.sayHi();
        console.log('student says hi!');
    }
    sayHello(){
        
        console.log('hello my name is '+ this.name + ',rollNo:'+ this.rollNo);
    }
    
    
    }
    
    
   

let student1 = new Student('swapna',7);
student1.sayHello();
student1.sayHi();
