def on_gesture_logo_up():
    Tello.forward(20)
input.on_gesture(Gesture.LOGO_UP, on_gesture_logo_up)

def on_gesture_logo_down():
    Tello.back(20)
input.on_gesture(Gesture.LOGO_DOWN, on_gesture_logo_down)

def on_button_pressed_ab():
    Tello.fly_or_land()
    basic.show_leds("""
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        # # # # #
        """)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

Tello.radiosetgroup(0)

def on_forever():
    Tello.setorder()
basic.forever(on_forever)
