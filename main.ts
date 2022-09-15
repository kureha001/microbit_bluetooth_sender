input.onButtonPressed(Button.A, function () {
    radio.sendString("A")
    basic.pause(100)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("SHAKE")
    basic.pause(100)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("AB")
    basic.pause(100)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("B")
    basic.pause(100)
})
radio.setGroup(1)
