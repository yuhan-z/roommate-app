'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
    console.log("Page ready");
    activateNavbar();
    initRules();
})

function activateNavbar() {
    $("#nav_rules").addClass("active");
}

function initRules() {
    $(".btn-delete").click(buttonHandler);
}

function buttonHandler() {
    var containingDiv = $(this).closest(".div-rule");
    var ruleIndex = $(containingDiv).attr("id");
    console.log('delete rule button pressed!');
    // $.get(URL, postCallback);
    $(containingDiv).remove();
}