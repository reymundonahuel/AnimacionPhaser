const config = {
    width: 600,
    height: 400,
    parent: 'container',
    pixelArt: true,
    scene: {
        preload,
        create
    }
}


new Phaser.Game(config);

function preload(){
    this.load.spritesheet('archer', './assets/Archer_run.png',{
        frameWidth: 125,
        frameHeight: 125
    });
}

function create(){
    this.archer = this.add.sprite(100,100,'archer');
    this.anims.create({
        key: 'walk_archer',
        frames: this.anims.generateFrameNumbers('archer',{
            frames:[0,1,2,3,4,5,6,7]
        }),
        repeat: -1,
        frameRate: 13
    });

    this.archer.anims.play('walk_archer');
    
}