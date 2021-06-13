import { Scene } from "./scene.ts";
import { State } from "./state.ts";
import { Entity } from "./entity.ts";
import { Player } from "./player.ts";
import { CollidingEntity } from "./collidingEntity.ts";

const tilemap = [
    [ 'f', 'f', 'f', 'f', 'f', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', ],
    [ 'f', 'a', 'a', 'a', 'f', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', ],
    [ 'f', 'p', 'a', 'a', 'f', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', ],
    [ 'f', 'f', 'a', 'a', 'f', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'b', 'o', ],
    [ 'f', 'f', 'a', 'a', 'f', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', '1', 'a', 'a', 'a', 'a', 'a', 'a', 'a', '3', '3', 'f', ],
    [ 'f', 'f', 'a', 'a', '1', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', '1', 'a', 'a', 'a', 'a', 'a', 'a', '2', '3', '2', '2', ],
    [ 'f', 'f', 'a', 'a', '1', 'a', 'a', '2', 'a', 'a', 'a', 'a', 'a', 'a', '1', 'a', 'a', 'a', 'a', 'a', '3', '3', '3', '2', '2', ],
    [ 'f', 'f', 'f', 'f', '1', 'f', 'f', 'f', 'f', '1', '1', '1', 'f', 'f', 'f', 'f', '1', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', ],
    [ 'f', 'f', 'f', 'f', '1', 'f', 'f', 'f', '1', '1', '1', '1', '1', 'f', 'f', '1', '1', '1', 'f', 'f', 'f', 'f', 'f', 'f', 'f', ],
    [ 'f', 'f', 'f', 'f', '1', 'f', 'f', '1', '1', '1', '1', '1', '1', '9', '9', '1', '1', '1', '1', 'f', 'f', 'f', 'f', 'f', 'f', ],
    [ 'f', 'f', 'f', 'f', '1', 'f', '1', '1', 's', 's', 's', 's', 's', '9', '9', 's', 's', 's', '1', '1', 'f', 'f', 'f', 'f', 'f', ],
    [ 'f', 'f', 'f', 'f', 'f', '1', '1', '1', '1', '1', '1', '1', '1', '9', '9', '1', '1', '1', '1', '1', '1', 'f', 'f', 'f', 'f', ]
];

export class Level1 extends Scene {
    constructor(state: State) {
	super(state);
            this.name = '1';

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

