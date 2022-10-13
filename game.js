const canvas = document.getElementById("game");
const context = canvas.getContext("2d");

class Game {
    constructor() {
        this.map = new Map();
        this.players = [
            new Player('blue', false, this.map.getSpawnRoom()),
            new Player('red', true, this.map.getSpawnRoom())
        ];
        
    }

    show() {
        this.map.show();
        this.players.forEach((player) => {
            player.show();
        });
    }
}


game = new Game();
game.show();