let DEGREES = 0
basic.showLeds(`
    . . # . .
    . . # . .
    # # # # #
    . . # . .
    . . # . .
    `)
basic.pause(200)
basic.forever(function () {
    DEGREES = input.compassHeading()
    if (DEGREES >= 350 || DEGREES <= 10) {
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
    } else {
        basic.clearScreen()
    }
    basic.pause(100)
    if (DEGREES >= 80 && DEGREES <= 100) {
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # #
            # . . . .
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
    basic.pause(100)
    if (DEGREES >= 170 && DEGREES <= 190) {
        basic.showLeds(`
            . # # # #
            # . . . .
            . # # # .
            . . . . #
            # # # # .
            `)
    } else {
        basic.clearScreen()
    }
    basic.pause(100)
    if (DEGREES >= 260 && DEGREES <= 280) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # . # . #
            # # . # #
            # . . . #
            `)
    } else {
        basic.clearScreen()
    }
    basic.pause(100)
})
