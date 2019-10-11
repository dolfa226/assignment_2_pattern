
//elements in red containner
var changingColor = 10;

for (var i = 0; i < 200; i++) {

	var template = `

	<div class="square"></div>

	<div class="square2"></div>

	<div class="square3"></div>

	<div class="square2"></div>




	`;


	document.getElementById("wrapper").insertAdjacentHTML('afterbegin', template);
}





var backgroundColorChange = function(event){

	var widthOfBrowser = window.innerWidth;
	var heightOfBrowser = window.innerHeight;

	// var container = document.querySelector(".container");
	var containerItems = document.querySelectorAll(".square");

	var percentageY = event.pageY/heightOfBrowser;
	var blueA = 255 * (percentageY);

		// console.log(containerItems);

		for (let index = 0; index < containerItems.length; index++) {
			containerItems[index].style.backgroundColor = `rgb(0, 0,${blueA})`;
		}

}

window.addEventListener("mousemove", backgroundColorChange)



var backgroundColorChange2 = function(event){

	var widthOfBrowser = window.innerWidth;


	// var container = document.querySelector(".container");
	var containerItems = document.querySelectorAll(".square2");

	var percentageX = event.pageX/widthOfBrowser;
	var blueB1 = 30 + (5 * (percentageX));

	var blueB2 = 700 * (percentageX);

		// console.log(containerItems);

		for (let index = 0; index < containerItems.length; index++) {
			containerItems[index].style.backgroundColor = `rgb(${blueB1},10,${blueB2})`;
		}

}

window.addEventListener("mousemove", backgroundColorChange2)


var backgroundColorChange3 = function(event){

	var widthOfBrowser = window.innerWidth;
	var heightOfBrowser = window.innerHeight;

	var containerItems = document.querySelectorAll(".square3");

	var percentageX = event.pageX/widthOfBrowser;
	var blueC1 = percentageX;

	var percentageY = event.pageY/heightOfBrowser;
	var blueC2 =  200 + (10 * (percentageY));

		for (let index = 0; index < containerItems.length; index++) {
			containerItems[index].style.backgroundColor = `rgb(${blueC1},10,${blueC2})`;
		}

}

window.addEventListener("mousemove", backgroundColorChange3)







for (var i = 0; i < 400; i++) {

	var rotation = Math.round((i/20) + 30);



	var rotation2 = Math.round((i/10) * 360);

	var template = `

	<div class="whitesq"></div>



	`;


	document.getElementById("wrapper2").insertAdjacentHTML('beforebegin', template);
	
}




// endless scroll
var scrolling = function(){
	var body = document.querySelector("body");

	var percentageScrolled = (window.scrollY + window.innerHeight)/body.offsetHeight;
	console.log(percentageScrolled)

	if(percentageScrolled >= 1 ){
		window.scrollTo(0,0)
	}

}


window.addEventListener("scroll", scrolling);



