import { Chart } from "chart.js";

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };


  const HTMLChart = document.getElementById('myChart') as HTMLCanvasElement;;
  new Chart(HTMLChart, {
    type: 'line',
    data: data,
    options: {}
  });