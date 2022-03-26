/**
 * Ein Balkendiagramm wird abhängig vom Analogwert am P1 angezeigt.
 */
let range = 0
let strip = neopixel.create(DigitalPin.P0, 20, NeoPixelMode.RGB)
/**
 * Die untere Farbe ist blau, die obere Farbe rot. Die Farben gehen von blau nach rot über. ->perfekt für eine Temperaturanzeige
 */
basic.forever(function () {
    range = pins.analogReadPin(AnalogPin.P1)
    strip.showBarGraph(range, 1023)
})
