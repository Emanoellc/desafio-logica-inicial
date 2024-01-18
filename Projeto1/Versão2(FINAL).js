//# 1️⃣ Desafio Classificador de nível de Herói

let nomeHeroi = "Dragão de Guerra";
let nivelHeroi = 0;


do {
    nivelHeroi += 1000;
    switch (true) {
        case (nivelHeroi <= 1000):
            classHeroi = "Ferro";
            break;
        case (nivelHeroi <= 2000):
            classHeroi = "Bronze";
            break;
        case (nivelHeroi <= 5000):
            classHeroi = "Prata";
            break;
        case (nivelHeroi <= 7000):
            classHeroi = "Ouro";
            break;
        case (nivelHeroi <= 8000):
            classHeroi = "Platina";
            break;
        case (nivelHeroi <= 9000):
            classHeroi = "Ascendente";
            break;
        case (nivelHeroi <= 10000):
            classHeroi = "Imortal";
            break;
        default:
            classHeroi = "Radiante"
    }
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi + " e classificado como: " + classHeroi);
}   while (classHeroi != "Radiante");

