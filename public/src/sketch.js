const game = new Game();
function setup() {
    createCanvas(800, 500);
    game.setWidth(width);
    game.setHeight(height);
}

function draw() {
    background(220);
    game.show();
}