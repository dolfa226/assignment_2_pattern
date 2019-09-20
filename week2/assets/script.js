var myWrapper = document.getElementById("container");

/******************/
/*****FOR LOOP w/ TEMPLATE LITERAL *******/
	var changingColor = 10;

	var changingOpacity = .6;
	var changingSkew = 5;

	for (var i = 0; i < 800; i++) {

		changingColor = changingColor + 60;

		var degrees;

		if(i % 5 === 0){
			// even
			degrees = (i/20) * 20;
			console.log("i: " + i, degrees)
		}else{
			// odd
			degrees = (i + 10);
		}

		var myModule = `

		<div 
			class="module" 
			style="transform: rotate(${degrees}deg);"
		>
			<div 
				class="module_child_1" 
				style="transform: rotate(${degrees}deg);"
			></div>

				<div 
				class="module_child_2" 
				style="transform: rotate(${degrees}deg);"
				></div>

					<div 
					class="module_child_3" 
					style="transform: rotate(${degrees}deg);"
					></div>

						<div 
						class="module_child_4" 
						style="transform: rotate(${degrees}deg);"
						></div>
			
		</div>
		`;



		

		var starRotate = 35 + ((i/10) * 80);



		var mySecondModule = `
			<div class="star_wrapper">

				<div class="star-five" style="transform: rotate(${starRotate}deg);"></div>

			</div>
		`;

		myWrapper.insertAdjacentHTML('afterend' , mySecondModule);

		if(i % 2 === 0){
			myWrapper.insertAdjacentHTML('beforeend' , myModule);
		}else{
			myWrapper.insertAdjacentHTML('afterbegin' , myModule);
		}

		
		//myWrapper.innerHTML = myModule; // overrides the innerHTML content
	}
