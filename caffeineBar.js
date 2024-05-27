Chart.defaults.font.family = 'Noto Serif, serif'
caffeineLabels = ['Persistent Use Despite Desire to Cut Down Usage', 'Experience Withdrawl Symptoms', 'Use More than Intended Amount'];
const caffeinecolor = 'rgb(66, 135, 245)';
const caffeineData = [60, 73, 80]

const data = {
    labels: caffeineLabels,
    datasets: [{
        label: 'Percentage',
        data: caffeineData,
        backgroundColor: caffeinecolor,
        borderColor: caffeinecolor,
        borderWidth: 1
    }]
};

const options = {
    scales: {
        y: {
            ticks: {
                min: 0,
                max: 100,
                callback: function (value) {
                    return value + '%'
                }
            },
            beginAtZero: true,
            max: 100,
            title: {
                display: true,
                text: 'Percentage (%)'
            }
        }
    },
    plugins: {
        legend: {
            display: false
        },
    },
    maintainAspectRatio: false,
}


const ctxCaffeine = document.getElementById('caffeine-bar');
const caffeineBar = new Chart(ctxCaffeine, {
    type: 'bar',
    data: data,
    options: options
});