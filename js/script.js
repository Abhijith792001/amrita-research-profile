 const ctx = document.getElementById('publicationChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['2024', '2023', '2022', '2021', '2020'],
        datasets: [
          {
            label: 'Journal',
            data: [13, 7, 8, 4, 6],
            backgroundColor: 'rgba(255, 99, 132, 0.8)'
          },
          {
            label: 'Conference',
            data: [3, 3, 7, 6, 10],
            backgroundColor: 'rgba(54, 162, 235, 0.8)'
          },
          {
            label: 'Book',
            data: [0, 0, 0, 1, 0],
            backgroundColor: 'rgba(75, 192, 192, 0.8)'
          },
          {
            label: 'Book Series',
            data: [2, 5, 1, 0, 2],
            backgroundColor: 'rgba(255, 205, 86, 0.8)'
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 2
            }
          }
        }
      }
    });