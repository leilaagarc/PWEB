do {
    escolhaUsuario = prompt("Digite pedra, papel ou tesoura:");

    num = Math.random();
    var escolhaPc

    if (num >= 0 && num < 0.35) escolhaPc = 'pedra'
    if (num >= 0.35 && num < 0.65) escolhaPc = 'papel'
    if (num >= 0.65 && num < 1) escolhaPc = 'tesoura'

    if (escolhaUsuario == escolhaPc) alert('Empate!')

    if (escolhaUsuario == 'pedra' && escolhaPc == 'tesoura') alert('Usuario ganhou')

    if (escolhaUsuario == 'papel' && escolhaPc == 'pedra') alert('Usuario ganhou')

    if (escolhaUsuario == 'tesoura' && escolhaPc == 'papel') alert('Usuario ganhou')

    if (escolhaUsuario == 'tesoura' && escolhaPc == 'pedra') alert('PC ganhou')

    if (escolhaUsuario == 'pedra' && escolhaPc == 'papel' ) alert('PC ganhou')

    if (escolhaUsuario == 'papel' && escolhaPc == 'tesoura') alert('PC ganhou')
} while (escolhaUsuario != 0)
