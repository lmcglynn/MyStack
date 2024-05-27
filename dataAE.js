const dx = 0.03;
let points = [];

function lineToPoints(slope, yIntercept, domain) {
    // Initialize an empty array to store the points
    let x = domain[0];
    // Iterate through the domain
    while (x <= domain[1]) {
        // Calculate the corresponding y-coordinate using the equation of a line: y = mx + b
        let y = slope * x + yIntercept;

        // Add the point (x, y) to the array of points
        points.push({ x: x, y: y });

        // Increment x by dx
        x += dx;
    }
    // Return the array of points
    return points;
}
function vertLine(x, domain) {
    let y = domain[0];
    while (y <= domain[1]) {
        points.push({ x: x, y: y });
        y += dx;
    }
    return points;
}

lineToPoints(2,0,[0,2]);
lineToPoints(-2,8,[2,4]);
lineToPoints(0,2,[1,3]);
vertLine(6,[0,2]);
lineToPoints(1,-4,[6,8]);
lineToPoints(-1,8,[4,6]);
vertLine(9,[0,4]);
lineToPoints(0,0,[9,13]);
vertLine(13,[0,4]);
lineToPoints(0,4,[14,18]);
vertLine(14,[2,4]);
lineToPoints(0,2,[14,18]);
vertLine(18,[0,2]);
lineToPoints(0,0,[14,18]);
vertLine(19,[0,4]);
lineToPoints(0,2,[19,23]);
vertLine(23,[0,4]);
vertLine(26,[0,4]);
lineToPoints(0,4,[24,28]);
lineToPoints(0,0,[24,28]);


const data = {
    datasets: [{
        label: 'New Assistant Data Editor',
        data: points,
        backgroundColor: 'rgb(55, 126, 192)'
    }],
};

const AEconfig = {
    type: 'scatter',
    data: data,
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom'
            }
        }
    }
};

const AEctx = document.getElementById('ayushi');
const AEchart = new Chart(AEctx, AEconfig);