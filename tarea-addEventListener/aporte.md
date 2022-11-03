A mí se me ocurrió que cambie el background-color por cada vez que el mouse pasa por ciertas áreas de la pantalla. Así quedó:

```js
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

```


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Tarea addEventListener</title>
</head>
<body>
    <section class="title">
        <h1>Tarea addEventListener</h1>
        <p>Desliza el mouse por la pantalla con el mouse para ver qué pasa</p>
    </section>
    <section class="container">
        <div class="caja" id="caja1"></div>
        <div class="caja" id="caja2"></div>
        <div class="caja" id="caja3"></div>
        <div class="caja" id="caja4"></div>
    </section>
    <script src="listener.js"></script>
</body>
</html>
```

```css
:root {
    --color1: rgb(94, 142, 110);
    --color2: rgb(188, 219, 158);
    --color3: rgb(38, 33, 65);
    --color4: rgb(124, 84, 108);
    --color5: rgb(104, 147, 159);
}
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.title {
    position: fixed;
    top: 0;
    background-color: var(--color3);
    opacity: .5;
    max-height: 100px;
    min-height: -moz-fit-content;
    min-height: fit-content;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
}
.title h1,
.title p {
    color: white;

}
body {
    background-color: azure;
    height: 120vh;
}

.container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}

.caja {
    /* border: solid 1px black; */
    width: 50%;
    height: 50%;
}
```