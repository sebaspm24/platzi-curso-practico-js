const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result")

function btnOnClick() {
    firstNumber = Number(input1.value);
    secondNumber = Number(input2.value);
    var resultado = firstNumber + secondNumber;
    console.log(resultado); //esto muestra el resultado en la consola, que no es muy bueno para intaractuar con usuarios. por eso es mejor crear una nueva etiqueta dentro del html
    pResult.innerText = "Resultado: "+ resultado;
};