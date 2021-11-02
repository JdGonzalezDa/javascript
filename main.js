let notaPrimerCuatrimestre = parseInt(prompt("Ingrese la primera nota"));
let notaSegundoCuatrimestre = parseInt(prompt("Ingrese la segunda nota"));
let notaTercerCuatrimestre = parseInt(prompt("Ingrese la tercera nota"));
let notaFinal = parseInt("Ingrese la nota final: ")

function calcular(notaPrimerCuatrimestre, notaSegundoCuatrimestre, notaSegundoCuatrimestre, notaFinal){
    switch(notaFinal){
        case "+":
            return notaPrimerCuatrimestre + notaSegundoCuatrimestre + notaTercerCuatrimestre
            break;
        case "-":
            return notaPrimerCuatrimestre - notaSegundoCuatrimestre - notaTercerCuatrimestre
            break;
            case "/":
            return notaPrimerCuatrimestre / notaSegundoCuatrimestre / notaTercerCuatrimestre
            break;
            default:
                return 0;
                break;
    }
}
let resultado = calcular(notaPrimerCuatrimestre, notaSegundoCuatrimestre, notaTercerCuatrimestre, notaFinal)
alert(resultado)
