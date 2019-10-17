let isSleeping = false
let screenNum = 0
let xCoord = 0
let yCoord = 0
basic.showString("SCREEN")

input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    isSleeping = true
    while (isSleeping) {
        if (screenNum == 1) {
            basic.clearScreen()
            while (screenNum == 1) {
                swirl()
            }
        }
        if (screenNum == 2) {
            basic.clearScreen()
            while (screenNum == 2) {
                rain()
            }
        }
        if (screenNum == 3) {
            basic.clearScreen()
            xCoord = 0
            yCoord = 0
            while (screenNum == 3) {
                spin()
            }
        }
        if (screenNum == 4) {
            basic.clearScreen()
            while (screenNum == 4) {
                zigzag()
            }
        }
        if (screenNum == 5) {
            basic.clearScreen()
            while (screenNum == 5) {
                spectro()
            }
        }
    }
})

input.onGesture(Gesture.Shake, function () {
    screenNum = 1
})
input.onGesture(Gesture.LogoUp, function () {
    screenNum = 2
})
input.onGesture(Gesture.TiltRight, function () {
    screenNum = 3
})
input.onGesture(Gesture.TiltLeft, function () {
    screenNum = 4
})
input.onGesture(Gesture.LogoDown, function () {
    screenNum = 5
})

input.onButtonPressed(Button.B, function () {
    screenNum = 0
    isSleeping = false
    basic.clearScreen()
    basic.showString("Awake")
})

function swirl() {
    for (let x = 0; x <= 4; x++) {
        led.plot(x, 0)
        led.plot(0, 4 - x)
        led.plot(4 - x, 4)
        led.plot(4, x)
        basic.pause(50)
        led.unplot(x, 0)
        led.unplot(4 - x, 4)
        led.unplot(0, 4 - x)
        led.unplot(4, x)
        basic.pause(50)
    }
}

function rain() {
    basic.clearScreen()
    xCoord = Math.randomRange(0, 4)
    led.toggle(xCoord, 0)
    basic.pause(100)
    led.toggle(xCoord, 0)
    led.toggle(xCoord, 2)
    basic.pause(100)
    led.toggle(xCoord, 2)
    led.toggle(xCoord, 4)
    basic.pause(100)
    led.toggle(xCoord, 4)
}
function spin() {
    led.toggle(xCoord, 0)
    led.toggle(xCoord - 1, 0)
    led.toggle(xCoord, 1)
    led.toggle(xCoord - 1, 1)
    led.toggle(4, yCoord)
    led.toggle(4, yCoord - 1)
    led.toggle(3, yCoord)
    led.toggle(3, yCoord - 1)
    led.toggle(4 - xCoord, 4)
    led.toggle(5 - xCoord, 4)
    led.toggle(4 - xCoord, 3)
    led.toggle(5 - xCoord, 3)
    led.toggle(0, 4 - yCoord)
    led.toggle(0, 5 - yCoord)
    led.toggle(1, 4 - yCoord)
    led.toggle(1, 5 - yCoord)
    xCoord += 1
    yCoord += 1
    basic.pause(100)
    if (xCoord == 6) {
        xCoord = 0
        yCoord = 0
    }
}
function zigzag() {
    if (yCoord == 0 || yCoord == 2 || yCoord == 4) {
        for (let i = 0; i < 5; i++) {
            led.toggle(i, yCoord)
            led.toggle(4 - i, yCoord - 1)
            basic.pause(100)
            xCoord = i
        }
        yCoord++
    }
    if (yCoord == 1 || yCoord == 3 || yCoord == 5) {
        for (let i = 4; i > -1; i--) {
            led.toggle(i, yCoord)
            led.toggle(4 - i, yCoord - 1)
            basic.pause(100)
            xCoord = i
        }
        yCoord++
    }
    else {
        yCoord = 0
        basic.clearScreen()
        basic.pause(50)
    }
}
function spectro() {
    basic.clearScreen()
    for (let i = 4; i > Math.randomRange(-1, 3); i--) {
        led.toggle(4, i)
        led.toggle(3, i)
        led.toggle(2, i)
        led.toggle(1, i)
        led.toggle(0, i)
        basic.pause(100)
    }
}
