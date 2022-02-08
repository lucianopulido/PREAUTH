const subConjunto = (matriz, numero) => {
  let matrizSubconjunto = [];
  let total = 0;

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
      total += matriz[i] + matriz[j];
      if (total === numero) {
        matrizSubconjunto.push(matriz[i]);
        matrizSubconjunto.push(matriz[j]);
        return matrizSubconjunto;
      }
      total = 0;
    }
  }
};

const matriz = [2, 5, 8, 14, 0];
const numero = 10;
console.log(subConjunto(matriz, numero));
