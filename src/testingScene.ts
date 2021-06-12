import { Scene } from "./scene.ts";
import { State } from "./state.ts";
import { Entity } from "./entity.ts";

export class TestingScene extends Scene {
    constructor(state: State) {
	super(state);

	let entity = new Entity(state.images["duck2"]);
	entity.w = entity.h = 100;
	this.addEntity("bob", entity);
    }
    
    tick() {
	super.tick();
    }

    draw(rend: Renderer) {
	super.draw(rend);
    }
}

