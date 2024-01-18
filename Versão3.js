
// Projeto 3 - Desafio: Classificador de nível War Dino:
let nomeHeroi = "Dragão de Guerra";
let nivelHeroi = 500;

// Criamos uma função para classificar o herói com base no seu nível
function classificarHeroi(nivel) {
    let classificacao;
    // Usamos uma estrutura SWITCH para determinar a classificação
    switch (true) {
        case (nivel <= 1000):
            classificacao = "Ferro";
            break;
        case (nivel <= 2000):
            classificacao = "Bronze";
            break;
        case (nivel <= 5000):
            classificacao = "Prata";
            break;
        case (nivel <= 7000):
            classificacao = "Ouro";
            break;
        case (nivel <= 8000):
            classificacao = "Platina";
            break;
        case (nivel <= 9000):
            classificacao = "Ascendente";
            break;
        case (nivel <= 10000):
            classificacao = "Imortal";
            break;
        default:
            classificacao = "Radiante";
    }
    // Retornamos a classificação
    return classificacao;
}


    // Incrementamos o nível do herói em 1000
  do {nivelHeroi += 1000;
    let classificacao = classificarHeroi(nivelHeroi);
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi + " e classificado como: " + classificacao);
} while (classificacao = "Radiante");
