class CoffeMatch{
    waterAmount = 0 ;


    get waterAmount(){
        return this.#waterAmount;
    }

    set waterAmount(value){
        if(value > 0){
            this.#waterAmount = value;
        }
        
    }
    #power; // if you just write getter method, then property becomes read-only
    get power(){
        return this.#power;
    }
    constructor(power){
        this.power = power;
        console.log('Coffe machine is created with power', this.#power);

    }
    brewCoffe(){
        console.log('Brewing coffe with', this.#waterAmount);

    }
}

const machine =new CoffeMachine(100);
machine.waterAmount = 200;
console.log(machine.waterAmount);
machine.brewCoffe();

machine.waterAmount = -100;
machine.brewCoffe();


machine.power = 50;
console.log(machine.power);