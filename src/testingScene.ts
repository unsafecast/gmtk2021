import { Scene } from "./scene.ts";
import { State } from "./state.ts";
import { Entity } from "./entity.ts";
import { Player } from "./player.ts";

export class TestingScene extends Scene {
    constructor(state: State) {
	super(state);

	this.addEntity("player", new Player(this.state));
    }
    
    tick() {
	super.tick();
    }

    draw(rend: Renderer) {
	super.draw(rend);
    }
}

