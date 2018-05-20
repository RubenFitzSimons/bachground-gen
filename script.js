var h3Select = document.querySelector("h3");

var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

var body = document.getElementById("gradient");


function updateColour(){

	// console.log(color1.value);
	body.style.background = 
	"linear-gradient(to right, "+color1.value+", "+color2.value +")";

}

color1.addEventListener("input", updateColour);

color2.addEventListener("input", updateColour);

body.style.background