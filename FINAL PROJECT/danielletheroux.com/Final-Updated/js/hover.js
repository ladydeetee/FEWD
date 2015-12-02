$(document).ready(function() {
	if(! /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
	    $("#D").hover(
	    	function() {
		  		$.backstretch("images/me_pink.jpg",{fade:300});
		  	}
	  	);
	    $("#teach").hover(
	    	function() {
		  		$.backstretch("images/apple_pink.jpg",{fade:300});
		  	}
	  	);
	  	$("#write").hover(
	    	function() {
		  		$.backstretch("images/desk_pink.jpg",{fade:300});
		  	}
	  	);
	  	$("#ef").hover(
	    	function() {
		  		$.backstretch("images/capitol_pink.jpg",{fade:300});
		  	}
	  	);
	    $("#tb").hover(
		    function() {
		  		$.backstretch("images/therouxbred.jpg",{fade:300});
		  	}
	  	);
	    $("#foray").hover(
		    function() {
		  		$.backstretch("images/compass_pink.jpg",{fade:300});
		  	}
	  	);
	  	$("#connect").hover(
	  		function() {
		  		$.backstretch("images/xoxo_d.jpg",{fade:300});
		  	}
	  	);
		
		$('a.hover-img').hover(
			function() {
				$('.backstretch').toggleClass('hover-img');
				$('.button').toggleClass('dark');
			}
		);
		$('a:not(.hover-img)').hover(
			function() {
				$('html').toggleClass('hover-bg');
			}
		);
	};

});
