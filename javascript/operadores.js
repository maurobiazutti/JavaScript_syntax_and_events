
/* 
Operadores JS

1) Atribuição
2) Aritiméticos
3) Sequência ())
4) Comparação
5) Condicional / Ternario
6) Lógicos

*/

// ---------- # ----------- # ------------ #


// Operador Atribuição ( = )
let x1 = 2;


// ---------- # ----------- # ------------ #


// Operador Aritiméticos ( +, -, *, /, ++, --)
var x11, x22, total;
x11 = 5;
x22 = 3;
total = x11 + x22;
console.log("O valor total é = " + total)
total = ++ total;
console.log("O valor total mais o incremento (++) é = " + total);
total = -- total;
console.log("O valor total menos o decremento (--) é = " + total);


// ---------- # ----------- # ------------ #


// Sequencia Concatenação
let saudacao = "Olá";
let nome_1 = "João";
let complemento = "como você está?";

// Usando o operador +
let mensagem1 = saudacao + ", " + nome_1 + ", " + complemento;
console.log(mensagem1); // "Olá, João, como você está?"

// Usando o método concat()
let mensagem2 = saudacao.concat(", ", nome_1, ", ", complemento);
console.log(mensagem2); // "Olá, João, como você está?"

// Usando template literals
let mensagem3 = `${saudacao}, ${nome_1}, ${complemento}`;
console.log(mensagem3); // "Olá, João, como você está?"


// ---------- # ----------- # ------------ #


// Comparação

//  Igualdade ( == )
console.log(5 == '5'); // true
console.log(0 == false); // true
console.log(null == undefined); // true

// Igualdade Estrita ( === )
console.log(5 === '5'); // false
console.log(0 === false); // false
console.log(null === undefined); // false

// Diferença ( != )
console.log(5 != '5'); // false
console.log(0 != false); // false
console.log(null != undefined); // false

// Diferença Estrita ( !== )
console.log(5 !== '5'); // true
console.log(0 !== false); // true
console.log(null !== undefined); // true

// Maior que ( > )
console.log(10 > 5); // true
console.log(3 > 7); // false

// Menor que ( < )
console.log(10 < 5); // false
console.log(3 < 7); // true

// Maior ou Igual Que ( >= )
console.log(10 >= 5); // true
console.log(5 >= 5); // true
console.log(3 >= 7); // false

// Menor ou Igual Que ( <= )
console.log(10 >= 5); // true
console.log(5 >= 5); // true
console.log(3 >= 7); // false


// ---------- # ----------- # ------------ #


// Operador Ternario

/*
Exemplo
condição ? expressão1 : expressão2;
*/

let idadePes = 18;
let statu = (idadePes >= 18) ? "Adulto" : "Menor de idade";
console.log(statu); // "Adulto"


// Aninhamento de Operadores Ternários
let nota = 85;
let resultado = (nota >= 90) ? "A" :
                (nota >= 80) ? "B" :
                (nota >= 70) ? "C" :
                (nota >= 60) ? "D" : "F";
console.log(resultado); // "B"

// ---------- # ----------- # ------------ #

// Operadores Lógicos Básicos
 
//  AND Lógico (&&) Todos tem que ser TRUE
let a1 = true;
let b1 = false;
console.log(a1 && b1); // false
console.log(a1 && true); // true
console.log(false && b1); // false


// OR Lógico (||) Basta pelo menos uma condição TRUE para ser VERDADEIRO
let a2 = true;
let b2 = false;
console.log(a2 || b2); // true
console.log(b2 || false); // false
console.log(false || true); // true


// NOT Lógico (!) Inverte os Valores
let a3 = true;
let b3 = false;
console.log(!a3); // false
console.log(!b3); // true





