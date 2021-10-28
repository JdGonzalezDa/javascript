let nombre = prompt ("¿Quien es el Mejor Jugador de la Historia?");

while( nombre != "ESC") {
    switch (nombre) {
        case"Messi":
            alert ("El Mago");
        break;
        case"Cristiano Ronaldo":
            alert ("El Artillero del Gol");
        break;
        case"Lewandowski":
            alert ("El Goleador del Momento");
        case"Maradona":
            alert ("Dios es Argentino");
        break;
        case"Pele":
            alert ("El Maximo Goleador de todos los Tiempos");
        break;
        default:
             alert ("¿Que Jugador Sos?");
        break;
         }
         nombre = prompt ("¿Quien es el Mejor Jugador del la Historia?" )
}
