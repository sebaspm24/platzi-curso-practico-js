// console.log("Hello world!");

//querySelector escoge el las etiquetas de html
//h1, .parrafo, #id se seleccionan igual que en CSS
const h1 = document.querySelector("h1");
const p = document.querySelector("p");//selecciona el primer elemento con la etiqueta
const p1 = document.querySelectorAll("p");//selecciona todos los elementos con la etiqueta
const parrafo = document.getElementsByClassName("parrafo");
const pid = document.getElementById("pid");
const input = document.querySelector("input");

//con esto se muestran las variables definidas en la consola. tiene además la ventaja que en cada uno nos muestran las propiedades que se pueden alterar con js. cuando se imprimen solos (como el primer ejemplo), no se muestran las propiedades de los selectores
console.log(h1);
console.log(input.value);

console.log({
    h1,
    p,
    parrafo,
    pid,
    input
});

h1.innerHTML = "¡Holi! <br> ¿cómo estás?"; //con este se pueden agregar etiquetas html desde js. Pero es una función muy insegura porque cualquier usuario podría ingresar código
h1.innerText = "¡Holi! <br> ¿cómo estás?"; // por eso esta versión es más segura, pero no se puede cambiar la etiqueta

// lee y cambia los atributos
console.log(
    h1.getAttribute("class")
);
// h1.setAttribute("class", "rojo");
h1.classList.add("rojo");
h1.classList.remove("verde");
// h1.classList.toggle("verde");
// h1.classList.contains("verde"); // condicional

input.value = "456"
const img = document.createElement("img");
img.setAttribute("src", "https://images.squarespace-cdn.com/content/v1/5b7d8ac7697a988b951bdc95/1611728210677-016BGGS79ZRHB96CKQS3/image-9.jpg?format=2500w");

pid.append(img);