var colors = ["black", "white", "pink", "red", "yellow"];

for (var i =0; i < colors.length; i++) {
    console.log(colors[i]);
}

// estrutura de repeticão sem array:
console.log("estrutura de repeticão sem array:")

for (var i = 0; i < 10; i++) {
    console.log(i);
}

//while - ele só executa se a verficação for verdadeira
console.log("while - ele só executa se a verficação for verdadeira")
var i = 10;

while (i < 10) {
    console.log(i);
    i++;
}

// do while - aqui ela executa depois.
console.log("do while - aqui ela executa depois.")

var i = 10;
do {
    console.log(i);
    i++;
} while (i < 10);