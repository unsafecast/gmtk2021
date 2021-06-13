import { Scene } from "./scene.ts";
import { State } from "./state.ts";
import { Entity } from "./entity.ts";
import { Player } from "./player.ts";
import { CollidingEntity } from "./collidingEntity.ts";
import { Level1 } from "./level1.ts";

const tilemap = [
    [ 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', ],
    [ 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', ],
    [ 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', ],
    [ '2', 'p', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'b', 'o', ],
    [ 'f', '2', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', '1', 'a', 'a', 'a', 'a', 'a', 'a', 'a', '3', '3', 'f', ],
    [ 'f', 'f', '2', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', '1', 'a', 'a', 'a', 'a', 'a', 'a', '2', '3', '2', '2', ],
    [ 'f', 'f', 'f', '2', 'a', 'a', 'a', '2', 'a', 'a', 'a', 'a', 'a', 'a', '1', 'a', 'a', 'a', 'a', 'a', '3', '3', '3', '2', '2', ],
    [ 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', '1', '1', '1', 'f', 'f', 'f', 'f', '1', '9', '_', '_', 'f', 'f', 'f', 'f', 'f', ],
    [ 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', '1', '1', '1', '1', '1', 'f', 'f', '1', '1', '9', '1', '1', 'f', 'f', 'f', 'f', 'f', ],
    [ 'f', 'f', 'f', 'f', 'f', 'f', 'f', '1', '1', '1', '1', '1', '1', '9', '9', '1', '1', '9', '1', '1', 'f', 'f', 'f', 'f', 'f', ],
    [ 'f', 'f', 'f', 'f', 'f', 'f', '1', '1', 's', 's', 's', 's', 's', '9', '9', 's', 's', '9', '1', '1', '1', 'f', 'f', 'f', 'f', ],
    [ 'f', 'f', 'f', 'f', 'f', '1', '1', '1', '1', '1', '1', '1', '1', '9', '9', '1', '1', '9', '1', '1', '1', '1', 'f', 'f', 'f', ]
];

export class TestingScene extends Scene {
    constructor(state: State) {
	super(state);
        this.finish = false;

	this.loadTilemap(tilemap);
    }

    tick() {
	super.tick();
    }

    draw(rend: Renderer) {
	super.draw(rend);

	rend.drawText("Press 'b' while touching a special block!", 100, 100, 100, 100);
    console.log(Player.step);
        if (Player.win) {
            this.finish = true;
        }
    if (this.finish) {
        this.state.setScene(new Level1(this.state));
    }
    }
}

