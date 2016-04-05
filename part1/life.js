'use strict'
//polymorphism
class Life {

  madeOf(){
    retun ['atoms', 'particles', 'hydorogen', 'oxygen']
  }

  consume(food){
    let energy = food.energy
    this.energy += energy
    this.mood ++;
    console.log('made it')
  }

  die(object){
    Universe.reabsorb(this)
  }

}

module.exports = Life
