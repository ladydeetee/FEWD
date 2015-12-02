$(document).ready(function() {
	if(! /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
	$("#D").hover(
    	function() {
    		$.backstretch("images/capitol_pink.jpg",{fade:300});
    	} 
    );	


