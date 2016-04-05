'use strict'
// let Instincts = require('./instincts')
let Elephantidae = require("./elephantidae")

class Elephant extends Elephantidae {
  //inherits from a species
  constructor(name){
    super('this')
    this.name = name,
    this.mood = 5,
    this.lifeForce = 200,
    this.energy = random(),
    this.skills = {}
  }

  learn(skillName, execution){
    this.skills[skillName] = execution
  }

  // get skills(){
  //   return skills.forEach((k,v)=> console.log(k))
  // }

  play(){
    // confirm
    this.mood ++;
    console.log('im playing')
  }

}

module.exports = Elephant
