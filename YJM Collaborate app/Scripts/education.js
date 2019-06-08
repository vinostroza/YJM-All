
var idleTime = 0;
$(document).ready(function () {
//Increment the idle time counter every minute.
var idleInterval = setInterval(timerIncrement, 60000); // 1 minute

//Zero the idle timer on mouse movement.
$(this).mousemove(function (e) {
    idleTime = 0;
});
$(this).keypress(function (e) {
    idleTime = 0;
});
});

function timerIncrement() {
idleTime = idleTime + 1;
if (idleTime > 1) { // 2 minutes
    // fade out div
}
}

setTimeout(function showhide(){
    document.getElementById("sidebaricons"). style = 'display:hidden';
    }, 3000);

function myLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(meHere);
    } else {
        alert('Geolocation is not supported :(');
    }
}

function meHere(position) {
    var location = {
        lat: 43.053773,
        lng: - 87.928693
    };


    var map = new google.maps.Map(
        document.getElementById('map'),
        { zoom: 15, center: location }
    );


    var marker = new google.maps.Marker(
        {
            position: location,
            map: map
        }
    );
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
