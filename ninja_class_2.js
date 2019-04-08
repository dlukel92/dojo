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
    this.punch = function(target){
        target.health -= 5
        console.log(target.health)
    }
    this.kick = function(target){
        target.health -= 15*strength
        console.log(target.health)
    }
    
}
var ninja1 = new Ninja("Hyabusa");
var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");

redNinja.punch(blueNinja);
blueNinja.kick(redNinja)


ninja1.name
ninja1.health
ninja1.sayName()
ninja1.showStats()
ninja1.drinkSake()
