class Room {
    constructor(x_dim, y_dim, width, height) {
        this.x_dim = x_dim;
        this.y_dim = y_dim;
        this.width = width;
        this.height = height;
        this.players = [];
    }

    show() {
        strokeWeight(4);
        stroke(0);
        line(this.x_dim, this.y_dim, this.x_dim, this.y_dim+this.height);
        rect(this.x_dim, this.y_dim, this.x_dim+this.width, this.y_dim);
        rect(this.x_dim+this.width, this.y_dim, this.x_dim, this.y_dim+this.height);
        rect(this.x_dim, this.y_dim+this.height, this.x_dim+this.width, this.y_dim);
    }
}