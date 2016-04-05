'use strict'
let Life = require('./life')
//polymorphism
// inheritance
//Make this into Abstract class
class  Elephantidae extends Life {
  description(){
    return {
         //put an input here , and use bracket notation to return the information
             blood: 'warm',
             legs: 4,
             height: '10–11 Feet',
             weight: '5 Tons',
             ancestors:  ['Primelephas', 'Stegodibelodon'],
             habitat: "African Bushes"
           }
  }


//make this into a private method
  starve(){}

  feelHungry(){
     this.mood --;
     this.energy --;
   }

  walk(){ return 'One step, two step' }
  breathe(){ return 'Hmmmmmmm, Ahhhhh' }

}

module.exports = Elephantidae;
