class Game {
    constructor() {
        this.map = new Map();
        // this.players = [
        //     new Player('blue', false, this.map.getSpawnRoom()),
        //     new Player('red', true, this.map.getSpawnRoom())
        // ];
        
    }

    setWidth(width) {
        this.width = width;
        this.map.setWidth(width);
    }

    setHeight(height) {
        this.height = height;
        this.map.setHeight(height);
    }

    

    show() {
        this.map.show();
        // this.players.forEach((player) => {
        //     player.show();
        // });
    }
}