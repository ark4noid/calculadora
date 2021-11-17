var resultado;

function pulsaNumero(boton) {
    let numero = boton.getAttribute("numero");
    let display = document.querySelector("#display");
    display.value = display.value + numero;
}
function pulsaOperacion(operacion) {
    let display = document.querySelector("#display");
    resultado = parseFloat(display.value);
    let operacion1 = operacion.getAttribute("signo");
    display.value = "";
    let operando = document.querySelector("#operando");
    operando.value = operacion;

    switch (boton.getAttribute("signo")) {
        case "suma":
            resultado += parseFloat(display.value);
            display.value = resultado;
            break;
        case "resta":
            resultado -= parseFloat(display.value);
            display.value = resultado;
            break;
        case "multiplicacion":
            resultado *= parseFloat(display.value);
            display.value = resultado;
            break;
        case "division":
            resultado /= parseFloat(display.value);
            display.value = resultado;
            break;
        case "cambio":
            resultado = parseFloat(display.value) * -1;
            display.value = resultado;
            break;
        case "coma":
            if (display.value.indexoff(",") === -1) {
                display.value += ","
            }
            break;
        case "borrar":
            resultado = parseFloat(display.value) + resultado;
            display.value = resultado;
            break;
        case "limpiar":
            resultado = parseFloat(display.value) * 0;
            display.value = resultado;
            break;
        case "igual":
            resultado = parseFloat(display.value) + resultado;
            display.value = resultado;
            break;
    }
}
