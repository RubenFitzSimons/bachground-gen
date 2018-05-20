// import {without} from './lodash';

// console.log(drop);

// _.drop([1, 2, 3]);

 var _ = require('lodash');

// import _ from 'lodash';

var ar = [1,2,3,4,5,6];

console.log(_.without(ar, 3));

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