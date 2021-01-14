function setup() {
    createCanvas(100, 100)
}

// Coordinates
let clickCounter = 0;

function draw() {
    background('rgba(0,255,0, 0.25)');
    text(`${clickCounter} clicks`, 10, 30)
}

function mouseClicked() {
    clickCounter++
}