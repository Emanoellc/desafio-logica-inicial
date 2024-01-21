//  # 2️⃣ Calculadora de partidas Rankeadas


let numVitorias = 90;
let numDerrotas = 5;

function saldoVitorias(numVitorias, numDerrotas){
    let saldoRank = numVitorias - numDerrotas;
     return saldoRank;
}

let saldoRank = saldoVitorias(numVitorias, numDerrotas);

function nivelHeroi(saldoRank)
{
    let nivelLocal;

    switch (true) {
        case saldoRank <= 10:
          nivelLocal = "Ferro";
          break;
        case saldoRank < 20:
          nivelLocal = "Bronze";
          break;
        case saldoRank < 50:
          nivelLocal = "Prata";
          break;
        case saldoRank < 80:
          nivelLocal = "Ouro";
          break;
        case saldoRank < 90:
          nivelLocal = "Diamante";
          break;
        case saldoRank < 100:
          nivelLocal = "Lendário";
          break;
        default:
          nivelLocal = "Imortal";
      }
return nivelLocal
}

let nivelGlobal = nivelHeroi(saldoRank);

console.log('O Herói tem de saldo de ' + saldoRank + ' vitórias e está no nível de ' + nivelGlobal )

let meta = 100;


do {
  let resultado = Math.random();
  if (resultado < 0.5) {
    numVitorias++;
  } else {
    numDerrotas++;
  }

  saldoRank = saldoVitorias(numVitorias, numDerrotas);
  nivelGlobal = nivelHeroi(saldoRank);

  console.log('O Herói tem de saldo de ' + saldoRank + ' vitórias e está no nível de ' + nivelGlobal );

} while (saldoRank < meta);
