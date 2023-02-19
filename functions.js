window.addEventListener('load',()=>{

    //CONSTANTE QUE CONTIENE EL  MARCADR DE NUMEROS
    const display = document.querySelector('.calculator-display');
    //CONSTANTE DE LOS BOTONES DE NUMEROS, TRAE LOS ELEMENTOS
    const keypadbuttom = document.getElementsByClassName('keypad-buttom');

    //GUARDAR ELEMENTOS DE  KEYBUTTOM EN UN ARRAY, CONVIERTE A ARRAY EL HTML
    const keypadButtonsArray = Array.from(keypadbuttom);

    //RECORRE ELEMENTOS Y LOS MUESTRA EN CONSOLA
 keypadButtonsArray.forEach((button) => {
    //SE AGREGA ELEMENTO DEL BUTTOM AL HACER CLICK, SE LE AGREGA UN LISTENER A CADA BOTON
    button.addEventListener('click',() => {
        //Y MUESTRA EL ELEMENTO DEL HTML
        calculadora(button, display);
    })
})
});
function calculadora (button,display){
    switch(button.innerHTML){
        case 'C':
            borrar(display); 
        break;

        case '=':
            calcular(display);
            break;

        default:
            actualizar(display,button);
            break;
    }
}

function calcular(display){
    //toma el string lo resuelve y lo guarda en el display
    display.innerHTML = eval(display.innerHTML)
}

//ELIMINAR ELEMENTO DEL ID DISPLAY, SI ES 0 LO ELIMINA
function actualizar (display,button){
    if (display.innerHTML == 0){
        display.innerHTML='';           
    }
    display.innerHTML += button.innerHTML;

}

function borrar(display){
    display.innerHTML = 0;
}






