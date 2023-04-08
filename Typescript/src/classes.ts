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
  protected name: string;
  stregth: number;
  skill: number;

  constructor(name: string, stregth: number, skill: number) {
      this.name = name,
      this.stregth = stregth,
      this.skill = skill

  }

  attack(): void {
    console.log(`Attack with ${this.stregth} points`);

  }
}

// Character: Superclass
// Magician: Subclass

class Magician extends Character {
  magicPoints: number;
  constructor(name: string, stregth: number, skill: number, magicPoints: number) {
    super(name, stregth, skill);
    this.magicPoints = magicPoints
  }
}

const p1 = new Character("Superman", 10, 98)
const p2 = new Magician('Mago', 09, 30, 100)

p1.attack();
p2.attack()

