function Guesses (Num: number) {
    return Num
}
input.onButtonPressed(Button.A, function () {
    if (User_Guess > 0) {
        User_Guess += -1
        basic.showNumber(User_Guess)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (Hidden_Number(User_Guess)))
})
input.onButtonPressed(Button.B, function () {
    if (User_Guess < 20) {
        User_Guess += 1
        basic.showNumber(User_Guess)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("#Tries=")
    basic.showString("" + (Guesses(Tries)))
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(500)
    basic.showNumber(User_Guess)
})
function Hidden_Number (num: number) {
    if (num == Random) {
        Random = randint(0, 20)
        User_Guess = 0
        Tries = 0
        return "NICE"
    } else if (num < Random) {
        Tries += 1
        return "HIGHER"
    } else {
        Tries += 1
        return "LOWER"
    }
}
let Tries = 0
let User_Guess = 0
let Random = 0
Random = randint(0, 20)
User_Guess = 0
Tries = 0
