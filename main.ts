namespace SpriteKind {
    export const Mushroom = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Mushroom, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Mushroom, effects.disintegrate, 100)
    big = 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    big = 0
})
let muroom: Sprite = null
let big = 0
scene.setBackgroundColor(9)
let mario = sprites.create(assets.image`marlo`, SpriteKind.Player)
controller.moveSprite(mario, 100, 0)
tiles.setCurrentTilemap(tilemap`level`)
info.setScore(0)
forever(function () {
    if (big == 1) {
        mario.setImage(assets.image`marlo1`)
    } else {
        mario.setImage(assets.image`marlo`)
    }
})
forever(function () {
    mario.vy += 5
})
forever(function () {
    scene.cameraFollowSprite(mario)
})
forever(function () {
    if (controller.up.isPressed() && mario.isHittingTile(CollisionDirection.Bottom)) {
        mario.vy += -150
    }
})
forever(function () {
    if (big == 1) {
        if (tiles.tileAtLocationEquals(mario.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Top), assets.tile`transparency16`)) {
            info.changeScoreBy(1)
            tiles.setTileAt(mario.tilemapLocation().getNeighboringLocation(CollisionDirection.Top), assets.tile`msyteryblock0`)
        }
    } else {
        if (mario.tileKindAt(TileDirection.Top, assets.tile`msyteryblock`)) {
            info.changeScoreBy(1)
            tiles.setTileAt(mario.tilemapLocation().getNeighboringLocation(CollisionDirection.Top), assets.tile`msyteryblock0`)
        }
    }
})
forever(function () {
    if (mario.tileKindAt(TileDirection.Top, assets.tile`msyteryblock1`)) {
        muroom = sprites.create(assets.image`myImage`, SpriteKind.Mushroom)
        tiles.placeOnTile(muroom, mario.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Top))
        tiles.setTileAt(mario.tilemapLocation().getNeighboringLocation(CollisionDirection.Top), assets.tile`msyteryblock0`)
    }
})
forever(function () {
    if (mario.tileKindAt(TileDirection.Top, assets.tile`brick`)) {
        if (big == 1) {
            tiles.setTileAt(mario.tilemapLocation().getNeighboringLocation(CollisionDirection.Top), assets.tile`transparency16`)
            tiles.setWallAt(mario.tilemapLocation().getNeighboringLocation(CollisionDirection.Top), false)
        }
    }
})
