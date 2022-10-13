class Map {
    constructor() {
        this.width = canvas.width;
        this.height = canvas.height;

        this.rooms = [
            new Room(0,0, 100, 100),
            new Room(100, 0, 50, 50)
        ];
    }

    getSpawnRoom() {
        return this.rooms[Math.floor(Math.random()* this.rooms.length)];
    }

    show() {
        this.rooms.forEach((room) => {
            room.show();
        });
    }
}