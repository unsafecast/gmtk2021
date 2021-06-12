import { Scene } from "./scene.ts";
import { State } from "./state.ts";
import { Entity } from "./entity.ts";
import { Player } from "./player.ts";
import { CollidingEntity } from "./collidingEntity.ts";

const tilemap = [
    [ 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', ],
    [ 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', ],
    [ 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', ],
    [ '2', 'p', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'b', 'o', ],
    [ 'f', '2', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', '1', 'a', 'a', 'a', 'a', 'a', 'a', 'a', '3', '3', '3', ],
    [ 'f', 'f', '2', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', '1', 'a', 'a', 'a', 'a', 'a', 'a', '2', '3', '2', '2', ],
    [ 'f', 'f', 'f', '2', 'a', 'a', 'a', '2', 'a', 'a', 'a', 'a', 'a', 'a', '1', 'a', 'a', 'a', 'a', 'a', '3', '3', '3', '2', '2', ],
    [ 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', '1', '1', '1', 'f', 'f', 'f', 'f', '1', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', ],
    [ 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', '1', '1', '1', '1', '1', 'f', 'f', '1', '1', '1', 'f', 'f', 'f', 'f', 'f', 'f', 'f', ],
    [ 'f', 'f', 'f', 'f', 'f', 'f', 'f', '1', '1', '1', '1', '1', '1', '9', '9', '1', '1', '1', '1', 'f', 'f', 'f', 'f', 'f', 'f', ],
    [ 'f', 'f', 'f', 'f', 'f', 'f', '1', '1', '1', '1', '1', '1', '1', '9', '9', '1', '1', '1', '1', '1', 'f', 'f', 'f', 'f', 'f', ],
    [ 'f', 'f', 'f', 'f', 'f', '1', '1', '1', '1', '1', '1', '1', '1', '9', '9', '1', '1', '1', '1', '1', '1', 'f', 'f', 'f', 'f', ]
];

export class TestingScene extends Scene {
    constructor(state: State) {
	super(state);

    if (this.state.keysPressed['b']) {
        for (var i = 0; i < tilemap.length(); i ++){
            for (var j = 0; j < tilemap[i].length(); j ++) {
                if (tilemap[i][j] === '2') {
                    tilemap[i][j] = ' ';
                }
            }
        }
    }

	this.loadTilemap(tilemap);
    }

    tick() {
	super.tick();
    }

    draw(rend: Renderer) {
	super.draw(rend);
    }
}

