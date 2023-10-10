//Funções

// Declaração
function saudacoes(name) {
  return `Olá, ${name}!`;
}

console.log(saudacoes("João")); // "Olá, João!"

// ---------- # ----------- # ------------ #

// Funções de Seta (Arrow Functions)
let saudacaoArrowFunc = (nome) => `Olá, ${nome}!`;

console.log(saudacaoArrowFunc("Carlos")); // "Olá, Carlos!"

// ---------- # ----------- # ------------ #

// Parâmetros e Argumentos
function somar(a, b) {
  return a + b;
}

console.log(somar(2, 3)); // 5
document.getElementById("texto").innerHTML = somar(10, 26)

// ---------- # ----------- # ------------ #

// Parâmetros Padrão
function saudacaoParamsPadr(nome = "Visitante") {
  return `Olá, ${nome}!`;
}

console.log(saudacaoParamsPadr()); // "Olá, Visitante!"
console.log(saudacaoParamsPadr("Ana")); // "Olá, Ana!"

// ---------- # ----------- # ------------ #

console.log('------------------ # -------------------')

// Funções como Primeira Classe
// Funções podem ser atribuídas a variáveis
let soma = function(a, b) {
  return a + b;
};

// Funções podem ser passadas como argumentos
function executarOperacao(operacao, a, b) {
  return operacao(a, b);
}

console.log(executarOperacao(soma, 5, 3)); // 8

// Funções podem retornar outras funções
function criarSaudacao(saudacao) {
  return function(nome) {
      return `${saudacao}, ${nome}!`;
  };
}

let saudacaoOla = criarSaudacao("Olá");
console.log(saudacaoOla("Pedro")); // "Olá, Pedro!"
