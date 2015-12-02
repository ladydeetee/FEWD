$(document).ready(function() {

var animals = ['animal1.jpg', 
		'animal2.jpg', 'animal3.jpg', 
		'animal4.jpg', 'animal5.jpg',
		'animal6.jpg', 'animal7.jpg',]
	var i = 0;
	//Events
	$('#next').click(goToNextAnimal);
	$('#back').click(goToPreviousAnimal);
	//Define functions (reactions)
	function goToNextAnimal(){
		//i = i + 1
		if( i === animals, lentgth - 1) {
			i = 0;
			} else {
			i++;
		}
		
		var nextAnimal = animals[i];
		$('#image-to-vote-on').attr('src', 'images/' + nextAnimal)
	}
	function goToPreviousAnimal(){
		i--;
		
		var previousAnimal = animals[-i];
		$('#image-to-vote-on').attr('src', 'images/' + previousAnimal)
		
	}
});