scene.onOverlapTile(SpriteKind.Player, sprites.builtin.brick, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, sprites.builtin.field1)
    info.changeLifeBy(-1)
    music.powerDown.play()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundCenter, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
    info.startCountdown(30)
    music.powerDown.play()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    tiles.setTilemap(tilemap`level2`)
    tiles.placeOnRandomTile(mySprite, sprites.builtin.field1)
    info.startCountdown(30)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 50, 50)
scene.cameraFollowSprite(mySprite)
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
info.setLife(3)
info.startCountdown(30)
