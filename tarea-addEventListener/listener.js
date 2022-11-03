// crear una caja en una posición específica de la pantalla, que cuando se pase por encima cambie el color de fondo. De pronto con la página dividida en 4 segmentos iguales

const caja1 = document.querySelector("#caja1");
const caja2 = document.querySelector("#caja2");
const caja3 = document.querySelector("#caja3");
const caja4 = document.querySelector("#caja4");
const contenedor = document.querySelector(".container");

caja1.addEventListener("mouseover", cambiarColor1);
caja2.addEventListener("mouseover", cambiarColor2);
caja3.addEventListener("mouseover", cambiarColor3);
caja4.addEventListener("mouseover", cambiarColor4);
contenedor.addEventListener("mouseout", colorOriginal);


function cambiarColor1() {
    document.body.style.backgroundColor = "rgb(94, 142, 110)";
};
function cambiarColor2() {
    document.body.style.backgroundColor = "rgb(188, 219, 158)";
};
function cambiarColor3() {
    document.body.style.backgroundColor = "rgb(124, 84, 108)";
};
function cambiarColor4() {
    document.body.style.backgroundColor = "rgb(104, 147, 159)";
};
function colorOriginal() {
    document.body.style.backgroundColor = "azure";
};
