//# 1️⃣ Desafio Classificador de nível de Herói

let nomeHeroi = "Dragão de Guerra";
let nivelHeroi = 500;


while (nivelHeroi <= 20000) {
    nivelHeroi += 500;
    if(nivelHeroi <= 1000){classHeroi = "Ferro"} 
  else if(nivelHeroi <= 2000){classHeroi = "Bronze"} 
  else if(nivelHeroi <= 5000){classHeroi = "Prata"} 
  else if(nivelHeroi <= 7000){classHeroi = "Ouro"}
  else if(nivelHeroi <= 8000){classHeroi = "Platina"} 
  else if(nivelHeroi <= 9000){classHeroi = "Ascendente"} 
  else if(nivelHeroi <= 10000){classHeroi = "Imortal"}
    else{classHeroi = "Radiante"}
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi + " e classificado como: " + classHeroi); 
} 

