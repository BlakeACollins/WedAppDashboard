
const notificationDot = document.querySelector('.notificationDot');
const alertContainer = document.querySelector('.alertContainer');
const alert = document.querySelector('.alertX');
const userFields = document.getElementById(".sendMessage");
const userSearch = document.getElementById('.search-user');
const userMessage = document.getElementById('.comment');
const send = document.querySelector(".message-user-send");


  
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
send.addEventListener('click', () => {
  if (user.value === "" && message.value === "") {
      alert("Please enter a user and message before sending!");
  } else if (user.value === "") {
      alert("Please enter a user!");
  } else if (message.value === "") {
      alert("Please enter a message before sending!");
  } else {
      alert(`Messge sent!`);
  }
}

);