export function textWrite(elemento) {
    const textoArray = Array.from(elemento.textContent);
    elemento.textContent = '';

    textoArray.forEach((letra, i) => {
        setTimeout(() => {
            elemento.textContent += letra;
        }, 30 * i);
    });
}