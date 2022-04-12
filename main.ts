input.onButtonPressed(Button.A, function () {
    number += 1
    basic.showNumber(number)
})
input.onButtonPressed(Button.AB, function () {
    if (random == number) {
        basic.showString("You win ")
    } else if (random > number) {
        basic.showString("Higher")
        basic.showNumber(random)
        basic.showString("So close!")
    } else {
        basic.showString("Lower")
        basic.showNumber(random)
        basic.showString("So close!")
    }
})
input.onButtonPressed(Button.B, function () {
    number += -1
    basic.showNumber(number)
})
let number = 0
let random = 0
random = randint(0, 20)
number = 0
basic.forever(function () {
	
})
