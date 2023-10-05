/* Eventos 
Os eventos são ações ou ocorrências que acontecem no navegador e que podem ser detectadas e respondidas por JavaScript. Esses eventos podem ser acionados por interações do usuário, como cliques e pressionamento de teclas, ou por ações automáticas, como o carregamento de uma página.
*/


// alert("oi") //Abre uma mensagem quanto a paigina carrega.

//  ------------ # ----------- # ------------ # -----------

// onclick -> Dipara quando recebe um click 

//       pega o elemento(nome).adicionaEvento('nomeEvento', funçãoQueExecutaEvento(){})
document.getElementById("botao").addEventListener("click", function() {
  alert("Botão clicado!");
});

//ONCLICK
function eventoClick(){
  alert('onClick');
  document.body.style.backgroundColor = "red";
}

//ONDBLCLICK
function eventoDblClick(){
  alert("clique Duplo");
}

//  ------------ # ----------- # ------------ # -----------

// Evento de Mouse

// onmouseover -> Disparado quando o mouse está sobre.
function viraVermelho(){
  let div = document.getElementById("div01");
  div.style.backgroundColor = "red"
}


// onmouseout -› Disparado quando o mouse é movido para fora do elemento.
function viraAzul(){
  let div = document.getElementById("div01");
  div.style.backgroundColor = "blue"
}

//
function adicionaTexto(){
  let p = document.getElementById("texto");
  p.append('O mouse moveu');
}

// onmousemove -› Disparado quando o mouse é movido no elemento.
// onmousedown -› Disparado quando o clique do botão foi pressionado.
// onmouseup -> Disparado quando o clique do botão é liberado