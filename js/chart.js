/////////// VARIABLES ///////////

// Notification Bell
const bell = document.querySelector('.bell');
const notifications = document.querySelector('.notifications');

// Alert Banner
const alertBanner = document.getElementById('alert');

// Traffic Charts
const trafficCanvas = document.getElementById('traffic-chart');
const dailyCanvas = document.getElementById('daily-traffic-chart');
const mobileCanvas = document.getElementById('mobile-users-chart');

// Traffic Chart Navigation
const trafficNav = document.querySelector('.traffic-nav');
const trafficNavLinks = document.querySelectorAll('.traffic-nav-link');

// Messaging Section
const user = document.getElementById("user-field");
const message = document.getElementById("form-field");
const send = document.getElementById("send");

//Settings Section
const emailToggleButton = document.getElementById("email-toggle-button").firstElementChild;
const privacyToggleButton = document.getElementById("privacy-toggle-button").firstElementChild;
const select = document.getElementById("timezone");
const selectOptions = document.querySelectorAll("option");
const save = document.getElementById("save");
const cancel = document.getElementById("cancel");

// Messaging Autocomplete
const autoComplete = document.querySelector('.autocomplete');
const autoCompleteNames = [
  'Dan Byrd',
  'Dawn Wood',
  'Dan Oliver',
  'Jasmine Rodriguez',
  'Melanie Castillo',
  'Vicky Reinhart',
  'Victoria Chambers'
];

// Traffic Line Chart Data and Options
const trafficDataHourly = {
    labels: ['8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM'],
    datasets: [{
        data: [175, 125, 225, 75, 115, 200, 100, 140, 99, 105, 63],
        backgroundColor: 'rgba(115,119,191,0.24)',
        borderColor: 'rgba(115,119,191,0.74)',
        borderWidth: 1,
        pointRadius: 7,
        pointBackgroundColor: '#fff',
        pointBorderWidth: 3,
        pointBorderColor: '#7477BF',
        lineTension: 0
    }]
}

const trafficDataDaily = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: 'rgba(115,119,191,0.24)',
        borderColor: 'rgba(115,119,191,0.74)',
        borderWidth: 1,
        pointRadius: 7,
        pointBackgroundColor: '#fff',
        pointBorderWidth: 3,
        pointBorderColor: '#7477BF',
        lineTension: 0
    }]
}

const trafficDataWeekly = {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
        2500],
        backgroundColor: 'rgba(115,119,191,0.24)',
        borderColor: 'rgba(115,119,191,0.74)',
        borderWidth: 1,
        pointRadius: 7,
        pointBackgroundColor: '#fff',
        pointBorderWidth: 3,
        pointBorderColor: '#7477BF',
        lineTension: 0
    }]
}

const trafficDataMonthly = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        data: [1250, 900, 2000, 750, 1500, 1750, 1200, 1800, 2250, 1500,
        2400, 1100],
        backgroundColor: 'rgba(115,119,191,0.24)',
        borderColor: 'rgba(115,119,191,0.74)',
        borderWidth: 1,
        pointRadius: 7,
        pointBackgroundColor: '#fff',
        pointBorderWidth: 3,
        pointBorderColor: '#7477BF',
        lineTension: 0
    }]
}

const trafficOptions = {
      aspectRatio: 2.5,
      animation: {
        duration: 0
      },
      scales: {
          yAxes: [{
          ticks: {
            beginAtZero:true
            }
          }]
      },
      legend : {
        display: false
      }
}

// Daily Bar Chart Data and Options
const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
      label: '# of Hits',
      data: [75, 115, 175, 125, 225, 200, 100],
      backgroundColor: '#7477BF',
      borderWidth: 1
    }]
};

const dailyOptions = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
            }
        }]
    },
    legend : {
      display: false
    }
}

// Doughnut Bar Chart Data and Options
const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
      label: '# of Users',
      data: [2000, 550, 500],
      borderWidth: 0,
      backgroundColor: [
        '#7477BF',
        '#78CF82',
        '#51B6C8'
        ]
    }]
};

const mobileOptions = {
    legend: {
      position: 'right',
      labels: {
        boxWidth: 20,
        fontStyle: 'bold'
      }
    }
}

/////////// FUNCTIONS ///////////

// Create Traffic Line Chart
function createTrafficChart(trafficData) {
  const trafficChart = new Chart(trafficCanvas, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset
      data: trafficData,
      // Configuration options go here
      options: trafficOptions
  });
}

// Check the state of toggle switch from Local Storage
function checkToggleState(toggleButton) {
  if (localStorage.getItem(toggleButton) && localStorage.getItem(toggleButton) === "true") {
    return true;
  } else {
    return false;
  }
}

// Adds items to Local Storage
function saveSettings() {
  localStorage.setItem("emailToggle", emailToggleButton.checked);
  localStorage.setItem("privacyToggle", privacyToggleButton.checked);
  localStorage.setItem("timezone", select.value);
}

