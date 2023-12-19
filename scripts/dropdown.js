// JavaScript to handle navigation on select change
document.getElementById('mobile-nav').addEventListener('change', function () {
    var selectedOption = this.value;
    if (selectedOption) {
        window.location.href = selectedOption;
    }
});
