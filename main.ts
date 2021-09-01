input.onButtonPressed(Button.AB, function () {
    let hipotenusa = 0
    let opuesto = 0
    distancia += Math.sqrt(cateto ** 2 + base ** 2)
    basic.showNumber(distancia)
    basic.showString("m")
    basic.pause(1000)
    basic.clearScreen()
    sen_θ += (opuesto + 4) / (hipotenusa + 5)
    basic.showNumber(sen_θ)
    basic.showString("m")
    basic.pause(1000)
    basic.clearScreen()
})
let sen_θ = 0
let base = 0
let cateto = 0
let distancia = 0
distancia = 0
cateto = 4
base = 3
