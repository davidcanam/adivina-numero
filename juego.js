const numeroSecreto = Math.floor(Math.random() * 100) + 1;

const campoNumero = document.getElementById("numero");
const botonComprobar = document.getElementById("comprobar");
const mensaje = document.getElementById("mensaje");
const textoIntentos = document.getElementById("intentos");

let intentos = 0;

botonComprobar.addEventListener("click", comprobarNumero);

function comprobarNumero() {
    const numeroElegido = Number(campoNumero.value);

    if (
        !Number.isInteger(numeroElegido) ||
        numeroElegido < 1 ||
        numeroElegido > 100
    ) {
        mensaje.textContent = "Escribe un número entero entre 1 y 100.";
        return;
    }

    intentos++;
    textoIntentos.textContent = intentos;

    if (numeroElegido === numeroSecreto) {
        mensaje.textContent = `¡Correcto! Has acertado en ${intentos} intentos.`;
        campoNumero.disabled = true;
        botonComprobar.disabled = true;
    } else if (numeroElegido < numeroSecreto) {
        mensaje.textContent = "El número secreto es mayor.";
    } else {
        mensaje.textContent = "El número secreto es menor.";
    }

    campoNumero.value = "";
    campoNumero.focus();
}