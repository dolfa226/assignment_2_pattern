var changingColor = 10;



for (var i = 0; i < 351; i++) {

	changingColor = changingColor + 5;

	var rotation = Math.round((i/20) + 30);

	var skew = Math.round((i/5));

	var rotation2 = Math.round((i/20) * 360);

	var template = `
	<div class="rec" style="background-color:rgb(${changingColor},100,20); transform:rotate(${rotation}deg); transform: skew(${skew}deg);">	
	</div>

	<div class="rec2" style="transform:rotate(${rotation}deg);"></div>

	<div class="border" style="transform:rotate(${rotation}deg);"></div>
	`;

	document.getElementById("wrapper").insertAdjacentHTML('afterend', template);


}



var timer = 100;

var myLoopFunction = function(i){	

	document.getElementById("wrapper2").insertAdjacentHTML("beforeend", `
		<div class="wrapper2";"></div>
	 `);
}

for (var i = 0; i < 80; i++) {
	setTimeout(myLoopFunction, i*100, i)
}
