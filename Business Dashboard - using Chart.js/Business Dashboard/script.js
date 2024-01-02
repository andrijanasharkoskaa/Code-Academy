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
        backgroundColor: "blue",
        barThickness: 24,
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
      type: "bar",
      beginAtZero: true,
      stepSize: 25,
      min: 0,
      max: 100,
    },
  },
});

//horizontal bar
// document.addEventListener("DOMContentLoaded", function () {
//   // Data for the horizontal bar chart
//   var data = {
//     labels: ["Time passed", "Impressions", "Clicks", "Amount Spent"],
//     datasets: [
//       {
//         label: "Metrics",
//         backgroundColor: [
//           "rgba(75, 192, 192, 0.2)",
//           "rgba(255, 99, 132, 0.2)",
//           "rgba(255, 205, 86, 0.2)",
//           "rgba(54, 162, 235, 0.2)",
//         ],
//         borderColor: [
//           "rgba(75, 192, 192, 1)",
//           "rgba(255, 99, 132, 1)",
//           "rgba(255, 205, 86, 1)",
//           "rgba(54, 162, 235, 1)",
//         ],
//         borderWidth: 1,
//         data: [120, 250, 80, 300], // You can replace these values with your actual data
//       },
//     ],
//   };

//   // Configuration options
//   var options = {
//     scales: {
//       x: {
//         beginAtZero: true,
//       },
//     },
//   };

//   // Get the canvas element
//   var ctx3 = document.getElementById("horizontalBarChart").getContext("2d");

//   // Create the horizontal bar chart
//   var myChart = new Chart(ctx3, {
//     type: "horizontalBar",
//     data: data,
//     options: options,
//   });
// });

// ["0%", "25%", "50%", "75%", "100%"]
var ctx2 = document.getElementById("myLineChart").getContext("2d");

var xValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
var yValues = [0, 25, 50, 75, 100];

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

var options = {
  scales: {
    x: {
      type: "linear",
      position: "bottom",
      ticks: {
        stepSize: 1,
        // beginAtZero: true,
        min: 1,
        max: 14,
      },
    },
    y: {
      type: "linear",
      //   position: "left",
      ticks: {
        callback: function (value) {
          return value + "%";
        },
        maxTicksLimit: 10,
        beginAtZero: false,
        stepSize: 25,
        min: 0,
        max: 100,
      },
    },
  },
};

var myLineChart = new Chart(ctx2, {
  type: "line",
  data: data,
  options: options,
});
