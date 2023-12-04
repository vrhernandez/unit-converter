/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const btnEl = document.getElementById("btn-el")
const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const metersToFeet = 3.2808399
const litersToGallons = 0.264172
const kiloToPounds = 2.20462262

btnEl.addEventListener("click", function() {
    if (!isNaN(inputEl.value) && !isNaN(parseFloat(inputEl.value))) {
        render()
    }
})

function render() {
    const input = inputEl.value
    convert(input, lengthEl, metersToFeet, "meters", "feet")
    convert(input, volumeEl, litersToGallons, "liters", "gallons")
    convert(input, massEl, kiloToPounds, "kilos", "pounds")
}

function convert(input, outputEl, ratio, unitA, unitB) {
    const convX = (input*ratio).toFixed(3)
    const convY = (input/ratio).toFixed(3)
    outputEl.textContent = `${input} ${unitA} = ${convX} ${unitB} | ${input} ${unitB} = ${convY} ${unitA}`
}