var otimo = 0, bom = 0, regular = 0, pessimo = 0, cont = 0, sexo, idade, opiniao, 
maioridade = 0, menoridade = 99, media, mulher = 0, homem = 0, soma = 0;

do {
    idade = parseInt(prompt("Digite sua idade: "));
    if (idade > maioridade) {
        maioridade = idade;
    }
    if (idade <= menoridade) {
        menoridade = idade;
    }
    soma = soma + idade;

    sexo = prompt("Digite seu sexo F ou M");
    if (sexo == "F" || sexo == "f") {
        mulher = mulher + 1;
    }
    if (sexo == "m" || sexo == "M") {
        homem = homem + 1;
    }

    opiniao = prompt("\nDigite 1 para péssimo" +
        "\nDigite 2 para regular" +
        "\nDigite 3 para bom" +
        "\nDigite 4 para ótimo");
        if(opiniao == 1){
            pessimo = pessimo + 1;
        }
        if(opiniao == 2){
            regular = regular + 1;
        }
        if(opiniao == 3){
            bom = bom + 1;
        }
        if(opiniao == 4){
            otimo = otimo + 1;
        }

    cont++
} while (cont < 45);

media = soma / 45;
porcentagem = (100 *(bom+otimo)/45);

alert("\nResultado da pesquisa:"
+ "\n\nMedia das idades é " + media
+ "\nPessoa mais velha tem " + maioridade + " anos"
+ "\nPessoa mais nova " + menoridade + " anos"
+ "\nQuantidade de pessoas que responderam pessimo foi: " + pessimo
+ "\nPorcentagem de pessoas que responderam ótimo e bom foi: " + porcentagem.toFixed(2) + "%"
+ "\n( "+ mulher +" )"+ " Mulheres responderam" 
+ "\n( "+ homem +" )" + " Homens responderam");