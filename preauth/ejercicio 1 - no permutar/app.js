const subConjunto = (matriz, numero) => {
  let arraySubconjunto = [];

  for (let i = 0; i < matriz.length; i++) {
    if (matriz[i] < numero && matriz.find((n) => n === numero - matriz[i])) {
      arraySubconjunto.push(matriz[i]);
      arraySubconjunto.push(numero - matriz[i]);      
      return arraySubconjunto;
    }
  }
};

const matriz = [0, 2, 5, 8, 14];
const numero = 10;
console.log(subConjunto(matriz, numero));
