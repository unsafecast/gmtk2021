import { Scene } from "./scene.ts";
import { State } from "./state.ts";
import { Entity } from "./entity.ts";
import { Player } from "./player.ts";
import { CollidingEntity } from "./collidingEntity.ts";

export class TestingScene extends Scene {
    constructor(state: State) {
	super(state);

	this.addEntity("player", new Player(this.state));

	let x = new CollidingEntity(this.state, this.state.images["duck2"]);
	x.w = x.h = 100;
	x.x = 200;
	x.y += 100;
	this.addEntity("thing", x);
    }
    
    tick() {
	super.tick();
    }

    draw(rend: Renderer) {
	super.draw(rend);
    }
}

