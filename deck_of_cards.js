
class Card {
    constructor(name, suit, value) {
        this._name = name;
        this._suit = suit;
        this._value = value;
    }

    show() {
        console.log(`${this.name}, ${this.suit}, ${this.value}`)
    }
}
class Deck {
  constructor() {
    this.names = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
    this.suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
    this.deck = [];
    
    for (let i = 0; i < this.names.length; i++){
        for (let k = 0; k < this.suits.length; k++){
            let card = new Card (this.names[i], this.suits[k], i+1)
            this.deck.push(card)
        }
    }
    console.log(this.deck)  
  }
  shuffle() {
  var m = this.deck.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = this.deck[m];
    this.deck[m] = this.deck[i];
    this.deck[i] = t;
  }

  console.log(this.deck);
  }
  reset(){
    this.deck = new Deck()
    console.log("Deck reset!")
  }
  deal(){
  var index = Math.floor(Math.random()*this.deck.length)
  var temp = this.deck[index]
  console.log("==================")
  console.log(temp)
  // deck.pop(temp)
  this.deck.splice(index, 1)
  console.log(this.deck)
  return temp

  }
}

class Player {
  constructor(name, hand) {
    this.name = name;
    this.hand = [];
  }
  createHand(deck) {
    for (var i = 0; i<7; i++){
          var card = deck.deal()
          this.hand.push(card)
          console.log(this.hand)
    }
  }
  discardCard(discard) {
    discard = this.hand[discard]
    this.hand.splice(discard, 1)
    console.log("Card discarded!")
    return this.hand;
  }
  
}

var asdf = new Deck()
var bob = new Player()
bob.createHand(asdf)
bob.discardCard(1)
