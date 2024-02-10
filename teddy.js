document.addEventListener( 
	"DOMContentLoaded", function () { 
	const holes = 
		document.querySelectorAll(".hole"); 
	const startButton = 
		document.getElementById("startButton"); 

	let bearInterval; 
	let gameOver = true; 

	function comeout() { 
		holes.forEach(hole => { 
			hole.classList.remove('bear'); 
			hole.removeEventListener( 
				'click', handleBearClick); 
		}); 

		let random = holes[Math.floor(Math.random() * 9)]; 
		random.classList.add('bear'); 
		random.addEventListener('click', handleBearClick); 
	} 

	function handleBearClick() { 
		if (!gameOver) { 
			window.open("success.html","_blank");
            endGame()
		} 
		this.classList.remove('bear'); 
	} 

	function startGame() { 
		if (!gameOver) { 
			return; 
		} 

		gameOver = false;
		startButton.disabled = true; 

		bearInterval = setInterval(() => { 
			if (!gameOver) comeout(); 
		}, 500); 
	} 

	function endGame() { 
		clearInterval(bearInterval); 
		gameOver = true; 
		startButton.disabled = false;
	} 
	startButton.addEventListener("click", startGame);
});
