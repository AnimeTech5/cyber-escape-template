scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    game.showLongText("ΦΟΡΟ{1απο2}", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
    game.showLongText("ΔΙΑΦΥΓΗ{1απο2}", DialogLayout.Bottom)
})
scene.setBackgroundColor(15)
tiles.setTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . 
    . . . f f f f f f . . . 
    . f f f e e e e f f f . 
    f f f e e e e e e f f f 
    f f f f 4 e e e f f f f 
    f f f 4 4 4 e e f f f f 
    f f f 4 4 4 4 e e f f f 
    f 4 e 4 4 4 4 4 4 e 4 f 
    f 4 4 f f 4 4 f f 4 4 f 
    f e 4 d d d d d d 4 e f 
    e f e 4 d b b d d e f . 
    e 4 d d 4 4 4 4 e f f f 
    . e d d e 1 1 1 b f 4 e 
    . . e e f 6 6 6 6 f . . 
    . . . f f f f f f f . . 
    . . . . . . . f f f . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
game.showLongText("θα καταφέρεις να βρεις και τα δυο κομμάτια ", DialogLayout.Bottom)
