window.onload= function (){
const notificationDot = document.querySelector('.notificationDot');
const alertContainer = document.querySelector('.alertContainer');
const alert = document.querySelector('.alertX');
const userFields = document.getElementById(".user-fields");
const message = document.getElementById(".message-fields");
const userSearch = document.querySelector('.user-search');
const userMessage = document.querySelector('.user-message');
const send = document.getElementById(".send");


  
//Alert box
alert.addEventListener('click', () => {
  alertContainer.innerHTML = "";
  notificationDot.style.display = "none";
});

// Line chart
var traffic = document.getElementById('traffic').getContext('2d');
var lineChart = new Chart(traffic, {
  type: 'line',
  data: {
    responsive: true,
    maintainAspectRatio: false,
    xLabels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    yLabels: ["500", "1000", "1500", "2000", "2500"],
    datasets: [{
        backgroundColor: 'rgb(29, 126, 237, 0.2)',
        borderColor: '#541ded',
        borderWidth: 3,
        lineTension: 0,
        pointRadius: 5,
        pointBackgroundColor: 'gold',
        data: [311, 241, 358, 812, 404, 778, 682, 426, 2057, 1478, 1317, 1856, 2042],
    }],
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        gridLines: {
            offsetGridLines: true
        }
      }],
      yAxes: [{
        gridLines: {
            offsetGridLines: true
        }
      }]
    }
  }
});

//Bar chart
var dailyTraffic = document.getElementById('daily-traffic').getContext('2d');
var barChart = new Chart(dailyTraffic, {
  type: 'bar',
  data: {
    responsive: true,
    maintainAspectRatio: false,
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
      label: '',
      data: [77, 142, 196, 118, 194, 256, 208],
      backgroundColor: '#eda11d',
    }]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        gridLines: {
            offsetGridLines: true
        }
      }],
      yAxes: [{
        gridLines: {
            offsetGridLines: true
        }
      }]
    }
  }
});

//Pie chart
var mobileUsers = document.getElementById('mobile-users').getContext('2d');

var doughnutChart = new Chart(mobileUsers, {
  type: 'doughnut',
  data: {
    responsive: true,
    maintainAspectRatio: false,
    labels: ["Phones", "Tablets", "Desktop"],
    datasets: [{
      backgroundColor: ["#1d7eed", "#eda11d", "#ed391d"],
      data: [81, 48, 20]
    }]
  },
  options: {
    legend: {
      position: 'right',
    },
    rotation: -0.9 * Math.PI,
  }
});

// Send Message Section
userFields.addEventListener('submit', (e) => {
  e.preventDefault();
  let user = userSearch.value;
  let message = userMessage.value;
  if (user == '' && message == '') {
    window.alert('You haven\'t entered a user or message.');
  } else if (user == '') {
    window.alert('You haven\'t entered a user.');
  } else if (message == '') {
    window.alert('You haven\'t entered a message.');
  } else {
    window.alert('Your message has been delivered.');
  }
}

)};