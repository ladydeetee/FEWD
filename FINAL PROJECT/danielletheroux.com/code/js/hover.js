$(document).ready(function() {
	if(! /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
	    $("#va").hover(
	    	function() {
		  		$.backstretch("images/bg-va.jpg",{fade:300});
		  	}
	  	);
	    $("#earth").hover(
	    	function() {
		  		$.backstretch("images/bg-earth.jpg",{fade:300});
		  	}
	  	);
	  	$("#wb").hover(
	    	function() {
		  		$.backstretch("images/bg-wb.jpg",{fade:300});
		  	}
	  	);
	  	$("#gbi").hover(
	    	function() {
		  		$.backstretch("images/bg-gbi.jpg",{fade:300});
		  	}
	  	);
	    $("#bandwidth").hover(
		    function() {
		  		$.backstretch("images/bg-bandwidth.jpg",{fade:300});
		  	}
	  	);
	    $("#aon").hover(
		    function() {
		  		$.backstretch("images/bg-aon.jpg",{fade:300});
		  	}
	  	);
	  	$("#unconstruct").hover(
	  		function() {
		  		$.backstretch("images/bg-unconstruct.gif",{fade:300});
		  	}
	  	);
	  	$("#taupe").hover(
	  		function() {
		  		$.backstretch("images/bg-taupe.gif",{fade:300});
		  	}
	  	);
	  	$("#manhattan").hover(
	  		function() {
		  		$.backstretch("images/bg-manhattan.jpg",{fade:300});
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
