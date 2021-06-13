import { Scene } from "./scene.ts";
import { State } from "./state.ts";
import { Entity } from "./entity.ts";
import { Player } from "./player.ts";
import { CollidingEntity } from "./collidingEntity.ts";
import { Level2 } from "./level2.ts";

const tilemap = [
    [ 'f', 'f', 'f', 'f', 'f', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', '1', '1', 'f', ],
    [ 'f', 'a', 'a', 'a', '1', 'a', 'a', 'a', 'a', 'a', 'a', '3', 'f', 'f', 'f', 'a', 'a', 'a', 'a', 'f', 'f', 'f', 'f', 'r', 'f', ],
    [ 'f', 'p', 'a', 'a', '1', 'a', 'a', 'a', '3', 'f', 'f', 'f', 'a', 'a', 'a', 'f', 'f', 'f', 'a', '2', 'f', 'a', '2', 'b', 'f', ],
    [ 'f', 'f', 'f', 'f', 'f', '_', 'f', 'f', 'f', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'f', 'f', 'a', 'a', '2', 'v', 'f', ],
    [ 'f', 'f', 'f', 'f', 'f', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', '2', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'f', '2', 'f', ],
    [ 'f', 'f', 'a', 'a', '3', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', '2', 'a', 'a', 'a', 'a', 'a', 'a', '3', 'f', '2', '2', ],
    [ 'f', 'f', 'o', 'a', '3', 'a', 'a', '2', 'a', 'a', 'a', 'a', 'a', 'a', '2', 'a', 'a', 'a', 'a', 'a', '3', '3', 'f', 's', 's', ],
    [ 'f', 'f', 'f', 'f', '_', 'f', 'f', 'f', 'f', '_', '3', '_', 'f', 'f', 'f', 'f', '9', '1', '9', '1', 'f', 'f', 'f', 'f', 'f', ],
    [ 'f', 'f', 'f', 'f', '1', 'f', 'f', 'f', 'a', 'a', 'a', 'a', '1', 'f', 'f', '1', '1', '1', '1', '1', '1', 'f', 'f', 'f', 'f', ],
    [ 'f', 'f', 'f', 'f', '1', 'f', 'f', 'a', 'a', 'a', 'a', 'a', 'a', '9', '9', '1', '1', '1', '1', '1', '1', 'f', 'f', 'f', 'f', ],
    [ 'f', 'f', 'f', 'f', '1', 'f', 's', 's', 's', 's', 's', 's', 's', '9', '9', 's', 's', 's', 's', 's', 's', 's', 'f', 'f', 'f', ],
    [ 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', '1', '1', '1', '1', '1', '9', '9', '1', '1', '1', '1', '1', '1', 'f', 'f', 'f', 'f', ]
];

export class Level2 extends Scene {
    constructor(state: State) {
	super(state);
            this.name = '1';
            this.finish = true;

	this.loadTilemap(tilemap);
    }

    tick() {
	super.tick();
    }

    draw(rend: Renderer) {
	super.draw(rend);

	rend.drawText("Press 'b' while touching a special block!", 100, 100, 100, 100);
    }
}

