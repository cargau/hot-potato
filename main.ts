let timer = 0
input.onButtonPressed(Button.B, function () {
    timer = randint(1, 15)
    basic.showIcon(IconNames.Chessboard)
    while (timer > 0) {
        timer += -1
        basic.pause(1000)
    }
    basic.showIcon(IconNames.Skull)
    music.playMelody("C - - - - - - - ", 120)
})
basic.forever(function () {
	
})
