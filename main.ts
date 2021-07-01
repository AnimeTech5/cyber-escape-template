scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    game.showLongText("ΦΟΡΟ{1απο2}", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
    game.showLongText("ΔΙΑΦΥΓΗ{1απο2}", DialogLayout.Bottom)
})
scene.setBackgroundColor(15)
tiles.setTilemap(tilemap`level1`)
let mySprite = 0
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
game.showLongText("θα καταφέρεις να βρεις και τα δυο κομμάτια ", DialogLayout.Bottom)
