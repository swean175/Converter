/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

//Follow the design spec
//Generate all conversion on click
//Rounds the number down to three decimal


const input = document.getElementById("inp")
const but = document.getElementById("but-btn")
const len = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")
let inp
input.addEventListener('input', () =>  inp = input.value)


//conversions******************
function leng(){

    
     len.textContent = `${inp} meters = ${(inp * 3.280839895).toFixed(3)} feet |  ${inp} feet = ${(inp/3.280839895).toFixed(3)} meters`
}
function vol(){
    volume.textContent = `${inp} liters = ${(inp * 0.2641720524).toFixed(3)} gallons |  ${inp} gallons = ${(inp/0.2641720524).toFixed(3)} liters`
}

function mas(){
    mass.textContent = `${inp} kilos = ${(inp * 2.2046226218).toFixed(3)} pounds |  ${inp} ppunds = ${(inp/2.2046226218).toFixed(3)} kilos`

}
//Convert execute**********

function convert(){
   
leng()
vol()
mas()
}
console.log(inp)
