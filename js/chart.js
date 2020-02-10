
// Traffic line chart
var traffic = document.getElementById('traffic').getContext('2d');
var lineChart = new Chart(traffic, {
  type: 'line',
  data: {
    responsive: false,
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
        data: [180, 250, 750, 810, 300, 450, 680, 960, 1050, 1480, 1305, 1756, 2250],
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

//traffic bar chart
var dailyTraffic = document.getElementById('daily-traffic').getContext('2d');
var barChart = new Chart(dailyTraffic, {
  type: 'bar',
  data: {
    responsive: false,
    maintainAspectRatio: false,
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
      label: '',
      data: [75, 130, 192, 108, 190, 250, 200],
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

//Mobile user pie chart
var mobileUsers = document.getElementById('mobile-users').getContext('2d');
var doughnutChart = new Chart(mobileUsers, {
  type: 'doughnut',
  data: {
    responsive: false,
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
    rotation: -0.6 * Math.PI,
  }
});