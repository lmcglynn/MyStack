const ctxt = document.getElementById('TVdurations');
const TVdurations = new Chart(ctxt, {
    type: 'bar',
    data: {
        labels: ['1 Season', '2 Seasons', '3 Seasons', '4 Seasons', '5 Seasons', '6 Seasons', '7 Seasons', '8 Seasons', '9 Seasons'],
        datasets: [{
            label: '# of TV Shows',
            data: [97, 15, 3, 4, 7, 3, 0, 3, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(245, 40, 145, 0.2)',
                'rgba(245, 82, 0, 0.2)',
                'rgba(209, 245, 0, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(245, 40, 145, 1)',
                'rgba(245, 82, 0, 1)',
                'rgba(209, 245, 0, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
