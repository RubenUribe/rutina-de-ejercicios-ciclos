let contador = 0
input.onPinPressed(TouchPin.P0, function () {
    contador = 3
    basic.showNumber(contador)
    for (let index = 0; index < 3; index++) {
        basic.showNumber(contador)
        contador += -1
        basic.pause(1000)
    }
    basic.showNumber(contador)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . # . .
            # # # # #
            . . # . .
            . # . # .
            . # . # .
            `)
        basic.pause(100)
        basic.showLeds(`
            # . # . #
            . # # # .
            . . # . .
            . # . # .
            . # . # .
            `)
        basic.pause(100)
    }
    basic.clearScreen()
    basic.showString("30 Min")
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(100)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . # . #
        . # . # .
        `)
})
basic.forever(function () {
	
})
