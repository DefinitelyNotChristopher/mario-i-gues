namespace SpriteKind {
    export const Mushroom = SpriteKind.create()
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    side = 1
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    side = 2
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Mushroom, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Mushroom, effects.disintegrate, 100)
    big = 1
})
let muroom: Sprite = null
let big = 0
let side = 0
scene.setBackgroundColor(9)
let mario = sprites.create(assets.image`marlo`, SpriteKind.Player)
controller.moveSprite(mario, 100, 0)
tiles.setCurrentTilemap(tilemap`level`)
info.setScore(0)
tiles.placeOnRandomTile(mario, assets.tile`myTile14`)
let goomb = sprites.create(assets.image`myImage1`, SpriteKind.Enemy)
sprites.destroy(goomb)
forever(function () {
    if (mario.tileKindAt(TileDirection.Center, assets.tile`myTile15`)) {
        game.over(false)
    }
})
forever(function () {
    mario.vy += 5
})
forever(function () {
    scene.centerCameraAt(mario.x, 400)
})
forever(function () {
    if (side == 2) {
        if (big == 1) {
            mario.setImage(assets.image`marlo1`)
        } else {
            mario.setImage(assets.image`marlo`)
        }
    } else {
        if (big == 1) {
            mario.setImage(assets.image`marlo1`)
        } else {
            mario.setImage(assets.image`marlo`)
        }
    }
})
forever(function () {
    if (controller.up.isPressed() && mario.isHittingTile(CollisionDirection.Bottom)) {
        mario.vy += -160
    }
})
forever(function () {
    if (big == 1) {
        if (0 > mario.vy && tiles.tileAtLocationEquals(mario.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Top), assets.tile`brick`)) {
            tiles.setTileAt(mario.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Top), assets.tile`transparency16`)
            tiles.setWallAt(mario.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Top), false)
        }
    }
})
forever(function () {
    if (big == 1) {
        if (0 > mario.vy && tiles.tileAtLocationEquals(mario.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Top), assets.tile`msyteryblock`)) {
            info.changeScoreBy(1)
            tiles.setTileAt(mario.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Top), assets.tile`msyteryblock0`)
        }
    } else {
        if (mario.tileKindAt(TileDirection.Top, assets.tile`msyteryblock`)) {
            info.changeScoreBy(1)
            tiles.setTileAt(mario.tilemapLocation().getNeighboringLocation(CollisionDirection.Top), assets.tile`msyteryblock0`)
        }
    }
})
forever(function () {
    if (big == 1) {
        if (0 > mario.vy && tiles.tileAtLocationEquals(mario.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Top), assets.tile`msyteryblock1`)) {
            muroom = sprites.create(assets.image`myImage`, SpriteKind.Mushroom)
            tiles.placeOnTile(muroom, mario.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Top))
            tiles.setTileAt(mario.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Top), assets.tile`msyteryblock0`)
        }
    } else {
        if (mario.tileKindAt(TileDirection.Top, assets.tile`msyteryblock1`)) {
            muroom = sprites.create(assets.image`myImage`, SpriteKind.Mushroom)
            tiles.placeOnTile(muroom, mario.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Top))
            tiles.setTileAt(mario.tilemapLocation().getNeighboringLocation(CollisionDirection.Top), assets.tile`msyteryblock0`)
        }
    }
})
forever(function () {
    if (big == 1) {
        if (0 > mario.vy && tiles.tileAtLocationEquals(mario.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Top), assets.tile`msyteryblock2`)) {
            muroom = sprites.create(assets.image`myImage`, SpriteKind.Mushroom)
            tiles.placeOnTile(muroom, mario.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Top))
            tiles.setWallAt(mario.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Top), true)
            tiles.setTileAt(mario.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Top), assets.tile`msyteryblock0`)
        }
    } else {
        if (mario.tileKindAt(TileDirection.Top, assets.tile`msyteryblock2`)) {
            muroom = sprites.create(assets.image`myImage`, SpriteKind.Mushroom)
            tiles.placeOnTile(muroom, mario.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Top))
            tiles.setWallAt(mario.tilemapLocation().getNeighboringLocation(CollisionDirection.Top), true)
            tiles.setTileAt(mario.tilemapLocation().getNeighboringLocation(CollisionDirection.Top), assets.tile`msyteryblock0`)
        }
    }
})
forever(function () {
    goomb.follow(mario)
})
