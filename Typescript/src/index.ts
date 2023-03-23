/**
 * Funções
 * 
 */

function addNumber(x: number, y: number): number {
  return x + y
}

let soma: number = addNumber(4,8)
console.log(soma);


function addHello(name: string): string {
  return `Hello ${name}` 
}

console.log(addHello('Tiago'));

function callToPhone( phone: number | string): number | string {
  return phone;

}

console.log(callToPhone(1211212121));


async function getDatabase(id: number | string): Promise<string | number>{
  return "Tiago"
}
