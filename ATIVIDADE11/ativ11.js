/* Retangulo */
function exercicio1(){
    x = prompt("Digite a base do retangulo:");
    y = prompt("Digite a altura do retangulo:");

class Retangulo {
    constructor(x,y){
    this.x = x;
    this.y = y;
}

calcArea() {
        return this.x * this.y;
    }
}
objetoRetangulo = new Retangulo(x,y);
alert("Resultado = "+objetoRetangulo.calcArea());
}

/* Tipo conta */
function exercicio2(){
    class conta{
        constructor(nome, banco, numConta, saldo){
            this.nome = nome;
            this.banco = banco;
            this.numConta = numConta;
            this.saldo = saldo;
        }
    
        get getNome(){
            return this.nome;
        }
        get getBanco(){
            return this.banco;
        }
        get getNumConta(){
            return this.numConta;
        }
        get getSaldo(){
            return this.saldo;
        }
    
        set setNome(valor){
            this.nome = valor;
        }
        set setBanco(valor){
            this.banco = valor;
        }
        set setNumConta(valor){
            this.numConta = valor;
        }
        set setSaldo(valor){
            this.saldo = valor;
        }
    }
    
    class contaCorrente extends conta{
        constructor(nome, banco, numConta, saldo){
            super(nome, banco, numConta, saldo);
        }
        
        saldoEsp;
    
        get getSaldoEsp(){
            return this.saldoEsp;
        }
        set setSaldoEsp(valor){
            this.saldoEsp = valor;
        }
    
    }
    
    class contaPoupanca extends conta{
        constructor(nome, banco, numConta, saldo){
            super(nome, banco, numConta, saldo);
        }
        juros;
        dataVencimento;
    
        get getJuros(){
            return this.juros;
        }
        set setJuros(valor){
            this.juros = valor;
        }
    
        get getDataVencimento(){
            return this.dataVencimento;
        }
        set setDataVencimento(valor){
            this.dataVencimento = valor;
        }
    }

    var contaCor = new contaCorrente(); 
    contaCor.setNome = "Leila Garcia";
    contaCor.setBanco = "Nubank";
    contaCor.setNumConta =  1234;
    contaCor.setSaldo = 2500;
    contaCor.setSaldoEsp = 900;

    var contaPou = new contaPoupanca();
    contaPou.setNome = "Leila Garcia";
    contaPou.setBanco = "Nubank";
    contaPou.setNumConta =  1234;
    contaPou.setSaldo = 9000;
    contaPou.setJuros = 5;
    contaPou.setDataVencimento = "29/12/2022";
    
    i = prompt("Digite uma das opções para visualizar \n1- SALDO ESPECIAL \n2- POUPANÇA");

    switch(i){
    case "1":
    alert("---CONTA CORRENTE---\nNome: " + contaCor.getNome + "\nBanco: " + contaCor.getBanco + "\nNumero da conta: " + contaCor.getNumConta +
     "\nSaldo: R$" + contaCor.getSaldo.toFixed(2) + "\nSaldo Especial: R$" + contaCor.getSaldoEsp.toFixed(2));
    break;

    case "2":
    alert("---POUPANÇA---\nNome: " + contaPou.getNome + "\nBanco: " + contaPou.getBanco + "\nNumero da conta: " + contaPou.getNumConta + 
    "\nSaldo: R$" + contaPou.getSaldo.toFixed(2) + "\nJuros: " + contaPou.getJuros + "%\nData de Vencimento: " + contaPou.getDataVencimento);
    break;
    
    default:
        alert("Comando inválido!");
        break;
    }
}