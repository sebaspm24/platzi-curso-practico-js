//clase addEventListener
// al existir un formulario, automáticamente se entiende como si el botón fuera de tipo submit, por lo que vuelve a actualizar la página. en el formulario se puede especificar la ruta a la cual se envían los datos.

// Pero como lo que en este caso queremos es que no se envíen los datos, sino que se siga en la página, sino que se tiene que hacer una acción con el formulario, que se muestra a continuación

const h1 = document.querySelector("h1");
const form = document.querySelector("#form"); //se agrega esta variable (luego de poner id al form)
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");

//se cambia esto
// btn.addEventListener('click' , btnOnClick);

// function btnOnClick() {
//     firstNumber = Number(input1.value);
//     secondNumber = Number(input2.value);
//     var resultado = firstNumber + secondNumber;
//     pResult.innerText = "Resultado: "+ resultado;
// };

form.addEventListener('submit' , sumarInputValues);

function sumarInputValues(event) { 
    //a pesar de el cambio hecho, sigue actualizando la página tras el submit. por eso se pone el event como parámetro en la funcion
    console.log({event});//aún así se actualiza la página
    event.preventDefault(); //esto es lo que evita que se actualice automáticamente, como normalmente pasa al darle click al botón.
    firstNumber = Number(input1.value);
    secondNumber = Number(input2.value);
    var resultado = firstNumber + secondNumber;
    pResult.innerText = "Resultado: "+ resultado;
};

//la otra opción era ponerle a la etiqueta button en el html. Así no hubiera sido necesario ponerle el addEventListener al formulario
//<button type = "button">