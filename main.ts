input.onGesture(Gesture.TiltRight, function () {
    Tello.right(50)
    basic.showArrow(ArrowNames.East)
})
input.onGesture(Gesture.TiltLeft, function () {
    Tello.left(50)
    basic.showArrow(ArrowNames.West)
})
input.onGesture(Gesture.LogoUp, function () {
    Tello.back(50)
    basic.showArrow(ArrowNames.South)
})
input.onGesture(Gesture.LogoDown, function () {
    Tello.forward(50)
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.AB, function () {
    Tello.fly_or_land()
    basic.showIcon(IconNames.Heart)
})
Tello.radiosetgroup(51)
basic.showIcon(IconNames.Yes)
