//como boa prática colocar um verbo
function sayHello(name, lastName) {
    console.log('Hello, ' + name + ' ' + lastName)
}
sayHello(); //chamando a função.
sayHello("Heitor");
sayHello("Heitor", "da Silva");

function sum(a, b) {
    return a + b;
}
console.log(sum(2, 2));