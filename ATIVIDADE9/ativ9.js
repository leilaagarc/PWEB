var valor1 = 0,valor2 = 0,valor3 = 0;

function maiorDeTres() { 
    valor1 = prompt("Digite o primeiro numero:");
    valor2 = prompt("Digite o segundo numero:");
    valor3 = prompt("Digite o terceiro numero:");

    if(!isNaN(valor1,valor2,valor3)){
        alert(Math.max(valor1,valor2,valor3));
    }
    else{
        alert("Valor inválido!");
    }
}

function ordemCrescente() {
    valor1 = prompt("Digite o primeiro numero:");
    valor2 = prompt("Digite o segundo numero:");
    valor3 = prompt("Digite o terceiro numero:");
    
    crescente = [valor1,valor2,valor3];
    if(!isNaN(valor1,valor2,valor3)){
    alert(crescente.sort(function(a,b) {return a-b}));
    }
    else{
        alert("Valor inválido!");
    }
}