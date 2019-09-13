	var myWrapper = document.getElementById("rec1"); 
	
	for (var i = 0; i < 300; i++) {
		myWrapper.innerHTML += '<div class="patternUnit" style="background-color: rgb('+ (40 + (i*0)) +',' + (10+ (i*2)) + ',200); transform: rotate('+ (30 * i) +'deg); transform: skewY('+(.3 + i) +'deg);" ></div>';



	}




