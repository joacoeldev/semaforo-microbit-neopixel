input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    record.startRecording(record.BlockingState.Blocking)
})
input.onButtonPressed(Button.A, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.showNumber(3)
    basic.pause(1000)
    strip2.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.showNumber(2)
    basic.pause(1000)
    stip3.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.showNumber(1)
    basic.pause(1000)
    basic.clearScreen()
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    strip2.showColor(neopixel.colors(NeoPixelColors.Green))
    stip3.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(1000)
    strip2.showColor(neopixel.colors(NeoPixelColors.Black))
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    stip3.showColor(neopixel.colors(NeoPixelColors.Black))
})
input.onButtonPressed(Button.B, function () {
    record.playAudio(record.BlockingState.Blocking)
})
let stip3: neopixel.Strip = null
let strip2: neopixel.Strip = null
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
strip2 = neopixel.create(DigitalPin.P1, 3, NeoPixelMode.RGB)
stip3 = neopixel.create(DigitalPin.P2, 3, NeoPixelMode.RGB)
