const numInput = document.getElementById("num-input")
let output = document.getElementById("container")


function render(){
    event.preventDefault()
    
    let inputValue = Number(numInput.value)
    let feet = inputValue * 3.281
    let meter = inputValue / 3.281
    let gallon = inputValue * 0.264
    let liter = inputValue / 0.264
    let pound = inputValue * 2.204
    let kilogram = inputValue / 2.204
    
    output.innerHTML = `
    <div>
        <h2>Length (Meter/Feet)</h2>
        <p>${inputValue} meters = ${feet.toFixed(3)} feet <br><br> ${inputValue} feet = ${meter.toFixed(3)} meters</p>
    </div>
    <div>
        <h2>Volume (Liters/Gallons)</h2>
        <p>${inputValue} liters = ${gallon.toFixed(3)} gallons <br><br> ${inputValue} gallons = ${liter.toFixed(3)} liters</p>
    </div>
    <div>
        <h2>Mass (Kilograms/Pounds)</h2>
        <p>${inputValue} kilograms = ${pound.toFixed(3)} pounds <br><br> ${inputValue} pounds = ${kilogram.toFixed(3)} kilograms</p>
    </div>
    `
    
     output.classList.add('show');
     document.getElementById("info-message").style.display = "none";
     document.getElementById("desc").style.display = "none";
     document.getElementById("title").style.display = "none";
}

numInput.addEventListener("keyup", render)