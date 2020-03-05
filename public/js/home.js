'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
    console.log("Page ready");
    activateNavbar();
    initUpdates();
})

function activateNavbar() {
    $("#nav_home").addClass("active");
}

function initUpdates() {

    // Get today's date
    var todayDate = new Date().toISOString().split('T')[0]
    console.log(todayDate);

    $.post('/getEvents', {}, postCallback);

    function postCallback(result) {
        console.log("Post-callback function!");
        var calendar = result["calendar"];

        var updates = '';
        for (var index in calendar) {
            var date = calendar[index].date; // YYYY-MM-DD
            var name = calendar[index].name; // Jessie, Yuhan, Christine, etc.
            var description = calendar[index].description; // Dishes or TV 4-PM
            var category = calendar[index].category; // Chore or Reservation

            if (date != todayDate) {
                continue;
            }
            if (updates == '') {
                updates = '<ol class="list-group list-group-flush">';
            }
            // Add event to updates
            updates += newListItem(name, description, category);
        }

        if (updates == '') {
            updates += '<li class="list-group-item">No updates today.</li></ol>';
        } else {
            updates += '</ol>';
        }

        console.log(updates);
        $("#updates").html(updates);
    }

    function newListItem(name, description, category) {
        var listItem = name + ' has a ' + category + ': ' + description;
        return '<li class="list-group-item">' + listItem + '</li>';
    }
}