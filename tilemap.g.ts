// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002020202020202020202020202020202020101020000000000000000000000020201010200000000000000000000000202000000000002020202020202000002020000000000020000000000020000020202020202020200000000000200000202000000000000000002000002000002020000000000000000020000000000020200000200000202020200000000000202000002000000000002020202000002020000000000000000000000020000020200000000000000000000000200000202000002020202020202020202000002020303020000000000000000000000020203030200000000000000000000000202020202020202020202020202020202`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . 2 . . . . . . . . . . . 2 
2 . . 2 . . . . . . . . . . . 2 
2 . . . . . 2 2 2 2 2 2 2 . . 2 
2 . . . . . 2 . . . . . 2 . . 2 
2 2 2 2 2 2 2 . . . . . 2 . . 2 
2 . . . . . . . . 2 . . 2 . . 2 
2 . . . . . . . . 2 . . . . . 2 
2 . . 2 . . 2 2 2 2 . . . . . 2 
2 . . 2 . . . . . 2 2 2 2 . . 2 
2 . . . . . . . . . . . 2 . . 2 
2 . . . . . . . . . . . 2 . . 2 
2 . . 2 2 2 2 2 2 2 2 2 2 . . 2 
2 . . 2 . . . . . . . . . . . 2 
2 . . 2 . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.collectibleInsignia,sprites.dungeon.darkGroundCenter,sprites.dungeon.chestOpen], TileScale.Sixteen);
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
