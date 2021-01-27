// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002020202020202020202020202020202020101020000000000000000000000020201010200000000000000000000000202000000000002020202020202000002020000000000020000000000020000020202020202020200000000000200000202000000000000000002000002000002020000000000000000020000000000020200000200000202020200000000000202000002000000000002020202000002020000000000000000000000020000020200000000000000000000000200000202000002020202020202020202000002020303020000000000000000000000020203030200000000000000000000000202020202020202020202020202020202`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.collectibleInsignia,sprites.dungeon.darkGroundCenter,sprites.dungeon.chestOpen], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100002030303030303030303030303030304050000000000000000000000000000050500000000000000000000000000000505000000000005000006030400000005050000000000050000000005000000050500000000000500000000050000000505000000000009030300000500000005050000000000050101000005000000050500000000000501010000050000000505000000000006030303030700000005050000000000000000000000000000050500000000000000000000000000000505000000000000000000000000000005050000000000000000000000000808050500000000000000000000000008080506030303030303030303030303030307`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.field1,sprites.vehicle.roadTurn1,sprites.vehicle.roadHorizontal,sprites.vehicle.roadTurn2,sprites.vehicle.roadVertical,sprites.vehicle.roadTurn3,sprites.vehicle.roadTurn4,sprites.dungeon.hazardLava0,sprites.vehicle.roadIntersection2], TileScale.Sixteen);
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
