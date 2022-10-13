class Room {
    constructor(x_dim, y_dim, width, height) {
        this.x_dim = x_dim;
        this.y_dim = y_dim;
        this.width = width;
        this.height = height;
        this.players = [];
    }

    show() {
        context.beginPath();
        context.rect(this.x_dim, this.y_dim, this.width, this.height);
        context.stroke();
    }
}