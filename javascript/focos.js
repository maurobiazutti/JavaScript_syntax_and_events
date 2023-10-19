// onfocus -> Dispara quando o input recebe foco
function limpaTexto(){
  document.getElementById("campoTexto").value = "";
}

// onchange -> Dispara quando tem Mudança de conteudo
function mudou(){
  console.log("Mudou")
}

// onblur -> Disparado quando o elemento perde o foco.
function perdeuFoco(){
    document.body.style.backgroundColor = "red";
}