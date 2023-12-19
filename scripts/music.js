 // music.js

document.addEventListener("DOMContentLoaded", function () {
    // Check if the user is logged in (replace this with your actual login check)
    var userIsLoggedIn = true; // Replace with your actual logic to check if the user is logged in

    var backgroundMusic = document.getElementById("background-music");

    // Play the music if the user is logged in
    if (userIsLoggedIn) {
        backgroundMusic.play();
    }
});
