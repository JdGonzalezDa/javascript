alert(" Bienvenidos Les daremos sus notas finales")

let nombre = prompt("Ingrese su nombre: ")
let apellido = prompt("Ingrese su apellido: ")
saludar(nombre, apellido)

let edad = parseInt(prompt("Edad: "))
while (edad < 18 ){
    alert("El dato es incorrecto, ingrese nuevamente");
    edad = parseInt(prompt("Edad: "))
}

function saludar(nombre, apellido){ 
    alert(`Bienvenido alumno : ${nombre}${apellido}`)
}
let primeraNota = parseInt(prompt("ingrese la primera nota: "))
let segundaNota = parseInt(prompt("ingrese la segunda nota: "))
let terceraNota = parseInt(prompt("ingrese la primera nota: "))

let sumaNotas = (a, b, c) => a + b + c

let promedio = function(primeraNota, segundaNota, terceraNota){return sumaNotas(primeraNota,segundaNota,terceraNota) / 3}
alert("El promedio de notas es de " + promedio(primeraNota,segundaNota,terceraNota))

if (promedio(primeraNota,sedundaNota,terceraNota)< 6){
    alert("Desaprobaste el Año, Tenes que recursar la materia");
    console.log("Desaprobaste el Año, Tenes que recursar la materia");
    document.write("Desaprobaste el Año, Tenes que recursar la materia");
}else{
    alert("Felicitaciones Aprobaste el la materia");
    console.log("Felicitaciones Aprobaste el la materia");
    document.write("Felicitaciones Aprobaste el la materia");
}
