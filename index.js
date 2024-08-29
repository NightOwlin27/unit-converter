const input = document.querySelector("input")
const btn = document.querySelector(".btn")
const length = document.querySelector(".length-info")
const volume = document.querySelector(".volume-info")
const mass = document.querySelector(".mass-info")


btn.addEventListener('click', function() {
	getImperial();
	getMetric();
})

function getImperial () {
	let meterValue = input.value * 3.28084
    let literValue = input.value * .264172
    let kiloValue = input.value * 2.20462
	
	length.textContent = `${input.value} meters = ${meterValue.toFixed(2)} feet |`;
    volume.textContent = `${input.value} liters = ${literValue.toFixed(2)} gallons |`;
    mass.textContent = `${input.value} kilos = ${kiloValue.toFixed(2)} pounds |`;
}


function getMetric () {
	let feetValue = input.value * .3048
	
	length.textContent += ` ${input.value} feet = ${feetValue.toFixed(2)} meters`;
}