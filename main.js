const Año = parseInt ("2021");

let nombre = prompt ("Ingrese su Nombre");

let apellido = prompt ("Ingrese su Apellido");


if (nombre == "" ||  apellido == ""){

    console.error("Error! Datos no ingresados");

    alert("Ingresar Dats Validos");
} else {

    let fechaNacimiento = parseInt( prompt(" Ingresar Fecha de Nacimiento"));

     let edad = parseInt( Año - fechaNacimiento);
    
        if  (fechaNacimiento == "" || edad < 18){ 

                alert ("No puede ingresar!");

                } else {

                 document.write("Resultado");
    
                 console.log (nombre);
                 console.log(apellido);
                 console.log (Edad);
     }
    }