let lineChart;

const colors = [
    'rgb(130, 9, 51)',
    'rgb(255, 131, 17)',
    'rgb(232, 107, 146)',
    'rgb(28, 93, 153)',
    'rgb(255, 200, 87)'
];

const years = [
    '2009-10', 
    '2010-11', 
    '2011-12', 
    '2012-13', 
    '2013-14', 
    '2014-15', 
    '2015-16', 
    '2016-17', 
    '2017-18', 
    '2018-19', 
    '2019-20', 
    '2020-21', 
    '2021-22'
];

const EAPdestinations = [
    'United Kingdom',
    'Italy',
    'Spain',
    'France',
    'South Korea'
];

const TSdestinations = [
    'France',
    'United Kingdom',
    'Spain',
    'Belgium',
    'Germany'
];

const droptypes = [
    'UCEAP',
    'Travel Study'
];

//Code for init found at https://www.d3-graph-gallery.com/graph/line_select.html
function initDropdown(values, id) {
    d3.select(id)
      .selectAll('option')
      .data(values)
      .enter()
      .append('option')
      .text(function(d) {
        return d;
      }) // text showed in the menu
      .attr('value', function(d) {
        return d;
      }); // corresponding value returned by the button
    d3.select(id).on('change', function() {
        let dropValue = d3.select(this).property('value');
        updateData(dropValue);
    });
}

function updateData(dropValue) {
    // reset updatedDatasets for each time Day is changed
    let updatedDatasets = [];
  
    //loop through each dining hall to load data
    for (let i = 0; i < diningHallsLabels.length; i++) {
      //set 0s for all data, to fill in no swipe parts
      let hourlySwipeArray = Array(48).fill(0);
      let hall = diningHallsKeys[i];
  
      let path = datasetPath + hall + dayValue + '.csv';
      d3.csv(path)
        .then(function(csvData) {
          for (let i = 0; i < csvData.length; i++) {
            // CSVs have 4 weeks of data (e.g. 4 Mondays) -- divide by 4 to find average per week (e.g. Monday average)
            let swipeCount = csvData[i].count / 4;
            if (swipeCount < 1) {
              swipeCount = 1;
            }
  
            if (csvData[i].IntervalCategory < 6) {
              // move 12am to 2am to the end of the chart (5 intervals 12am 12:30am 1am 1:30am 2am)
              // +36 for 36 intervals 6am -> 11:30pm
              hourlySwipeArray[
                parseInt(csvData[i].IntervalCategory) + 36
              ] = parseInt(swipeCount);
            } else {
              // starting chart at 6am not 12am, so shift back by 12 (6 hours * 2 intervals per hour)
              hourlySwipeArray[csvData[i].IntervalCategory - 12] = parseInt(
                swipeCount
              );
            }
          }
        })
        .then(function() {
          updatedDatasets.push({
            data: hourlySwipeArray,
            label: diningHallsLabels[i],
            backgroundColor: colors[i],
            borderColor: colors[i],
            borderSkipped: 'bottom',
            borderWidth: 2,
          });
          if (
            updatedDatasets.length === diningHallsLabels.length ||
            ((dayValue == 'Saturday' || dayValue == 'Sunday') &&
              updatedDatasets.length === diningHallsLabels.length - 3)
          ) {
            // update once all csv files have loaded
            updateChart(updatedDatasets, dayValue);
          }
        });
    }
  }
  function updateChart(updatedDatasets, dropValue) {
    //set new data values
    let data = {
      labels: timeIntervals,
      datasets: updatedDatasets.sort((a, b) => (a.label > b.label ? 1 : -1)),
    };
    lineChart.data = data;
  
    //set new chart options
    lineChart.options.plugins.title.text =
      'Average Traffic Per Half Hour on ' + dayValue;
    lineChart.options.plugins.tooltip = {
      callbacks: {
        title: function(tooltipItem) {
          let startTime = timeIntervals[tooltipItem[0].dataIndex];
          let nextIndex = tooltipItem[0].dataIndex + 1;
          let endTime =
            nextIndex < timeIntervals.length ? timeIntervals[nextIndex] : null;
          return `${startTime}${endTime ? `-${endTime}` : ''}`;
        },
        label: function(tooltipItem) {
          let label = tooltipItem.dataset.label;
          let value = tooltipItem.formattedValue;
          return `${label}: ${value} swipes`;
        },
      },
    };
  
    lineChart.update();
  }
  
  function initializeChart() {
    let data = {
      labels: timeIntervals,
      datasets: [
        {
          data: [],
          label: '',
        },
      ],
    };
  
    const options = {
      scales: {
        y: {
          title: {
            display: true,
            text: 'Average Semi-Hourly Swipe Usage',
          },
          max: 450,
        },
      },
      plugins: {
        legend: {
          display: true,
        },
        title: {
          display: true,
          text: 'Average Traffic Per Half Hour on Monday',
          font: {
            size: 19,
          },
        },
      },
      maintainAspectRatio: false,
      animation: false,
    };
  
    let ctx = document.getElementById('barChart');
    lineChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: options,
    });
  }
  
  initDropdown(days, '#Day');
  initializeChart();
  updateData('Monday');