// Removes items from Local Storage
function clearSettings() {
  localStorage.removeItem("emailToggle");
  localStorage.removeItem("privacyToggle");
  localStorage.removeItem("timezone");
}

// Initialize the page
function initializePage() {
  // Create Alert Banner on page load
  alertBanner.innerHTML =
  `
  <div class="alert-banner">
  <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
  to complete</p>
  <p class="alert-banner-close">X</p>
  </div>`

  // Hide Search Autocomplete
  autoComplete.style.display = "none";

  // Hide Bell Notifications
  notifications.style.display = "none";

  // Initialize Page with Traffic Data - Weekly
  createTrafficChart(trafficDataWeekly);

  // Create Bar Graph Chart
  const dailyChart = new Chart(dailyCanvas, {
      // The type of chart we want to create
      type: 'bar',
      // The data for our dataset
      data: dailyData,
      // Configuration options go here
      options: dailyOptions
  });

  // Create Donut Graph Chart
  const donutChart = new Chart(mobileCanvas, {
      // The type of chart we want to create
      type: 'doughnut',
      // The data for our dataset
      data: mobileData,
      // Configuration options go here
      options: mobileOptions
  });

  // Initialize Settings Widget
  if (checkToggleState("emailToggle")) {
    emailToggleButton.checked = true;
  } else {
    emailToggleButton.checked = false;
  }

  if (checkToggleState("privacyToggle")) {
    privacyToggleButton.checked = true;
  } else {
    privacyToggleButton.checked = false;
  }

  if (localStorage.getItem("timezone")) {
    for (let i=0; i < selectOptions.length; i++) {
      selectOptions[i].removeAttribute("selected");
      if (localStorage.getItem("timezone") === selectOptions[i].value) {
        selectOptions[i].setAttribute("selected", "selected");
      }
    }
  }
}

/////////// INITIALIZE PAGE ///////////
initializePage();


/////////// EVENT LISTENERS ///////////

// Notifications Event Listener
bell.addEventListener("click", () => {
  if (notifications.style.display === "none") {
    notifications.style.display = "block";
  } else if (notifications.style.display === "block") {
    notifications.style.display = "none";
  }
})

// Alert banner close button Event Listener
alertBanner.addEventListener("click", (e) => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
      alertBanner.style.display = "none";
    }
})

// Traffic Chart Nav Event Listener
trafficNav.addEventListener("click", (e) => {
  trafficNavLink = e.target;
  //Remove all active classes on trafficNavLinks
  for (let i=0; i < trafficNavLinks.length; i++) {
    trafficNavLinks[i].classList.remove("active");
  }
  //
  if (trafficNavLink.textContent === 'Hourly') {
    createTrafficChart(trafficDataHourly);
    trafficNavLink.classList.add("active");
  } else if (trafficNavLink.textContent === 'Daily') {
    createTrafficChart(trafficDataDaily);
    trafficNavLink.classList.add("active");
  } else if (trafficNavLink.textContent === 'Weekly') {
    createTrafficChart(trafficDataWeekly);
    trafficNavLink.classList.add("active");
  } else if (trafficNavLink.textContent === 'Monthly') {
    createTrafficChart(trafficDataMonthly);
    trafficNavLink.classList.add("active");
  }
})

// Messaging Widget Send button Event Listener
send.addEventListener("click", (e) => {
  if (user.value === '' && message.value === '') {
    alert("Please fill out both user and message fields");
  } else if (user.value === '') {
    alert("Please fill out the user field");
  } else if (message.value === '') {
    alert("Please fill out the message field");
  } else {
    alert(`Message successfully sent to ${user.value}`)
  }
})

// Autocomplete Input Event Listener
user.addEventListener("keyup", () => {
  const searchValue = user.value.toLowerCase();
  autoComplete.innerHTML = "";
  autoComplete.style.display = "none";

  // Loop through autoCompleteNames
  for (let i=0; i < autoCompleteNames.length; i++) {

    const lowerCaseName = autoCompleteNames[i].toLowerCase();
    let li = document.createElement("li");
    li.textContent = autoCompleteNames[i];
    autoComplete.appendChild(li);

    // Check if input is not empty & Search Value matches the Array names
    if (searchValue && lowerCaseName.indexOf(searchValue) > -1) {
      autoComplete.style.display = "block";
      li.style.display = "block";
    } else {
      li.style.display = "none";
    }
  }
})

// Adds autosuggestion to input box when clicked
autoComplete.addEventListener("click", (e) => {
  li = e.target;
  user.value = li.textContent;
  autoComplete.style.display = "none";
})

// Saves Settings to Local Storage
save.addEventListener("click", (e) => {
  saveSettings();
})

// Clear Settings from Local Storage
cancel.addEventListener("click", (e) => {
  clearSettings();
})