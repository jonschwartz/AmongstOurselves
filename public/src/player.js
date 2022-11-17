class Player {
    constructor(color, isFairy, room) {
        this.color = color;
        this.isFairy = isFairy;
        this.room = room;
        this.size = 20;
        this.x = this.room.x_dim + Math.ceil(this.size / 2) + Math.floor(Math.random() * (this.room.width - this.size));
        this.y = this.room.y_dim + Math.ceil(this.size / 2) + Math.floor(Math.random() * (this.room.height - this.size));
        
    }

    updateRoom(room) {
        this.room = room;
    }

    show() {
        console.log(this.x, this.y);
        context.beginPath();
        // x coord, y coord, radius, sAngle, eAngle, counterclockwise
        context.arc(this.x, this.y, this.size / 2, 0, 2 * Math.PI);
        context.fillStyle = this.color;
        context.fill();
    }
}