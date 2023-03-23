/**
 * Arrays
 * 
 */

let dados: string[] = ['Tiago', 'Giselle', 'Yago'];

let dados2: Array<string> = ['Tiago', 'Giselle', 'Yago'];

// Arrays de Multi Types

let infos: (string | number)[] = ["Tiago", 34, "Giselle", 33];

/**
 * Tuplas
 */

let boleto: [string, number, number] = ["Conta luz", 60, 12132132165];

/**
 * Arrays Métodos
 * 
 */

dados.pop();


/**
 * Datas
 * 
 */


let aniversario:Date = new Date("2022-01-25 05:00")
console.log(aniversario.toString());
