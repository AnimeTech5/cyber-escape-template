// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001020202020202020202020101010101010202020201010101020101020202010101010201010202010201010202020102020102010102020102020102020101020101020201010201020201020204020201020102010202010201010202020202010101010102010101010101010102020202010102020101020202020202020202020102020201010101010101010202020201020202020202010202020102020202010101010102020102020201020202020101020201020201020202010202020202020202010202010202020102020202020202020202020102020201020202020301010101010101020201010202020202020202020202020202020202`, img`
. 2 2 2 2 2 2 2 2 2 2 . . . . . 
. 2 2 2 2 . . . . 2 . . 2 2 2 . 
. . . 2 . . 2 2 . 2 . . 2 2 2 . 
2 2 . 2 . . 2 2 . 2 2 . 2 2 . . 
2 . . 2 2 . . 2 . 2 2 . 2 2 . 2 
2 . 2 . 2 . 2 2 . 2 . . 2 2 2 2 
2 . . . . . 2 . . . . . . . . 2 
2 2 2 . . 2 2 . . 2 2 2 2 2 2 2 
2 2 2 . 2 2 2 . . . . . . . . 2 
2 2 2 . 2 2 2 2 2 2 . 2 2 2 . 2 
2 2 2 . . . . . 2 2 . 2 2 2 . 2 
2 2 2 . . 2 2 . 2 2 . 2 2 2 . 2 
2 2 2 2 2 2 2 . 2 2 . 2 2 2 . 2 
2 2 2 2 2 2 2 2 2 2 . 2 2 2 . 2 
2 2 2 . . . . . . . . 2 2 . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.collectibleInsignia,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.collectibleRedCrystal], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
