//to handle navigation 
document.getElementById('mobile-nav').addEventListener('change', function () {
    var selectedOption = this.value;
    if (selectedOption) {
        window.location.href = selectedOption;
    }
});


// to handle slowing appearing on the contact page
document.addEventListener("DOMContentLoaded", function() {
    const leaders = document.querySelectorAll('.leader');

    function checkVisibility() {
        leaders.forEach(leader => {
            const bounding = leader.getBoundingClientRect();
            const opacity = Math.max(0, Math.min(1, 1 - (bounding.top / window.innerHeight)));
            leader.style.opacity = opacity.toFixed(2);
            if (bounding.top < window.innerHeight && bounding.bottom >= 0) {
                leader.classList.add('show');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    checkVisibility();
});
