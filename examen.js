const tipoDeSuscripcion = "Basic";

function mensajeSuscripcion (tipoDeSuscripcion) {
	if (tipoDeSuscripcion === "ExpertPlus") {
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
	} if (tipoDeSuscripcion === "Basic") {
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
	} if (tipoDeSuscripcion === "Expert") {
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
	} if (tipoDeSuscripcion === "Free"){
       console.log("Solo puedes tomar los cursos gratis");
    }
}

var milista = [1, 2, 3, 4];

function getFirstElement (lista){
    return lista[0];
}

milista.forEach(function(numero){
    console.log(numero);
})



var articulos = [
    {nombre: "bici", costo: 2500},
    {nombre: "tv", costo: 3000},
    {nombre: "libro", costo: 350},
    {nombre: "celular", costo: 5000},
    {nombre: "laptop", costo: 10000},
    {nombre: "colchón", costo: 200},
    {nombre: "radio", costo: 100}
];

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
})


let myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
};

function printAllElements(list) {
    for (var i in list) {
        console.log(list[i]);
    }
}

