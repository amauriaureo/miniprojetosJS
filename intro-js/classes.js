class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    read() {
        return`Estou lendo ${this.title}`
        // PARA FAZER INTERPOLAÇÃO UTILIZAR CRASES 
    }
}

let book = new Book('Algoritmos para viver', 'Brian', '500');
let otherBook = new Book('Walden', "Throreau", "355")

console.log(book)
console.log(book.read())

console.log("-----------")
console.log("Outra instância da classe Book, nomeada 'otherBook:'")
console.log(otherBook)
console.log(otherBook.read())

console.log("-----------")

//trazer como herança as propriedades da classe Book 
//  extends - extender todas propeidades/atributos para nova classe
class ITBook extends Book {
    constructor(title, author, pages, technology) {
        super(title, author, pages); // aqui é onde herdar os atributos da classe anterior.
        this.technology = technology; // criando a nova e quarta propriedade que vai existir apenas nesse classe
    }
}

let itBook = new ITBook ("Algoritmos para viver", 'Brian', 500, 'Algoritmos');

console.log(itBook);
console.log("-----------")
console.log("-----------")




//encapsulamento com getters e setters

class Person {
    constructor(name) {
        this._name = name;
    }
// precisa do 'get' apenas porque tem o underscore "_"
        get name () {
            return this._name;
        }
// para permitir reatribuir valores:
        set name(value) {
            this._name = value;
        }
}

let person = new Person('Amauri'); //new é a palavra reservada para criar um objeto
console.log(person.name) // sem o get o output é undefined

person.name = "Ama"
console.log(person.name)




// SOBRE UNDERSCORE NO '_name' :

// Convencionalmente quando vemos funções, atributos, objetos, etc, que comecem com '_',
// quer dizer que ele não deve ser acessado diretamente fora do seu contexto.
// Isso porque nativamente não é possível fazer isso,
// Por exemplo, no TypeScript temos o modificador private, então no JavaScript foi convencionado o _ para simular tal necessidade.
// Ela pode ser acessada de qualquer lugar, mesmo com o _, mas, foi convencionado que não deve.
// Matheus Castiglioni