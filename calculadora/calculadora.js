var resultado = 0;
var operado = false;
var pantalla = 0;

function pulsaNumero(boton) {

    let numero = boton.getAttribute("numero");
    let display = document.querySelector("#display");
    if (operado) {
        display.value = "";
        operado = false;
    }
    display.value = display.value + numero;
}

function operacion(boton) {

    let display = document.querySelector("#display");
    let displayOP = document.querySelector("#displayOP");

    switch (boton.getAttribute("tipo")) {

        case "1": //Sumar
            resultado = resultado + parseFloat(display.value);
            display.value = resultado;
            displayOP.value = "+";
            break;

        case "2": // Restar
            if (operado){
            resultado = resultado - parseFloat(display.value);
            display.value = resultado;
            displayOP.value = "-";
            operado = true;}
            break;

        case "3": // Multiplicar
            resultado =  resultado  * parseFloat(display.value);
            display.value = resultado;
            displayOP.value = "*";
            break;

        case "4": //Dividir
            resultado =  resultado / parseFloat(display.value);
            display.value = resultado;
            displayOP.value = "/";
            break;

        case "5": //Resultado  ?????(aplicar a resultado  (resultado(tipo de operacion)display )
            /* resultado = display.value (y) resultado
            display.value = resultado; */
            //resultado = resultado parseFloat(displayOP.value) parseFloat(display.value);
        break;

    }

    operado = true;
}


function borrarTodo(boton){
    let  numero = boton.getAttribute("numero");
    resultado = 0;
    display.value = "";
}
