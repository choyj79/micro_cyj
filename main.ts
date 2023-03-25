input.onButtonPressed(Button.A, function () {
    basic.showNumber(방향)
})
let 방향 = 0
방향 = 0
music.setVolume(60)
basic.forever(function () {
    방향 = input.compassHeading()
    if (방향 > 315 || 방향 < 45) {
        basic.showString("N")
    } else if (방향 > 135 || 방향 < 225) {
        basic.showString("S")
    } else if (방향 > 45 || 방향 < 135) {
        basic.showString("E")
    } else if (방향 > 225 || 방향 < 315) {
        basic.showString("W")
    }
})
