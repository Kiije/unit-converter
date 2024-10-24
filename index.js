let numberEl = document.getElementById("number")
let btnEl = document.getElementById("btn")
let lengthEl = document.getElementById("length-text")
let volumeEl = document.getElementById("volume-text")
let massEl = document.getElementById("mass-text")


btnEl.addEventListener("click", function render() {
    number = numberEl.value
    length()
    volume()
    mass()
    return number
})

function length() {
    let length = `${number} meters = ${(number*3.281).toFixed(3)} feet | ${number} feet = ${(number/3.281).toFixed(3)} meters`
    lengthEl.textContent = length
}

function volume() {
    let volume = `${number} liters = ${(number*0.264).toFixed(3)} gallons | ${number} gallons = ${(number/0.264).toFixed(3)} liters`
    volumeEl.textContent = volume
}

function mass() {
    let mass = `${number} kilos = ${(number*2.204).toFixed(3)} pounds | ${number} pounds = ${(number/2.204).toFixed(3)} kilos`
    massEl.textContent = mass
}

// function volume() {
//     let length = `${} meters = ${} feet | ${} feet = ${}}`
//     lengthEl.textContent = length
// }

// function mass() {
//     let length = `${} meters = ${} feet | ${} feet = ${}}`
//     lengthEl.textContent = length
// }