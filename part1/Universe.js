'use strict'
// let Elephant = require('./elephant')
// let Grass = require('./grass')

//singleton pattern
class Universe{
  constructor(){
    this.energy = 50000000,
    this.life = []
  }

  static create(someClass){
    return new someClass
  }
  //
  //  reabsorb(object){
  //   this.energy += object.lifeForce;
  //   let location = Universe[object].indexOf(object);
  //   Universe[object][location].delete()
  //   return ''
  // }
}

// Universe.creations = [];

module.exports = new Universe()
