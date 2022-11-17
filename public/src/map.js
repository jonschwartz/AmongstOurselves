class Map {
    constructor() {
        this.width = 0;
        this.height = 0;

        this.rooms = [
            new Room(0,0, 100, 100),
            new Room(100, 0, 50, 50)
        ];
    }

    setWidth(width) {
        this.width = width;
    }

    setHeight(height) {
        this.height = height;
    }

    // getSpawnRoom() {
    //     return this.rooms[Math.floor(Math.random()* this.rooms.length)];
    // }

    show() {
        this.rooms.forEach((room) => {
            room.show();
        });
    }
}