/**
 * Classes
 */

class Character {
  name: string;
  stregth: number;
  skill: number;

  constructor(name: string, stregth: number, skill: number){
    this.name = name,
    this.stregth = stregth,
    this.skill = skill

  }

  attack(): void{
    console.log(`Attack with ${this.stregth} points`);
    
  }
}

const p1 = new Character("Superman",10,98)

p1.attack();


