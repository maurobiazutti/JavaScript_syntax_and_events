/* Objetos
Obejetos são coleçẽs de chave-valor,  onde a chave é uma string (ou símbolo) e o valor pode ser de qualquer tipo de dado, incluindo outros objetos.
*/

// Criando Objetos

const pessoa = {
  nome: "João",
  idade: 30,
  saudacao: function() {
      return `Olá, meu nome é ${this.nome}.`;
  },
  dadosCompleto: function(){
    return "Meu nome é "+this.nome+" e tenho "+this.idade+" anos de idade e tenho "+this.altura+ " de altura";
  }
};

console.log(pessoa); 
console.log(pessoa.nome); // "João"
console.log(pessoa.idade); // 30
console.log(pessoa.saudacao()); // "Olá, meu nome é João."
console.log(pessoa.dadosCompleto()); // "Meu nome é João e tenho 30 anos de idade."

// Adicionando/Modificando

pessoa.altura = 1.75; // Adiciona uma nova propriedade
pessoa.nome = "Carlos"; // Modifica uma propriedade existente
console.log(pessoa.nome); // "Carlos"
console.log(pessoa.altura); // 1.75
console.log(pessoa.dadosCompleto()); // Meu nome é Carlos e tenho 30 anos de idade e tenho 1.75 de altura


// Excluindo
delete pessoa.altura;
console.log(pessoa.altura); // undefined

// Iterando Sobre Propriedades
for (let chave in pessoa) {
  console.log(`${chave}: ${pessoa[chave]}`);
}

// Saída:
// nome: Carlos
// idade: 30
// saudacao: function() { ... }
