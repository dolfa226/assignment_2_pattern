
//elements in red containner
var changingColor = 10;

for (var i = 0; i < 200; i++) {

	var template = `

	<div class="square"></div>

	<div class="square2"></div>

	<div class="square3"></div>




	`;


	document.getElementById("wrapper").insertAdjacentHTML('afterbegin', template);
}





var backgroundColorChange = function(event){

	var widthOfBrowser = window.innerWidth;
	var heightOfBrowser = window.innerHeight;

	// var container = document.querySelector(".container");
	var containerItems = document.querySelectorAll(".square");

	var percentageY = event.pageY/heightOfBrowser;
	var blue1 =  60 + (10 * (percentageY));
	var blue2 = 255 * (percentageY);

		// console.log(containerItems);

		for (let index = 0; index < containerItems.length; index++) {
			containerItems[index].style.backgroundColor = `rgb(0, 0,${blue2})`;
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

window.addEventListener("mousemove", backgroundColorChange2)




//sq3
var backgroundColorChange3 = function(event){

	var widthOfBrowser = window.innerWidth;
	var heightOfBrowser = window.innerHeight;


	// var container = document.querySelector(".container");
	var containerItems = document.querySelectorAll(".square3");

	var percentageX = event.pageX/widthOfBrowser;
	var red3 = 300 + (5 * (percentageX));

	var percentageY = event.pageY/heightOfBrowser;
	var red4 =  60 + (10 * (percentageY));


		// console.log(containerItems);

		for (let index = 0; index < containerItems.length; index++) {
			containerItems[index].style.backgroundColor = `rgb(${ red4 },10,${red3})`;
		}

}

window.addEventListener("mousemove", backgroundColorChange3)






for (var i = 0; i < 300; i++) {

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



