document.addEventListener("DOMContentLoaded", function() {
    // Get the audio element
    var audio = document.getElementById("background-music");

    // Check if the audio has been paused or ended
    if (audio.paused || audio.ended) {
        // Play the audio
        audio.play();
    }
});
