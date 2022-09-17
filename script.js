let oppiedra = document.getElementById("btn-piedra");
oppiedra.addEventListener("click", piedra);
oppiedra.disabled = true;

let oppapel = document.getElementById("btn-papel");
oppapel.addEventListener("click", papel);
oppapel.disabled = true;

let optijera = document.getElementById("btn-tijera");
optijera.addEventListener("click", tijera);
optijera.disabled = true;

let btnjugar = document.getElementById("btn-jugar");
btnjugar.addEventListener("click", jugar);

let btnreiniciar = document.getElementById("btn-reiniciar");
btnreiniciar.addEventListener("click", reiniciarJuego);

let usuario;
let enemigo;
var jugadaUsuario;
let jugadaEnemiga;
let trinfos = 0;
let derrotas = 0;



function piedra() {
  jugadaUsuario = 1;
  jugar();
}

function papel() {
  jugadaUsuario = 2;
  jugar();
}

function tijera() {
  jugadaUsuario = 3;
  jugar();
}

//Esta función me devuelve en String la jugada del usuario
function eleccion(opcion) {
  let res;

  if (opcion == 1) {
    res = "Piedra !";
  } else if (opcion == 2) {
    res = "Papel !";
  } else if (opcion == 3) {
    res = "Tijera !";
  }
   return res;
}


function jugar() {

  oppiedra.disabled = false;
  oppapel.disabled = false;
  optijera.disabled = false;
  
  jugadaEnemiga = aleatorio(1, 3);

  if (jugadaUsuario != undefined) {
    alert("Vos elegiste: " + eleccion(jugadaUsuario));
    alert("PC elige: " + eleccion(jugadaEnemiga));

    if (jugadaUsuario === jugadaEnemiga) {
      alert("Empate !");
    } else if (jugadaUsuario == 1 && jugadaEnemiga == 3) {
      alert("Ganaste !");
      trinfos++;
    } else if (jugadaUsuario == 2 && jugadaEnemiga == 1) {
      alert("Ganaste !");
      trinfos++;
    } else if (jugadaUsuario == 3 && jugadaEnemiga == 2) {
      alert("Ganaste !");
      trinfos++;
    } else {
      alert("Perdiste !");
      derrotas++;
    }
  }
}

//Función que reinicia el juego
function reiniciarJuego() {
  location.reload();
}

//Función para elegir un número aleatorio
function aleatorio(min, maxi) {
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
