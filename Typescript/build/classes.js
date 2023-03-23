"use strict";
/**
 * Classes
 */
/*
  Data modifiers
  Public
  Private
  Protected
*/
class Character {
    constructor(name, stregth, skill) {
        this.name = name,
            this.stregth = stregth,
            this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
}
// Character: Superclass
// Magician: Subclass
class Magician extends Character {
    constructor(name, stregth, skill, magicPoints) {
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}
const p1 = new Character("Superman", 10, 98);
const p2 = new Magician('Mago', 09, 30, 100);
p1.attack();
p2.attack();
