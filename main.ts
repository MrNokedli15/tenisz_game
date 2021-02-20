function SikeresUtes () {
    if (Labda.isTouching(TeniszUto)) {
        game.addScore(1)
    }
}
function JatekVege () {
    if (Labda.get(LedSpriteProperty.Y) == 4) {
        if (Labda.get(LedSpriteProperty.X) != TeniszUto.get(LedSpriteProperty.X)) {
            basic.showString("score" + game.score())
            game.gameOver()
        }
    }
}
input.onButtonPressed(Button.A, function () {
    TeniszUto.move(-1)
})
function UjLabda () {
    if (Labda.get(LedSpriteProperty.Y) == 0) {
        Labda.set(LedSpriteProperty.X, randint(0, 4))
    }
}
input.onButtonPressed(Button.B, function () {
    TeniszUto.move(1)
})
let Labda: game.LedSprite = null
let TeniszUto: game.LedSprite = null
game.setScore(0)
TeniszUto = game.createSprite(2, 4)
Labda = game.createSprite(randint(0, 4), 0)
Labda.turn(Direction.Right, 45)
basic.forever(function () {
    Labda.move(1)
    Labda.ifOnEdgeBounce()
    basic.pause(600)
    SikeresUtes()
    UjLabda()
    JatekVege()
})
