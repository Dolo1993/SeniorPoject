//to handle navigation 
document.getElementById('mobile-nav').addEventListener('change', function () {
    var selectedOption = this.value;
    if (selectedOption) {
        window.location.href = selectedOption;
    }
});



// to handle slow appearing on the contact page
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




//to prevent right click
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
}); 



// to calculate the weather temperature in Liberia
const apiKey = "4693e3d9da68657f229c5244a54f4233";
const city = "Monrovia,Liberia";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

// Retrieve the current temperature and weather icon
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const currentTemp = Math.round(data.main.temp);
    const weatherIcon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const weatherDesc = data.weather[0].description;
    document.getElementById("current-temp").textContent = currentTemp;
    document.getElementById("weather-icon").setAttribute("src", weatherIcon);
    document.getElementById("weather-icon").setAttribute("alt", weatherDesc);
    document.querySelector("figcaption").textContent = weatherDesc;
  }) 




// Function to calculate the days until Christmas
function calculateDaysUntilChristmas() {
    var currentDate = new Date();
    var christmasDate = new Date(currentDate.getFullYear(), 11, 25); 

    // Check if Christmas has already passed this year
    if (currentDate > christmasDate) {
        christmasDate.setFullYear(currentDate.getFullYear() + 1); 
    }

    // Calculate the time difference in milliseconds
    var timeDifference = christmasDate - currentDate;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    // Display the information
    document.getElementById('lastVisited').textContent = getLastVisited(); 
    document.getElementById('visits').textContent = getNumberOfVisits();
    document.getElementById('daysleft').textContent = days;
}

// Function to get the last visited time from localStorage
function getLastVisited() {
    var lastVisitedTimestamp = localStorage.getItem('lastVisitedTimestamp');
    if (lastVisitedTimestamp) {
        var lastVisitedDate = new Date(parseInt(lastVisitedTimestamp));
        var currentDate = new Date();
        var timeDifference = currentDate - lastVisitedDate;
        return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    } else {
        return 0; 
    }
}

// Function to get the number of visits from localStorage
function getNumberOfVisits() {
    var visitCount = localStorage.getItem('visitCount');
    if (visitCount) {
        return parseInt(visitCount);
    } else {
        return 1; 
    }
}

// Function to update the last visited time and visit count in localStorage
function updateVisitInformation() {
    var currentTimestamp = new Date().getTime();
    localStorage.setItem('lastVisitedTimestamp', currentTimestamp);

    var visitCount = getNumberOfVisits();
    localStorage.setItem('visitCount', visitCount + 1);
}
calculateDaysUntilChristmas();
updateVisitInformation();
