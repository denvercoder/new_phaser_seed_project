//This should be the starting point for all new games.
var game = new Phaser.Game(640, 360, Phaser.AUTO);

var GameState = {
    preload: function() {
        //Load assets
        this.load.image('background', 'assets/images/background.png');
    },

    create: function() {
        //Setup Game
        this.background = this.game.add.sprite(0, 0, 'background');
    },

    update: function () {
        //GameLoop that runs ~ 60x per second

    }
};

game.state.add('GameState', GameState);
game.state.start('GameState');
