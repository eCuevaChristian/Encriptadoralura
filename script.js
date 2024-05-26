const textArea = document.querySelector(".textarea");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    mostrarBotonCopiar();
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(mensaje.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mostrarBotonCopiar();
}


function encriptar(stringEncriptada) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["o", "ober"], ["u", "ufat"], ["i", "imes"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["u", "ufat"], ["o", "ober"],["i", "imes"], ["e", "enter"], ["a", "ai"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function mostrarBotonCopiar() {
    const botonCopiar = document.querySelector(".copiar");
    botonCopiar.style.display = "block";
}

function copiarTexto() {
    mensaje.select();
    document.execCommand("copy");
}