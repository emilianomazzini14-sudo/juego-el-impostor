input.onButtonPressed(Button.A, function () {
    if (JUGADORES == impostor.impostor()) {
        basic.showString("IMPOSTOR")
    } else {
        basic.showString(impostor.palabraSorteada())
    }
    JUGADORES += 1
})
let JUGADORES = 0
impostor.crearJuego("MICROBIT", 5)
JUGADORES = 1
