// script.js
$(document).ready(function () {
    const ctx = document.getElementById('deviceChart').getContext('2d');
  
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        // labels: ['Smartphone', 'Desktop', 'Tablet'],
        datasets: [{
          data: [88.1, 10.5, 1.4],
          backgroundColor: ['#007bff', '#8e44ad', '#e67e22'],
          borderColor: ['#ffffff', '#ffffff', '#ffffff'],
          borderWidth: 2
        }]
      },
      options: {
        plugins: {
          legend: {
            display: true,
            position: 'right',
            labels: {
              color: '#495057',
              font: {
                size: 12
              }
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false
      }
    });
  });