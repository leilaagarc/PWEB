function validarCampos() {  
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var comentario = document.getElementById("comentario").value;
    var sim = document.getElementById("sim").Checked;
    var nao = document.getElementById("nao").Checked;
    
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nome == "" || nome < 10) {
    alert("Preencha campo NOME corretamente! É preciso ter ao menos 10 caracteres");
    document.forms.atividade.elements.nome.focus();
    return false;
};
    
  if (email == "" || !re.test(email)) {
    alert("Preencha campo E-MAIL corretamente!");
    document.forms.atividade.elements.email.focus();
    return false;
}

  if (comentario == "" || comentario.length < 20) {
    alert("O campo comentário precisa ter pelo menos 20 caracteres");
    document.forms.atividade.elements.comentario.focus();
    return false;
    }

    if(sim == true){
        alert("Volte sempre à está página!");
    }
    if(nao == true){
        alert("Que bom que vocêvoltou a visitar esta página!");
    }
    return true;
}