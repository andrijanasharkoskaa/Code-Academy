const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "bar",

  data: {
    labels: [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ],

    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3, 20, 15, 18, 5, 20, 10],
        borderWidth: 1,
      },
    ],
  },
  options: {
    animation: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
});

var ctx2 = document.getElementById("myLineChart").getContext("2d");

// Define the x and y values
var xValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
var yValues = [0, 25, 50, 75, 100];

// Create the data object for Chart.js
var data = {
  labels: [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ],
  datasets: [
    {
      label: "Percentage",
      borderColor: "rgb(75, 192, 192)",
      data: yValues,
      fill: false,
    },
  ],
};

// Create the options object for Chart.js
var options = {
  scales: {
    x: {
      type: "linear",
      position: "bottom",
      ticks: {
        stepSize: 1,
      },
    },
    y: {
      type: "linear",
      position: "left",
      ticks: {
        callback: function (value) {
          return value + "%";
        },
        maxTicksLimit: 6,
      },
    },
  },
};

// Create the line chart
var myLineChart = new Chart(ctx2, {
  type: "line",
  data: data,
  options: options,
});
