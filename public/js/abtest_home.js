'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});


/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(".abtest").click(clicked);
}

function clicked(e){
	e.preventDefault();
	console.log("clicked");
    ga('create', 'UA-159314545-1', 'auto');
    ga('send', 'event', 'clicked', 'click');

    window.location.href = "/"+this.id;
}