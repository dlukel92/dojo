function Ninja(name){
    this.health = 100
    var speed = 3
    var strength = 3
    this.name = name;
    this.sayName = function(){
        console.log("My name is " + this.name)
    }
    this.showStats = function(){
      console.log(speed, strength)
    }
    this.drinkSake = function(){
      this.health += 10
      console.log(this.health)
    }
}
var ninja1 = new Ninja("Hyabusa");
ninja1.name
ninja1.health
ninja1.sayName()
ninja1.showStats()
ninja1.drinkSake()
