"use strict";
/**
 * Interfaces (type x interface)
 */
const bot = {
    id: 1,
    name: "Megaman"
};
const bot2 = {
    id: "1",
    name: "Megaman",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
console.log(bot);
console.log(bot2);
class Pessoa {
    constructor(id, name) {
        this.id = id,
            this.name = name;
    }
    sayHello() {
        return `Hello i'm ${this.name}`;
    }
}
const p = new Pessoa(1, "Bergins");
console.log(p.sayHello());
