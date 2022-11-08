let array = [
  [75],
  [95, 64],
  [17, 47, 82],
  [18, 35, 87, 10],
  [20, 4, 82, 47, 65],
  [19, 01, 23, 75, 3, 34],
  [88, 2, 77, 73, 7, 63, 67],
  [99, 65, 4, 28, 6, 16, 70, 92],
  [41, 41, 26, 56, 83, 40, 80, 70, 33],
  [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
  [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
  [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
  [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
  [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
  [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23],
];

// //? Funcion que calcula la suma mayor
function calc(array, i, j) {
  if (i == array.length) {
    return 0;
  }
  let sum;
  sum =
    array[i][j] + Math.max(calc(array, i + 1, j), calc(array, i + 1, j + 1));
  return sum;
}
// //? Llamada a la funcion calculadora
function maxSum(array) {
  return calc(array, 0, 0);
}

let cont = 0;
const div = document.getElementById("piramide");
array.forEach((rows) => {
  cont++;
  const parentDiv = document.createElement("div");
  parentDiv.id = "parent" + cont;
  div.appendChild(parentDiv);
  console.log("[");
  rows.forEach((column) => {
    const divParent = document.getElementById("parent" + cont);
    const childDiv = document.createElement("div");
    childDiv.textContent = column;
    divParent.appendChild(childDiv);
    console.log(column);
  });
  console.log("]");
});

const textSum = document.getElementById("sum");
textSum.innerHTML = "La suma de la mejor/mayor ruta es: " + maxSum(array);

function maxPathSum(tri, m, n) {
  let pos = [];
  let auxJ;
  for (let i = m - 1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      let aux = false;
      console.log("[ " + i + " ],[ " + j + " ]");

      if (tri[i + 1][j] > tri[i + 1][j + 1]) {
        tri[i][j] += tri[i + 1][j];
        for (let row = 0; row < pos.length; row++) {
          if (pos[row][0] == i + 1) {
            pos[row][1] = j;
            aux = !aux;
            break;
          }
        }
        if (!aux) {
          pos.push([i + 1, j]);
        }
      } else {
        tri[i][j] += tri[i + 1][j + 1];
        for (let row = 0; row < pos.length; row++) {
          if (pos[row][0] == i + 1) {
            pos[row][1] = j + 1;
            aux = !aux;
            break;
          }
        }
        if (!aux) {
          pos.push([i + 1, j + 1]);
        }
      }
      console.log(aux);
    }
  }
  console.log(tri[0][0]);

  return pos;
}

let resultado = maxPathSum(array, 14, 14);
console.log(resultado);