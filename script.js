var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("randomBtn");

function setGradient() {
	console.log(color1.value, color2.value);
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value
	+ ", " 
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

function generateRandomHex(digits) {
	var validHexNums = "0123456789ABCDEF";
	var hexNum = "";
	for (hexNumIdx = 0; hexNumIdx < digits; hexNumIdx++) {
		hexNum += validHexNums[Math.floor(Math.random() * validHexNums.length)];
	}
	return hexNum;
}
function generateRandomHexColor() {
	var randomRGB = "#" + generateRandomHex(6);
	return randomRGB;
}
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomBtn.addEventListener("click", function(){
	
	color1.value = generateRandomHexColor();
	color2.value = generateRandomHexColor();
	setGradient()
})