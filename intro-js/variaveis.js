// Usadas para armazenar dados, que podem ser atualizados ou recuperados sempre que necessário. 

console.log("Hello World!")

var myName;
myName = "Simara";
console.log(myName);

// Ponto e vírgula não é essencial mas é uma boa prática 
// Nomes de variáveis [NÃO PODE]:
// - começar com números;
// - ter espaço
// - utilizar palavras reservadas do javascript (ex: var, function etc)

let language = "Javascript";

const pattern = "ECMAscript"

{
    var age = 32
    let idade = 33
}

console.log(age) // hoisting
console.log(idade) //não vai imprimir

const myLastName = "Conceição";
// não posso reatribuir o valor da constante