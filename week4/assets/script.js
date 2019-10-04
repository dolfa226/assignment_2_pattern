var changingColor = 10;

for (var i = 0; i < 100; i++) {

	var rotation = Math.round((i/20) + 30);

	var skew = Math.round((i/2));

	var rotation2 = Math.round((i/10) * 360);

	var template = `
	<div class="rec" style=" transform:rotate(${rotation2}deg); transform: skew(${skew}deg);">	
	</div>

	<div class="rec2" style="transform:rotate(${rotation}deg);"></div>
	

	<div class="circle"></div>

	`;


	document.getElementById("wrapper").insertAdjacentHTML('afterend', template);

}


var changingColor = 10;

var myButton = document.querySelector("#turnRed");
var container = document.querySelector(".container")


var isThisRed = false

var turnThisRed = function (){

	if(isThisRed ===false){
		container.style.backgroundColor = "red";
		isThisRed = true;
	}else{
		container.style.backgroundColor = "black";
		isThisRed = false;

	}
}


myButton.addEventListener("click", turnThisRed)

var backgroundColorChange = function(event){

	var widthOfBrowser = window.innerWidth;
	var heightOfBrowser = window.innerHeight;

	// console.log("browser size: ", widthOfBrowser, heightOfBrowser)
	// console.log("mouse position: ", event.pageX, event.pageY)

	var body = document.querySelector(".container");

	var percentageX = event.pageX/widthOfBrowser;
	var blue1 = 30 + (5 * (percentageX));

	var percentageY = event.pageY/heightOfBrowser;
	var blue2 = 700 * (percentageY);

	body.style.backgroundColor = `rgb(${ blue1 },0,${blue2})`;

}

// event listener: 
window.addEventListener("mousemove", backgroundColorChange)



// myButton.addEventListener("click", turnThisRed)

// var backgroundColorChange = function(event){

// 	var widthOfBrowser = window.innerWidth;
// 	var heightOfBrowser = window.innerHeight;

// 	// console.log("browser size: ", widthOfBrowser, heightOfBrowser)
// 	// console.log("mouse position: ", event.pageX, event.pageY)

// 	var container = document.querySelector(".container");
// 	var containerItems = document.querySelector(".rec2");

// 	var percentageX = event.pageX/widthOfBrowser;
// 	var blue1 = 30 + (5 * (percentageX));

// 	var percentageY = event.pageY/heightOfBrowser;
// 	var blue2 = 700 * (percentageY);

// 	containerItems.style.backgroundColor = `rgb(${ blue1 },0,${blue2})`;

// }

// // event listener: 
// window.addEventListener("mousemove", backgroundColorChange)












