/* New Object */
function newObj(){
var aluno1 = new Object();
    aluno1.nome1 = "Leila";
    aluno1.ra1 = "123456789";
alert("Com new Object\nNome do aluno: " + aluno1.nome1 + "\nRA do aluno: " + aluno1.ra1);
}
/* Dotnotation */
function dotNot(){
var aluno2 = {};
    aluno2["nome2"] = "Yasmin";
    aluno2["ra2"] = "987654321";
alert("Com dotnotation\nNome do aluno: " + aluno2.nome2 + "\nRA do aluno: " + aluno2.ra2);
}

/* Literal */
function literal(){
var aluno3 = {
    nome3: "Isabelle",
    ra3: 1597532684 
};
alert("De forma literal\nNome do aluno: " + aluno3.nome3 + "\nRA do aluno: " + aluno3.ra3);
}