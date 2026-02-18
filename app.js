alert('Boas vindas ao jogo do Número Secreto!');
let numeroMaximo = 5000;

let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log('Número secreto:', numeroSecreto);

let chute;
let tentativas = 1;

while (chute !== numeroSecreto) {
    const entrada = prompt(`Escolha um número entre 1 e ${numeroMaximo}:`);

    if (entrada === null) {
        alert('Jogo cancelado!');
        break;
    }

    chute = Number(entrada);

    if (isNaN(chute)) {
        alert('Por favor, digite um número válido!');
        continue;
    }

    if (chute == numeroSecreto) {
        const palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativa}.`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor do que ${chute}.`);
        } else {
            alert(`O número secreto é maior do que ${chute}.`);
        }
        tentativas++;
        console.log(`Tentativa ${tentativas}: você chutou ${chute}`);
    }
}
