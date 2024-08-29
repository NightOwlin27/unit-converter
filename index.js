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
	let footValue = input.value * .3048
	let gallonValue = input.value * 3.78541
	let poundValue = input.value * .453592
	
	length.textContent += ` ${input.value} feet = ${footValue.toFixed(2)} meters`;
	volume.textContent += ` ${input.value} gallons = ${gallonValue.toFixed(2)} liters`;
	mass.textContent += ` ${input.value} pounds = ${poundValue.toFixed(2)} kilos`;
}