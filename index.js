/* global Chart, axios */

// const axios = require('axios').default;

// axios.<method> will now provide autocomplete and parameter typings

let forks = [];
let stars = []; 
let watchers = [];

axios.get("https://api.github.com/repos/vuejs/vue")
  .then(function (response) {
    // handle success
    console.log(response.data);
    stars.push(response.data.stargazers_count);
    watchers.push(response.data.watchers_count);
    forks.push(response.data.forks_count);
    console.log(stars, "Stars");
    console.log(watchers, "Watchers" );
    console.log(forks, "Forks");

    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Stars", "Watchers", "Forks"],
        datasets: [
          {
            label: "# of stars, watchers, forks",
            data: [stars, watchers, forks],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

