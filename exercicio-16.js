/*
    16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
    (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
    depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados. 
*/

let numeros = [];

for (let i = 0 ; i < 99; i++) {
    numeros.push(parseInt(Math.random() * 100));
}

console.log(numeros);

let numerosOrdenados = numeros.sort();

console.log(numerosOrdenados);