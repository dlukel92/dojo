class Ninja {
    constructor(name) {
        this.health = 100;
        this.speed = 3;
        this.strength = 12;
        this.name = name;
    }

    sayName() {
        console.log(`My name is ${this.name}`);
    }
    showStats() {
      console.log(`Health ${this.health} | Strength ${this.strength} | Speed ${this.speed}`)
    }
    drinkSake() {
      this.health += 10;
      console.log(this.health)
    }
}
    class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom() {
      this.wisdom += 10
      console.log(`I am feeling wiser`)
      console.log(this.wisdom)
    }
}
const sensei = new Sensei("Kahuna")
const ninja1 = new Ninja("Bob");

sensei.speakWisdom()
