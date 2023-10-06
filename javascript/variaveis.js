// VARIAVEIS EM JS
// var | let | const

//var funciona em todo escopo do codigo e pode ser reatribuida

var pessoa = "Marcos";
var pessoa = "Mauro";
console.log(pessoa); // Mauro

// ///////////////////////////////
var x = 2;
console.log(x); // 2

{
  var x = 10;
console.log(x); // 10
}

console.log(x); // 10
// ///////////////////////////////

var nomeComposto = "camelCase é a boa pratica";
console.log(nomeComposto);

var nome_composto = "Tambem pode ser usado";
console.log(nome_composto);

//Metodos de declaração
var a,b,c;

a=2;
b=3;
c=a+b;
console.log(c); // 5
console.log("c"); // c

// Concatenação
var nome, sobreNome, nomeCompleto, idade;

nome = "Mauro";
sobreNome = "Biazutti";
idade = 36;
nomeCompleto = nome + " " + sobreNome + " " + idade;

document.getElementById("texto").innerHTML = nomeCompleto;




//let não pode ser reatribuida

// ERRO Não permite a re-declaração da mesma variável dentro do mesmo escopo, o que ajuda a evitar erros.
// let pessoaLet = "Marcos"
// let pessoaLet = "Mauro"
// console.log(pessoaLet) // Marcos

// ///////////////////////////////
let l = 2;
console.log(l); // 2

{
  let l = 10;
console.log(l); // 10
}

console.log(l); // 2
// ///////////////////////////////




// CONST VAI SER SEMPRE O MESMO VALOR
// ///////////////////////////////
const co = 2;
console.log(co); // 2

{
  const co = 10;
console.log(co); // 10
}

console.log(co); // 2
// ///////////////////////////////