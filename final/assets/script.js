
//elements in red containner
var changingColor = 10;

for (var i = 0; i < 120; i++) {

	var template = `

	<div class="square"></div>

	<div class="square2"></div>


	`;


	document.getElementById("wrapper").insertAdjacentHTML('afterbegin', template);
}





var backgroundColorChange = function(event){

	var widthOfBrowser = window.innerWidth;
	var heightOfBrowser = window.innerHeight;

	// var container = document.querySelector(".container");
	var containerItems = document.querySelectorAll(".square");

	var percentageX = event.pageX/widthOfBrowser;
	var blue1 = 30 + (5 * (percentageX));

	var percentageY = event.pageY/heightOfBrowser;
	var blue2 = 20 + 70 * (percentageY);

		// console.log(containerItems);

		for (let index = 0; index < containerItems.length; index++) {
			containerItems[index].style.backgroundColor = `rgb(${ blue1 },10,${blue2})`;
		}

}

window.addEventListener("mousemove", backgroundColorChange)



var backgroundColorChange2 = function(event){

	var widthOfBrowser = window.innerWidth;


	// var container = document.querySelector(".container");
	var containerItems = document.querySelectorAll(".square2");

	var percentageX = event.pageX/widthOfBrowser;
	var red1 = 30 + (5 * (percentageX));

	var red2 = 700 * (percentageX);

		// console.log(containerItems);

		for (let index = 0; index < containerItems.length; index++) {
			containerItems[index].style.backgroundColor = `rgb(${ red1 },10,${red2})`;
		}

}




for (var i = 0; i < 300; i++) {

	var rotation = Math.round((i/20) + 30);

	var skew = Math.round((i/2));

	var rotation2 = Math.round((i/10) * 360);

	var template = `

	<div class="whitesq"></div>



	`;


	document.getElementById("wrapper2").insertAdjacentHTML('beforebegin', template);
	
}



window.addEventListener("mousemove", backgroundColorChange2)


// var j = 0; // to keep track of how many times you want to loop, you have to simulate a for loop:

// var myAppendingFunction = function(){

// 	var rotation = Math.round((j/10) * 360);
// 	document.getElementById("wrapper4").insertAdjacentHTML("afterbegin", ` 
// 		<div class="whiterec" ;"></div>
// 		setInterval has run ${j} times <br>`);

// 	if(j >= 100){ // defining the maximum amount of cycles
// 		console.log("we're done!");
// 		clearInterval(myAnimating);
// 	}

// 	j++;
// }


// var myAnimating = setInterval(myAppendingFunction, 500);






